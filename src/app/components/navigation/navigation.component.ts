import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private machinesService: MachinesService) { }

  machines= []
  ngOnInit(): void {
    // this.machinesService.getData().subscribe(data=> {
      // this.machines = data
      // console.log(data)
    // })
  }

}
