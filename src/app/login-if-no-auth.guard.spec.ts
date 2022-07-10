import { TestBed } from '@angular/core/testing';

import { LoginIfNoAuthGuard } from './login-if-no-auth.guard';

describe('LoginIfNoAuthGuard', () => {
  let guard: LoginIfNoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginIfNoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
