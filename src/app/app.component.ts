import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ngrx_task';

  array:any[] = [];
  value: any;
  key: any;

  onAdd() {
    let arr = this.array;
    arr.push({key: this.key, value: this.value});
    this.array = arr;
  }
  ngOnInit() {}

}
