import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTaskComponent } from './counter-task.component';

describe('CounterTaskComponent', () => {
  let component: CounterTaskComponent;
  let fixture: ComponentFixture<CounterTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
