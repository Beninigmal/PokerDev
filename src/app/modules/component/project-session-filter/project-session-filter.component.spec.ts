import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSessionFilterComponent } from './project-session-filter.component';

describe('ProjectSessionFilterComponent', () => {
  let component: ProjectSessionFilterComponent;
  let fixture: ComponentFixture<ProjectSessionFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSessionFilterComponent]
    });
    fixture = TestBed.createComponent(ProjectSessionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
