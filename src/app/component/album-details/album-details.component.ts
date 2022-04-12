import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Album, List } from '../../album';
import { AlbumService } from '../../album.service'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album!: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();


  //albumLists!: List[];
  songs: any;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if (this.album) {
      this.songs = this.albumService.getListAlbum(this.album.id);
    }

  }

  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }

}
