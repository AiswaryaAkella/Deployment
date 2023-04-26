import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesnewComponent } from './employeesnew/employeesnew.component';

const appRoute: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'employeesnew', component: EmployeesnewComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
