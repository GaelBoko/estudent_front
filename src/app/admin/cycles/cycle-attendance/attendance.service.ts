import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CycleAttendance } from './cycle-attendance.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class CycleAttendanceService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/cycle-attendance.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<CycleAttendance[]> = new BehaviorSubject<
    CycleAttendance[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): CycleAttendance[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCycleAttendances(): void {
    this.subs.sink = this.httpClient
      .get<CycleAttendance[]>(this.API_URL)
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
  addCycleAttendance(cycleAttendance: CycleAttendance): void {
    this.dialogData = cycleAttendance;

    /*  this.httpClient.post(this.API_URL, cycleAttendance).subscribe(data => {
      this.dialogData = cycleAttendance;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateCycleAttendance(cycleAttendance: CycleAttendance): void {
    this.dialogData = cycleAttendance;

    /* this.httpClient.put(this.API_URL + cycleAttendance.id, cycleAttendance).subscribe(data => {
      this.dialogData = cycleAttendance;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteCycleAttendance(id: number): void {
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
