import { NgModule } from '@angular/core';
import { LoaderModule } from '@exe/client/client-web/shared/loader';

@NgModule({
  imports: [
    LoaderModule
  ],
  exports: [
    LoaderModule
  ]
})
export class SharedModule {}
