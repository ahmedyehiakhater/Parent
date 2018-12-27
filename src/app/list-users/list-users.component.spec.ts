import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListUsersComponent,
        UserDetailComponent
      ],
      providers: [
        NgxSmartModalService
      ],
      imports: [
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
