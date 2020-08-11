import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { store, select } from '@redux-multipurpose/core';

import { SplashActions } from '../../store/splash/splash.selectors-dispatchers';

@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit, AfterViewInit, OnDestroy
{
  @select(["splash"])
  splashState$: Observable<'active' | 'fadeIn' | 'fadeOut' | 'inactive'>;

  constructor(private splashScreen: SplashScreen, private splashActions: SplashActions) {}

  ngOnInit() {}

  ngAfterViewInit()
  {
    this.splashScreen.hide();
    this.splashActions.hide();
  }

  ngOnDestroy() {}
}
