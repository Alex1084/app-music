import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './component/albums/albums.component';
import { AlbumDetailsComponent } from './component/album-details/album-details.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { AlbumDescriptionComponent } from './component/album-description/album-description.component';
import { LoginComponent } from './component/login/login.component';
import { PaginateComponent } from './component/paginate/paginate.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
