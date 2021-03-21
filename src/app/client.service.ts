import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  getProducts(client){
    return this.http.post<Client>("http://localhost:8085/send-client-data", client);
  }
}
