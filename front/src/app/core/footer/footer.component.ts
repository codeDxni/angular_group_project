import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public btnText: string = '☀️';

  constructor() {}

  ngOnInit(): void {}

  public cambiarColor(): void {
    document.body.classList.toggle('light-theme');
    this.btnText === '☀️' ? (this.btnText = '🌒') : (this.btnText = '☀️');
  }
}
