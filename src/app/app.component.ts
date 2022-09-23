import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  constructor(private http: HttpClient){
    http.get("http://localhost:3000/posts").subscribe((output)=>{
      console.log(output);
      
    })
  }
}
