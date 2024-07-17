import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import styles from "./Htag.module.scss";
import cn from "classnames";

type THtag = "h1" | "h2" | "h3";

interface IHtag extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: THtag;
};

export const Htag: FC<PropsWithChildren<IHtag>> = ({ tag, children, className, ...props }): ReactElement<HTMLHeadingElement> => {
  return (
    <h1 className={cn(styles.heading, className, {
      [styles.h1]: tag === "h1",
      [styles.h2]: tag === "h2",
      [styles.h3]: tag === "h3",
    })} {...props}>
      {children}
    </h1>
  );
};