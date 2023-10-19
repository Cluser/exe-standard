export type MenuItem = 'ITEM_1' | 'ITEM_2' | 'LOGOUT';

export interface MenuItems {
    ITEM_1: MenuItem;
    ITEM_2: MenuItem;
    LOGOUT: MenuItem;
};

export const MENU_ITEMS: MenuItems = {
    ITEM_1: 'ITEM_1',
    ITEM_2: 'ITEM_2',
    LOGOUT: 'LOGOUT'
};