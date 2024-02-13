import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../../shared/models/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  
  @Input() departments: Department[] = [];

}
