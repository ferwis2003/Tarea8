import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryEntryPage } from './diary-entry.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryEntryPageRoutingModule {}
