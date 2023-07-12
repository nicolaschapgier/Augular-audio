import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SongComponent } from './playlist/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PlaylistComponent,
    LecteurComponent,
    SongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
