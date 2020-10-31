import { BadBarService } from './../services/bad-bar.service';
import { Component, OnInit } from '@angular/core';
import { ReelsService } from '../services/reels.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  slotDisplay = [];
  credit: number;
  bet: number;
  gambleBtn: boolean;

  constructor(private _reelsService: ReelsService,
              private _badBarService: BadBarService) { } 

  ngOnInit(): void {
    this.getReels();
    this.getCredit();
    this.getBet();
    this.gambleBtn = this._badBarService.gamble;
  }

  spin() {
    this.slotDisplay = this._reelsService.getNewReels();
    this.credit = this._badBarService.betMoney();
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
