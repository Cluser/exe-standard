export type TopBarItem = 'USER_SETTINGS' | 'LOGOUT';

export interface TopBarItems {
    USER_SETTINGS: TopBarItem;
    LOGOUT: TopBarItem;
};

export const TOP_BAR_ITEMS: TopBarItems = {
    USER_SETTINGS: 'USER_SETTINGS',
    LOGOUT: 'LOGOUT'
};