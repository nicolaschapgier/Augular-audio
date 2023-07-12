import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Output() songEmitFromForm: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string = 'text';
  fileForm: FormGroup = this.formBuilder.group({
    inputType: ['text'],
    inputValue: [''],
    title: [''],
    blobFile: [''],
    isPlaying: false,
  });

  changeInputValue(e: any): void {
    // on récupère la valeur de l'option que l'on attribut à selectedOption
    this.selectedOption = e.target.value;

    // on modifie la valeur du formulaire
    this.fileForm.patchValue({
      inputType: this.selectedOption,
    });
  }

  onSubmit() {
    this.onFileChange;
    this.fileForm.patchValue({
      blobFile: this.blobLocalMusic,
    });
    // console.log("de l'enfant ", this.fileForm.value);
    this.sendSongToParentComponent();
    this.formResetAndPatchInputType();
  }

  sendSongToParentComponent(): void {
    this.songEmitFromForm.emit(this.fileForm.value);
  }

  blobLocalMusic!: string;

  onFileChange(event: any) {
    // console.log('event : ', event);
    let file = event.target.files[0];
    // console.log('file : ', file);
    this.blobLocalMusic = URL.createObjectURL(file);
    console.log(this.blobLocalMusic);
    return this.blobLocalMusic;
  }

  // reset le formulaire et réassigne inputType text
  formResetAndPatchInputType() {
    this.fileForm.reset();
    this.fileForm.patchValue({
      inputType: ['text'],
    });
  }
}
