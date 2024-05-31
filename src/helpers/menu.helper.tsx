import { CoursesIcon, KidsIcon, ServicesIcon } from "@/app/icons";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { FirstLevelCategory } from "@/interfaces/toppage.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", id: FirstLevelCategory.Courses, icon: <CoursesIcon /> },
  { route: "services", name: "Сервисы", id: FirstLevelCategory.Services, icon: <ServicesIcon /> },
  { route: "kids", name: "Детям", id: FirstLevelCategory.Kids, icon: <KidsIcon /> },
];