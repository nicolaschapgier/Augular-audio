import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayAudioService {
  constructor() {}

  songToPlay!: any;

  audioSrc: string = ''; // binding html
  audioTitle: string = '';
  audioPlaying: boolean = false;

  currentSongArr: number = 0;
  audio = new Audio();

  startPlaylistFromService(songsToPlay: any) {
    // s'il n'y a plus de son dans le tableau de playlist
    if (songsToPlay.length === 0) {
      return this.stopAudio(songsToPlay);
    }
    
    // si l'index du son à jouer est inférieur à la taille du tableau de sons
    if (this.currentSongArr < songsToPlay.length) {
      this.audioSrc = songsToPlay[this.currentSongArr].blobFile; // on récupère le blob du son à jouer

      songsToPlay[this.currentSongArr].isPlaying = true; // changer le boolean de isPlaying = true
      this.playOneSong(this.audioSrc);

      this.endOfList(songsToPlay);
    } else {
      console.log('loop');

      // on revient au début
      this.currentSongArr = 0;
      this.startPlaylistFromService(songsToPlay);
    }
    return this.audio;
  }

  playOneSong(audioSrc: string, song?: any) {
    song ? (song.isPlaying = true) : '';

    this.audio.src = audioSrc; // on récupère la source pour le audio.play (j'imagine)
    this.audio.load();

    this.audio.play();
    this.audio.onended = () => {
      this.audio.pause();
      song.isPlaying = false;
    };
  }

  // loop gestion
  endOfList(songsToPlay: any) {
    this.audio.onended = () => {
      songsToPlay[this.currentSongArr].isPlaying = false;
      this.currentSongArr++;
      this.startPlaylistFromService(songsToPlay);
    };
  }

  stopAudio(songsToPlay: any) {
    console.log('stop');
    songsToPlay[this.currentSongArr].isPlaying = false;
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
