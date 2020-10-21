
import { Routes, RouterModule } from "@angular/router";
import { JokeComponent } from './joke.component';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AddJokeComponent } from './pages/add-joke/add-joke.component';


const routes: Routes = [
  {
    path: '', component: JokeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add-joke', component: AddJokeComponent },

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }