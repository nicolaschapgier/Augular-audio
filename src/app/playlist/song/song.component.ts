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

  play() {
    this.songEmitToPlay.emit(this.song);
    // this.isPlaying = !this.isPlaying;
    // event emiter du song
  }
}
