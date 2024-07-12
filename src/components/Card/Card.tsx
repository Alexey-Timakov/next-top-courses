import { DetailedHTMLProps, HTMLAttributes } from "react"
import cn from "classnames";

interface ICard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "white" | "grey";
};

export const Card = ({ color = "white", children, className, ...props }: ICard) => {
  return (
    <div
      className={cn(className, "rounded-lg", {
        ["bg-[#F9F8FF]"]: color === "grey"
      })}
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        backgroundColor: "var(--white)"
      }}
      {...props}
    >
      {children}
    </div>
  );
};