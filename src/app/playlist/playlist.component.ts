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

  play() {
    this.isPlaying = !this.isPlaying;
  }

  songReceiveToPlay(e: any): void {
    this.songToPlay = e;
  }

  deleteSong(song: string, index: number): void {
    this.arrSongEmitFromForm.splice(index, 1);
  }
}
