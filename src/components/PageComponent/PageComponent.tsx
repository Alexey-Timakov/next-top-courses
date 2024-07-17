import { TopPageModel, ProductModel, FirstLevelMenuItem } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { AdvantagesBlock, ParseStringBlock } from "@/components";
import { Htag, Tag } from "@/ui";
import { PageTopBlock } from "./PageTopBlock";
import { PageVacanciesBlock } from "./PageVacanciesBlock";

interface IPageComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: TopPageModel;
  products: ProductModel[];
  firstCategory: FirstLevelMenuItem;
};

export const PageComponent = ({ page, products, firstCategory }: IPageComponent) => {

  return (
    <>
      <PageTopBlock title={page.title} products={products} />

      <PageVacanciesBlock category={page.category} firstCategory={firstCategory} data={page.hh} />

      {page.advantages && page.advantages.length > 0 &&
        <>
          <Htag tag="h2" className="!mb-11">Преимущества</Htag>
          <AdvantagesBlock data={page.advantages} />
        </>
      }

      {page.seoText && <ParseStringBlock text={page.seoText} />}

      <Htag tag="h2" className="!mb-11">Получаемые навыки</Htag>
      <div className="flex flex-grow gap-4 flex-wrap">
        {page.tags.map(tag => {
          return (
            <Tag color="primary" className="!m-0 first-letter:uppercase" key={tag}>{tag}</Tag>
          );
        })}
      </div>
    </>
  );
};