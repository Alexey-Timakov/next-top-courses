import { firstLevelMenu } from "@/helpers";
import { SecondLevelMenuItem, WholeMenu, FirstLevelCategory } from "@/interfaces";

export async function fetchMenu(category: FirstLevelCategory): Promise<SecondLevelMenuItem[] | null> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ "firstCategory": category }),
    cache: "force-cache"
  });

  if (res.ok) {
    const menuCategories: SecondLevelMenuItem[] = await res.json();

    return menuCategories;
  }

  else return null;
};

export async function fetchWholeMenu(): Promise<WholeMenu | null> {
  const wholeMenu = {} as WholeMenu;
  try {
    for (const fl of firstLevelMenu) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "firstCategory": fl.id }),
        cache: "force-cache"
      });

      if (res.ok) {
        const menuCategories: SecondLevelMenuItem[] = await res.json();

        wholeMenu[fl.id] = menuCategories;
      }
    }

    return wholeMenu;
  } catch (error) {
    console.error(error);
    return null;
  }
}