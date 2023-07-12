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
    // URL.revokeObjectURL(this.songsToPlay[index]); // empêche la boucle infini si on supprime le morceau en cours de lecture
    this.arrSongEmitFromForm.splice(index, 1);
  }
}
