import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent {
  @Input() songToPlay!: any;

  playAudio() {
    let audio = new Audio();
    audio.src = this.songToPlay.blobFile;
    audio.load();
    audio.play();
  }

  play() {
    console.log(this.songToPlay);
    this.playAudio();
  }
}
