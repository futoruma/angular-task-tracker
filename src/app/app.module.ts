import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AddclosebuttonComponent } from './components/addclosebutton/addclosebutton.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewtaskformComponent } from './components/newtaskform/newtaskform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddclosebuttonComponent,
    TaskComponent,
    FooterComponent,
    AboutComponent,
    MainpageComponent,
    NewtaskformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
