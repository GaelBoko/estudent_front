import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.sass'],
})
export class AddDepartementComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Departement',
      items: ['Departement'],
      active: 'Add Departement',
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
      departement: [''],
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
