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
  employeelist:Employee[];

  constructor(private employeeService: EmployeeService) { }


  // escucha los registro nuevos en base de dato 
  // firebase lo convierte a json y lo empuja al array 
  ngOnInit() {

    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeelist.push(y as Employee);
      });
    });
  }

  onItemClick(emp : Employee ){

    this.employeeService.selectedEmployee = Object.assign({}, emp);//toma el obejto empleado en particular seguem emp 
  }

}
