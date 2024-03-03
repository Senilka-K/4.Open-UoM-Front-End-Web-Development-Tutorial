import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  constructor(){}

  ngOnInit(): void{
    alert("ngOnInit Called");
    console.log("triggered ngOnInit");
  }

  ngDoCheck(){
    console.log("triggered ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("triggered ngAfterContentInit");
  }

  ngAfterViewChecked(){
    console.log("triggered ngAfterViewChecked");
  }

  ngDestroy(){
    alert("ngDestry Called");
    console.log("triggered ngDestroy");
  }

}
