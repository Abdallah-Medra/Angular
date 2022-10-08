import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title : string = ""
  @Output() data = new EventEmitter()

  img: string = "../../assets/c3.png"

  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(){
        this.data.emit('DATAAAAAA from child')
  }
}
