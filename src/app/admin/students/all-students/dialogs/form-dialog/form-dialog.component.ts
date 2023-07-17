import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../students.service';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  student: Student;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public studentService: StudentService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.students.nomComplet;
      this.student = data.students;
    } else {
      this.dialogTitle = 'New Students';
      this.student = new Student({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      niu: [this.student.niu],
      img: [this.student.photo],
      nom: [this.student.nom],
      prenom: [this.student.prenom],
      email: [
        this.student.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      // dateNaissance: [
      //    formatDate(this.student.dateNaissance, 'yyyy-MM-dd', 'en'),
      //    [Validators.required]
      //  ],
      sexe: [this.student.sexe],
      phoneNumber: [this.student.phoneNumber],
      department:"Medecine",
      universiteEtudiantId:1
      // department: [this.student.department],
      // rollNo: [this.students.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentService.addStudent(this.stdForm.getRawValue());
  }
}
