import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'cool-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  image:string

  @HostBinding("style.background-image") get backgroundImage() : string {
    return `url("${this.image}")`
  }
}
