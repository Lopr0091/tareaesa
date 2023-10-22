import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpolarPage } from './interpolar.page';

describe('InterpolarPage', () => {
  let component: InterpolarPage;
  let fixture: ComponentFixture<InterpolarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterpolarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
