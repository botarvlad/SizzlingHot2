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
  private _gamble: boolean = true;

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
    console.log("Bet = " + this.bet)
    this.credit += this.paylineFn();
    return this.credit;
  }

  getCredit() {
    return this.credit;
  }

  changeBet(bet: number) {
    this.bet = bet;
  }

  get gamble(): boolean {
    return this._gamble;
  }

  paylineFn() {
    let newPayline;
    let win = this.win;
    for(let pos of PAYLINES) {
      newPayline = [this._reelsService.reel1[pos[0]],this._reelsService.reel2[pos[1]],this._reelsService.reel3[pos[2]],
      this._reelsService.reel4[pos[3]],this._reelsService.reel5[pos[4]]];
      if(newPayline[0].id === newPayline[1].id && newPayline[1].id === newPayline[2].id) {
       win += (newPayline[0].currency * this.bet);
       console.log("la 3 in linie win = " + win);
       if(newPayline[2].id === newPayline[3].id) {
         win += (newPayline[0].currency * this.bet);
         console.log("la 4 in linie win = " + win);
         if(newPayline[3].id === newPayline[4].id) {
           win += (newPayline[0].currency * this.bet);
           console.log("la 5 in linie win = " + win);
         }
       }
     }
    }
    return win;
   }

}
