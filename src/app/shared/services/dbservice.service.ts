import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  baseURL:string = 'http://localhost:8888/';
  constructor(private http:HttpClient) { }

  //get Request - to fetch data from server and there'a get method that returns the data from server.
  getRecord(tableName:string){
    return this.http.get(`${this.baseURL}/${tableName}`); //'http://localhost:8888/
  }


  //delete request
  deleteRecord(tableName:any, id:number){
    return this.http.delete(`${this.baseURL}/${tableName}/${id}`);
  }
}
