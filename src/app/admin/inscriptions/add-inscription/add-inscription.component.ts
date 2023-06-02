import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.sass'],
})
export class AddInscriptionComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Inscription',
      items: ['Inscription'],
      active: 'Add Inscription',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      rollNo: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      mobile: ['', [Validators.required]],
      rDate: ['', [Validators.required]],
      inscription: [''],
      parentName: ['', [Validators.required]],
      parentNo: [''],
      dob: ['', [Validators.required]],
      bGroup: [''],
      address: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
