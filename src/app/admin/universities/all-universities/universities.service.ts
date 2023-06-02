import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Universities } from './universities.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class UniversitiesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/universities.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Universities[]> = new BehaviorSubject<Universities[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Universities[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllUniversitiess(): void {
    this.subs.sink = this.httpClient.get<Universities[]>(this.API_URL).subscribe(
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
  addUniversities(universities: Universities): void {
    this.dialogData = universities;

    /*  this.httpClient.post(this.API_URL, universities).subscribe(data => {
      this.dialogData = universities;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateUniversities(universities: Universities): void {
    this.dialogData = universities;

    /* this.httpClient.put(this.API_URL + universities.id, universities).subscribe(data => {
      this.dialogData = universities;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteUniversities(id: number): void {
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
