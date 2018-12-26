import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from 'node_modules/@angular/common/http/testing';
import { RouterTestingModule } from 'node_modules/@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from 'node_modules/@angular/forms';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        // DashboardComponent,
        // DashboardHeaderComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          // { path: 'dashboard', component: DashboardComponent }
        ]),
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
