import { TestBed } from '@angular/core/testing';

import { FormSerService } from './form-ser.service';

describe('FormSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormSerService = TestBed.get(FormSerService);
    expect(service).toBeTruthy();
  });
});
