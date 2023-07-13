import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { PlayAudioService } from 'src/app/shared/play-audio.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  @Input() song!: any;

  currentSongArr: number = 0;
  audio = new Audio();
  audioSrc: string = '';

  playSong2() {
    this.audio.src = this.song.inputFile;
    this.audio.load();
    this.audio.play();
  }
}
