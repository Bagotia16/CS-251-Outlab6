import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {initial} from '../initial';
import { MywebsiteService } from '../mywebsite.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  details: initial ;
  registerForm: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder, private mywebsiteservice: MywebsiteService){}


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      feedback: [''],
      comment: [''],
    });
    this.showConfig();

  }

  get f(){;
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    let obj:initial=JSON.parse(JSON.stringify(this.registerForm.value));

    this.mywebsiteservice.addPost(obj).subscribe(data => {
      alert('Form Submitted Successfully');
      document.getElementById("feedback_name").innerHTML="Name : " +obj.name;
      document.getElementById("feedback_email").innerHTML="Email : "+ obj.email;
      document.getElementById("feedback").innerHTML="Feedback : "+ obj.feedback;
      document.getElementById("feedback_comment").innerHTML="Comment : "+ obj.comment;
    },
    error =>{
      if((obj.name === '' || obj.name === null) && (obj.email === '' || obj.email === null)){
        alert('Form Submission failed! \n Name and Email are required');
      }else if(obj.name === '' || obj.name === null){
        alert('Form Submission failed! \n Name is required');
      }else if(obj.email === '' || obj.email === null){
        alert('Form Submission failed! \n Email is required');
      }else{
        alert('Form Submission failed!');
      }
    })


    this.registerForm.reset();
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
  showConfig() {
      this.mywebsiteservice.getConfig().subscribe((data: initial) => this.details = {
          name: data.name,
          email: data.email,
          feedback: data.feedback,
          comment: data.comment,
        });
      
  }
}


