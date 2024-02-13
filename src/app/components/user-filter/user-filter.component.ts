import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent {
  @Output() onSearchStringChanged= new EventEmitter<string>();
  searchString: string = '';
  
  filterUsers(searchString: string) {
    this.onSearchStringChanged.emit(searchString);
  }

}
