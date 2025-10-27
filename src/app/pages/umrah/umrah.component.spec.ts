import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmrahComponent } from './umrah.component';

describe('UmrahComponent', () => {
  let component: UmrahComponent;
  let fixture: ComponentFixture<UmrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmrahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
