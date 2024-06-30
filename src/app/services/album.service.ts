import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Foto } from '../models/modello';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }


  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums");
  }


  getFotoById(id: string): Observable<Foto> {
    return this.http.get<Foto>("https://jsonplaceholder.typicode.com/photos?albumId/" + id);
  }
}
