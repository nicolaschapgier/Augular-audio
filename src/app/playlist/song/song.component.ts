import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  // constructor(private songService: SongService) {}

  @Input() song!: any;
  @Input() isPlaying!: boolean;

  @Output() songEmitToPlay: EventEmitter<any> = new EventEmitter<any>();

  currentSongArr: number = 0;
  audio = new Audio();
  audioSrc: string = '';

  playAudio() {
    this.audio.src = this.song.blobFile;
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }
}
