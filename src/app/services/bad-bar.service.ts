import { ReelsService } from './reels.service';
import { Injectable } from '@angular/core';
import { PAYLINES } from "../machineData/paylines";

@Injectable({
  providedIn: 'root'
})
export class BadBarService {

  credit = 20;
  bet = 1;
  win = 0;
  gambleState: boolean = false;
  gamblePressed: boolean = false;

  constructor(private _reelsService: ReelsService) { }

  setBet() {
    if(this.bet >= 10){
      this.bet = 1;
    } else {
      this.bet++;
    }
  }

  betMoney() {
    this.win = 0;
    this.gambleState = false;
    this.credit -= this.bet;
    this.win = this.paylineFn();
    if(this.win > 0) {
      this.gambleState = true;
      //this.credit += this.win;
    }
    return this.credit;
  }
  // betMoney() {
  //   this.credit -= this.bet;
  //   let win = this.paylineFn();
  //   if(win > 0) {
  //     this._gambleState = true;
  //     this.credit += win;
  //   }
  //   return this.credit;
  // }

  gamble(val: boolean) {
    this.gamblePressed = val;
  }

  addMoney(val: number) {
    this.credit += val;
  }

  getWin() {
    return this.win;
  }

  getCredit() {
    return this.credit;
  }

  changeBet(bet: number) {
    this.bet = bet;
  }

  // get gambleState(): boolean {
  //   return this._gambleState;
  // }
  // get gamblePressed(): boolean {
  //   return this._gamblePressed;
  // }
  // set gambleState(val: boolean){
  //   this.gambleState = val;
  // }
  // set gamblePressed(val: boolean){
  //   this.gamblePressed = val;
  // }

  paylineFn() {
    let newPayline;
    let win = this.win;
    for(let pos of PAYLINES) {
      newPayline = [this._reelsService.reel1[pos[0]],this._reelsService.reel2[pos[1]],this._reelsService.reel3[pos[2]],
      this._reelsService.reel4[pos[3]],this._reelsService.reel5[pos[4]]];
      if(newPayline[0].id === newPayline[1].id && newPayline[1].id === newPayline[2].id) {
       win += (newPayline[0].currency * this.bet);
       if(newPayline[2].id === newPayline[3].id) {
         win += (newPayline[0].currency * this.bet);
         if(newPayline[3].id === newPayline[4].id) {
           win += (newPayline[0].currency * this.bet);
         }
       }
     }
    }
    return win;
   }

}
