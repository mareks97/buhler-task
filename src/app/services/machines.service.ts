import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../Machine';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {

  private URL = "assets/machines.json"
  constructor(private http: HttpClient) {}

  getData():Observable<Machine[]> {
    return this.http.get<Machine[]>(this.URL);
  }

  getStateIcon(machine:Machine):string{
    if(machine.state === "running"){
      return "settings_backup_restore"
    } else if(machine.state === "alarm"){
      return "warning"
    } else {
      return "error_outline"
    }
  }

  getMachineIcon(machine:Machine):string{
    if(machine.name === "Scale"){
      return "system_update_alt"
    } else if(machine.name === "Attacher"){
      return "microwave"
    } else if(machine.name ==="Packer"){
      return "call_to_action"
    } else {
      return "grid_on"
    }
  }

}
