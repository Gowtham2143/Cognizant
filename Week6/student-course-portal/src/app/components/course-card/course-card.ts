import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit, OnDestroy, OnChanges {
  @Input() courseName = '';

  @Output() enroll = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('CourseCard Initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input Changed', changes);
  }

  ngOnDestroy(): void {
    console.log('CourseCard Destroyed');
  }

  enrollCourse() {
    this.enroll.emit(this.courseName);
  }
}
