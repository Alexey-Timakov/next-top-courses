import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "@/layout";

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};