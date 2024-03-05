import { Component, OnInit } from '@angular/core';
import { read } from 'node:fs';
import {CommonModule} from '@angular/common';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    AddProductComponent,
    HttpClientModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading : boolean = false;

  constructor(private productService : ProductService) {}

  public isRowSelected!: boolean;
  
  ngOnInit(): void{
    this.getProduct();
  }
  public products :Product[]=[];
 
public selectProduct(selectedRow: number) {
  this.isRowSelected = true;
  this.rowIndex = selectedRow;
}

showAddProducts(){
  this.showAddProduct = true;
}

hideAddProducts(){
    this.showAddProduct = false;
  }

getProduct(){
  this.isLoading =true;
  this.productService.getProducts().subscribe((res)=>{
    this.products =res.data;
    this.isLoading =false;
  })
}
refresh(){
  this.getProduct();
}
}

