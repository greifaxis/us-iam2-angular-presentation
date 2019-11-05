import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionThirdComponent } from './introduction-third.component';

describe('IntroductionThirdComponent', () => {
  let component: IntroductionThirdComponent;
  let fixture: ComponentFixture<IntroductionThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
