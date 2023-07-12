import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent {
  @Input() arrSongEmitFromForm!: any; // on récupère le tableau de chanson

  isPlaying: boolean = false;
  songsToPlay!: any;
  lecteurArr!: any; // tableau pour le lecteur

  songReceiveToPlay(e: any): void {
    this.songsToPlay = e;
  }

  deleteSong(index: number): void {
    this.arrSongEmitFromForm.splice(index, 1);
  }

  lunchPlaylist(): void {
    console.log('array de chanson ', this.arrSongEmitFromForm);
    this.songsToPlay = this.arrSongEmitFromForm;
    // this.songsToPlay.push(this.arrSongEmitFromForm);
    // on push un index dans lecteur
    // -- Observable ? -- //
    // une fois que la chanson est terminée on push la suivante
    // si il n'y a pas d'index suivant alors on revient à l'index 1
  }
}
