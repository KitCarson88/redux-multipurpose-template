import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Services
import { ServiceLocator } from '../services/locator.service';

import { StoreModule } from 'src/store/store.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
imports:[
    BrowserModule,
    HttpClientModule,
		IonicModule.forRoot({
      mode: 'md'
    }),
    StoreModule,
		AppRoutingModule
	],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private injector: Injector)
  {    
    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
