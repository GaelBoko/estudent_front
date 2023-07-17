import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    username='bgael';
    password='password';
    var client_id= 'api-gesetudiant';
    var client_secret: 'AyiBf4dt937YqW1mpUQ0U4mKqmCFe8Js';
    //var client_id= 'gesetudiant-angular';
    //var client_secret: 'ONJbLXHFsS2VitGM9joWomKQNRxFSQQH';
    var grant_type='password';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    alert('ccc')
    return this.http
      // .post<any>(`${environment.apiUrl}/authenticate`, {
      .post<any>(`https://signin-dev.godtech.co/realms/oriongroup/protocol/openid-connect/token123`, {
        username,
        password,
        client_id,
        grant_type,
        client_secret
      },{headers})//
      .pipe(
        map((user) => {
          console.log(user)
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
