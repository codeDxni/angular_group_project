import { AboutComponent } from './pages/about/about.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "shows", component: ShowsComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
