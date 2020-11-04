import { BadBarService } from './../services/bad-bar.service';
import { GambleService } from './../services/gamble.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() win = new EventEmitter<number>();
  @Output() newCredit = new EventEmitter<number>();
  @Output() gambleState = new EventEmitter<boolean>();
  @Output() gamblePressed = new EventEmitter<boolean>();

  constructor(private _gambleService: GambleService,
              private _badBarService: BadBarService) { }

  ngOnInit(): void {
    this.gambleAmount = this._badBarService.win;
    console.log(this.gambleAmount);
    this.gambleHistory = this._gambleService.getGamblingHistory();
  }

  gamble(amount: number, btnId: number) {
    if(btnId === 1) {
      this._gambleService.gamble(amount, btnId);
      this.gambleAmount = this._gambleService.returnWin();
      console.log(this.gambleAmount);
      this.win.emit(this.gambleAmount);
    }
    else if(btnId === 2) {
      this._gambleService.gamble(amount, btnId);
      this.gambleAmount = this._gambleService.returnWin();
      console.log(this.gambleAmount);
      this.win.emit(this.gambleAmount);
    }
    this.gambleHistory = this._gambleService.getGamblingHistory();
    console.log(this.gambleHistory);
  }

  takeMoney() {
    this._badBarService.addMoney(this.gambleAmount);
    let credit = this._badBarService.getCredit();
    this.newCredit.emit(credit);
    this.gambleState.emit(false);
    this.gamblePressed.emit(false);
  }

}
