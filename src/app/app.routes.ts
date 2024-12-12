import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Login } from './pages/login/login.component';
import { Signup } from './pages/signup/signup.component';
import { Logo } from './components/logo/logo.component';

export const routes: Routes = [
{
    path:'home',
    component: Home,
    pathMatch: 'full'
},
{
    path: 'login',
    component: Login
  
},
{
    path: 'signup',
    component: Signup
},
{
    path: 'logo',
    component: Logo
},
{
    path: '**',
    component:Home
}

];
