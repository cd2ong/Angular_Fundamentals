import { TestBed } from '@angular/core/testing';

import { EventRouteActivatorGuard } from './event-route-activator.guard';

describe('EventRouteActivatorGuard', () => {
  let guard: EventRouteActivatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventRouteActivatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
