import { ShowsInterface } from './../models/showsInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  public showData = {
    id:"",
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

  public editShow(editedShow:any, showId:any){
    return this.httpClient.put("http://localhost:3000/shows/" + showId, editedShow)
  }

  public editItem(item:any){
    this.showData= item;
  }
}
