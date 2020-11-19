import { BadBarService } from './services/bad-bar.service';
import { ReelsService } from './services/reels.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';
import { GambleWindowComponent } from './gamble-window/gamble-window.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    GambleWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReelsService, BadBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
