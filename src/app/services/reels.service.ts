//import { BadBarService } from './bad-bar.service';
import { Symbol, CustomSymbol } from './../symbol';
import { Injectable } from '@angular/core';
//import { PAYLINES } from "../machineData/paylines";

@Injectable({
  providedIn: 'root'
})
export class ReelsService {
  
  reel1 = [new Symbol(), new Symbol(),new Symbol()];
  reel2 = [new Symbol(), new Symbol(),new Symbol()];
  reel3 = [new Symbol(), new Symbol(),new Symbol()];
  reel4 = [new Symbol(), new Symbol(),new Symbol()];
  reel5 = [new Symbol(), new Symbol(),new Symbol()];

  reels = [this.reel1, this.reel2, this.reel3, this.reel4, this.reel5];

  constructor() { }

  getNewReels() {
  this.reel1 = [new CustomSymbol(), new Symbol(),new Symbol()];
  this.reel2 = [new CustomSymbol(), new Symbol(),new Symbol()];
  this.reel3 = [new CustomSymbol(), new Symbol(),new Symbol()];
  this.reel4 = [new Symbol(), new Symbol(),new Symbol()];
  this.reel5 = [new Symbol(), new Symbol(),new Symbol()];
  this.reels = [this.reel1, this.reel2, this.reel3, this.reel4, this.reel5];
  return this.reels;
  }

  getReels() { 
    return this.reels;
  } 
}
