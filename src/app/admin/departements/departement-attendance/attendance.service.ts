import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DepartementAttendance } from './departement-attendance.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class DepartementAttendanceService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/departement-attendance.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<DepartementAttendance[]> = new BehaviorSubject<
    DepartementAttendance[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): DepartementAttendance[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartementAttendances(): void {
    this.subs.sink = this.httpClient
      .get<DepartementAttendance[]>(this.API_URL)
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
  addDepartementAttendance(departementAttendance: DepartementAttendance): void {
    this.dialogData = departementAttendance;

    /*  this.httpClient.post(this.API_URL, departementAttendance).subscribe(data => {
      this.dialogData = departementAttendance;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateDepartementAttendance(departementAttendance: DepartementAttendance): void {
    this.dialogData = departementAttendance;

    /* this.httpClient.put(this.API_URL + departementAttendance.id, departementAttendance).subscribe(data => {
      this.dialogData = departementAttendance;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteDepartementAttendance(id: number): void {
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
