import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOKE_FLAGS } from 'src/app/shared/application.const';
import { Joke } from '../../models/joke.model';
import { JokeServices } from '../../services/joke.services';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent implements OnInit {
  public id= null;
  public flagList = JOKE_FLAGS;
  constructor(private activatedRoute: ActivatedRoute,  private jokeService: JokeServices) { }
  public joke = new Joke();
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
    console.log("this.joke", this.joke);
  }
  

}
