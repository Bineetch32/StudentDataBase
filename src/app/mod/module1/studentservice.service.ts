import { Injectable } from '@angular/core';
import { Student } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  
  students: Student[] = [
    { name: 'A', course: 'Java', marks: 334, gender: 'Male' },
    { name: 'B', course: 'Net', marks: 312, gender: 'Female' },
    { name: 'C', course: 'Python', marks: 287, gender: 'Female' },
    { name: 'D', course: 'C++', marks: 420, gender: 'Male' }
  ];
  totalMarks:number=500;
}




