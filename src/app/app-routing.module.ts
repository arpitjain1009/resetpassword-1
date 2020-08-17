import { SecuritypageComponent } from './securitypage/securitypage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ResetpageComponent } from './resetpage/resetpage.component';

var routes: Routes = [
  {path : "" , component :SecuritypageComponent},
  {path : "2" , component :ResetpageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
