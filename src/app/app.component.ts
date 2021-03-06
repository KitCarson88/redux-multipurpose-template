import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Observable } from 'rxjs';

import { select, store } from '@redux-multipurpose/core';

import { splashReducer } from '../store/splash/splash.slice';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit
{
  @select(["splash"])
  splashState$: Observable<string>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {}

  ngOnInit()
  {
    this.initializeApp();
  }

  initializeApp() {
    store.addReducer("splash", splashReducer);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
