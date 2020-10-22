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
  private subscribtionList:Subscription[] = [];
  public flagList = JOKE_FLAGS;
 public  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  public columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', cellClicked:this.onClickCompany() }];



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
