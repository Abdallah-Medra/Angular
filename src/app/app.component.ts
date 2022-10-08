import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab222221';


  constructor(){

  }

  changeName(event : any){
   const value = event.target.value
   this.title = value
  }

  recieveData(event :string){
    this.title = event
  }
}
