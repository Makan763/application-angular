import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private studentService: StudentService){}
  id: number | any;
  student =  new Student();
  showAlert=false;
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.id).subscribe((response:any)=>{
     this.student = response;
    // console.log(response);
    })

  }

  updateStudent(){

    this.studentService.updateStudent(this.id, this.student).subscribe((response)=>{
      this.student=new Student();
      this.showAlert = true;

    })
   
    }

    closeAlert(){
      this.showAlert = false;

    }


}

