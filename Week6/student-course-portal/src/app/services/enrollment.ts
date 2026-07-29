import { Injectable } from '@angular/core';
import { CourseService, Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): boolean {
    const course = this.courseService.getCourseById(courseId);

    if (course) {
      this.enrolledCourses.push(course);
      return true;
    }

    return false;
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourses;
  }
}
