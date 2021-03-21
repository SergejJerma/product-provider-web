import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  
  client : Client = new Client("", "", true);
  products : any;

  constructor(private service : ClientService) { 
  }

  ngOnInit(): void {}

  public showProducts(){
    let resp = this.service.getProducts(this.client);
    resp.subscribe((data) => this.products = data);
  
  }

}
