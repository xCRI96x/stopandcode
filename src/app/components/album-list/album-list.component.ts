import { Component, OnInit } from '@angular/core';
import { Albums, Foto } from '../../models/modello';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
  albums: Albums[] = [];
  constructor(private alb: AlbumService) { }

  ngOnInit(): void {
    this.alb.getAlbums().subscribe((data: Albums[]) => {
      this.albums = data;
    });
  }
}
