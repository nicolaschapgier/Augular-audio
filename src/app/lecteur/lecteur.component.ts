import { Component, Input } from '@angular/core';
import { PlayAudioService } from '../shared/play-audio.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent {
  constructor(private audioService: PlayAudioService) {}

  @Input() songsToPlay!: any;

  songToPlay!: any;

  audioTitle: string = ''; // binding html
  audioSrc: string = ''; // binding html

  currentSongArr: number = 0;
  audio = new Audio();

  playSong() {
    this.audioService.startPlaylistFromService(this.songsToPlay);
  }

  stopAudioFromService(): void {
    this.audioService.stopAudio();
  }

  // this.audio.onended = () +> {index++ playCurrentTrack}
}
