import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewAllComponent } from './view-all/view-all.component';
const myRoute:Routes=[

  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
