import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductformPage } from './productform.page';

describe('ProductformPage', () => {
  let component: ProductformPage;
  let fixture: ComponentFixture<ProductformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
