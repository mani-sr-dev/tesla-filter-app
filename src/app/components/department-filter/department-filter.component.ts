import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-department-filter',
  templateUrl: './department-filter.component.html',
  styleUrls: ['./department-filter.component.css'],
})
export class DepartmentFilterComponent  {

 @Output() onSearchStringChanged= new EventEmitter<string>();
  searchString: string = '';
  
  filterDepartments(searchString: string) {
    this.onSearchStringChanged.emit(searchString);
  }

}
