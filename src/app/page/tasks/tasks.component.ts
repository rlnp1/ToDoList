import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  serial_number: string
  id: number
  machine_theme_id: number
  machine_state: string
}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  machines: PeriodicElement[] = [];
  serial_number1: any;
  id1: any;
  machine_theme_id1: any;
  machine_state: any;
  dataSource: any;

  constructor(private service: ApiService) {
    this.getdata1()
  }
  info = {}

  displayedColumns: string[] = ['serial_number', 'id', 'machine_theme_id', 'machine_state'];




  getdata1() {
    this.service.getdata().subscribe((response: any) => {
      this.machines = response.machines;
      this.dataSource = new MatTableDataSource(this.machines);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}