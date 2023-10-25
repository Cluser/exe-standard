import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizedComponent } from './not-authorized.component';
import { NotAuthorizedRoutingModule } from './not-authorized-routing.module';

@NgModule({
  imports: [CommonModule, NotAuthorizedRoutingModule],
  declarations: [NotAuthorizedComponent],
  exports: [NotAuthorizedComponent]
})
export class NotAuthorizedModule {}
