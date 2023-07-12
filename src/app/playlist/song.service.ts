import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor() {}

  public isPlaying: boolean = false;

  play(bool: boolean) {
    return !bool;
  }
}
