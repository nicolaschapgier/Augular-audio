import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayAudioService {
  constructor() {}

  songToPlay!: any;

  audioTitle: string = ''; // binding html
  audioSrc: string = ''; // binding html

  currentSongArr: number = 0;
  audio = new Audio();

  startPlaylistFromService(songsToPlay: any) {
    // s'il n'y a plus de son dans le tableau de playlist
    if (songsToPlay.length === 0) {
      return this.stopAudio();
    }
    // si l'index du son à jouer est inférieur à la taille du tableau de sons
    if (this.currentSongArr < songsToPlay.length) {
      console.log('playing');
      this.audioSrc = songsToPlay[this.currentSongArr].blobFile; // on récupère le blob du son à jouer

      this.playOneSong(this.audioSrc);

      this.endOfList(songsToPlay); // TO DO : peut être que ça génère des problèmes quand un seul son est appelé
    } else {
      console.log('loop');

      // on revient au début
      this.currentSongArr = 0;
      this.startPlaylistFromService(songsToPlay);
    }
    return this.audio;
  }

  playOneSong(audioSrc: string) {
    this.audio.src = audioSrc; // on récupère la source pour le audio.play (j'imagine)
    this.audio.load();
    this.audio.play();
  }

  // loop gestion
  endOfList(songsToPlay: any) {
    this.audio.onended = () => {
      this.currentSongArr++;
      this.startPlaylistFromService(songsToPlay);
    };
  }

  stopAudio() {
    console.log('stop');
    this.audio.pause();
  }

  // -------------- //
  // -------------- //
  // -------------- //
  // Non factorisé //
  // -------------- //
  // -------------- //
  // -------------- //

  // startPlaylistFromService(songsToPlay: any) {
  //   // si l'index du son à jouer est inférieur à la taille du tableau de sons
  //   if (this.currentSongArr < songsToPlay.length) {
  //     console.log('coucou');
  //     this.audioSrc = songsToPlay[this.currentSongArr].blobFile; // on récupère le blob du son à jouer
  //     this.audioTitle = songsToPlay[this.currentSongArr].title; // on récupère le title du son à jouer

  //     this.audio.src = this.audioSrc; // on récupère la source pour le audio.play (j'imagine)

  //     this.audio.load();
  //     this.audio.play();
  //     this.audio.onended = () => {
  //       this.currentSongArr++;
  //       this.startPlaylistFromService(songsToPlay);
  //     };
  //   } else {
  //     console.log('boucle');
  //     // on revient au début
  //     this.currentSongArr = 0;
  //     this.startPlaylistFromService(songsToPlay);
  //   }
  //   return this.audio;
  // }
}
