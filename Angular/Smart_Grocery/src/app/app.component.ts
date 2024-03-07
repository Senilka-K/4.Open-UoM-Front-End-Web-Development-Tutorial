import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductsComponent,
    FormsModule,
    ReactiveFormsModule,
    AddProductComponent,
    HttpClientModule,
    EditProductComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Smart_Grocery';
}
