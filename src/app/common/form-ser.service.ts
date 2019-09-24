import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormSerService {

  constructor(
    private httpClient: HttpClient,
    ) { }

  registerUser(userInfo){
    return this.httpClient.post(environment.APIURL.regApiUrl, userInfo)
  }
  loginUser(loginObj){
    return this.httpClient.post(environment.APIURL.loginApiUrl, loginObj)
  }
  getAllProducts(){
    return this.httpClient.get(environment.APIURL.getProductApiUrl)
  }
  addProduct(productObj){
    return this.httpClient.post(environment.APIURL.addProductApiUrl,productObj)
  }
}
