import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films;
  selectedFilm;
  selectedFilmCharacters = [];

  constructor(private http: Http) { }

  selectFilm(film){
      this.selectedFilm = film;
      this.selectedFilmCharacters = [];
  }

  showCharacters(film){
      let promiseArray = [];
      film.characters.forEach((characterUrl) => {
          promiseArray.push(this.http.get(characterUrl).toPromise());
      });
      Promise.all(promiseArray).then(values => {
          this.selectedFilmCharacters = values.map(value => value.json());
      })
  }

  ngOnInit() {
    this.http.get('http://swapi.co/api/films/')
      .toPromise()
      .then(response => this.films = response.json().results);
  }

}
