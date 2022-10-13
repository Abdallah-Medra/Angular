import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab222221';

  isLoading:Subject<boolean>;


  constructor(private loaderService:LoaderService){
    this.isLoading = this.loaderService.isLoading;
  }



  changeName(event : any){
   const value = event.target.value
   this.title = value
  }

  recieveData(event :string){
    this.title = event
  }
}
