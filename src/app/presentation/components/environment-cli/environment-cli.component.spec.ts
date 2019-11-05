import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentCliComponent } from './environment-cli.component';

describe('EnvironmentCliComponent', () => {
  let component: EnvironmentCliComponent;
  let fixture: ComponentFixture<EnvironmentCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
