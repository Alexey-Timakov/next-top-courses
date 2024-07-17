import { TopPageModel } from "@/interfaces";

export async function fetchPageByAlias(alias: string): Promise<TopPageModel | null> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`, {
    method: "GET",
    cache: "force-cache"
  });

  if (res.ok) {
    const page: TopPageModel = await res.json();

    return page;
  }

  else return null;
};