import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Etablissements } from './etablissements.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class EtablissementsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/etablissements.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Etablissements[]> = new BehaviorSubject<Etablissements[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Etablissements[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllEtablissementss(): void {
    this.subs.sink = this.httpClient.get<Etablissements[]>(this.API_URL).subscribe(
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
  addEtablissements(etablissements: Etablissements): void {
    this.dialogData = etablissements;

      this.httpClient.post(this.API_URL, etablissements).subscribe(data => {
      this.dialogData = etablissements;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateEtablissements(etablissements: Etablissements): void {
    this.dialogData = etablissements;

     this.httpClient.put(this.API_URL + etablissements.guid, etablissements).subscribe(data => {
      this.dialogData = etablissements;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteEtablissements(id: number): void {
    console.log(id);

    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
