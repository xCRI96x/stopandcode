import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { Albums } from './models/modello';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  albums: Albums[] = [];

  constructor(private alb: AlbumService) { }

  ngOnInit(): void {
    this.alb.getAlbums().subscribe((data: Albums[]) => {
      this.albums = data;
    });
  }
}
