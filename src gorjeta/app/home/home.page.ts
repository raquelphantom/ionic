import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  valorRange =0;
  porc ="";
  gorj=0;
  res =0;

onIonChange(ev:RangeCustomEvent){
  this.valorRange =parseInt(ev.detail.value.toString());

}


calcular(){
  this.gorj=parseInt(this.porc)*(this.valorRange/100)
  this.res= parseInt(this.porc)+this.gorj
}
}

