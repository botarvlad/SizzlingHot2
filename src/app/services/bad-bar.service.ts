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
    this.credit -= this.bet;
    return this.credit;
  }

  spin() {
    this.win = 0;
    this.gambleState = false;
    //this.credit -= this.bet;
    this.win = this.paylineFn();
    if(this.win > 0) {
      this.gambleState = true;
    }
  }

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

  paylineFn() {
    let newPayline;
    let win = this.win;
    for(let pos of PAYLINES) {
      newPayline = [this._reelsService.reels[0][pos[0]],this._reelsService.reels[1][pos[1]],this._reelsService.reels[2][pos[2]],
      this._reelsService.reels[3][pos[3]],this._reelsService.reels[4][pos[4]]];
      if(newPayline[0].id === newPayline[1].id && newPayline[1].id === newPayline[2].id) {
       win += (newPayline[0].currency * this.bet);
       this._reelsService.reels[0][pos[0]].isWinner = true;
       this._reelsService.reels[1][pos[1]].isWinner = true;
       this._reelsService.reels[2][pos[2]].isWinner = true;
       console.log("its a match!");
       if(newPayline[2].id === newPayline[3].id) {
         win += (newPayline[0].currency * this.bet);
         this._reelsService.reels[3][pos[3]].isWinner = true;
         if(newPayline[3].id === newPayline[4].id) {
           win += (newPayline[0].currency * this.bet);
           this._reelsService.reels[4][pos[4]].isWinner = true;
         }
       }
     }
    }
    return win;
   }

}
