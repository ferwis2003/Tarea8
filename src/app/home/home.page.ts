import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  diaryEntries: any[] = [];
  selectedEntry: any = null;

  constructor(private router: Router, private storage: Storage) {
    this.loadEntries();
  }

  async loadEntries() {
    await this.storage.create();
    this.diaryEntries = await this.storage.get('diaryEntries') || [];
    this.diaryEntries.forEach(entry => {
      entry.selected = false;
    });
  }

  showSelectedEntry(entry: any) {
    if (entry.selected) {
      this.selectedEntry = entry;
    } else {
      this.selectedEntry = null;
    }
  }

  async deleteSelectedEntry() {
    await this.storage.create();
    const savedEntries = await this.storage.get('diaryEntries') || [];
    const filteredEntries = savedEntries.filter((entry: any) => entry.id !== this.selectedEntry.id);
    await this.storage.set('diaryEntries', filteredEntries);
    this.diaryEntries = this.diaryEntries.filter(entry => entry !== this.selectedEntry);
    this.selectedEntry = null;
  }
}