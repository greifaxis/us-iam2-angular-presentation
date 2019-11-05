import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentNpmComponent } from './environment-npm.component';

describe('EnvironmentNpmComponent', () => {
  let component: EnvironmentNpmComponent;
  let fixture: ComponentFixture<EnvironmentNpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentNpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
