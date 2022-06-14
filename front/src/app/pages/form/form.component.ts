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
  public comicForm!: FormGroup;
  public submmited: boolean = false;
  public newShow = this.showsService.showData;
  
  
  constructor(private formBuilder: FormBuilder, private showsService: ShowsService, private router: Router) { }

  ngOnInit(): void {
  }

}
