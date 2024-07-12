"use client";

import { firstLevelMenu } from "@/helpers/menu.helper";
import { SecondLevelMenuItem, WholeMenu } from "@/interfaces/menu.interface";
import { FirstLevelCategory } from "@/interfaces/toppage.interface";
import { usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useState } from "react";

export interface IMenuContext {
  wholeMenu: WholeMenu;
  menu: SecondLevelMenuItem[];
  firstCategory: FirstLevelCategory;
  setSecondLevelMenu?: (newMenu: SecondLevelMenuItem[]) => void
};

interface IMenuContextInitial {
  wholeMenu: WholeMenu;
};

export const MenuContext = createContext<IMenuContext>({
  wholeMenu: {} as WholeMenu,
  menu: [],
  firstCategory: FirstLevelCategory.Courses,
});

export const MenuContextProvider = ({ wholeMenu, children }: PropsWithChildren<IMenuContextInitial>) => {
  const currentPathType = usePathname().split("/")[1];

  const currentPathId = firstLevelMenu.find(fl => fl.route === currentPathType)?.id || FirstLevelCategory.Courses;

  const [menuState, setMenuState] = useState<SecondLevelMenuItem[]>(wholeMenu[currentPathId]);

  const setMenu = (newMenu: SecondLevelMenuItem[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMenuState(prev => newMenu);
  };

  return <MenuContext.Provider
    value={{
      wholeMenu,
      menu: menuState,
      firstCategory: currentPathId,
      setSecondLevelMenu: setMenu
    }}>
    {children}
  </MenuContext.Provider>;
};