import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaapiPage } from './pruebaapi.page';

describe('PruebaapiPage', () => {
  let component: PruebaapiPage;
  let fixture: ComponentFixture<PruebaapiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebaapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
