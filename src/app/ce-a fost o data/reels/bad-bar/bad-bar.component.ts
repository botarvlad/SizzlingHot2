//import { ReelsService } from './../services/reels.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-bar',
  templateUrl: './bad-bar.component.html',
  styleUrls: ['./bad-bar.component.scss']
})
export class BadBarComponent implements OnInit {

  @Input() parentReels;

  //constructor(private _reelsService: ReelsService) { }

  ngOnInit(): void {
  } 
  
  spin() {
    //this.parereels = this._reelsService.getNewReels();
  }

}
