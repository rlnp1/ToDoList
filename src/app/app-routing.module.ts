import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import {TasksComponent} from './page/tasks/tasks.component';
import { UpcomingtaskComponent } from './page/upcomingtask/upcomingtask.component';




const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'tasks', component:TasksComponent},
  {path:'upcoming', component:UpcomingtaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
