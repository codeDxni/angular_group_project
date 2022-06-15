import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public showForm!: FormGroup;
  public submmited: boolean = false;
  public newShow = this.showsService.showData;
  public showId=this.showsService.showData.id;
  
  
  constructor(private formBuilder: FormBuilder, private showsService: ShowsService, private router: Router) { }

  ngOnInit(): void {

    this.showsService.clearShow();

    this.showForm=this.formBuilder.group({
      title:[this.newShow.title, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      artists:[this.newShow.artists, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      photo: [this.newShow.photo, [Validators.minLength(2), Validators.maxLength(20)]],
      genre: [this.newShow.genre, [Validators.minLength(2), Validators.maxLength(20)]],
      date: [this.newShow.date, [Validators.minLength(2), Validators.maxLength(20)]],
      location: [this.newShow.location, [Validators.minLength(2), Validators.maxLength(20)]],
      link: [this.newShow.link, [Validators.minLength(2)]]
    })
    this.showForm.valueChanges.subscribe((changes)=>{
      this.newShow=changes;
      
    })
    }
    public onSubmit(){
      if(this.showId !== ""){
      this.showsService.putShow(this.showId, this.newShow).subscribe()
      alert("Show edited");
      } else {
        
        this.showsService.postShow(this.newShow).subscribe();
        alert("Show created");
      }

      this.showForm.reset();

      this.router.navigate(["/shows"]);
    }

    public delete(){
      this.showsService.deleteShow(this.newShow.id).subscribe();
      this.showsService.clearShow();
      alert("Show borrado");
      this.router.navigate(["/shows"]);

    }
  }

