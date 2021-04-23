import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaymentComponent } from './payment/payment.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { GridLayoutDirective } from './grid-layout.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SearchComponent,
    SortingComponent,
    MainBodyComponent,
    CatalogComponent,
    CartComponent,
    ProductCardComponent,
    PaymentComponent,
    PopupMenuComponent,
    GridLayoutDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
