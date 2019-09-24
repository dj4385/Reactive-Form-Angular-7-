import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormSerService } from '../common/form-ser.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerUser = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    password : new FormControl('')
  })

  constructor(
    private regSer: FormSerService
  ) { }

  ngOnInit() {
    this.registerFn()
  }

  registerFn(){
    console.log(this.registerUser.value)
    this.regSer.registerUser(this.registerUser.value).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }



}
