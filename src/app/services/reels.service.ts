//import { BadBarService } from './bad-bar.service';
import { Symbol, CustomSymbol } from './../symbol';
import { Injectable } from '@angular/core';
//import { PAYLINES } from "../machineData/paylines";

@Injectable({
  providedIn: 'root'
})
export class ReelsService {

  reels = new Array(5);
  isSpinning = false;

  constructor() { }

  getNewReels() {
    for(let i = 0; i < 5; i++) {
      this.reels[i] = [new Symbol(), new Symbol(), new Symbol()];
    }
    return this.reels;
  }

  async stockReelsWithAsync() {
    await this.stockReels();
  }

  stockReels() {
    return new Promise(resolve => {
      let timerId1 = setInterval(() => this.reels[0] = [new Symbol(), new Symbol(),new Symbol()], 100);
      setTimeout(() => {
        clearInterval(timerId1);
      }, 500);
      let timerId2 = setInterval(() => this.reels[1] = [new Symbol(), new Symbol(),new Symbol()], 100);
      setTimeout(() => {
        clearInterval(timerId2);
      }, 1000);
      let timerId3 = setInterval(() => this.reels[2] = [new Symbol(), new Symbol(),new Symbol()], 100);
      setTimeout(() => {
        clearInterval(timerId3);
      }, 1500);
      let timerId4 = setInterval(() => this.reels[3] = [new Symbol(), new Symbol(),new Symbol()], 100);
      setTimeout(() => {
        clearInterval(timerId4);
      }, 2000);
      let timerId5 = setInterval(() => this.reels[4] = [new Symbol(), new Symbol(),new Symbol()], 100);
      setTimeout(() => {
        clearInterval(timerId5);
        clearInterval(skipper);
        resolve("Gata");
      }, 2500);
      let skipper = setInterval(() => {
        if(!this.isSpinning) {
          clearInterval(timerId1);
          clearInterval(timerId2);
          clearInterval(timerId3);
          clearInterval(timerId4);
          clearInterval(timerId5);
          resolve('Gata');
        }
      }, 50);
    })
  }

  getReels() { 
    return this.reels;
  } 

  getIsSpinning() {
    return this.isSpinning;
  }
}
