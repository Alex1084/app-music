import { Injectable } from '@angular/core';

import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[] = ALBUMS;
  private lists: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[] {
    return this.albums.sort((a, b) => { return b.duration - a.duration })
  }
  getAlbum(id: string) {
    return this.albums.find(elem => elem.id === id);
  }
  getListAlbum(id: string) {
    return this.lists.find(elem => elem.id === id)?.list;
  }

  count() {
    return this.albums.length;
  }

  paginate(start: number, end: number): Album[] {
    return this.albums.sort((a, b) => { return b.duration - a.duration }).slice(start, end);
  }

  search(word: string) {
    return this.albums.filter(album => album.title.includes(word));
  }
}
