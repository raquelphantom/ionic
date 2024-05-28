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
  valorRange1 =0;
  parcela ="";
  gorj=0;
  res =0;

onIonChange(ev:RangeCustomEvent){
  this.valorRange =parseInt(ev.detail.value.toString());

}

onIonChange1(ev:RangeCustomEvent){
  this.valorRange1 =parseInt(ev.detail.value.toString());

}


calcular(){
  this.res= Math.round(parseInt(this.parcela)*(1+(this.valorRange/100))**this.valorRange1)}
}

