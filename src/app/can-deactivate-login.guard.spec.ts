import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateLoginGuard } from './can-deactivate-login.guard';

describe('CanDeactivateLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateLoginGuard]
    });
  });

  it('should ...', inject([CanDeactivateLoginGuard], (guard: CanDeactivateLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
