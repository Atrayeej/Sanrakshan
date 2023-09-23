import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegdPage } from './regd.page';

describe('RegdPage', () => {
  let component: RegdPage;
  let fixture: ComponentFixture<RegdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
