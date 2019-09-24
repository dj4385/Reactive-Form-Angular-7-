import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormSerService } from '../common/form-ser.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
    
  })

  constructor(
    private formService: FormSerService,

  ) { }

  ngOnInit() {
  }

  loginUser(){
    this.formService.loginUser(this.loginForm.value).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
