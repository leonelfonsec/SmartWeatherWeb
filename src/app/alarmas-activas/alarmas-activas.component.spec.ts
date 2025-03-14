import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmasActivasComponent } from './alarmas-activas.component';

describe('AlarmasActivasComponent', () => {
  let component: AlarmasActivasComponent;
  let fixture: ComponentFixture<AlarmasActivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmasActivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
