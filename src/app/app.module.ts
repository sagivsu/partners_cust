import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from '../comp/customers/customers.component';
import { ContractComponent } from '../comp/contract/contract.component';
import { PackageComponent } from '../comp/package/package.component';
import { LoginComponent } from '../comp/login/login.component';
import { DalService } from 'src/services/dal.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ContractComponent,
    PackageComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
