import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) 
  {
    if(localStorage.getItem('userToken') != null)
    {
      this.setUserData();
    }
  }

  userData = new BehaviorSubject(null);

  setUserData():void
  {
    //let encodedToken = JSON.parse(localStorage.getItem('userToken') || '{}');
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    // any -> interface first-name last-name ...
    let decodedToken:any = jwtDecode(encodedToken);
    //console.log(decodedToken);
    //this.userData = decodedToken;
    this.userData.next(decodedToken);
  }
  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',userData)
  }
  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',userData)
  }
  logOut():void
  {
    localStorage.removeItem('userToken');
    // userData = null
    this.userData.next(null);
    this._Router.navigate(['/login']);
    
  }
}
