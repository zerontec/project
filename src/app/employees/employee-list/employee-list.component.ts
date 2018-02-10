import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {EmployeeService} from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeelist : AngularFireList<Employee>

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.getData();
  }

}
