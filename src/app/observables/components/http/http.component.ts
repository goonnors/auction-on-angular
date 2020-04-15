import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {debounceTime, switchMap, catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  private baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

  /** If the below API key doesn't work request your own key at http://api.openweathermap.org */
  private urlSuffix = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';

  searchInput: FormControl = new FormControl();
  temperature: string;

  constructor(private http: HttpClient) {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(city => this.getWeather(city))
      )
      .subscribe(
        res => {
        // @ts-ignore
          // tslint:disable-next-line:no-string-literal
          this.temperature = `Current temperature is ${res['main'].temp}C, humidity: ${res['main'].humidity}%`;
        },
        err => {
          this.temperature = 'error';
          console.log(err);
        }
      );
  }

  getWeather(city: string): Observable<any> {
    return this.http
      .request('get', this.baseWeatherURL + city + this.urlSuffix)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            console.log(`City ${city} not found`);
            return of();
          }
        })
      );
  }

  ngOnInit(): void {
  }

}
