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
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/current.json', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', 'f560699a04msh0f136e0bfec1154p1e5e3djsn0f20197da678')
        .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}