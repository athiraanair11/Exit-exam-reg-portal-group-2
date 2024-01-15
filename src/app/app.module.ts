import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentregComponent } from './studentreg/studentreg.component';
import { ViewbatchComponent } from './viewbatch/viewbatch.component';
import { ProfileComponent } from './profile/profile.component';
import { RegviewComponent } from './regview/regview.component';
import { EnquiresComponent } from './enquires/enquires.component';



const myroutes=[
  {path:"",component:HomeComponent},
  {path:"loginadmin",component:LoginadminComponent},
  {path:"loginstudent",component:LoginstudentComponent},
  {path:"course",component:CoursesComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdmindashComponent},
  {path:"student",component:StudentdashComponent},
  {path:"reg",component:StudentregComponent},
  {path:"viewadmin",component:ViewbatchComponent},
  {path:"profile",component:ProfileComponent},
  {path:"regview",component:RegviewComponent},
  {path:"enquiry",component:EnquiresComponent}








 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginadminComponent,
    LoginstudentComponent,
    CoursesComponent,
    AboutComponent,
    ContactComponent,
    AdmindashComponent,
    StudentdashComponent,
    StudentregComponent,
    ViewbatchComponent,
    ProfileComponent,
    RegviewComponent,
    EnquiresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
