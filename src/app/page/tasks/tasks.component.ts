import { AfterViewInit, Component,OnInit ,ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';


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
export class TasksComponent implements AfterViewInit, OnInit {


  machines: PeriodicElement[] = [];
  serial_number1: any;
  id1: any;
  machine_theme_id1: any;
  machine_state: any;
  dataSource: any;


  @ViewChild(MatPaginator, { static: true })paginator: MatPaginatorIntl = new MatPaginatorIntl;

  @ViewChild(MatSort)sort: MatSort = new MatSort;

  constructor(private service: ApiService,) {
  
  }
  ngOnInit(){
    this.service.getdata().subscribe((response: any) => {
      this.machines = response.machines;
      this.dataSource = new MatTableDataSource(this.machines);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
  
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['serial_number', 'id', 'machine_theme_id', 'machine_state'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}