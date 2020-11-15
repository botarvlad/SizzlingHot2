import { Router } from '@angular/router';
import { BadBarService } from './../services/bad-bar.service';
import { Component, HostListener, OnInit } from '@angular/core';
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
  //isSpinning = this._reelsService.isSpinning;

  @HostListener('window: keydown', ['$event']) spaceEvent(event: any) {
    if(event.keyCode === 32 && this._badBarService.win === 0) {
      if(!this._reelsService.isSpinning) {
        this.spin();
      }else if(this._reelsService.isSpinning) {
        // opreste spinning-ul reel-urilor care inca se mai invart
        this._reelsService.isSpinning = false;
        console.log(this._reelsService.isSpinning);
      }
    }else if(event.keyCode === 13 && this._badBarService.win !== 0) {
      this.gamble(true);
    }
  }

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
  
  async spin() {
    this._reelsService.isSpinning = true;
    this.credit = this._badBarService.betMoney();
    await this._reelsService.stockReelsWithAsync();
    this.result();
  }

  result() {
    //this.slotDisplay = this._reelsService.getNewReels();
    this._badBarService.spin();
    this.gambleButton.state = this._badBarService.gambleState;
    this.win = this._badBarService.getWin();
    this._reelsService.isSpinning = false;
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
    this.slotDisplay = this._reelsService.getNewReels() 
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
