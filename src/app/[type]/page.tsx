import { notFound } from 'next/navigation';
import { firstLevelMenu } from "@/helpers/menu.helper";

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