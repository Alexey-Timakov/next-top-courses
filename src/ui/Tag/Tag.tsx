import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

type TTagSize = "sm" | "med";
type TTagColor = "ghost" | "grey" | "red" | "green" | "primary";

interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: TTagColor;
  size?: TTagSize;
  href?: string;
};

export const Tag: FC<PropsWithChildren<ITag>> = ({ children, size = "sm", color, href, className, ...props }): ReactElement<HTMLDivElement> => {
  const classes = cn(styles.tag, className, {
    [styles.med]: size === "med",
    [styles.sm]: size === "sm",
    [styles.ghost]: color === "ghost",
    [styles.green]: color === "green",
    [styles.grey]: color === "grey",
    [styles.red]: color === "red",
    [styles.primary]: color === "primary",
  });

  return (
    <div className={classes} {...props}>
      {href
        ? <a href={href}>{children}</a>
        : <>{children}</>
      }
    </div>
  );
};