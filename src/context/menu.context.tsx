"use client";

import { SecondLevelMenuItem } from "@/interfaces/menu.interface";
import { FirstLevelCategory } from "@/interfaces/toppage.interface";
import { PropsWithChildren, createContext, useState } from "react";

export interface IMenuContext {
  menu: SecondLevelMenuItem[];
  firstCategory: FirstLevelCategory;
  setMenu?: (newMenu: SecondLevelMenuItem[]) => void
};

export const MenuContext = createContext<IMenuContext>({
  menu: [],
  firstCategory: FirstLevelCategory.Courses,
});

export const MenuContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IMenuContext>) => {
  const [menuState, setMenuState] = useState<SecondLevelMenuItem[]>(menu);

  const setMenu = (newMenu: SecondLevelMenuItem[]) => {
    setMenuState(newMenu);
  };

  return <MenuContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
    {children}
  </MenuContext.Provider>;
};