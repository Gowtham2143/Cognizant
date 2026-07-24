import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  courses = ['Java Programming', 'Angular', 'Spring Boot'];

  selectedCourse = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  onCourseEnroll(course: string) {
    this.selectedCourse = course;
  }
}
