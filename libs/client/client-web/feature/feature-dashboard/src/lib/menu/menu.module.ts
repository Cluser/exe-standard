import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, BadgeModule, TooltipModule],
  exports: [MenuComponent]
})
export class MenuModule {}
