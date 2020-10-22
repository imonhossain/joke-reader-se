import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { JokeServices } from '../../services/joke.services'
import { Joke } from '../../models/joke.model'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { JOKE_FLAGS } from '../../../../shared/application.const';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  // public jokeList = new Array<Joke>();
  public jokeList: MatTableDataSource<Joke>;
  public flagList = JOKE_FLAGS;

  @ViewChild('content') content: TemplateRef<any>;
  @ViewChild('flags') flags: TemplateRef<any>;
  @ViewChild('actions') actions: TemplateRef<any>;
  // displayedColumns: string[] = ['category', 'flags', 'actions'];
  public displayedColumns;




  constructor(
    private jokeServices: JokeServices,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.jokeList = new MatTableDataSource<Joke>(this.jokeServices.getJokes());
  }

  ngAfterViewInit() {
    this.displayedColumns = [
      { column: 'category', title: 'Category', cellTemplate: this.content },
      { column: 'flags', title: 'Flags', cellTemplate: this.flags },
      { column: 'actions', title: 'Actions', cellTemplate: this.actions }
    ]
  }


  ngOnDestroy(): void {
    
  }
}
