import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let mockParams = { params: { id: 1 } }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent,
        DashboardComponent,
        DashboardHeaderComponent,
        ListUsersComponent
      ],
      providers: [
        NgxSmartModalService,
        ToastrService
      ],
      imports: [
        ToastrModule.forRoot(),
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent }
        ]),
        HttpClientTestingModule,
        NgxSmartModalModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
