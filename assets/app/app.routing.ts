import {RouterModule, Routes} from "@angular/router";

import { SignUpComponent } from "./authentication/sign-up/sign-up.component"
import { SignInComponent } from "./authentication/sign-in/sign-in.component"

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/signIn', pathMatch: 'full' },
    {path: 'signIn', component: SignInComponent },
    {path: 'signUp', component: SignUpComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);