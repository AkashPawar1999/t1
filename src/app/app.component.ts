import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ngrx_task';

  keyValuePairs: { key: string, value: string }[] = [];
  newKey: string = '';
  newValue: string = '';
  key1: string = '';
  key2: string = '';
  editingIndex: number | null = null; // Add this property to keep track of the editing item

  addKeyValuePair() {
    if (this.editingIndex !== null) {
      // Update existing entry
      this.keyValuePairs[this.editingIndex] = { key: this.newKey, value: this.newValue };
      this.editingIndex = null; // Reset editing index
    } else {
      // Add new entry
      this.keyValuePairs.push({ key: this.newKey, value: this.newValue });
    }

    // this.keyValuePairs.push({ key: this.newKey, value: this.newValue });
    this.newKey = '';
    this.newValue = '';
  }

  concatValues(): void {
    const value1 = this.keyValuePairs.find(item => item.key === this.key1)?.value || '';
    const value2 = this.keyValuePairs.find(item => item.key === this.key2)?.value || '';
    const newKey = this.key1 + this.key2;
    const newValue = value1 + value2;
    this.keyValuePairs.push({ key: newKey, value: newValue });
    this.key1 = '';
    this.key2 = '';
  }

  startEdit(index: number): void {
    this.editingIndex = index; // Set the index to the currently editing item
    this.newKey = this.keyValuePairs[index].key;
    this.newValue = this.keyValuePairs[index].value;
  }
  ngOnInit() {}

}
