import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { ShowsCardComponent } from './components/shows-card/shows-card.component';


@NgModule({
  declarations: [
    ShowsComponent,
    ShowsCardComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowsModule { }
