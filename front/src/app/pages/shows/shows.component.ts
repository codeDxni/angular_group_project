import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { ShowsInterface } from 'src/app/models/showsInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
public shows: ShowsInterface[]=[];
  public showsFiltrados: ShowsInterface[]=[]

  constructor(private showsService: ShowsService, private router: Router) { }

  ngOnInit(): void {
    
    this.showsService.getShows().subscribe((data:any)=>{
      this.shows=data;
     this.showsFiltrados=this.shows
      console.log(this.shows);
    })
    
  }
  public editShow(show:any){
    this.showsService.editItem(show);
    this.router.navigate(["/form"]);
  }

  public filtrar(filtro:string){
    if (filtro==="All"){
      this.showsFiltrados=this.shows
    
    }else{
    console.log(this.shows)
    this.showsFiltrados= this.shows.filter((show)=>{
    
    return show.genre=== filtro
    
  })}
  }


}
