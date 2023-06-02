import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-inscription',
  templateUrl: './edit-inscription.component.html',
  styleUrls: ['./edit-inscription.component.sass'],
})
export class EditInscriptionComponent {
  stdForm: UntypedFormGroup;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    rollNo: '12',
    gender: 'male',
    email: 'test@example.com',
    mobile: '123456789',
    rDate: '2020-02-05T14:22:18Z',
    inscription: 'mathematics',
    bGroup: 'O+',
    dob: '1987-02-17T14:22:18Z',
    parentName: 'Sanjay Shukla',
    parentNo: '1234567890',
    address: '101, Elanxa, New Yourk',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Inscription',
      items: ['Inscription'],
      active: 'Edit Inscription',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      first: [
        this.formdata.first,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      last: [this.formdata.last],
      rollNo: [this.formdata.rollNo],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      rDate: [this.formdata.rDate, [Validators.required]],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      inscription: [this.formdata.inscription],
      parentName: [this.formdata.parentName, [Validators.required]],
      parentNo: [this.formdata.parentNo],
      dob: [this.formdata.dob, [Validators.required]],
      bGroup: [this.formdata.bGroup],
      address: [this.formdata.address],
      uploadFile: [this.formdata.uploadFile],
    });
  }
}
