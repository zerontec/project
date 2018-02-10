import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm)
  {

    this.employeeService.insertEmployee(form.value);
    this.resetForm(form);


  }
  resetForm(form ?: NgForm)
  {
    if (form != null)
    form.reset();
    this.employeeService.selectedEmployee = {
      $key: '',
      name: '',
      position: '',
      office: '',
      salary: 0,

    }
  }

}
