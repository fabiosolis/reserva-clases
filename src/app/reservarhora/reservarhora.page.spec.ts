import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservarhoraPage } from './reservarhora.page';

describe('ReservarhoraPage', () => {
  let component: ReservarhoraPage;
  let fixture: ComponentFixture<ReservarhoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarhoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
