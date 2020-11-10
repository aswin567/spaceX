import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { SpaceResolverService } from './space-x/space-resolver.service';

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
