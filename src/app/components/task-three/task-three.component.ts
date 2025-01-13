import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-three',
  imports: [CommonModule],
  templateUrl: './task-three.component.html',
  styleUrl: './task-three.component.css'
})
export class TaskThreeComponent {
  frontEndCourses : string[] = ["HTML","CSS","BootStrap","Javascript","TypeScript","Angular"];
  backEndCourses : string[] = ["NodeJS","ExpressJS","MongoDB","MySQL","Firebase"];

  selectedCourse:string | null = null;
  selectedLanguage:string | null = null;

  selectCourse(course:string){
    this.selectedCourse = course;
    this.selectedLanguage = null;
  }

  selectLanguage(language : string){
    this.selectedLanguage = language;
  }
}
