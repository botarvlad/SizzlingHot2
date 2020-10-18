import { ReelsService } from './../services/reels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss']
})
export class ReelsComponent implements OnInit {

  slotDisplay = [];

  constructor(private _reelsService: ReelsService) { }

  ngOnInit(): void {
    this.slotDisplay = this._reelsService.getReels();
  }

  test() {
    console.log(this.slotDisplay);
  }

}
