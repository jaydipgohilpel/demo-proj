import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesPracticesComponent } from './directives-practices/directives-practices.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentsComponent } from './parents/parents.component';

const routes: Routes = [
  { path: 'parents', component: ParentsComponent },
  {
    path: 'directives',
    component: DirectivesPracticesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Angular14RoutingModule {}
