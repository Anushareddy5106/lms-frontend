import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentqueriesComponent } from './studentqueries.component';

describe('StudentqueriesComponent', () => {
  let component: StudentqueriesComponent;
  let fixture: ComponentFixture<StudentqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentqueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
