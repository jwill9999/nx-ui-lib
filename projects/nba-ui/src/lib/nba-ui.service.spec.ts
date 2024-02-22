import { TestBed } from '@angular/core/testing';

import { NbaUiService } from './nba-ui.service';

describe('NbaUiService', () => {
  let service: NbaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
