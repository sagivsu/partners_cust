import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/services/dal.service';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any = [];
  customersJSON: any = [];
  pageTitle = 'Partner`s Customers:';
  selectedCust : any;
  loginUserName : string = '';


  constructor(private dalService : DalService) { }

  ngOnInit(): void {

    this.customers = this.dalService.GetCustomersData();
    this.loginUserName = this.dalService.loginUserName;

    /*
    this.customers = [
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

  OnCustomerSelected(cust:any){
    this.selectedCust= cust;
    
  }

  GetContractArgs(){
    return JSON.stringify(
      {
        cust_ID : this.selectedCust.id,
        cust_FName : this.selectedCust.FirstName,
        cust_LName : this.selectedCust.LastName,
        contracts:this.selectedCust.contracts      
      })
  }

}
