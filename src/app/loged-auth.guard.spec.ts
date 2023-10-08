import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logedAuthGuard } from './loged-auth.guard';

describe('logedAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logedAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
