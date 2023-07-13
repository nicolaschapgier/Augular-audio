import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayAudioService } from 'src/app/shared/play-audio.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  constructor(private audioService: PlayAudioService) {}

  @Input() song!: any;
  @Input() isPlaying!: boolean;

  @Output() songEmitToPlay: EventEmitter<any> = new EventEmitter<any>();

  currentSongArr: number = 0;
  audio = new Audio();
  audioSrc: string = '';

  playOneSong(song: any) {
    this.audioService.playOneSong(song.inputFile, song);
  }
}
