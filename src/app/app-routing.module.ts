import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ContactComponent } from './contact/contact.component';
import { ViewDataComponent } from './contact/view-data/view-data.component';

/* Routing */
const routes: Routes = [
  {path: 'Home', component: HomecomponentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'view', component: ViewDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
