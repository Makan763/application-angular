import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student/student.service';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentFilterPipePipe } from './student-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    RegisterStudentComponent,
    EditStudentComponent,
    StudentFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
