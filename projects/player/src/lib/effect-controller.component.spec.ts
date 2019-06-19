import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectControllerComponent } from './effect-controller.component';

describe('EffectControllerComponent', () => {
  let component: EffectControllerComponent;
  let fixture: ComponentFixture<EffectControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
