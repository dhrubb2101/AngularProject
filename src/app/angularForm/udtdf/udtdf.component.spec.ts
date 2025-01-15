import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdtdfComponent } from './udtdf.component';

describe('UdtdfComponent', () => {
  let component: UdtdfComponent;
  let fixture: ComponentFixture<UdtdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdtdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdtdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
