import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react";
import cn from "classnames";

interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
};

export const Input = ({ className, ...props }: IInput): ReactElement<HTMLInputElement> => {
  return (
    <input
      className={cn(className, "px-[1.2rem] py-[0.7rem] rounded-lg bg-[var(--white)] text-[var(--black)] text-[1.6rem] leading-[2.2rem] placeholder:text-[#A4A4A4] border-none outline-[var(--primary)]")}
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)"
      }}
      {...props}
    />
  );
};