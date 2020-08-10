import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { store, select, ReducerDeallocator, EpicInjector, EpicDeallocator } from '@redux-multipurpose/core';

import { hide } from '../../store/splash/splash.slice';
import { createSplashAnimation } from '../../store/splash/splash.epics';

@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
@ReducerDeallocator(['splash'])
@EpicInjector([{
	key: 'createSplashAnimation',
	epic: createSplashAnimation()
}])
@EpicDeallocator(['createSplashAnimation'])
export class SplashComponent implements OnInit, AfterViewInit, OnDestroy
{
  @select(["splash"])
  splashState$: Observable<'active' | 'fadeIn' | 'fadeOut' | 'inactive'>;

  constructor(private splashScreen: SplashScreen) {}

  ngOnInit() {}

  ngAfterViewInit()
  {
    this.splashScreen.hide();
    store.dispatch(hide());
  }

  ngOnDestroy() {}
}
