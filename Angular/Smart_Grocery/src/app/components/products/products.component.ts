import { Component, OnInit } from '@angular/core';
import { read } from 'node:fs';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
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
    FormsModule,
    ReactiveFormsModule,
    EditProductComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading : boolean = false;
  showEditProduct! : boolean;
  selectedProduct! : Product;

  public products: Product[] = []
  constructor(private productService : ProductService) {}

  public isRowSelected!: boolean;
  
  ngOnInit(): void{
    this.getProducts();
  }

public selectProduct(selectedRow: any, product: Product) {
  this.rowIndex = selectedRow;
  this.selectedProduct = product;
}

showAddProducts(){
  if(this.showEditProduct) {
    this.showEditProduct = false;
  }
  this.showAddProduct = true;
}

hideAddProducts(){
    this.showAddProduct = false;
  }

getProducts(){
  this.isLoading =true;
  this.productService.getProducts().subscribe((res)=>{
    this.products =res.data;
    this.isLoading =false;
  })
}
refresh(){
  this.getProducts();
}

updateProductList(){
  this.getProducts();
}

OpenEditProductView(){
  if(this.showAddProduct){
    this.showAddProduct = false;
  }
  this.showEditProduct = true;
}

closeEditView(){
  this.showEditProduct = false;
}
closeAddView(){
  this.showAddProduct = false;
}
}

