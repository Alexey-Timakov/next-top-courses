import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Footer = ({ ...props }: IFooter): JSX.Element => {
  return (
    <div {...props}>Footer</div>
  );
};