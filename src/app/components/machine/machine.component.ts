import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/Machine';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
})
export class MachineComponent implements OnInit {

  @Input() machine!:Machine
  constructor() {}


  ngOnInit(): void {

  }
}
