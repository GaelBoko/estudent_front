import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-etablissement',
  templateUrl: './add-etablissement.component.html',
  styleUrls: ['./add-etablissement.component.sass'],
})
export class AddEtablissementComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Etablissement',
      items: ['Etablissement'],
      active: 'Add Etablissement',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.fb.group({
      codeEts: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      nom: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      telephone: ['', [Validators.required]],
      univerite: [''],
      pays: ['', [Validators.required]],
      ville: [''],
      adresse: [''],
      longitude: [''],
      latitude: [''],
      nomResponsable: [''],
      telResponsable: [''],
      universite: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
