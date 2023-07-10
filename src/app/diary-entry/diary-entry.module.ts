import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryEntryPageRoutingModule } from './diary-entry-routing.module';

import { DiaryEntryPage } from './diary-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryEntryPageRoutingModule
  ],
  declarations: [DiaryEntryPage]
})
export class DiaryEntryPageModule {}
