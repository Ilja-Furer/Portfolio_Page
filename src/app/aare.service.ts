import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AareService {
  private apiUrl = 'https://aareguru.existenz.ch/v2018/current?city=bern';

  constructor(private http: HttpClient) { }

  getAareData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
