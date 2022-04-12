import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../../album.service';
import { Album } from '../../album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();


  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let results = this.albumService.search(form.value['word']);
    if (results.length > 0) this.searchAlbums.emit(results);
  }

}
