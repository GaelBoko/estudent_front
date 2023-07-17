import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { ECursus } from '../e-cursus';

@Injectable({
  providedIn: 'root'
})
export class CursusService extends UnsubscribeOnDestroyAdapter implements OnInit{

  private readonly API_URL = 'assets/data/cursus1.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<ECursus[]> = new BehaviorSubject<ECursus[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get data(): ECursus[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCursuss(): void {
    this.subs.sink = this.httpClient.get<ECursus[]>(this.API_URL).subscribe(
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
  addCursus(cursus: ECursus): void {
    this.dialogData = cursus;

    /*  this.httpClient.post(this.API_URL, cursus).subscribe(data => {
      this.dialogData = cursus;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateCursus(cursus: ECursus): void {
    this.dialogData = cursus;

    /* this.httpClient.put(this.API_URL + cursus.id, cursus).subscribe(data => {
      this.dialogData = cursus;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteCursus(id: number): void {
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
