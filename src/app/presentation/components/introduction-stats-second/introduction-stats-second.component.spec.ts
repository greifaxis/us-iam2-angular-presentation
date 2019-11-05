import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionStatsSecondComponent } from './introduction-stats-second.component';

describe('IntroductionStatsSecondComponent', () => {
  let component: IntroductionStatsSecondComponent;
  let fixture: ComponentFixture<IntroductionStatsSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionStatsSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionStatsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
