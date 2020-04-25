import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../Components/sign-in/sign-in.component'
import { XoxLocalComponent } from "../Components/xox-local/xox-local.component"


const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path:'signIn', component: SignInComponent },
  { path:'game', component: XoxLocalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
