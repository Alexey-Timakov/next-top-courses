import { CoursesIcon, KidsIcon, ServicesIcon } from "@/icons";
import { FirstLevelMenuItem, FirstLevelCategory } from "@/interfaces";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", id: FirstLevelCategory.Courses, icon: <CoursesIcon /> },
  { route: "services", name: "Сервисы", id: FirstLevelCategory.Services, icon: <ServicesIcon /> },
  { route: "kids", name: "Детям", id: FirstLevelCategory.Kids, icon: <KidsIcon /> },
];