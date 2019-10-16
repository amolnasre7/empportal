import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { DiaplayEmployeeComponent } from './employee/diaplay-employee/diaplay-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmpTitlePipe } from './pipes/emp-title-pipe';
import { EmployeeSearchPipe } from './pipes/employee-search-pipe';
import { CountEmployeeComponent } from './employee/count/count.employee.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListEmployeeComponent,
    DiaplayEmployeeComponent,
    CreateEmployeeComponent,
    EmpTitlePipe,
    EmployeeSearchPipe,
    CountEmployeeComponent,
    DemoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
