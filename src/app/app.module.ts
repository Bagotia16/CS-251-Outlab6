import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Router,Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';


const appRoute:Route[]=[
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'contact'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
