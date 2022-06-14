import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsCardComponent } from './shows-card.component';

describe('ShowsCardComponent', () => {
  let component: ShowsCardComponent;
  let fixture: ComponentFixture<ShowsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
