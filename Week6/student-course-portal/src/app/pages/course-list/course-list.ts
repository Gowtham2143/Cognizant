import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

import { CourseService, Course } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;

  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    public notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    if (this.enrollmentService.enroll(courseId)) {
      this.selectedCourseId = courseId;
      this.notificationService.setMessage('Enrollment successful for Course ID: ' + courseId);
      console.log(this.notificationService.getMessage());
    }
  }
}
