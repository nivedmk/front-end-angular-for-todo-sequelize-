import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';

import { TokenInterceptorService } from "./shared/services/token-interceptor.service";
import { TodoAddComponent } from './components/pages/todo-add/todo-add.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';

import { FilterPipe } from "./shared/pipes/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    CreateAccountComponent,
    TodoAddComponent,
    FilterPipe,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
