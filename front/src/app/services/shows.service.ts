import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  public getShows(){
    return this.httpClient.get("http://localhost:3000/shows")
  }
}
