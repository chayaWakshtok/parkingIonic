import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapPage } from './map/map.page';
import { ParkingResultPage } from './parking-result/parking-result.page';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent,MapPage,ParkingResultPage,HomePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    GooglePlacesAutocompleteComponentModule,
  ],
  providers: [
    StatusBar,
    LaunchNavigator,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
