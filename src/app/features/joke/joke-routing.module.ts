
import { Routes, RouterModule } from "@angular/router";
import { JokeComponent } from './joke.component';
import { NgModule } from '@angular/core';

import { JokeListComponent } from './pages/joke-list/joke-list.component';
import { AddJokeComponent } from './pages/add-joke/add-joke.component';
import { JokeDetailsComponent } from './pages/joke-details/joke-details.component';


const routes: Routes = [
  {
    path: '', component: JokeComponent,
    children: [
      { path: '', component: JokeListComponent, data: { state: 'list' } },
      { path: 'add', component: AddJokeComponent, data: { state: 'add' } },
      { path: 'edit', component: AddJokeComponent, data: { state: 'edit' } },
      { path: 'play', component: JokeDetailsComponent ,data: { state: 'play' } },

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }