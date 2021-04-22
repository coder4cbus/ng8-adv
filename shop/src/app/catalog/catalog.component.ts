import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import {HomeComponent} from '../home/home.component';
import { Product } from '../product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  // masterCatalog:Product[] = []
  displayCatalog:Product[] = []

  constructor(private catalogSvc:CatalogService,
    private homeComponent: HomeComponent) { 
      this.homeComponent.catalogComponent = this
    }

  ngOnInit() {
    this.catalogSvc.getProducts().subscribe(
      catalog => this.displayCatalog = catalog
    )
   // this.masterCatalog = this.catalogSvc.getProducts()
   // this.displayCatalog = this.masterCatalog
  }

  applySearch(searchText: string) {
    if(searchText == "") {
      //show full catalog
      this.catalogSvc.getProducts().subscribe(
        catalog => this.displayCatalog = catalog
      )
    } else {
      this.catalogSvc.search(searchText).subscribe(
        catalog => this.displayCatalog = catalog,
        (err: HttpErrorResponse)=> {
          if (err.status === 404) {
            this.displayCatalog = []
          }
        }
      )
    }
    // let reg = new RegExp(searchText, 'i')

    // this.displayCatalog = this.masterCatalog.filter(p => reg.test(p.name) || reg.test(p.description))
  }

  applySorting(sortType: string) {
    this.displayCatalog = this.displayCatalog.sort((a, b) : number => {
      if(sortType === "price-low-high") {
        return a.price - b.price 
      } else if (sortType === "price-high-low") {
        return b.price - a.price 
      } else if (sortType === "rating") {
        return b.rating - a.rating 
      } else {
        return 0
      }
    })
  }
  
}
