import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Istudent } from 'src/app/models/Istudent';
import { pstudent } from 'src/app/models/pstudent';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService extends UnsubscribeOnDestroyAdapter {
  // private readonly API_URL = 'assets/data/Student1.json';
  // private readonly API_URL = 'http://estudent-001-site1.etempurl.com/api/Etudiants';
  private readonly API_URL = environment.apiUrl + 'api/Etudiants/';
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
    alert(this.dialogData)
    console.log(this.dialogData)
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
  addStudent(Student: pstudent): void {
    this.httpClient.post(this.API_URL, Student).subscribe(data => {
      this.dialogData = data;
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
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      this.dialogData = data;
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
