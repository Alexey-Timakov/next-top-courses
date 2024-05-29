import { SecondLevelMenuItem } from "@/interfaces/menu.interface";

export async function fetchMenu(category: number): Promise<SecondLevelMenuItem[] | null> {

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