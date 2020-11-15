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

  @HostListener('window: keydown', ['$event']) spaceEvent(event: any) {
    if(event.keyCode === 32 && this._badBarService.win === 0) {
      this.spin();
    }else if(event.keyCode === 13 && this._badBarService.win !== 0) {
      this.gamble(true);
    }
  }

  constructor(private _reelsService: ReelsService,
              private _badBarService: BadBarService,
              private router: Router) { } 

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

  reelsAnimation() {
    return new Promise(resolve => {
      let timerId = setInterval(() => this.slotDisplay = this._reelsService.getNewReels(), 100);
      setTimeout(() => {
            clearInterval(timerId);
            resolve("Gata animatia");
          }, 2500);
    });
  }

  async getReelsWithAsync() {
    this.credit = this._badBarService.betMoney();
    await this.reelsAnimation();
    this.result();
  }
  
  async spin() {
    //this.getReelsWithAsync();
    this.credit = this._badBarService.betMoney();
    await this._reelsService.stockReelsWithAsync();
    this.result();
  }

  result() {
    //this.slotDisplay = this._reelsService.getNewReels();
    this._badBarService.spin();
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
    //this.slotDisplay = this._reelsService.getReels();
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
