import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsAngular2BusyComponent } from './qs-angular2-busy.component';

describe('QsAngular2BusyComponent', () => {
  let component: QsAngular2BusyComponent;
  let fixture: ComponentFixture<QsAngular2BusyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsAngular2BusyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsAngular2BusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
