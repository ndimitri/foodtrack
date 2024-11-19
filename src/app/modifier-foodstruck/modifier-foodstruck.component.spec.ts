import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFoodstruckComponent } from './modifier-foodstruck.component';

describe('ModifierFoodstruckComponent', () => {
  let component: ModifierFoodstruckComponent;
  let fixture: ComponentFixture<ModifierFoodstruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierFoodstruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFoodstruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
