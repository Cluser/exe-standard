import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './not-authorized.component';

export const routes: Routes = [
    { 
        path: '', 
        component: NotAuthorizedComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAuthorizedRoutingModule {}