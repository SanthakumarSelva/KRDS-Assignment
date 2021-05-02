import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getProducts() {
   return this.http.get('https://krds-assignment.github.io/aoc/api-assets/data.json');
  }
}
