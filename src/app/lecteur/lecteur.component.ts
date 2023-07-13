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
    console.log(this.audio);
  }

  // playSong() {
  //   return this.audioService.startPlaylistFromService(this.songsToPlay);
  // }

  // stopAudioFromService(): void {
  //   this.audioService.stopAudio(this.songsToPlay);
  // }
  progressBar() {
    // console.log();
  }

  playSong2(item: number) {
    this.audio.src = this.songsToPlay[item].inputFile;
    this.audio.load();
    this.audio.play();
  }
  changeSong() {
    // loop management
    this.item =
      this.item === this.songsToPlay.length - 1 ? 0 : (this.item += 1);
    this.playSong2(this.item);
  }

  stopAudio() {
    this.audio.pause();
  }
}
