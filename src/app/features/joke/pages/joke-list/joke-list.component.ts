import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokeServices } from '../../services/joke.services'
import { Joke } from '../../models/joke.model'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { JOKE_FLAGS } from '../../../../shared/application.const';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  // public jokeList = new Array<Joke>();
  public jokeList = [];
  public flagList = JOKE_FLAGS;
  displayedColumns: string[] = ['category', 'flags', 'actions'];



  constructor(
    private jokeServices: JokeServices,
    private fb: FormBuilder,
  
  ) { }

  ngOnInit(): void {
    this.jokeList =  this.jokeServices.getJokes();
    console.log("jokeList", this.jokeList);
    console.log("flagList", this.flagList);
  }

  onClickCompany(){
    console.log("data");
  }
 

  ngOnDestroy(): void {
    //this.subscribtionList.forEach(subs=>subs.unsubscribe());
  }
}
