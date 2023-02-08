import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path: "student-list",component: StudentListComponent
  },
  {
    path: "register-student",component:RegisterStudentComponent
  },
  {
    path: "edit-student/:id",component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
