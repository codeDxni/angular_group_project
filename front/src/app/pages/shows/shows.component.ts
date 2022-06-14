import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { ShowsInterface } from 'src/app/models/showsInterface';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
public shows: ShowsInterface[]=[];
  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.getShows().subscribe((data:any)=>{
      this.shows=data;
      console.log(this.shows);
    })
  }

}
