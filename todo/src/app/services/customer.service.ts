import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from '../utils/baseurl';
import { EndRoute } from '../utils/route';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  public GetCustomer(){
     return this._http.get(`${BASEURL}${EndRoute.CUSTOMER}`)
  }

  public PostCustomer(customer:any){
    return this._http.post(`${BASEURL}${EndRoute.CUSTOMER}`,customer)
  }

  public DeleteCustomer(id:number){
    return this._http.delete(`${BASEURL}${EndRoute.CUSTOMER}/${id}`);
  }

  public GetCustomerById(id:number){
    return this._http.get(`${BASEURL}${EndRoute.CUSTOMER}/${id}`);
  }

  public UpdateCustomer(id:number,customer:any){
    return this._http.put(`${BASEURL}${EndRoute.CUSTOMER}/${id}`,customer);
  }
}
