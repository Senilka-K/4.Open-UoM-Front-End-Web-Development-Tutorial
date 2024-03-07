import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditProductComponent,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required], 
  });

  isDataUploading = false;
  @Output() ProductAddEvent : EventEmitter<void> = new EventEmitter<void>();
  @Output() closeAddEvent : EventEmitter<void> = new EventEmitter<void>();
  constructor(private fb: FormBuilder,
    private productService :ProductService) {}
 
  ngOnInit(): void {}

  get f(){
    return this.productFrom.controls;
  }

  onSubmit(){
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.productService.addProduct(values as Product).subscribe((res)=>{
      debugger;
      this.isDataUploading = false;
      this.ProductAddEvent.emit();
      this.productFrom.reset();
    });
  }
cancel(){
  this.closeAddEvent.emit();
}
}
 