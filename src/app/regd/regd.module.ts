import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegdPageRoutingModule } from './regd-routing.module';

import { RegdPage } from './regd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegdPageRoutingModule
  ],
  declarations: [RegdPage]
})
export class RegdPageModule {}
