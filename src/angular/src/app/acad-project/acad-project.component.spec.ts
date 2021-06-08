import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadProjectComponent } from './acad-project.component';

describe('AcadProjectComponent', () => {
  let component: AcadProjectComponent;
  let fixture: ComponentFixture<AcadProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
