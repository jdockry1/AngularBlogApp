import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component'
import { SignupComponent } from './signup/signup.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddPostComponent },
    { path: 'signup', component: SignupComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);