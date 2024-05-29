"use client";
import styles from "./Menu.module.scss";
import { MenuContext } from "@/context/menu.context";
import { useContext } from "react";
import { FirstLevelMenuItem, ThirdLevelMenuItem } from "@/interfaces/menu.interface";
import { FirstLevelCategory } from "@/interfaces/toppage.interface";
import cn from "classnames";
import { CoursesIcon } from "./icons/CoursesIcon";
import { ServicesIcon } from "./icons/ServicesIcon";
import { KidsIcon } from "./icons/KidsIcon";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", id: FirstLevelCategory.Courses, icon: <CoursesIcon /> },
  { route: "services", name: "Сервисы", id: FirstLevelCategory.Services, icon: <ServicesIcon /> },
  { route: "kids", name: "Детям", id: FirstLevelCategory.Kids, icon: <KidsIcon /> },
  // { route: "courses", name: "Курсы", id: FirstLevelCategory.Courses, icon: <Image src="/courses.svg" alt="Courses" width={24} height={24} /> },
  // { route: "services", name: "Сервисы", id: FirstLevelCategory.Services, icon: <Image src="/services.svg" alt="Services" width={24} height={24} /> },
  // { route: "kids", name: "Детям", id: FirstLevelCategory.Kids, icon: <Image src="/books.svg" alt="Kids" width={24} height={24} /> },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(MenuContext);

  const buildFirstLevelMenu = () => {
    return firstLevelMenu.map(fl => (
      <div key={fl.route}>
        {/* <a href={`/${fl.route}`}> */}
        <div className={cn(styles["first-level"], "mt-8 grid content-center grid-cols-side-menu gap-x-8", {
          [styles["first-level-opened"]]: firstCategory === fl.id
        })}>
          {fl.icon}
          <span>{fl.name}</span>
        </div>
        {firstCategory === fl.id && buildSecondLevelMenu(fl.route)}
        {/* </a> */}
      </div>
    ));
  };

  const buildSecondLevelMenu = (categoryRoute: string) => {
    return (
      <div className={cn(styles["second-level-block"], "mt-6 ml-5 pl-12")}>
        {menu.map(sl => (
          <div
            key={sl._id.secondCategory}
            className={cn(styles["second-level"], "mb-4")}
          >
            <span>{sl._id.secondCategory}</span>
            <div
              className={cn(styles["third-level-block"], "mt-5", {
                [styles["third-level-block-opened"]]: sl.isOpened
              })}
            >
              {buildThirdLevelMenu(sl.pages, categoryRoute)}
            </div>
          </div>
        ))
        }
      </div >
    );
  };

  const buildThirdLevelMenu = (thirdLevelmenu: ThirdLevelMenuItem[], categoryRoute: string) => {
    return (
      thirdLevelmenu.map(tl => (
        <a
          key={tl.alias}
          href={`/${categoryRoute}/${tl.alias}`}
          className={cn(styles["third-level"], "mb-4", {
            [styles["third-level-active"]]: false
          })}
        >
          {tl.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevelMenu()}
    </div >
  );
};