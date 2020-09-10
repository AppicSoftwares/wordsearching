import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
import { RegisterComponent }        from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FindsearchComponent } from './findsearch/findsearch.component';
import { AllwordsComponent } from './allwords/allwords.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { UserfiledComponent } from './userfiled/userfiled.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [

 
  
  {
  path: 'login',
    component: LoginComponent
    
  },
   {
     path: 'forgatepassword',
     component: ForgatepasswordComponent
   },

   {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'findsearch',
    component: FindsearchComponent
  },

  {
    path: 'mainblog',
    component: MainBlogComponent
  },
  

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'allwords',
    component: AllwordsComponent
  },

  {
    path:'blogdetails',
    component: BlogDetailsComponent 
  },

  {
    path:'userfiled',
    component: UserfiledComponent
  },

  {
    path:'donate',
    component: DonateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
