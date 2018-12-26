import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { NgxSmartModalService, NgxSmartModalModule } from 'ngx-smart-modal';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DashboardHeaderComponent,
        ListUsersComponent,
        UserDetailComponent
      ],
      providers: [
        NgxSmartModalService,
        ToastrService
      ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NgxSmartModalModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'user/:id', component: UserDetailComponent }
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change the value of isClicked to false if input is true', () => {
    const component = new DashboardComponent(router);
    component.checkClosed(true);
    expect(component.isClicked).toBe(false, 'False after closed is true');
  });
  it('should change the value of isClicked to the value of input', () => {
    const component = new DashboardComponent(router);
    component.checkClicked(true);
    expect(component.isClicked).toBe(true, 'true after set to true');
  });
});
