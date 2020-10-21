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
        return {};
      } else {
        return JSON.parse(this.checkJokes());
      }
    }
  
    addJoke(joke: any) {
      let jokes = {};
      if (this.checkJokes() === null) {
        jokes[joke.uuid] = joke;
      } else {
        jokes = JSON.parse(this.checkJokes());
        jokes[joke.uuid] = joke;
  
      }
      localStorage.setItem('joke', JSON.stringify(jokes));
    }
  
    checkJokes() {
      return localStorage.getItem('joke');
    }
  
    getJoke(uuid) {
      let joke = null;
      if (this.checkJokes() !== null) {
        let jokes = JSON.parse(this.checkJokes());
        joke = (jokes.hasOwnProperty(uuid)) ? jokes[uuid] : null;
      }
      return joke;
    }
}