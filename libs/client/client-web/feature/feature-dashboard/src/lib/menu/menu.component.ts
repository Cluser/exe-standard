import { Component, Output, EventEmitter } from '@angular/core';
import { MENU_ITEMS, MenuItems, MenuItem } from './menu.model';

@Component({
  selector: 'exe-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() menuItemClick = new EventEmitter<MenuItem>;

  readonly MENU_ITEMS: MenuItems = MENU_ITEMS;
  selectedMenu: MenuItem = MENU_ITEMS.ITEM_1;

  onMenuItemClick(menuItem: MenuItem): void {
    this.selectedMenu = menuItem;
    this.menuItemClick.emit(menuItem);
  }
}
