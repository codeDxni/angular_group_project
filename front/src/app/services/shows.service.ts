import { ShowsInterface } from './../models/showsInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  public showData = {
    title: "",
    artists: "",
    photo: "",
    genre: "",
    date: "",
    location: "",
    link: ""
  }

  public getShows(){
    return this.httpClient.get("http://localhost:3000/shows")
  }

  public postShow(newShow: any) {
    return this.httpClient.post("http://localhost:3000/shows", newShow)
  }
}
