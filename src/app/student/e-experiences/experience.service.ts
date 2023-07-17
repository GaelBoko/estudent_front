import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Experience } from '../experience';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends UnsubscribeOnDestroyAdapter
implements OnInit{

  private readonly API_URL = 'assets/data/experiences1.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Experience[]> = new BehaviorSubject<Experience[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get data(): Experience[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTeacherss(): void {
    this.subs.sink = this.httpClient.get<Experience[]>(this.API_URL).subscribe(
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
  addTeachers(experiences: Experience): void {
    this.dialogData = experiences;

    /*  this.httpClient.post(this.API_URL, experiences).subscribe(data => {
      this.dialogData = experiences;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateTeachers(experiences: Experience): void {
    this.dialogData = experiences;

    /* this.httpClient.put(this.API_URL + experiences.id, experiences).subscribe(data => {
      this.dialogData = experiences;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteTeachers(id: number): void {
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

