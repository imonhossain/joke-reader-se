import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokeServices } from '../../services/joke.services'
import { Joke } from '../../models/joke.model'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public jokeList = new Array<Joke>();
  private subscribtionList:Subscription[] = [];
  
  constructor(
    private jokeServices: JokeServices,
    private fb: FormBuilder,
    private jokeService: JokeServices
  ) { }

  ngOnInit(): void {
   console.log("this.jokeService.getJokes();", this.jokeService.getJokes());
  }

 

  ngOnDestroy(): void {
    //this.subscribtionList.forEach(subs=>subs.unsubscribe());
  }
}
