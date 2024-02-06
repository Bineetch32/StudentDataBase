import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private ss:StudentserviceService) { }

  ngOnInit(): void {
  }
  students:Student[]=this.ss.students;
  totalMarks:number=this.ss.totalMarks;
}