import { AboutModule } from './pages/about/about.module';
import { AboutComponent } from './pages/about/about.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", loadChildren:() => import("./pages/home/home.module").then(m=> m.HomeModule)},
  { path: "about", loadChildren:() => import("./pages/about/about.module").then(m=> m.AboutModule)},
  { path: "shows", loadChildren:() => import("./pages/shows/shows.module").then(m=> m.ShowsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
