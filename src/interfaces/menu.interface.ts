import { FirstLevelCategory } from "./toppage.interface";

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  id: FirstLevelCategory;
  icon: JSX.Element
};

export interface SecondLevelMenuItem {
  _id: { secondCategory: string; };
  pages: ThirdLevelMenuItem[];
  isOpened?: boolean;
};

export interface ThirdLevelMenuItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
};

export type WholeMenu = {
  [key in FirstLevelCategory]: SecondLevelMenuItem[];
};