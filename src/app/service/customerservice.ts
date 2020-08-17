import { CustMaster } from '../model/custmaster';
import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from "@angular/core";
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class CustomerService{    

    custmaster;
    custmaster1;
    custid ;

    constructor(private http:HttpClient){}

    public login(Username :string, Ans1 :string , Ans2 :string , Ans3 :string)
    {
        return this.http.get("http://localhost:53142/api/CustomerMasters?username="+Username+"&ans1="+Ans1+"&ans2="+Ans2+"&ans3="+Ans3);
    }

    public reset(id : number, password :string , c:CustMaster)
    {
        return this.http.put("http://localhost:53142/api/CustomerMasters?id="+id+"&password="+password, c);

        //http://localhost:53142/api/CustomerMasters?id=4&password=456
    }

    }
