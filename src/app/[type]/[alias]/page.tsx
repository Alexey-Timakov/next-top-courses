import { fetchMenu } from "@/api/fetchMenu";
import { fetchPageByAlias } from "@/api/fetchPageByAlias";
import { fetchProductsByAlias } from "@/api/fetchProductByAlias";
import { notFound } from 'next/navigation';
import { firstLevelMenu } from "@/helpers";
import { ProductModel, TopPageModel } from "@/interfaces";
import { PageComponent } from "@/components";

// Using dynamicParams = false; with output: 'export' is redundant and incompatible.
// export const dynamicParams = false;

export async function generateStaticParams() {
  let pathes: Array<{ type: string, alias: string }> = [];

  try {
    for (const fl of firstLevelMenu) {
      const menu = await fetchMenu(fl.id);

      if (menu) {
        const result = menu.flatMap(item => item.pages.map(page => ({ type: fl.route, alias: page.alias }))
        );
        pathes = pathes.concat(result);
      }
    }
    return pathes;

  } catch (error) {
    console.error(error);
    notFound();
  }
}

interface PageProps {
  params: {
    type: string;
    alias: string;
  }
};

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  if (!params) notFound();

  const firstCategory = firstLevelMenu.find(fl => fl.route === params.type);

  if (!firstCategory) notFound();

  // let menu: SecondLevelMenuItem[] = [];
  let products: ProductModel[] = [];
  let page = {} as TopPageModel | null;

  try {
    // menu = await fetchMenu(firstCategory.id) || [];

    page = await fetchPageByAlias(params.alias);

    if (!page) notFound();

    products = await fetchProductsByAlias(page.category, 10) || [];

  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <PageComponent page={page} products={products} firstCategory={firstCategory} />
  );
};