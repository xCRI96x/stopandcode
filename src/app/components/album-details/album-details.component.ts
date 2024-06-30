import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../../models/modello';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  foto: Foto[] = [];
  constructor(private ft: AlbumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get("id")!;
  //   this.ft.getFotoById(id).subscribe(f => {
  //     this.foto = f;
  //   });
}
