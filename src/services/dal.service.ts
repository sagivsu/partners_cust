import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import * as custMetaData from '../data/customers.json';
import * as usersMetaData from '../data/users.json';
//import * as custMetaData from './data.json';
//import * as users from './users.json';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  customers_json : any;
  loginUserName : string = '';

  constructor(private http: HttpClient) {

    //this.customers_json = custMetaData;
    this.customers_json = JSON.parse(JSON.stringify(custMetaData));
   
    this.getJSON().subscribe(data => {
        console.log(data);
    });

  }

  public getJSON(): Observable<any> {
    //return this.http.get("./../../data/customers.json");
    return this.http.get("http://fs1.co.il/bus/bitcoin.php");
   
    
  }


  public GetCustomersData(){  
    
    
    return this.customers_json.default;
  /*
    return [
      {FirstName:"Sagiv",LastName:"Shlomo",id:"111111111",address:{city:"ashkelon",streat:"Etzel",num:"45",mikud:"12345"},            
      contracts:[
        {contract_num:'455423',contract_name:'avivi 22',contract_type:1,packages:[]},
        {contract_num:'987656',contract_name:'golan',contract_type:2,packages:[{}]},
        {contract_num:'435465',contract_name:'avi sofer',contract_type:1,packages:[]},
        {contract_num:'354576',contract_name:'rami levi',contract_type:3,packages:[{}]}]},      
        {FirstName:"Gal",LastName:"Galit",id:"222222222",address:{city:"jerusalen",streat:"hadarim",num:"66",mikud:"22422"},contracts:{contract_num:'222222',contract_name:'bbb',contract_type:2,packages:{}}},
        {FirstName:"Avi",LastName:"Ron",id:"333333333",address:{city:"bat-yam",streat:"dekel",num:"54",mikud:"35333"},contracts:{contract_num:'333333',contract_name:'ccc',contract_type:1,packages:{}}},
        {FirstName:"Eli",LastName:"Cohen",id:"444444444",address:{city:"ashdod",streat:"rabin",num:"13",mikud:"66665"},contracts:{contract_num:'444444',contract_name:'ddd',contract_type:1,packages:{}}}
    ];
    */
  }

  public CheckAllowUser(user_id:string){ 

    let isFound : boolean = false;
    let users_json = JSON.parse(JSON.stringify(usersMetaData));
    let localUserName : any;
    users_json.default.forEach(function (user:any) {
      if(user.identity === user_id){
          localUserName = user.user_name;
          isFound = true;
      }
    }); 

    this.loginUserName = localUserName;

    return isFound;

  }


}
