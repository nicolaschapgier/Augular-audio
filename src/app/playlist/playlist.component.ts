import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent {
  @Input() arrSongEmitFromForm!: any; // on récupère le tableau de chanson

  isPlaying: boolean = false;
  songToPlay!: any;

  songReceiveToPlay(e: any): void {
    this.songToPlay = e;
  }

  deleteSong(index: number): void {
    this.arrSongEmitFromForm.splice(index, 1);
  }

  lunchPlaylist(): void {
    console.log('coucou');
  }
}
