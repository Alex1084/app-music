import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../album.service';
import { Album } from '../../album';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss']
})
export class AlbumDescriptionComponent implements OnInit {

  album: Album | undefined;
  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.album = this.albumService.getAlbum(id);
  }

}
