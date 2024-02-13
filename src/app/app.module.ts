import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './components/department/department.component';
import { UserComponent } from './components/user/user.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { DepartmentFilterComponent } from './components/department-filter/department-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [AppComponent, DepartmentComponent, UserComponent, UserFilterComponent, DepartmentFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
