import { TestBed } from '@angular/core/testing';

import { MywebsiteService } from './mywebsite.service';

describe('MywebsiteService', () => {
  let service: MywebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
