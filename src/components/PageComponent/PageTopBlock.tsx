"use client";

import { ProductModel } from "@/interfaces";
import { TSort, sortReducer } from "@/reducers";
import { Htag, Tag } from "@/ui";
import { useReducer } from "react";
import { ProductElement, SortSwitcher } from "@/components";

interface IPageTopBlock {
  title: string;
  products: ProductModel[];
};

export const PageTopBlock = ({ title, products }: IPageTopBlock) => {
  const [{ products: sortedProducts, currentSort }, dispathSort] = useReducer(sortReducer, { products: products, currentSort: TSort.price });

  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] items-baseline justify-items-start gap-x-8 mb-8">
        <Htag tag="h1">{title}</Htag>
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
            <ProductElement product={p} key={p._id} />
          );
        })
      }
    </>
  );
};