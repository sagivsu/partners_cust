import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { DalService } from 'src/services/dal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Partner`s customers:';
  userDataService : any;
  isUserLogin : boolean = false;

  constructor (dalService : DalService){
    this.userDataService = dalService;

  }

}
