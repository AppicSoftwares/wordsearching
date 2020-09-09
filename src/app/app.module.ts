import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FindsearchComponent } from './findsearch/findsearch.component';
import { AllwordsComponent } from './allwords/allwords.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { UserfiledComponent } from './userfiled/userfiled.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ForgatepasswordComponent,
    RegisterComponent,
    HomeComponent,
    FindsearchComponent,
    AllwordsComponent,
    MainBlogComponent,
    BlogDetailsComponent,
    UserfiledComponent,

    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
