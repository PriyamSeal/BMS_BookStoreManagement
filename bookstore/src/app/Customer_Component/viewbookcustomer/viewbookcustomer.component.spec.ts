import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookcustomerComponent } from './viewbookcustomer.component';

describe('ViewbookcustomerComponent', () => {
  let component: ViewbookcustomerComponent;
  let fixture: ComponentFixture<ViewbookcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbookcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
