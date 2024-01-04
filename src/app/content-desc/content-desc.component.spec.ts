import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDescComponent } from './content-desc.component';

describe('ContentDescComponent', () => {
  let component: ContentDescComponent;
  let fixture: ComponentFixture<ContentDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
