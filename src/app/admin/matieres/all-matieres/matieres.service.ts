import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Matieres } from './matieres.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class MatieresService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/matieres1.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Matieres[]> = new BehaviorSubject<Matieres[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Matieres[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllMatieress(): void {
    this.subs.sink = this.httpClient.get<Matieres[]>(this.API_URL).subscribe(
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
  addMatieres(matieres: Matieres): void {
    this.dialogData = matieres;

    /*  this.httpClient.post(this.API_URL, matieres).subscribe(data => {
      this.dialogData = matieres;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateMatieres(matieres: Matieres): void {
    this.dialogData = matieres;

    /* this.httpClient.put(this.API_URL + matieres.id, matieres).subscribe(data => {
      this.dialogData = matieres;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteMatieres(id: number): void {
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
