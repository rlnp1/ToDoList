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

  private url = 'https://smart.coinoponline.com.au/svcsapi/v1/machines?eyAiZmllbGRzIjogWwogICAgICAgIFsiYWN0aXZlIiwgIj0iLCB0cnVlXQogICAgXQp9'

  constructor(private httpClient: HttpClient) { }


  getdata() {
    return this.httpClient.get(this.url, httpOptions);
  }

}
