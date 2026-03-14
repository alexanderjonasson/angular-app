import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UnitService {
  private apiUrl = 'https://warhammer-api-a4bw.onrender.com/api/units';
  constructor(private http: HttpClient) {}
  getUnits(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
