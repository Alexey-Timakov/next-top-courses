import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Header = ({ ...props }: IHeader): JSX.Element => {
  return (
    <div {...props}>Header</div>
  );
};