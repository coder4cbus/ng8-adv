import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {
  @Input() @HostBinding("style.width") width = "200px"
  @HostBinding("style.top") y = "0px"
  @HostBinding("style.left") x = "0px"
  @HostBinding("style.visibility") visibility = "hidden"

  constructor() { }
  
  
  ngOnInit() {
  }

  open(e:MouseEvent) {
    this.x = '$(e.pageX)px'
    this.y = '$(e.pageY)px'

    this.visibility = "visible"

    e.stopPropagation()

  }

  @HostListener('document:click') 
  public onDocumentClick() {
    if (this.visibility === "visible") {
      this.close()
    }
  }

  close() {
    this.visibility = "hidden"
  }

}
