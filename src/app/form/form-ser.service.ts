import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormSerService {

  private regAPI = "http://localhost:4000/api/register"

  constructor(private httpClient: HttpClient) { }

  registerUser(userInfo){
    console.log("User info"+userInfo)
    return this.httpClient.post(this.regAPI, userInfo)
  }
}
