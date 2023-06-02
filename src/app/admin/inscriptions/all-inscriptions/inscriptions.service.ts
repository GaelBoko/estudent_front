import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Inscriptions } from './inscriptions.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class InscriptionsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/inscriptions.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Inscriptions[]> = new BehaviorSubject<Inscriptions[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Inscriptions[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllInscriptionss(): void {
    this.subs.sink = this.httpClient.get<Inscriptions[]>(this.API_URL).subscribe(
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
  addInscriptions(inscriptions: Inscriptions): void {
    this.dialogData = inscriptions;

    /*  this.httpClient.post(this.API_URL, inscriptions).subscribe(data => {
      this.dialogData = inscriptions;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateInscriptions(inscriptions: Inscriptions): void {
    this.dialogData = inscriptions;

    /* this.httpClient.put(this.API_URL + inscriptions.id, inscriptions).subscribe(data => {
      this.dialogData = inscriptions;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteInscriptions(id: number): void {
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
