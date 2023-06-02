import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass'],
})
export class AddStudentComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Student',
      items: ['Student'],
      active: 'Add Student',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      nom: [''],
      lieuNaiss: [''],
      // rollNo: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      phoneNumber: ['', [Validators.required]],
      // rDate: ['', [Validators.required]],
      // department: [''],
      nomPrenomTuteur: ['', [Validators.required]],
      telephoneTuteur: [''],
      dateNaissance: ['', [Validators.required]],
      bGroup: [''],
      addresse: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
