import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAComponent } from './app-a.component';

describe('AppAComponent', () => {
  let component: AppAComponent;
  let fixture: ComponentFixture<AppAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAComponent]
    });
    fixture = TestBed.createComponent(AppAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
