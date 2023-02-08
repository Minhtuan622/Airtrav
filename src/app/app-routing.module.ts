import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgetPassComponent} from "./components/forget-pass/forget-pass.component";
import {EmailVerificationComponent} from "./components/email-verification/email-verification.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: 'forgetpass', component: ForgetPassComponent},
  {path: 'verify', component: EmailVerificationComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
