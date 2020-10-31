//import { ReelsService } from './../services/reels.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss']
})
export class ReelsComponent implements OnInit {

  slotDisplay = [];

  //constructor(private _reelsService: ReelsService) { } 

  ngOnInit(): void {
    this.getReels();
  }

  getReels() {
  //  this.slotDisplay = this._reelsService.getReels();
  }
}
