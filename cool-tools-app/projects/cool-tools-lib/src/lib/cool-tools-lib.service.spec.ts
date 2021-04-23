import { TestBed } from '@angular/core/testing';

import { CoolToolsLibService } from './cool-tools-lib.service';

describe('CoolToolsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoolToolsLibService = TestBed.get(CoolToolsLibService);
    expect(service).toBeTruthy();
  });
});
