import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  date!: Date;
  selected: string = 'Operator';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.getDate();
    }, 1000);
  }

  changeSelected(selected: string) {
    this.selected = selected;
  }

  getDate() {
    var d = new Date();
    this.date = d;
  }
}
