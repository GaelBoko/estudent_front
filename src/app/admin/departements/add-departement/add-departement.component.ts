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
      codeDept: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      etablissementId: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
