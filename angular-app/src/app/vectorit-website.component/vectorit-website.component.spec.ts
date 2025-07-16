import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectoritWebsiteComponent } from './vectorit-website.component';

describe('VectoritWebsiteComponent', () => {
  let component: VectoritWebsiteComponent;
  let fixture: ComponentFixture<VectoritWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VectoritWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectoritWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
