import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7206/WeatherForecast'; // Replace with your API URL

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
