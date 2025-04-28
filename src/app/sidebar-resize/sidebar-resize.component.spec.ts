import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarResizeComponent } from './sidebar-resize.component';

describe('SidebarResizeComponent', () => {
  let component: SidebarResizeComponent;
  let fixture: ComponentFixture<SidebarResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarResizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
