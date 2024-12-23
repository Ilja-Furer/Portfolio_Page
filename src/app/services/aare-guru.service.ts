import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AareGuruResponse } from '../models/aareGuruResponse';

@Injectable({
  providedIn: 'root'
})
export class AareGuruService {
  private apiUrl = 'https://aareguru.existenz.ch/v2018/current?city=bern';
  http = inject(HttpClient);

  getAareData(): Observable<AareGuruResponse> {
    return this.http.get<AareGuruResponse>(this.apiUrl);
  }
}
