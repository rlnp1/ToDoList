import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

export interface Machine {
  created_at:string
  created_by:number
  database_id:number
  date_last_collection:string
  date_last_movement:string
  date_last_transaction:string
  date_theme_change:string
  form_id:string
  id:number
  last_movement:string
  last_transaction:string
  last_transaction_collection:string
  last_transaction_theme_change:string
  location_description:string
  machine_category:string
  machine_description:string
  machine_model_id:number
  machine_reboot:string
  machine_remarks:string
  machine_state:string
  machine_theme_id:number
  migration_status:string
  mongo_sys_id:string
  onsite:boolean
  order:number
  plushed:boolean
  prev_mach_id:number
  product_added:number
  ref_id:number
  serial_number:string
  site_id:number
  software_last_modified:string
  system:boolean
  theme_change_status:string
  transaction_type:number
  update_remarks:string
  updated_at:string
  updated_by:number
}

@Component({
  selector: 'app-upcomingtask',
  templateUrl: './upcomingtask.component.html',
  styleUrls: ['./upcomingtask.component.scss']
})
export class UpcomingtaskComponent {
  machines: Machine[]=[];
  count: any;

  constructor(private service: ApiService) { }

  // getdata1() {
  //   this.service.getdata().subscribe((response:any) => {
  //     this.machines = response.machines;
  //     this.count = response.count;

      
  //     console.log(this.count);

  //   });
  }


