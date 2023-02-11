import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgetPassComponent} from "./components/forget-pass/forget-pass.component";
import {EmailVerificationComponent} from "./components/email-verification/email-verification.component";
import {HomeComponent} from "./pages/home/home.component";
import {ThingsToDoComponent} from "./pages/things-to-do/things-to-do.component";
import {TravelGuideComponent} from "./pages/travel-guide/travel-guide.component";
import {ToursComponent} from "./pages/tours/tours.component";
import {HomeContentComponent} from "./components/home-content/home-content.component";

const routes: Routes = [
  {path: 'forgetpass', component: ForgetPassComponent},
  {path: 'verify', component: EmailVerificationComponent},
  {path: '**', component: HomeContentComponent},
  {path: 'thingstodo', component: ThingsToDoComponent},
  {path: 'guide', component: TravelGuideComponent},
  {path: 'tours', component: ToursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
