import { Component, OnInit, ViewChild} from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  // @ViewChild(CatalogComponent, {static:true} )
  // catalogComponent: CatalogComponent


  constructor() { }

  ngOnInit() {
  }

}
