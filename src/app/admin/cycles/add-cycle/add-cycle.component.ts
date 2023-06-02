import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.sass'],
})
export class AddCycleComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Cycle',
      items: ['Cycle'],
      active: 'Add Cycle',
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
      cycle: [''],
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
