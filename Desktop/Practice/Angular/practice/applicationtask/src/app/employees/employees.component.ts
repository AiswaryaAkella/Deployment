import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  
  Employee= [
    {
      "id": "1",
      "firstName": "Tom",
      "lastName": "Cruise"
    },
    {
      "id": "2",
      "firstName": "Maria",
      "lastName": "Sharapova"
    },
    {
      "id": "3",
      "firstName": "James",
      "lastName": "Bond"
    }
  ]
}
