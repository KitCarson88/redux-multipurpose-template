import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { Observable } from 'rxjs';

import { store, select, ReducerDeallocator } from '@redux-multipurpose/core';
import { addEpic, removeEpic } from '../../store/epics';
import { createSplashAnimation } from '../../store/splash/splash.epics';
import { hide } from '../../store/splash/splash.slice';


@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
@ReducerDeallocator(['splash'])
export class SplashComponent implements OnInit, AfterViewInit, OnDestroy
{
  @select(["splash"])
  splashState$: Observable<'active' | 'fadeIn' | 'fadeOut' | 'inactive'>;

  constructor(private splashScreen: SplashScreen) {}

  ngOnInit()
  {
    store.replaceEpics(addEpic('createSplashAnimation', createSplashAnimation));
  }

  ngAfterViewInit()
  {
    this.splashScreen.hide();
    store.dispatch(hide());
  }

  ngOnDestroy()
  {
    store.replaceEpics(removeEpic('createSplashAnimation'));
  }
}
