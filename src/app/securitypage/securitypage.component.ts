import { CustMaster } from '../model/custmaster';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customerservice';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-securitypage',
  templateUrl: './securitypage.component.html',
  styleUrls: ['./securitypage.component.css']
  
})
export class SecuritypageComponent implements OnInit {

  cust;
  Username :string;
  Ans1:string;
  Ans2 : string;
  Ans3 : string;

  constructor(private customerservice : CustomerService , private routes : Router) { }

  ngOnInit(): void {
  }
  Next(){
      this.customerservice.custmaster = this.customerservice.login(this.Username, this.Ans1 , this.Ans2 , this.Ans3);

      //this.routes.navigate(["/2"]);
    this.customerservice.custmaster.subscribe((data) =>{
      this.cust = data;

      console.log(this.cust[0].id);

      this.customerservice.custid = this.cust[0].id;
      
      if(this.cust == null){
        alert("invalid login");
        console.log("null")
      }
      else{

        this.routes.navigate(["/2"]);
        alert("Click here to proceed");
      } 
    } )


  }

}
