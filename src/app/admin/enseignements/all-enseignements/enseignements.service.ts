import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departments } from './departments.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class DepartmentsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/departments.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Departments[]> = new BehaviorSubject<Departments[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Departments[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartmentss(): void {
    this.subs.sink = this.httpClient.get<Departments[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  addDepartments(departments: Departments): void {
    this.dialogData = departments;

    /*  this.httpClient.post(this.API_URL, departments).subscribe(data => {
      this.dialogData = departments;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateDepartments(departments: Departments): void {
    this.dialogData = departments;

    /* this.httpClient.put(this.API_URL + departments.id, departments).subscribe(data => {
      this.dialogData = departments;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteDepartments(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
