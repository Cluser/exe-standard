import { Component, EventEmitter, Output } from '@angular/core';
import { TOP_BAR_ITEMS, TopBarItems } from './top-bar.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'exe-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() onItemClick = new EventEmitter;

  readonly breadcrumbs: MenuItem[] = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
  readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  readonly TOP_BAR_ITEMS: TopBarItems = TOP_BAR_ITEMS;
  
  readonly items = [
    { 
      label: 'Moje konto', 
      icon: 'pi pi-fw pi-user',
      command: () => this.onItemClick.emit(TOP_BAR_ITEMS.USER_SETTINGS) 
    },
    { 
      label: 'Wyloguj', 
      icon: 'pi pi-fw pi-sign-out', 
      command: () => this.onItemClick.emit(TOP_BAR_ITEMS.LOGOUT) 
    }
  ];
}
