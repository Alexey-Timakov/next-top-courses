import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import cn from "classnames";

interface IHrLine extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
};

export const HrLine = ({ className, ...props }: IHrLine): ReactElement<HTMLHRElement> => {
  return (
    <hr className={cn(className, "border-t-[var(#EBEBEB)] border-solid border-t-[0.1rem] my-8")} {...props} />
  );
};