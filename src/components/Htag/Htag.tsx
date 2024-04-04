import { FC, PropsWithChildren } from "react";
import styles from "./Htag.module.scss";

type THtag = "h1" | "h2" | "h3";

interface IHtag {
  tag: THtag;
};

export const Htag: FC<PropsWithChildren<IHtag>> = ({ tag, children }) => {
  return (
    <>
      {tag === "h1" && <h1 className={styles.h1}>{children}</h1>}
      {tag === "h2" && <h1 className={styles.h2}>{children}</h1>}
      {tag === "h3" && <h1 className={styles.h3}>{children}</h1>}
    </>
  );
};