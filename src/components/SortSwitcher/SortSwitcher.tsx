import { SortIcon } from "@/icons";
import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import cn from "classnames";
import { TSort } from "@/reducers";

interface ISortSwitcher extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentSort: TSort;
  changeSort: (sort: TSort) => void;
};

export const SortSwitcher = ({ changeSort, currentSort }: ISortSwitcher): ReactElement<HTMLDivElement> => {
  return (
    <div className="grid grid-cols-[auto_auto] items-center gap-x-16">
      <span
        className={cn("cursor-pointer text-[1.6rem] leading-8", {
          ["font-bold text-[var(--primary)]"]: currentSort === TSort.rating
        })}
        onClick={() => changeSort(TSort.rating)}
      >
        {currentSort === TSort.rating && <SortIcon className="inline-block mr-3" />}
        По рейтингу
      </span>
      <span
        className={cn("cursor-pointer text-[1.6rem] leading-8", {
          ["font-bold text-[var(--primary)]"]: currentSort === TSort.price
        })}
        onClick={() => changeSort(TSort.price)}
      >
        {currentSort === TSort.price && <SortIcon className="inline-block mr-3" />}
        По цене
      </span>
    </div>
  );
};