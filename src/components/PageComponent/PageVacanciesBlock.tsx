import { numToRub } from "@/helpers";
import { HhStarIcon } from "@/icons";
import { FirstLevelCategory, FirstLevelMenuItem, HhData } from "@/interfaces";
import { Card, Htag, Tag } from "@/ui";

interface IPageVacanciesBlock {
  firstCategory: FirstLevelMenuItem;
  category: string;
  data?: HhData;
};

export const PageVacanciesBlock = ({ firstCategory, category, data }: IPageVacanciesBlock) => {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] items-baseline justify-items-start gap-x-8 mb-10">
        <Htag tag="h2">Вакансии - {category}</Htag>
        <Tag color="red" size="med">hh.ru</Tag>
      </div>

      {firstCategory.id === FirstLevelCategory.Courses &&
        data &&
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 mb-20">
          <Card color="white" className="p-8 text-center">
            <p className="font-light text-[2rem] leading-[2.7rem]">Всего вакансий</p>
            <p className="font-bold text-[3.6rem] text-[var(--primary)] leading-[4.9rem]">{data.count}</p>
          </Card>

          <Card color="white" className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 p-8 text-center">
            <div className="border-solid border-[var(--grey-light)] pb-6 sm:pb-0 border-b-[0.1rem] sm:border-r-[0.1rem] sm:border-b-0">
              <p className="font-light text-[2rem] leading-[2.7rem]">Начальный</p>
              <p className="font-bold text-[2.6rem] leading-[3.5rem] mt-3 mb-5">{numToRub(data.juniorSalary)}</p>
              <div className="grid grid-cols-[2rem_2rem_2rem] justify-center gap-x-4">
                <HhStarIcon className="filled" />
                <HhStarIcon />
                <HhStarIcon />
              </div>
            </div>
            <div className="border-solid border-[var(--grey-light)] pb-6 sm:pb-0 border-b-[0.1rem] sm:border-r-[0.1rem] sm:border-b-0">
              <p className="font-light text-[2rem] leading-[2.7rem]">Средний</p>
              <p className="font-bold text-[2.6rem] leading-[3.5rem] mt-3 mb-5">{numToRub(data.middleSalary)}</p>
              <div className="grid grid-cols-[2rem_2rem_2rem] justify-center gap-x-4">
                <HhStarIcon className="filled" />
                <HhStarIcon className="filled" />
                <HhStarIcon />
              </div>
            </div>
            <div>
              <p className="font-light text-[2rem] leading-[2.7rem]">Профессионал</p>
              <p className="font-bold text-[2.6rem] leading-[3.5rem] mt-3 mb-5">{numToRub(data.seniorSalary)}</p>
              <div className="grid grid-cols-[2rem_2rem_2rem] justify-center gap-x-4">
                <HhStarIcon className="filled" />
                <HhStarIcon className="filled" />
                <HhStarIcon className="filled" />
              </div>
            </div>

          </Card>
        </div>
      }
    </>
  );
};