"use client";

import { FirstLevelCategory, TopPageModel } from "@/interfaces/toppage.interface";
import { DetailedHTMLProps, HTMLAttributes, useReducer } from "react";
import { ProductModel } from "@/interfaces/product.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { Htag, VacancyBlock, Tag, AdvantagesBlock, ParseStringBlock, SortSwitcher } from "@/components";
import { TSort, sortReducer } from "../SortSwitcher/SortSwitcher";

interface IPageComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: TopPageModel;
  products: ProductModel[];
  firstCategory: FirstLevelMenuItem;
}

export const PageComponent = ({ page, products, firstCategory }: IPageComponent) => {
  const [{ products: sortedProducts, currentSort }, dispathSort] = useReducer(sortReducer, { products: products, currentSort: TSort.price });

  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] items-baseline justify-items-start gap-x-8 mb-8">
        <Htag tag="h1">{page.title}</Htag>
        {products.length > 0 &&
          <>
            <Tag color="grey" size="med">{products.length}</Tag>
            <SortSwitcher changeSort={(sort) => dispathSort({ type: sort })} currentSort={currentSort} />
          </>
        }
      </div>

      {sortedProducts &&
        sortedProducts.map(p => {
          return (
            <div key={p._id} className="text-xl">
              {p.title} - {p.price} - {p.initialRating}
            </div>
          );
        })
      }

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