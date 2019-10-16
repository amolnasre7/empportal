import { Component, OnInit } from '@angular/core';
import { EmpModel } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  message:string;


  employee: EmpModel []=[
  {id:101,name:"Amol",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:102,name:"Ashwini",salary:20000,gender:"female",dob:"20/12/1992"},
  {id:103,name:"Rahul",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:104,name:"Vijay",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:105,name:"Chetan",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:106,name:"Ankit",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:107,name:"Dhiraj",salary:20000,gender:"male",dob:"20/12/1992"},
  {id:108,name:"Kiran",salary:20000,gender:"female",dob:"20/12/1992"},
  {id:109,name:"Rekha",salary:20000,gender:"female",dob:"20/12/1992"}

  ]
  getAllEmployeeCount(): number {
    return this.employee.length;
  }
  getAllMaleEmployeeCount(): number{
    return this.employee.filter(e=> e.gender=="male").length;
  }
  getAllFemaleEmployeeCount(): number {

    return this.employee.filter(e=> e.gender=="female").length;
  }


  firstName="amol";


  constructor() { }

  ngOnInit() {
  }

}
