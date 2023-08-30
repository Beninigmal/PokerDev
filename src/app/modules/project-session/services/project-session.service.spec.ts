import { TestBed } from '@angular/core/testing';

import { ProjectSessionService } from './project-session.service';

describe('ProjectSessionService', () => {
  let service: ProjectSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
