import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Istudent } from 'src/app/models/Istudent';
@Injectable()
export class StudentService extends UnsubscribeOnDestroyAdapter {
  // private readonly API_URL = 'assets/data/Student1.json';
  // private readonly API_URL = 'http://estudent-001-site1.etempurl.com/api/Etudiants';
  private readonly API_URL = 'https://localhost:44374/api/Etudiants';
  isTblLoading = true;
  dataChange: BehaviorSubject<Istudent[]> = new BehaviorSubject<Istudent[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Istudent[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStudents(): void {
    this.subs.sink = this.httpClient.get<Istudent[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        console.log(data)
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  addStudent(Student: Istudent): void {
    this.dialogData = Student;

    this.httpClient.post(this.API_URL, Student).subscribe(data => {
      this.dialogData = Student;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateStudent(Student: Istudent): void {
    this.dialogData = Student;

    this.httpClient.put(this.API_URL + Student.id, Student).subscribe(data => {
      this.dialogData = Student;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteStudent(id: number): void {
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
