import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pizza } from './pizza';

@Injectable({
    providedIn: 'root'
  })
  export class PizzaService
  {
    private pizzaURL = 'https://localhost:44325/api/Pizza/pizzaMenu'; // URL to web api
    constructor(private http: HttpClient) { }
    getAllPizza():Observable<Pizza[]>
    {
       return this.http.get<Pizza[]>(this.pizzaURL);   

    }          
  }