import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from '../../../providers/services/base-data.service';

@Injectable({
    providedIn: 'root'
})
export class JokeServices {
    constructor(private apiService: BaseDataService) { }

    getJokes() {
      if (this.checkJokes() === null) {
        return [];
      } else {
        return JSON.parse(this.checkJokes());
      }
    }
  
    addJoke(joke: any) {
      // let jokes = {};
      // if (this.checkJokes() === null) {
      //   jokes[joke.uuid] = joke;
      // } else {
      //   jokes = JSON.parse(this.checkJokes());
      //   jokes[joke.uuid] = joke;
  
      // }
      let jokes = [];
     

      if (this.checkJokes() !== null) {
        jokes = JSON.parse(this.checkJokes());
      }
      
      jokes.push(joke);
      
    
      localStorage.setItem('joke', JSON.stringify(jokes));
    }
    updateJoke(joke: any) {
      let jokes  = JSON.parse(this.checkJokes());
      for(let i =0; i<jokes.length; i++){
        if(joke.id == jokes[i].id){
          jokes[i] = joke;
        }
      }
      

      localStorage.setItem('joke', JSON.stringify(jokes));
    }
  
    checkJokes() {
      return localStorage.getItem('joke');
    }
  
    getJoke(id) {
      let joke = null;
      if (this.checkJokes() !== null) {
        let jokes = JSON.parse(this.checkJokes());

        joke = jokes.find(data=> data.id === id)
      
      }
      return joke;
    }
    randomJoke(){
      let joke = null;
      if (this.checkJokes() !== null) {
        let jokes = JSON.parse(this.checkJokes());
        let random = Math.round(Math.random() * jokes.length + 1);
        console.log("random", random);
        if(random >= jokes.length){
          random = jokes.length-1;
        }
        if(random)
        joke = jokes[random];
      
      }
      return joke;
    }

}