import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departements } from './departements.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class DepartementsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/department.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Departements[]> = new BehaviorSubject<Departements[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Departements[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartementss(): void {
    this.subs.sink = this.httpClient.get<Departements[]>(this.API_URL).subscribe(
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
  addDepartements(departements: Departements): void {
    this.dialogData = departements;

      this.httpClient.post(this.API_URL, departements).subscribe(data => {
      this.dialogData = departements;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateDepartements(departements: Departements): void {
    this.dialogData = departements;

    /* this.httpClient.put(this.API_URL + departements.id, departements).subscribe(data => {
      this.dialogData = departements;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteDepartements(id: number): void {
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
