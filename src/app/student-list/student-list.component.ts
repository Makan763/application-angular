import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit{
  students: Student[] | any;
  searchText: string = '';
  constructor( private studentService: StudentService){}
  ngOnInit(){
    this.studentService.getStudentList().subscribe((response:any)=>{
     this.students=response;
      console.log(this.students);
      
    });
  }
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe((response)=>{
      console.log(response);
      this.students = this.students.filter((s:any)=>{
        return id! = s.id;
      })
    })

    return window.location.reload();
 
  }

  
}
