import { Component, OnInit , Input , OnChanges, SimpleChanges } from '@angular/core';
import { AsyncValidator } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnChanges  {

  @Input() selectedCust: any;
  
  data: any;
  selectedContract : any

  constructor() {


   }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.selectedCust;
  }

  OnContractSelected(contract:any){

      this.selectedContract = contract;

  }

  GetContractType(t:number){
    let d = '';
    switch(t) {
      case 1:
        d = 'Private';
        break;
      case 2:
        d = 'SMB';
        break;
      case 3:
        d = 'Bussinss';
         break; 
      }
    return d;
  }

  ngOnInit(): void {

    this.data = this.selectedCust;
  }

}
