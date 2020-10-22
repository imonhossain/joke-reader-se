import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatatableComponent } from './components/app-datatable/app-datatable.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppDatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports:[
    AppDatatableComponent
  ]
})
export class AppGenericDatatableModule { }
