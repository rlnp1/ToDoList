import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  data1: number=0;
  data2:string="";
  data3:number=0;
  data4:string="";
  
ELEMENT_DATA: PeriodicElement[] = [
  { position:this.data1, name:this.data2 , weight:this.data3 , symbol:this.data4  },
];


  constructor(public dialog: MatDialog) {}
  info = {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  
  dataSource = [...this.ELEMENT_DATA];

  addData() {
    
    this.dataSource.push({ position: this.data1, name: this.data2, weight: this.data3, symbol: this.data4 },);
    this.table.renderRows();
   
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'tasks.component-dialog.html',
})
export class DialogElementsExampleDialog {
  data1: number=0;
  data2:string="";
  data3:number=0;
  data4:string="";
  // this.TasksComponent.datanew1 = new data1;
  addData1(){
    console.log(this.data1,this.data2,this.data3,this.data4)
  }
}