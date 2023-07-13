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
    inputFile: [''],
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
      inputFile: this.file,
    });
    // console.log("de l'enfant ", this.fileForm.value);
    this.sendSongToParentComponent();
    this.formResetAndPatchInputType();
  }

  sendSongToParentComponent(): void {
    this.songEmitFromForm.emit(this.fileForm.value);
  }

  file!: string;

  onFileChange(event: any) {
    this.file =
      this.selectedOption === 'file'
        ? URL.createObjectURL(event.target.files[0])
        : event.target.value;
  }

  // reset le formulaire et réassigne inputType text
  formResetAndPatchInputType() {
    this.fileForm.reset();
    this.fileForm.patchValue({
      inputType: ['text'],
    });
  }
}
