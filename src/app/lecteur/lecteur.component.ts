import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent {
  @Input() songsToPlay!: any;

  songToPlay!: any;
  audioSrc: string = '';
  audioTitle: string = '';

  currentSongArr: number = 0;
  audio = new Audio();

  playAudio() {
    this.audio.src = this.audioSrc;
    this.audio.load();
    this.audio.play();

    // à la fin du son, on incrémente l'index et on relance le son
    this.audio.onended = () => {
      this.currentSongArr++;
      this.listenSong();
    };
  }

  stopAudio() {
    this.audio.pause();
  }

  // quand on appuie sur play audio.src doit correspondre
  // au blob
  listenSong() {
    // si l'index du son à jouer est inférieur à la taille du tableau de sons
    if (this.currentSongArr < this.songsToPlay.length) {
      // audioSrc === blob
      this.audioSrc = this.songsToPlay[this.currentSongArr].blobFile;
      this.audioTitle = this.songsToPlay[this.currentSongArr].title;
      this.playAudio();
    } else {
      console.log('boucle');
      // on revient au début
      this.currentSongArr = 0;
      this.listenSong();
    }
  }

  // this.audio.onended = () +> {index++ playCurrentTrack}
}
