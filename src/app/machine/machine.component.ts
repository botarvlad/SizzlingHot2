import { BadBarService } from './../services/bad-bar.service';
import { Component, OnInit } from '@angular/core';
import { ReelsService } from '../services/reels.service';

interface GambleButton {
  state: boolean;
  pressed: boolean;
}

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  slotDisplay = [];
  credit: number;
  bet: number;
  gambleButton: GambleButton;
  win: number;

  constructor(private _reelsService: ReelsService,
              private _badBarService: BadBarService) { } 

  ngOnInit(): void {
    this.getReels();
    this.getCredit();
    this.getBet();
    this.gambleButton = {
      state: this._badBarService.gambleState,
      pressed: this._badBarService.gamblePressed
    };
    this.win = 0;
  }
  
  spin() {
    this.slotDisplay = this._reelsService.getNewReels();
    this.credit = this._badBarService.betMoney();
    this.gambleButton.state = this._badBarService.gambleState;
    this.win = this._badBarService.getWin();
  }

  gamble(val: boolean) {
    this.gambleButton.state = val;
    this.gambleButton.pressed = val;
    console.log(this.gambleButton)
  }

  addMoney(val: number) {
    this.credit += val;
  }

  setCredit(val: number) {
    this.credit = val;
  }

  setWin(val: number) {
    this.win = val;
  }

  getReels() {
    this.slotDisplay = this._reelsService.getReels();
  }

  getCredit() {
    this.credit = this._badBarService.getCredit();
  }

  getBet() {
    this.bet = this._badBarService.bet;
  }

  increaseBet() {
    this._badBarService.setBet();
    this.bet = this._badBarService.bet;
  }

}
