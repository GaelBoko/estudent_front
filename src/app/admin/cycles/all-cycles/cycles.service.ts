import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cycles } from './cycles.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class CyclesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/cycles.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Cycles[]> = new BehaviorSubject<Cycles[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Cycles[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCycless(): void {
    this.subs.sink = this.httpClient.get<Cycles[]>(this.API_URL).subscribe(
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
  addCycles(cycles: Cycles): void {
    this.dialogData = cycles;

    /*  this.httpClient.post(this.API_URL, cycles).subscribe(data => {
      this.dialogData = cycles;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateCycles(cycles: Cycles): void {
    this.dialogData = cycles;

    /* this.httpClient.put(this.API_URL + cycles.id, cycles).subscribe(data => {
      this.dialogData = cycles;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteCycles(id: number): void {
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
