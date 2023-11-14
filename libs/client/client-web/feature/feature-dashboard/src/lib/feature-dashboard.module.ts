import { FeatureDashboardFacadeService } from './feature-dashboard.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { LoaderModule } from '@exe/client/client-web/shared/loader'
import { TranslocoModule } from '@ngneat/transloco';
import { MenuModule } from './menu/menu.module'
import { TopBarModule } from './top-bar/top-bar.module';
import { ContentModule } from './content/content.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ModalAbstractModule } from '@exe/client/client-web/shared/modal'

@NgModule({
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    LoaderModule,
    TranslocoModule,
    MenuModule,
    TopBarModule,
    ContentModule,
    ModalAbstractModule,
    DynamicDialogModule
  ],
  declarations: [
    FeatureDashboardComponent
  ],
  providers: [
    FeatureDashboardFacadeService, 
    DialogService
  ]
})
export class FeatureDashboardModule {}
