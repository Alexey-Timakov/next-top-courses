import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, ReactElement } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type TAppearence = "primary" | "ghost";

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearence: TAppearence;
};

export const Button: FC<PropsWithChildren<IButton>> = ({ appearence, children, className, ...props }: IButton): ReactElement<HTMLButtonElement> => {
  const classes = cn(styles.button, className, {
    [styles.primary]: appearence === "primary",
    [styles.ghost]: appearence === "ghost"
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};