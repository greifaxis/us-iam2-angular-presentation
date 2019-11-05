import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionStatsThirdComponent } from './introduction-stats-third.component';

describe('IntroductionStatsThirdComponent', () => {
  let component: IntroductionStatsThirdComponent;
  let fixture: ComponentFixture<IntroductionStatsThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionStatsThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionStatsThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
