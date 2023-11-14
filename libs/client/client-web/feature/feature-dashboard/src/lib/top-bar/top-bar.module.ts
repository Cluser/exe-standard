import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, AvatarModule, ContextMenuModule, BreadcrumbModule, BadgeModule],
  exports: [TopBarComponent]
})
export class TopBarModule {}
