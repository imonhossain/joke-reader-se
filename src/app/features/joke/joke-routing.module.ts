
import { Routes, RouterModule } from "@angular/router";
import { JokeComponent } from './joke.component';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AddJokeComponent } from './pages/add-joke/add-joke.component';
import { JokeDetailsComponent } from './pages/joke-details/joke-details.component';


const routes: Routes = [
  {
    path: '', component: JokeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'add', component: AddJokeComponent },
      { path: 'edit', component: AddJokeComponent },
      { path: 'play', component: JokeDetailsComponent },

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }