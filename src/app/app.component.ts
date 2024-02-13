import { Component, OnInit } from '@angular/core';
import { Department } from './shared/models/department.model';
import { getDepartments } from './services/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  departments: Department[] = []

  filteredDepartments: Department[]=[]; // Populate with all departments initially

  ngOnInit(): void {
    this.departments = getDepartments()
    this.filteredDepartments = this.departments;
  }


  filterDepartments(searchString: string): void {
    const keyword = searchString.toLowerCase();
    this.filteredDepartments = this.departments.filter((department) =>
      department.name.toLowerCase().includes(keyword)
    );
  }

  filterUsers(searchString: string) {
    const keyword = searchString.toLowerCase();
    this.filteredDepartments = this.departments.filter(department => 
      department.users.some(user=> user.name.toLowerCase().includes(keyword))
      ).map(department => ({
        name: department.name,
        users: department.users.filter((user)=> user.name.toLowerCase().includes(keyword))
  
      }))
    }
 
}
