import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 3,
      gradeStatus: 'Passed',
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 4,
      gradeStatus: 'Passed',
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 3,
      gradeStatus: 'In Progress',
    },
    {
      id: 4,
      name: 'Machine Learning',
      code: 'ML401',
      credits: 4,
      gradeStatus: 'Not Started',
    },
    {
      id: 5,
      name: 'Data Structures',
      code: 'DS101',
      credits: 3,
      gradeStatus: 'Passed',
    },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }
}
