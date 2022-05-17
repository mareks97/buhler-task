import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/Machine';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
})
export class MachineComponent implements OnInit {
  @Input() machine!: Machine;
  @Input() index!: number;

  constructor(private machinesService: MachinesService) {}

  ngOnInit(): void {}

  findStateIcon(machine: Machine) {
    return this.machinesService.getStateIcon(machine);
  }

  findMachineIcon(machine: Machine) {
    return this.machinesService.getMachineIcon(machine);
  }
}
