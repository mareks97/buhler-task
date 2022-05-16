import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/Machine';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() machine!: Machine
  constructor(private machinesService: MachinesService) { }
  
  machines:Machine[]= []
  ngOnInit(): void {
    this.machinesService
      .getData()
      .subscribe((res: any) => {
        this.machines = res.machines;
        console.log(this.machines);
      });
  }

  findStateIcon(machine:Machine) {
    return this.machinesService.getStateIcon(machine)
  }

}
