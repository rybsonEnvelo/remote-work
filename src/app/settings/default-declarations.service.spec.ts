import { TestBed } from '@angular/core/testing';

import { DefaultDeclarationsService } from './default-declarations.service';

describe('DefaultDeclarationsService', () => {
  let service: DefaultDeclarationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultDeclarationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
