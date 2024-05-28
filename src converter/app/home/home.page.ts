import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  distancia = 0;
  atumalaca:string="";
  res= 0;
    constructor() {
      this.atumalaca = "";
    }
    valorbrutos = 0;
    OnionChange(ev: RangeCustomEvent){
      this.valorbrutos = parseInt(ev.detail.value.toString());
    }
    calcular(){
      if(this.atumalaca == "carro"){
        Math.round(this.res = this.distancia / (10/100) * this.valorbrutos)
      }else if(this.atumalaca == "moto"){
        Math.round(this.res = this.distancia / (25/100) * this.valorbrutos)
      }else{
        Math.round(this.res = this.distancia / (7.5/100) * this.valorbrutos)
      }
    }
  }
