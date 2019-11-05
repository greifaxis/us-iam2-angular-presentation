import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTsFirstComponent } from './environment-ts-first.component';

describe('EnvironmentTsFirstComponent', () => {
  let component: EnvironmentTsFirstComponent;
  let fixture: ComponentFixture<EnvironmentTsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentTsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentTsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
