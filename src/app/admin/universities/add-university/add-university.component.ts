import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.sass'],
})
export class AddUniversityComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add University',
      items: ['University'],
      active: 'Add University',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      code: [''],
      rollNo: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      telephone: ['', [Validators.required]],
      adress: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
