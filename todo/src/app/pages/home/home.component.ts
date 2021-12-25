import { Component, OnInit } from '@angular/core';
import { Title ,Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) {
    this.title.setTitle("Home")
    this.meta.addTag({
      name:'home page',
      content:'mobile,laptop,jeans,books'
    })
   }

  ngOnInit(): void {
  }

}
