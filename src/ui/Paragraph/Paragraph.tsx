import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import cn from "classnames";
import styles from "./Paragraph.module.scss";

interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: "big" | "med" | "sm";
};

export const Paragraph: FC<PropsWithChildren<IParagraph>> = ({ size = "med", children, className, ...props }): ReactElement<HTMLParagraphElement> => {
  return (
    <p className={cn(className, styles.paragraph, {
      [styles.big]: size === "big",
      [styles.med]: size === "med",
      [styles.small]: size === "sm",
    })} {...props}>
      {children}
    </p>
  );
};