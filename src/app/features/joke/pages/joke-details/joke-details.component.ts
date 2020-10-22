import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { JOKE_FLAGS } from 'src/app/shared/application.const';
import { Joke } from '../../models/joke.model';
import { JokeServices } from '../../services/joke.services';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent implements OnInit, OnDestroy  {
  public id= null;
  public flagList = JOKE_FLAGS;
  public intervalID;
  public joke = new Joke();
  private subscribtionList:Subscription[] = [];

  
  constructor(
    private activatedRoute: ActivatedRoute,  
    private jokeService: JokeServices
    ) { }
 
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
    if(this.id){
      console.log("id", this.id);
       this.joke = this.getJoke(this.id);
    }else{
      this.getRandomJoke();
    }
  }
 

  getJoke(id){
    return new Joke(this.jokeService.getJoke(id));
  }
  
  getRandomJoke(){
    this.joke = new Joke(this.jokeService.randomJoke());
    this.listUnscribe()
    this.timerSet();
  }
  timerSet(){
    if(this.joke.type == 'Single'){
     
    }else{
      const numbers = timer(3000);
      this.subscribtionList.push(numbers.subscribe(any =>  this.getRandomJoke()));
    }
  }
  ngOnDestroy(): void {
    this.listUnscribe()
  }

  listUnscribe(){
    this.subscribtionList.forEach(subs=>subs.unsubscribe());
  }
}
