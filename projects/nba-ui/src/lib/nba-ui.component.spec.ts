import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaUiComponent } from './nba-ui.component';

describe('NbaUiComponent', () => {
  let component: NbaUiComponent;
  let fixture: ComponentFixture<NbaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
