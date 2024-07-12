import { notFound } from 'next/navigation';
import { firstLevelMenu } from "@/helpers";

// export async function generateStaticParams() {
//   let pathes: Array<{ type: string, alias: string }> = [];

//   try {
//     for (const fl of firstLevelMenu) {
//       const menu = await fetchMenu(fl.id);

//       if (menu) {
//         const result = menu.flatMap(item => item.pages.map(page => ({ type: fl.route, alias: page.alias }))
//         );
//         pathes = pathes.concat(result);
//       }
//     }
//     return pathes;

//   } catch (error) {
//     console.error(error);
//     notFound();
//   }
// }

interface TopPageProps {
  params: {
    type: string;
  }
};

export default async function TopPage({ params }: TopPageProps): Promise<JSX.Element> {
  if (!params) notFound();

  const firstCategory = firstLevelMenu.find(fl => fl.route === params.type);

  if (!firstCategory) notFound();

  return (
    <>
      <p>Page - {firstCategory.name}</p>
    </>
  );
};