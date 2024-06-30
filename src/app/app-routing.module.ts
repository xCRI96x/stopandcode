import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { AppComponent } from './app.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "album", component: AlbumListComponent
  },
  {
    path: "album/:id", component: AlbumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
