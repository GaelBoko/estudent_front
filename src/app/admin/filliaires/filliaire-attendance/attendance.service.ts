import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DepartmentAttendance } from './department-attendance.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class DepartmentAttendanceService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/department-attendance.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<DepartmentAttendance[]> = new BehaviorSubject<
    DepartmentAttendance[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): DepartmentAttendance[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartmentAttendances(): void {
    this.subs.sink = this.httpClient
      .get<DepartmentAttendance[]>(this.API_URL)
      .subscribe(
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
  addDepartmentAttendance(departmentAttendance: DepartmentAttendance): void {
    this.dialogData = departmentAttendance;

    /*  this.httpClient.post(this.API_URL, departmentAttendance).subscribe(data => {
      this.dialogData = departmentAttendance;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateDepartmentAttendance(departmentAttendance: DepartmentAttendance): void {
    this.dialogData = departmentAttendance;

    /* this.httpClient.put(this.API_URL + departmentAttendance.id, departmentAttendance).subscribe(data => {
      this.dialogData = departmentAttendance;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteDepartmentAttendance(id: number): void {
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
