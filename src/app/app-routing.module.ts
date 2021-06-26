import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaMainComponent} from './Pizza-Main/pizza-main.component';
const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
