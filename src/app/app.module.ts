import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumService } from './services/album.service';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavHeaderComponent,
    AlbumListComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [provideHttpClient(),
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
