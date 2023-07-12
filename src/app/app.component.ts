import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-audio';

  songEmitFromForm: string = '';
  arrSongEmitFromForm: string[] = [];

  songReceiveFromform(e: any): void {
    // on envoie la chanson dans le tableau de chanson
    this.arrSongEmitFromForm.push(e);
  }
}
