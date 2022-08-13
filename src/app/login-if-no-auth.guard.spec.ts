import { TestBed } from '@angular/core/testing';

import { LoginIfNoAuthGuard } from './login-if-no-auth.guard';
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginIfNoAuthGuard', () => {
  let guard: LoginIfNoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(LoginIfNoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
