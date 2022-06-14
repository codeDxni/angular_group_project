import { ShowsInterface } from 'src/app/models/showsInterface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows-card',
  templateUrl: './shows-card.component.html',
  styleUrls: ['./shows-card.component.scss']
})
export class ShowsCardComponent implements OnInit {
@Input() public shows!: ShowsInterface[];
  constructor() { }

  ngOnInit(): void {
  }

}
