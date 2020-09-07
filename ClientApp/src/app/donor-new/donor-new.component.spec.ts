import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorNewComponent } from './donor-new.component';

describe('DonorNewComponent', () => {
  let component: DonorNewComponent;
  let fixture: ComponentFixture<DonorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
