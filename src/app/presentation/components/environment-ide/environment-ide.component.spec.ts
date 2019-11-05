import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentIdeComponent } from './environment-ide.component';

describe('EnvironmentIdeComponent', () => {
  let component: EnvironmentIdeComponent;
  let fixture: ComponentFixture<EnvironmentIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
