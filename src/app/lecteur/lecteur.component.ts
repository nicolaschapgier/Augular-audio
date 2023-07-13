import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { PlayAudioService } from '../shared/play-audio.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent {
  // constructor(private audioService: PlayAudioService) {}

  @Input() songsToPlay!: any[];

  audioSrc: string = ''; // binding html
  audioTitle: string = '';

  @ViewChild('audio') audioRef!: ElementRef<HTMLAudioElement>;

  audio!: HTMLAudioElement;

  item: number = 0;

  ngAfterViewInit() {
    this.audio = this.audioRef.nativeElement;
  }

  playSong2(item: number) {
    this.songsToPlay[item].isPlaying = true;
    this.audio.src = this.songsToPlay[item].inputFile;
    this.audio.load();
    this.audio.play();
  }

  changeSong() {
    this.songsToPlay[this.item].isPlaying = false;

    // loop management
    this.item =
      this.item === this.songsToPlay.length - 1 ? 0 : (this.item += 1);
    this.playSong2(this.item);
  }

  stopAudio() {
    this.audio.pause();
  }

  progressBar(event: any) {
    console.log(event);
  }
}
