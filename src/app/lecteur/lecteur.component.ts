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

  audioSrc: string = ''; // binding html
  audioTitle: string = '';
  playSong() {
    return this.audioService.startPlaylistFromService(this.songsToPlay);
  }

  stopAudioFromService(): void {
    this.audioService.stopAudio(this.songsToPlay);
  }
  progressBar() {
    // console.log();
  }
}
