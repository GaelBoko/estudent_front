import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CyclesService } from '../../cycles.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Cycles } from '../../cycles.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  cycles: Cycles;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cyclesService: CyclesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.cycles.name;
      this.cycles = data.cycles;
    } else {
      this.dialogTitle = 'New Cycles';
      this.cycles = new Cycles({});
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
      id: [this.cycles.id],
      img: [this.cycles.img],
      name: [this.cycles.name],
      email: [
        this.cycles.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.cycles.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.cycles.gender],
      mobile: [this.cycles.mobile],
      cycle: [this.cycles.cycle],
      rollNo: [this.cycles.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.cyclesService.addCycles(this.stdForm.getRawValue());
  }
}
