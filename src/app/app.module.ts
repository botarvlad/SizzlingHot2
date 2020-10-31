import { BadBarService } from './services/bad-bar.service';
import { ReelsService } from './services/reels.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ReelsComponent } from './reels/reels.component';
//import { BadBarComponent } from './bad-bar/bad-bar.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //ReelsComponent,
    //BadBarComponent,
    MachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ReelsService, BadBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
