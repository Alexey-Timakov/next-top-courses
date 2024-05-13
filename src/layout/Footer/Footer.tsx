import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";
import { format } from "date-fns";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

export const Footer = ({ className, ...props }: IFooter): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
      <a href="#" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
    </footer>
  );
};