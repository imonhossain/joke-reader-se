import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, take } from 'rxjs/operators';
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
  public id = "";
  public flagList = JOKE_FLAGS;
  public intervalID;
  public joke = new Joke();
  private subscribtionList:Subscription[] = [];
  private subscribtionListRouter:Subscription[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,  
    private jokeService: JokeServices,
    private router: Router,
    ) { }
 
  ngOnInit(): void {
    this.subscribtionListRouter.push(this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params['params']['id'] || "";
      this.getJoke(this.id);
    }));
  }
 

  getJoke(id?){
    if(id){
      this.joke = new Joke(this.jokeService.getJoke(id));
    }else{
      this.joke = new Joke(this.jokeService.randomJoke());
    }
  
    
    this.timerSet();
  }
  
  
  timerSet(){
    let randomId = new Joke(this.jokeService.randomJoke()).id;
     this.listUnscribe();
    if(this.joke.id == randomId){
      this.timerSet();
    }

    if(this.joke.type == 'Single'){
     
    }else{
      const numbers = timer(3000);
      this.subscribtionList.push(numbers.subscribe(any => {
       return this.router.navigate(["joke/"+ randomId +"/play"])
      }
         
      ));
    }
  }
  ngOnDestroy(): void {
    this.listUnscribe();
    this.subscribtionListRouter.forEach(subs=>subs.unsubscribe());
  }

  listUnscribe(){
    this.subscribtionList.forEach(subs=>subs.unsubscribe());
   
  }
}
