import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { Base } from '../interfaces/base-response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User.AccessToken>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  private currentUserSubject: BehaviorSubject<User.AccessToken>;
  public currentUser: Observable<User.AccessToken>;
  get currentUserValue(): User.AccessToken {
    return this.currentUserSubject.value;
  }
  async login({ email, password }): Promise<Observable<Base.BaseResponse<User.AccessToken>>> {
    return this.http
      .post<any>(
        `${environment.url.api}Login/AccessToken`,
        { email, password }
      )
      .pipe(
        map((user) => {
          console.log(user);
           localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
}
