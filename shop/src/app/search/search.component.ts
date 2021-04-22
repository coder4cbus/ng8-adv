import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild("searchText", {static:true}  )
  searchElement: ElementRef
  subscription: Subscription 

  constructor(private homeComponent:HomeComponent) { }

  ngOnInit() {
    fromEvent(this.searchElement.nativeElement, "input")
    .pipe(debounceTime(1000)).subscribe (_ => this.applySearch (
      this.searchElement.nativeElement.value
    ))
  }

  applySearch(txt: string) {
    //this.homeComponent.mainBody.catalogComponent.applySearch(txt);
    this.homeComponent.catalogComponent.applySearch(txt);
    console.log(txt);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()

  }
}
