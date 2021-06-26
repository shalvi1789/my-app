import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PizzaMainComponent} from './Pizza-Main/pizza-main.component'
import { FormsModule } from '@angular/forms';
import {PizzaService} from './pizza.service';
@NgModule({
  declarations: [
    [AppComponent, PizzaMainComponent]
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
