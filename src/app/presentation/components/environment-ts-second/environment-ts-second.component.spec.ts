import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTsSecondComponent } from './environment-ts-second.component';

describe('EnvironmentTsSecondComponent', () => {
  let component: EnvironmentTsSecondComponent;
  let fixture: ComponentFixture<EnvironmentTsSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentTsSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentTsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
