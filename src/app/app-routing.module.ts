import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'joke', pathMatch: 'full' },
    {
      
      path: 'joke',
      loadChildren: () => import('../app/features/joke/joke.module').then(m => m.JokeModule)
    }
  ]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

