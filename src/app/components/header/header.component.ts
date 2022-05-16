import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  selected: string = "Operator"
  constructor() {}

  ngOnInit(): void {}

  changeSelected(selected:string) {
    this.selected = selected
  }

  getDate() {
    var d = new Date();
    var datestring =
      d.getDate() +
      '.' +
      (d.getMonth() + 1) +
      '.' +
      d.getFullYear() +
      ' ' +
      this.formatTwoDigits(d.getHours()) +
      ':' +
      this.formatTwoDigits(d.getMinutes());

      return datestring
  }
  
  formatTwoDigits(n:number) {
  return n < 10 ? '0' + n : n;
}
}
