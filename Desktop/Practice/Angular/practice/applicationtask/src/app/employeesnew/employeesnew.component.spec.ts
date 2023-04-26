import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesnewComponent } from './employeesnew.component';

describe('EmployeesnewComponent', () => {
  let component: EmployeesnewComponent;
  let fixture: ComponentFixture<EmployeesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
