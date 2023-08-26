import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('<API URL>', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', '<API key>')
        .set('X-RapidAPI-Host', '<API host>'),
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}