import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('raul:napalla')
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url: string = "";

 
  constructor(private httpClient: HttpClient) { }


  getdata(URL:any) {
    console.log(URL);
    
    this.url = URL;

    return this.httpClient.get(this.url, httpOptions);
  }

}
