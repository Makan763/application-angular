import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.API_BASE_URL

  constructor(private http: HttpClient) { }
  
 
  createStudent(student: Student) {

    return this.http.post(this.baseUrl + "/addStudent", student);

  }
  updateStudent(id: number, student: Student) {

    return this.http.put(this.baseUrl + "/students/"+ id, student);

  }
  getStudentList() {

    return this.http.get(this.baseUrl+"/students");

  }

  getStudent(id: number) {

    return this.http.get(this.baseUrl+ "/studentById/" + id);

  }
  deleteStudent(id: number) {


  return this.http.delete(this.baseUrl + "/students/" + id);

  }
}
