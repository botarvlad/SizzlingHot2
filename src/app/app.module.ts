import { BadBarService } from './services/bad-bar.service';
import { ReelsService } from './services/reels.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ReelsComponent } from './reels/reels.component';
//import { BadBarComponent } from './bad-bar/bad-bar.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';
import { GambleWindowComponent } from './gamble-window/gamble-window.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    //ReelsComponent,
    //BadBarComponent,
    MachineComponent,
    GambleWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReelsService, BadBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
