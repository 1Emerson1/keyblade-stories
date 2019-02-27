import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIngComponent } from './hero-ing.component';

describe('HeroIngComponent', () => {
  let component: HeroIngComponent;
  let fixture: ComponentFixture<HeroIngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroIngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
