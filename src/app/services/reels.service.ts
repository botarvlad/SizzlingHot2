import { Symbol } from './../symbol';
import { Injectable } from '@angular/core';

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

  setReels() {
  }

  getReels() { 
    return this.reels;
  }
}
