import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataServeComponent } from './data-serve/data-serve.component';
import { HomeComponent } from './home/home.component';
import { RequestFormComponent } from './request-form/request-form.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'data-serve', component: DataServeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'request-form', component: RequestFormComponent },
  // { path: '', redirectTo: 'default', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
