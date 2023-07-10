import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-diary-entry',
  templateUrl: 'diary-entry.page.html',
  styleUrls: ['diary-entry.page.scss'],
})
export class DiaryEntryPage {
  newEntry: any = {};

  constructor(private router: Router, private storage: Storage) {}


  async saveEntry() {
    await this.storage.create();
    const savedEntries = await this.storage.get('diaryEntries') || [];
    savedEntries.push(this.newEntry);
    await this.storage.set('diaryEntries', savedEntries);
    this.router.navigate(['/home']);
  }
}
