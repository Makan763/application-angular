import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Student } from '../student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  student = new Student();
  showAlert=false;

  constructor(private studentService: StudentService){}
  
  ngOnInit(){

  }
  saveStudent(){

    this.studentService.createStudent(this.student).subscribe((response)=>{

      this.student=new Student();
      this.showAlert=true;

    })
   
    }
    closeAlert(){
      this.showAlert = false;

    }


}
