import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return (
    <div {...props}>Sidebar</div>
  );
};