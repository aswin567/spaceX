import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaceResolverService } from './space-x/space-resolver.service';
import { SpaceXComponent } from './space-x/space-x.component';

const routes: Routes = [
  {
    path: 'spacex',
    component: SpaceXComponent,
    resolve: {
      spaceResolverService: SpaceResolverService
    }
  },
  { path: '', redirectTo: '/spacex', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
