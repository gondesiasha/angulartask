import { Component, OnInit, Input } from '@angular/core';
// import { NG_VALIDATORS, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../validator';





@Component({
  selector: 'app-custom-validaitons',
  templateUrl: './custom-validations.component.html',
  styleUrls: ['./custom-validations.component.scss'],
  
})
export class CustomValidationsComponent implements OnInit {
  //loginForm:FormGroup;
  fullname:any;
  child:any;
  hasChildren:boolean=false;
  ngOnInit(){


  }
  submit(f)
  {
    this.fullname=`${this.fullname}`;
    this.child=`${this.child}`;
  //  console.log(this.fullname);
//console.log(typeof(this.child));
alert("success");
f.form.reset();
  }
  

}
