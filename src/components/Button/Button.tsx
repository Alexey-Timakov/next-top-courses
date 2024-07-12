import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, ReactElement } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import { ArrowIcon } from "@/icons";

type TAppearence = "primary" | "ghost";
type TArrow = "right" | "down" | "none";

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearence: TAppearence;
  arrow?: TArrow;
};

export const Button: FC<PropsWithChildren<IButton>> = ({ appearence, arrow = "none", children, className, ...props }: IButton): ReactElement<HTMLButtonElement> => {
  const classes = cn(styles.button, className, {
    [styles.primary]: appearence === "primary",
    [styles.ghost]: appearence === "ghost"
  });

  return (
    <button className={classes} {...props}>
      {children}
      {arrow !== "none" &&
        <span className={cn(styles.arrow, { [styles.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      }
    </button>
  );
};