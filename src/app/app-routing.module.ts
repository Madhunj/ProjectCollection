import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';

const routes: Routes = [
  {path :'course', component : CourseComponent},
  {path : 'display', component : DisplaycoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
