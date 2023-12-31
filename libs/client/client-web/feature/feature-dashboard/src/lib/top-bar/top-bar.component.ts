import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TOP_BAR_ITEMS, TopBarItems } from './top-bar.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'exe-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Input() breadcrumbs: MenuItem[] = [];
  @Output() itemClick = new EventEmitter;

  readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  readonly TOP_BAR_ITEMS: TopBarItems = TOP_BAR_ITEMS;
  
  readonly items = [
    { 
      label: 'Moje konto', 
      icon: 'pi pi-fw pi-user',
      command: () => this.itemClick.emit(TOP_BAR_ITEMS.USER_SETTINGS) 
    },
    { 
      label: 'Wyloguj', 
      icon: 'pi pi-fw pi-sign-out', 
      command: () => this.itemClick.emit(TOP_BAR_ITEMS.LOGOUT) 
    }
  ];
}
