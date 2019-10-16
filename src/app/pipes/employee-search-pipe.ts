import { PipeTransform, Pipe } from '@angular/core';
import { EmpModel } from '../models/employee.model';


@Pipe({

    name : 'employeeSearch'
})

export class EmployeeSearchPipe implements PipeTransform{

    transform (employee : EmpModel[],searchTerm : string){

        if(!employee || !searchTerm){

return employee;

        }
        else
        {

return employee.filter(emp => emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    

        }
    }
}