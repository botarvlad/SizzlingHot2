import { Card } from './../machineData/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GambleService {

  redButton = 1;
  blackButton = 2;
  gamblingHistory: string[] = ['../../assets/images/aceOfSpades.png','../../assets/images/aceOfSpades.png',
  '../../assets/images/aceOfHearts.png','../../assets/images/aceOfSpades.png','../../assets/images/aceOfHearts.png',
  '../../assets/images/aceOfHearts.png'];
  win: number;
  card: Card;

  constructor() { }

  gamble(amount: number, btnId: number) {
    //let randButton: number = Math.floor(Math.random() * 2) + 1;
    let card: Card = { number: null, image: ""};
    card.number = Math.floor(Math.random() * 2) + 1;
    if(btnId === 1) {
      if(this.redButton === card.number){
        card.image = '../../assets/images/aceOfHearts.png';
        amount *= 2;
        this.win = amount;
      }else{
        amount = 0;
        this.win = 0;
      }
    }
    else if(btnId === 2) {
      if(this.blackButton === card.number){
        card.image = '../../assets/images/aceOfSpades.png';
        amount *= 2;
        this.win = amount;
      }else{
        amount = 0;
        this.win = 0;
      }
    }
    this.gamblingHistory.push(card.number === 1 ? '../../assets/images/aceOfHearts.png' : '../../assets/images/aceOfSpades.png');
    
    if(this.gamblingHistory.length > 5) {
      this.shiftGambleHistory();
    }
    // this.gamblingHistory.push(card.number === 1 ? 'ROSU' : 'NEGRU');
    //return card;
    this.card = card;
  }

  getCard() {
    return this.card;
  }

  returnWin(): number {
    return this.win;
  }

  getGamblingHistory() {
    return this.gamblingHistory;
  }

  shiftGambleHistory() {
      this.gamblingHistory.shift();
  }
}
