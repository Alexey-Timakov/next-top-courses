import { fetchMenu } from "@/api/fetchMenu";
import { fetchPageByAlias } from "@/api/fetchPageByAlias";
import { fetchProductsByAlias } from "@/api/fetchProductByAlias";
import { notFound } from 'next/navigation';

const firstCategory = 0;

// Using dynamicParams = false; with output: 'export' is redundant and incompatible.
// export const dynamicParams = false;

export async function generateStaticParams() {
  const menu = await fetchMenu(firstCategory);

  if (!menu) {
    return [];
  }

  const pathes = menu.flatMap(item => item.pages.map(page => {
    return { alias: page.alias };
  })
  );
  return pathes;
}

interface CourseProps {
  params: {
    alias: string;
  }
};

export default async function Course({ params }: CourseProps): Promise<JSX.Element> {
  if (!params) {
    notFound();
  }

  const menu = await fetchMenu(firstCategory);

  const page = await fetchPageByAlias(params.alias);

  if (!page) {
    notFound();
  }

  const products = await fetchProductsByAlias(page.category, 10);

  return (
    <>
      <p>Menu - {menu?.length}</p>
      <p>Products length - {products?.length}</p>
    </>
  );
};