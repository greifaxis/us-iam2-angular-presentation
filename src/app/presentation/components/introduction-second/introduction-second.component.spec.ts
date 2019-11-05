import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSecondComponent } from './introduction-second.component';

describe('IntroductionSecondComponent', () => {
  let component: IntroductionSecondComponent;
  let fixture: ComponentFixture<IntroductionSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
