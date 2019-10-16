import { PipeTransform, Pipe } from '@angular/core';

@Pipe({

    name:'empTitle'
})


export class EmpTitlePipe implements PipeTransform  {

    transform(value: string,gender:string ){

        if (gender.toLocaleLowerCase()=='male')
        {
            return "Mr."+value;

        }
   else
   {
       return "Ms."+value;
   }
   
    }
}