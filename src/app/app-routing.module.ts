import { GambleWindowComponent } from './gamble-window/gamble-window.component';
import { MachineComponent } from './machine/machine.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', component: MachineComponent },
{ path: 'gamble', component: GambleWindowComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
