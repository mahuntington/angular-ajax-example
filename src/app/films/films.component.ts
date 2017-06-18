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

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://swapi.co/api/films/')
      .toPromise()
      .then(response => this.films = response.json().results);
  }

}
