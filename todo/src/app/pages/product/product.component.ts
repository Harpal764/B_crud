import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private title:Title,private _http:HttpClient) {
    this.title.setTitle("Product");
    this.CallApi();
   }

  ngOnInit(): void {
  }

  public CallApi(){
    this._http.get("https://jsonplaceholder.typicode.com/todos/").subscribe((result:any)=>
    console.log(result))
  }

}
