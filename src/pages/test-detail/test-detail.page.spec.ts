import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestDetailPage } from './test-detail.page';

describe('TestDetailPage', () => {
  let component: TestDetailPage;
  let fixture: ComponentFixture<TestDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
