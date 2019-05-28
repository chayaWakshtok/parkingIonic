import { ParkingResultPage } from './parking-result/parking-result.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapPage } from './map/map.page';
import { HomePage } from './home/home.page';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';


const routes: Routes = [
  { path: '', redirectTo: 'parking-result', pathMatch: 'full' },
  { path: 'home', component:HomePage},
  { path: 'map', component:MapPage },
  { path: 'parking-result', component:ParkingResultPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
