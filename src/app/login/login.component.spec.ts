import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { ListUsersComponent } from './../list-users/list-users.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        DashboardComponent,
        DashboardHeaderComponent,
        ListUsersComponent
      ],
      providers:[
        NgxSmartModalService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent }
        ]),
        FormsModule,
        NgxSmartModalModule
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
  it('should call function login on button click', async(() => {
    spyOn(component, 'login');
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#loginButton');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.login).toHaveBeenCalled();
    });
  }));
});
