import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
public shows: any;
  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.getShows().subscribe(data=>{
      this.shows=data;
      console.log(this.shows);
    })
  }

}
