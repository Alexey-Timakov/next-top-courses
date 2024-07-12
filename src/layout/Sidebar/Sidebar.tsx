import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "@/layout";
import { LogoIcon } from "@/icons";
import cn from "classnames";

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <div className={cn(className, "content-start gap-8")} {...props}>
      <LogoIcon />
      <div>SEARCH</div>
      <Menu />
    </div>
  );
};