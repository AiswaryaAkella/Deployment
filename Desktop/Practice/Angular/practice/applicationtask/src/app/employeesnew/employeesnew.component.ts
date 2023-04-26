import { Component } from '@angular/core';

@Component({
  selector: 'app-employeesnew',
  templateUrl: './employeesnew.component.html',
  styleUrls: ['./employeesnew.component.css']
})
export class EmployeesnewComponent {
  Employeenew =[
    {
      "id": 1,
      "name": "John Smith",
      "department": "Sales",
      "organization": {
        "name": "ABC Corp",
        "location": "New York"
      },
      "education": {
        "degree": "Bachelor's",
        "major": "Marketing",
        "school": "University of California"
      }
    },
    {
      "id": 2,
      "name": "Sarah Lee",
      "department": "Engineering",
      "organization": {
        "name": "XYZ Tech",
        "location": "San Francisco"
      },
      "education": {
        "degree": "Master's",
        "major": "Computer Science",
        "school": "Stanford University"
      }
    },
    {
      "id": 3,
      "name": "David Chen",
      "department": "Finance",
      "organization": {
        "name": "Acme Inc",
        "location": "Los Angeles"
      },
      "education": {
        "degree": "Bachelor's",
        "major": "Finance",
        "school": "University of Michigan"
      }
    }
  ]
  }
