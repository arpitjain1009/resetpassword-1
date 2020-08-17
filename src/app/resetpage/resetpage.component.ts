import { CustMaster } from '../model/custmaster';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customerservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.css']
})
export class ResetpageComponent implements OnInit {

  password :string;
  
  custid;
  cust1;
  c : CustMaster;

  id : number;

  constructor(private customerservice : CustomerService, private routes : Router) {

    console.log("second"+this.customerservice.custid);

    this.c = new CustMaster();
    
  }

  ngOnInit(): void {
  }

  Next1(){
    //this.customerservice.custmaster1 = this.customerservice.reset(this.custid , this.password , this.c );
    
    this.customerservice.reset(this.customerservice.custid , this.password , this.c ).subscribe(
      (data) =>{
      this.cust1 = data;

      if(this.cust1== null){
        alert("invalid input");
        console.log("null");
      }
      else{
        
        alert("password changed");
      } 
    } )

  }


}
