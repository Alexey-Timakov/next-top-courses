"use client";
import styles from "./Menu.module.scss";
import { MenuContext } from "@/context/menu.context";
import { useContext, MouseEvent } from "react";
import { ThirdLevelMenuItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import { useRouter, usePathname } from 'next/navigation';
import { firstLevelMenu } from "@/helpers/menu.helper";
import { FirstLevelCategory } from "@/interfaces/toppage.interface";

export const Menu = (): JSX.Element => {
  const { wholeMenu, menu, setMenu, firstCategory } = useContext(MenuContext);
  const router = useRouter();
  const currentPath = usePathname();

  const proceedLink = (link: string, e?: MouseEvent<HTMLDivElement>) => {
    if (e) {
      e.stopPropagation();
    }
    router.push(link);
  };

  const openFirstLevelMenu = (e: MouseEvent<HTMLDivElement>, fl: FirstLevelCategory) => {
    e.stopPropagation();
    setMenu && setMenu(wholeMenu[fl]);
    const link = firstLevelMenu.find(item => item.id === fl)?.route || "";
    proceedLink(`/${link}`);
  };

  const toggleSecondCategoryMenu = (e: MouseEvent<HTMLElement>, secondCategory: string) => {
    e.stopPropagation();
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevelMenu = () => {
    return firstLevelMenu.map(fl => (
      <div key={fl.route} onClick={(e) => openFirstLevelMenu(e, fl.id)}>
        <div className={cn(styles["first-level"], "mt-8 grid content-center grid-cols-side-menu gap-x-8", {
          [styles["first-level-opened"]]: firstCategory === fl.id
        })}>
          {fl.icon}
          <span>{fl.name}</span>
        </div>
        {firstCategory === fl.id && buildSecondLevelMenu(fl.route)}
      </div>
    ));
  };

  const buildSecondLevelMenu = (categoryRoute: string) => {
    return (
      <div className={cn(styles["second-level-block"], "mt-6 ml-5 pl-12")}>
        {menu.map(sl => {
          if (sl.pages.map(p => p.alias).includes(currentPath.split("/")[2])) {
            sl.isOpened = true;
          }
          return (
            <div
              key={sl._id.secondCategory}
              className={cn(styles["second-level"], "mb-4")}
            >
              <span onClick={(e) => toggleSecondCategoryMenu(e, sl._id.secondCategory)}>{sl._id.secondCategory}</span>
              <div
                className={cn(styles["third-level-block"], "mt-5", {
                  [styles["third-level-block-opened"]]: sl.isOpened
                })}
              >
                {buildThirdLevelMenu(sl.pages, categoryRoute)}
              </div>
            </div>
          );
        })
        }
      </div >
    );
  };

  const buildThirdLevelMenu = (thirdLevelmenu: ThirdLevelMenuItem[], categoryRoute: string) => {
    return (
      thirdLevelmenu.map(tl => (
        <div
          onClick={(e) => proceedLink(`/${categoryRoute}/${tl.alias}`, e)}
          key={tl.alias}
          className={cn(styles["third-level"], "mb-4", {
            [styles["third-level-active"]]: `/${categoryRoute}/${tl.alias}` === currentPath
          })}>
          {tl.category}
        </div>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevelMenu()}
    </div >
  );
};