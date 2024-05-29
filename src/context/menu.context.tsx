"use client";

import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/toppage.interface";
import { PropsWithChildren, createContext, useState } from "react";

export interface IMenuContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void
};

export const MenuContext = createContext<IMenuContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const MenuContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IMenuContext>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return <MenuContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
    {children}
  </MenuContext.Provider>;
};