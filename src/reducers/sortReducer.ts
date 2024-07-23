import { ProductModel } from "@/interfaces";

export enum TSort {
  "rating",
  "price"
};

export type TSortActions = { type: TSort.price } | { type: TSort.rating };

export type TSortReducerState = {
  products: ProductModel[];
  currentSort: TSort;
};

export const sortReducer = (state: TSortReducerState, action: TSortActions): TSortReducerState => {
  switch (action.type) {
    case TSort.rating:
      return {
        currentSort: TSort.rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
      };
    case TSort.price:
      return {
        currentSort: TSort.price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };
    default:
      return state;
  }
};
