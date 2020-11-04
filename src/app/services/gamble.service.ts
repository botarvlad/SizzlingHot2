import { BadBarComponent } from './../ce-a fost o data/reels/bad-bar/bad-bar.component';
import { Injectable } from '@angular/core';
import { BadBarService } from './bad-bar.service'

@Injectable({
  providedIn: 'root'
})
export class GambleService {

  redButton = 1;
  blackButton = 2;
  gamblingHistory: string[] = [];
  win: number;

  constructor(private _badBarService: BadBarService) { }

  gamble(amount: number, btnId: number) {
    let randButton: number = Math.floor(Math.random() * 2) + 1;
    if(btnId === 1) {
      if(this.redButton === randButton){
        amount *= 2;
        this.win = amount;
      }else{
        amount = 0;
        this.win = 0;
        //this.infoSide.addMoney(0);
      }
    }
    else if(btnId === 2) {
      if(this.blackButton === randButton){
        amount *= 2;
        this.win = amount;
      }else{
        amount = 0;
        this.win = 0;
        //this.infoSide.addMoney(0);
      }
    }
    
    this.gamblingHistory.push(randButton === 1 ? 'ROSU' : 'NEGRU');
    console.log(randButton);
  }

  returnWin(): number {
    return this.win;
  }

  getGamblingHistory() {
    return this.gamblingHistory;
  }
}
