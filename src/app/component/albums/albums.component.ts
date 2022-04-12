import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Album } from '../../album';
import { AlbumService } from '../../album.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page princiaple Albums Music";
  albums!: Album[];
  selectedAlbum!: Album;
  status: string = "";
  albumSearch !: Album;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albums = this.albumService.paginate(0, 5);
  }

  onSelect(album: Album) {
    // console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event: any) {
    this.status = $event.id;
  }

  search($event: any) {
    if ($event) this.albums = $event;
  }
  paginate(album: { start: number; end: number; }) {
    this.albums = this.albumService.paginate(album.start, album.end);
  }
}
