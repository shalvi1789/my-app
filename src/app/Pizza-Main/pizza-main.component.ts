import {Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza }         from '../pizza';
import { PizzaService }  from '../pizza.service';
@Component({
    selector: 'app-pizza-main',
    templateUrl: './pizza-main.component.html',
    styleUrls: ['./pizza-main.component.css']
})

export class PizzaMainComponent implements OnInit
{
    pizzas: Pizza[];
    
    constructor(private pizzaService: PizzaService) { }
    ngOnInit(): void {
       this.GetAllPizzas();
    }
    GetAllPizzas()
    {
        try
        {
           return this.pizzaService.getAllPizza()
            .subscribe(response=>{
                console.log(response,"pizza response");
                this.pizzas=response;
            },
           error=>{
            console.log(error, "error");
           })
        }
        catch(e)
        {
console.log(e);
        }
    }
  
}