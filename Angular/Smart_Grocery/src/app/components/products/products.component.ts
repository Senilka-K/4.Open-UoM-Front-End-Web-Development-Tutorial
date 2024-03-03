import { Component, OnInit } from '@angular/core';
import { read } from 'node:fs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
  
  public products = [{
    'productId' : "001",
    'productName' : "White Basmathi Rice",
    'createdDate' : "Jan 29, 2020",
    'unitPrice' : "Rs. 400", 
    'quantity' : 100,
    'productDescription' : "White Basmathi Rice imported from Pakisthan"
  },
  {
    'productId' : "002",
    'productName' : "Flour",
    'createdDate' : "Jan 29, 2020",
    'unitPrice' : "Rs. 190", 
    'quantity' : 50,
    'productDescription' : "Super Fine whole grain genaral Purpose flour"
  },
  {
    'productId' : "003",
    'productName' : "Sugar",
    'createdDate' : "Jan 29, 2020",
    'unitPrice' : "Rs. 200", 
    'quantity' : 1200,
    'productDescription' : "White sugar manufactured by Palawatte Factory"
  },
  {
    'productId' : "004",
    'productName' : "Dhal",
    'createdDate' : "Jan 29, 2020",
    'unitPrice' : "Rs. 200", 
    'quantity' : 10,
    'productDescription' : "Imported mysoor dhal from India"
  },
]

}

