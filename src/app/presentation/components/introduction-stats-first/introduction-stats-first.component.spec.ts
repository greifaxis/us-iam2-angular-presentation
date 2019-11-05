import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionStatsFirstComponent } from './introduction-stats-first.component';

describe('IntroductionStatsFirstComponent', () => {
  let component: IntroductionStatsFirstComponent;
  let fixture: ComponentFixture<IntroductionStatsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionStatsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionStatsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
