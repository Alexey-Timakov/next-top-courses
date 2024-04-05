import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Htag.module.scss";
import cn from "classnames";

type THtag = "h1" | "h2" | "h3";

interface IHtag extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: THtag;
};

export const Htag: FC<PropsWithChildren<IHtag>> = ({ tag, children, className, ...props }) => {
  return (
    <>
      {tag === "h1" && <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>}
      {tag === "h2" && <h1 className={cn(styles.h2, className)} {...props}>{children}</h1>}
      {tag === "h3" && <h1 className={cn(styles.h3, className)} {...props}>{children}</h1>}
    </>
  );
};