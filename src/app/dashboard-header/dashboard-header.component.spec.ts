import { UserDetailComponent } from './../user-detail/user-detail.component';
import { ListUsersComponent } from './../list-users/list-users.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardHeaderComponent } from './dashboard-header.component';

describe('DashboardHeaderComponent', () => {
  let component: DashboardHeaderComponent;
  let fixture: ComponentFixture<DashboardHeaderComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardHeaderComponent,
        DashboardComponent,
        ListUsersComponent,
        UserDetailComponent
      ],
      providers: [
        NgxSmartModalService,
        ToastrService
      ],
      imports: [
        FormsModule,
        ToastrModule.forRoot(),
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
    fixture = TestBed.createComponent(DashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should call function add user on button click', async(() => {
  //   spyOn(component, 'addUser');
  //   fixture.detectChanges();
  //   let button = fixture.debugElement.nativeElement.querySelector('#addButton');
  //   button.click();
  //   fixture.whenStable().then(() => {
  //     expect(component.addUser).toHaveBeenCalled();
  //   });
  // }));
});
