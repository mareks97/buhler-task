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
}
