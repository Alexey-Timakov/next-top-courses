import { TopPageAdvantage } from "@/interfaces";
import advantagesIcon from "@/icons/AdvantagesIcon.png";
import Image from "next/image";

interface IAdvantagesBlock {
  data: TopPageAdvantage[];
};

export const AdvantagesBlock = ({ data }: IAdvantagesBlock) => {
  return (
    data.map(adv => {
      return (
        <div key={adv._id} className="grid grid-cols-[5rem_1fr] items-center gap-x-16 gap-y-4 mb-12 text-justify">
          <Image src={advantagesIcon} alt="advantages geen icon" />
          <p className="font-bold text-[2rem] leading-[2.7rem]">{adv.title}</p>
          <div className="w-[0.2rem] h-full border-solid border-[var(--grey-light)] border-r-[0.1rem] justify-self-center" />
          <p className="font-normal text-[1.8rem] leading-[2.9rem]">{adv.description}</p>
        </div>
      );
    })
  );
};