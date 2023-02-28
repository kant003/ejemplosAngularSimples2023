import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(private http: HttpClient) { }

  getMenu(gender: string,  weight: number, period: string, diseases: string): Observable<string>{
    const URL = `http://localhost:3000/menu?gender=${gender}&weight=${weight}&period=${period}&diseases=${diseases}`
    return this.http.get<string>(URL)
  }
}
