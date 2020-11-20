import { Card } from './../machineData/card';
import { BadBarService } from './../services/bad-bar.service';
import { GambleService } from './../services/gamble.service';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-gamble-window',
  templateUrl: './gamble-window.component.html',
  styleUrls: ['./gamble-window.component.scss']
})
export class GambleWindowComponent implements OnInit {

  redButton = 1;
  blackButton = 2;
  gambleHistory: string[] = [];
  gambleAmount: number;
  card: Card = {
    number: null,
    image: ""
  }
  @Output() win = new EventEmitter<number>();
  @Output() newCredit = new EventEmitter<number>();
  @Output() gambleState = new EventEmitter<boolean>();
  @Output() gamblePressed = new EventEmitter<boolean>();

  @HostListener('window: keydown', ['$event']) spaceEvent(event: any) {
    if(event.keyCode === 13) {
      this.takeMoney();
    }else if(event.keyCode === 37 && this.gambleAmount > 0) {
      this.gamble(this.gambleAmount, 1);
    }else if(event.keyCode === 39 && this.gambleAmount > 0) {
      this.gamble(this.gambleAmount, 2);
    }
  }

  constructor(private _gambleService: GambleService,
              private _badBarService: BadBarService) { }

  ngOnInit(): void {
    this.gambleAmount = this._badBarService.win;
    this.gambleHistory = this._gambleService.getGamblingHistory();
  }

  async gamble(amount: number, btnId: number) {
    let card: Card;// = { number: null, image: "" };
    if(btnId === 1) {
      this._gambleService.gamble(amount, btnId);
      this.card = this._gambleService.getCard();
      this.gambleAmount = this._gambleService.returnWin();
      this.win.emit(this.gambleAmount);
    }
    else if(btnId === 2) {
      this._gambleService.gamble(amount, btnId);
      this.card = this._gambleService.getCard();
      this.gambleAmount = this._gambleService.returnWin();
      this.win.emit(this.gambleAmount);
    }
    this.gambleHistory = this._gambleService.getGamblingHistory();
  }

  takeMoney() {
    this._badBarService.addMoney(this.gambleAmount);
    let credit = this._badBarService.getCredit();
    this.newCredit.emit(credit);
    this.gambleState.emit(false);
    this.gamblePressed.emit(false);
    this._badBarService.win = 0;
  }

}
