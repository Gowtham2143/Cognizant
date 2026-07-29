import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  selectedCourseId: number | null = null;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 3,
      gradeStatus: 'Passed',
      enrolled: true,
    },
    {
      id: 2,
      name: 'Java Programming',
      code: 'JAVA201',
      credits: 4,
      gradeStatus: 'In Progress',
      enrolled: false,
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 2,
      gradeStatus: 'Passed',
      enrolled: true,
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB401',
      credits: 3,
      gradeStatus: 'Failed',
      enrolled: false,
    },
    {
      id: 5,
      name: 'Operating Systems',
      code: 'OS501',
      credits: 1,
      gradeStatus: 'In Progress',
      enrolled: true,
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling:', courseId);
    this.selectedCourseId = courseId;
  }
}
