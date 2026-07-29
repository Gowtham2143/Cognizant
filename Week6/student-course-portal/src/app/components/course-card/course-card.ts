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

import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit, OnDestroy, OnChanges {
  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnInit(): void {
    console.log('CourseCard Initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input Changed', changes);
  }

  ngOnDestroy(): void {
    console.log('CourseCard Destroyed');
  }

  enrollCourse(): void {
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--passed': this.course.gradeStatus === 'Passed',
      'card--failed': this.course.gradeStatus === 'Failed',
      expanded: this.isExpanded,
    };
  }
}

