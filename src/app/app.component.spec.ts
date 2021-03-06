import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyFormComponent} from './my-form/my-form.component';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyFormComponent,
      ],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('creates the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`has title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));

  it('contains a form', async(() => {
    expect(compiled.querySelector('form')).toBeTruthy();

  }));

});
