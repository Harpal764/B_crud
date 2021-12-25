import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  Customers:any;
  customer:FormGroup
  constructor(private title:Title,private _customerService:CustomerService) {
    this.title.setTitle("Customer")
    this.customer=new FormGroup({
      "firstname":new FormControl(""),
      "lastname":new FormControl(""),
      "email":new FormControl(""),
      "gender":new FormControl(""),
      "id":new FormControl(null),
    })

   }

  ngOnInit(): void {
    this.loadCustomer()
  }

   loadCustomer(){
     this._customerService.GetCustomer().subscribe(result=>
     { console.log(result)
      this.Customers = result;
     })
   }

   submit(){
     console.log(this.customer.value);
     const data = this.customer.value;
     if(data.id==null)
     {
     this._customerService.PostCustomer(data).subscribe(result=>
      {console.log(result)
        this.loadCustomer()
        this.customer.reset();
      })
     }
     else
     {
       const id = data.id;
       delete data.id;
       this._customerService.UpdateCustomer(id,data).subscribe(
         (response)=>{
           console.log(response)
           this.loadCustomer();
           this.customer.reset();
         }
       )
     }
   }

   public deleteCustomer(id:number){
     event?.preventDefault();
      this._customerService.DeleteCustomer(id).subscribe((response:any)=>
      {
        console.log(response)
        this.customer.reset();
        this.loadCustomer();
      })
   }

   public Edit(id:number){
    event?.preventDefault();
    this._customerService.GetCustomerById(id).subscribe((response:any)=>
    {
      console.log(response)
      this.customer.setValue({...response});
      this.loadCustomer();
    })
  }
}
