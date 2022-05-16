import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/services/machines.service';
import { Machine } from 'src/app/Machine';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  machines!: Machine[];

  constructor(private machineService: MachinesService) {}

  ngOnInit(): void {
    this.machineService
      .getData()
      .subscribe((res: Machine[]) => {
        this.machines = Object.values(res);
        console.log(this.machines);
      });
  }
}
