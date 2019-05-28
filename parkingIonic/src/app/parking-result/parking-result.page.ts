import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import {  NavController, ModalController } from '@ionic/angular';
import {NgZone} from '@angular/core';
import { ViewController } from '@ionic/core';
declare var google: any;
@Component({
  selector: 'app-parking-result',
  templateUrl: './parking-result.page.html',
  styleUrls: ['./parking-result.page.scss'],
})

export class ParkingResultPage implements OnInit {

  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any
  public viewCtrl: ViewController;
    private zone: NgZone;
  //service = new google.maps.places.AutocompleteService();
  constructor(private launchNavigator: LaunchNavigator,
    //private sim: Sim,
  
   ) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    let options: LaunchNavigatorOptions = {
      start: 'London, ON',
    }

    this.launchNavigator.navigate('Toronto, ON', options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  ngOnInit() {
    // this.sim.getSimInfo().then(
    //   (info) => console.log('Sim info: ', info),
    //   (err) => console.log('Unable to get sim info: ', err)
    // );

    // this.sim.hasReadPermission().then(
    //   (info) => console.log('Has permission: ', info)
    // );

    // this.sim.requestReadPermission().then(
    //   () => console.log('Permission granted'),
    //   () => console.log('Permission denied')
    // );
  }

  chooseItem(item: any) {
    this.geo = item;
    this.geoCode(this.geo);//convert Address to lat and long
  }

  // updateSearch() {

  //   if (this.autocomplete.query == '') {
  //    this.autocompleteItems = [];
  //    return;
  //   }

  //   let me = this;
  //   this.service.getPlacePredictions({
  //   input: this.autocomplete.query,
  //   componentRestrictions: {
  //     country: 'de'
  //   }
  //  }, (predictions, status) => {
  //    me.autocompleteItems = [];

  //  me.zone.run(() => {
  //    if (predictions != null) {
  //       predictions.forEach((prediction) => {
  //         me.autocompleteItems.push(prediction.description);
  //       });
  //      }
  //    });
  //  });
  // }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    this.latitude = results[0].geometry.location.lat();
    this.longitude = results[0].geometry.location.lng();
    alert("lat: " + this.latitude + ", long: " + this.longitude);
   });
 }

 detail(item)
 {
   
 }


  


}
