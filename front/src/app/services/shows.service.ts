import { ShowsInterface } from './../models/showsInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  public showData = {
    title: "Title",
    artists: "Artist",
    photo: "https://i.pinimg.com/564x/59/d3/b7/59d3b7763b5e88932e059cf281e7d48a.jpg",
    genre: "Genre",
    date: "Date",
    location: "Location",
    link: "Link"
  }

  public getShows(){
    return this.httpClient.get("http://localhost:3000/shows")
  }

  public postShow(newShow: any) {
    return this.httpClient.post("http://localhost:3000/shows", newShow)
  }
}
