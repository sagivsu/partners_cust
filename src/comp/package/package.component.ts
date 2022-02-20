import { Component, Input, OnChanges , SimpleChanges} from '@angular/core';
import { AsyncValidator } from '@angular/forms';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnChanges {
  
  @Input() selectedContract: any;
  data: any;



  constructor() { }

  ngOnInit(): void {

  }

  hasPackagesData(){

    return (this.data && 
      this.data.packages &&
      this.data.packages.length);

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['selectedContract'].currentValue;
  }

}
