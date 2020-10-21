import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke.component';
import { JokeRoutingModule } from './joke-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerService } from '../../providers/services/spinner.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddJokeComponent } from './pages/add-joke/add-joke.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JokeDetailsComponent } from './pages/joke-details/joke-details.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    JokeRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxDatatableModule,
    MatCardModule
  ],
  declarations: [
    JokeComponent,
    HomeComponent,
    AddJokeComponent,
    JokeDetailsComponent,
  ],
  providers: [
    SpinnerService,
  ],
})
export class JokeModule { }