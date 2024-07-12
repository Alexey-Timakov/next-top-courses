import { FirstLevelCategory, TopPageModel } from "@/interfaces/toppage.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "@/interfaces/product.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { Htag, VacancyBlock, Tag, AdvantagesBlock, ParseStringBlock } from "@/components";

interface IPageComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: TopPageModel;
  products: ProductModel[];
  firstCategory: FirstLevelMenuItem;
}

export const PageComponent = ({ page, products, firstCategory }: IPageComponent) => {

  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] items-baseline justify-items-start gap-x-8 mb-8">
        <Htag tag="h1">{page.title}</Htag>
        {products.length > 0 &&
          <>
            <Tag color="grey" size="med">{products.length}</Tag>
            <span className="text-2xl">Сортировка</span>
          </>
        }
      </div>

      <div className="grid grid-cols-[auto_1fr] items-baseline justify-items-start gap-x-8 mb-10">
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="med">hh.ru</Tag>
      </div>

      {firstCategory.id === FirstLevelCategory.Courses &&
        page.hh &&
        <VacancyBlock data={page.hh} />
      }

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