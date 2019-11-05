import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionFirstComponent } from './introduction-first.component';

describe('IntroductionFirstComponent', () => {
  let component: IntroductionFirstComponent;
  let fixture: ComponentFixture<IntroductionFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
