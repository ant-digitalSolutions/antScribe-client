import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAICompletionComponent } from './open-aicompletion.component';

describe('OpenAICompletionComponent', () => {
  let component: OpenAICompletionComponent;
  let fixture: ComponentFixture<OpenAICompletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAICompletionComponent]
    });
    fixture = TestBed.createComponent(OpenAICompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
