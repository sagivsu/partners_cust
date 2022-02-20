import { Component, OnInit, Input ,Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DalService } from 'src/services/dal.service';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() parentRef :any;
  @Output() logedInUserName : string;

  pageTitle = 'Partner`s Login:';
  errorCode : string = '0';
  fg: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dalService : DalService) { 

    this.logedInUserName = ''
    this.fg = fb.group({
      identity: ['', [Validators.required, 
        this.ValidateID]]
    })


    /*
    this.fg = fb.group({
      url: ['', [Validators.required, 
        Validators.bind(function(){ 
              return true;
        })]]
    });

    */

    
  }


  onFormSubmit(){
    alert('onFormSubmit');
  }



 public ValidateID(control:any)
{

  let str = control ? control.value : '';

  if(str.length == 0)
    return true;

   //INPUT VALIDATION

   // Just in case -> convert to string
   let IDnum = str;

   // Validate correct input
   if ((str.length > 9) || (str.length < 5))
      return false;

   if (isNaN(str))
      return false;

   // The number is too short - add leading 0000
   if (str.length < 9)
   {
      while(str.length < 9)
      {
         str = '0' + str;         
      }
   }

   // CHECK THE ID NUMBER
   var mone = 0, incNum;
   for (var i=0; i < 9; i++)
   {
      incNum = Number(str.charAt(i));
      incNum *= (i%2)+1;
      if (incNum > 9)
         incNum -= 9;
      mone += incNum;
   }
   
   if (mone%10 == 0){  
      return true;
    }else{    
      return false;
    }
}

  ngOnInit(): void {
  }

  doSubmit(){

    if(this.fg.controls['identity'].value === ''){
      this.errorCode = '1';
      return false;
    }
    if(!this.ValidateID(this.fg.controls['identity'])){
      this.errorCode = '2';
      return false;
    }
    if(!this.dalService.CheckAllowUser(this.fg.controls['identity'].value)){      
      this.errorCode = '3';
      return false;
    }
    else
    {
      this.errorCode = '0';
      //this.parentRef.logedInUserName = this.dalService.loginUser.user_name;      
      this.parentRef.isUserLogin = true;
      return true;
    }
       
  }

}
