import { ReelsService } from './services/reels.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReelsComponent } from './reels/reels.component';
import { BadBarComponent } from './bad-bar/bad-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReelsComponent,
    BadBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
