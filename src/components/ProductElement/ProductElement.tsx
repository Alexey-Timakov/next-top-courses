/* eslint-disable @next/next/no-img-element */
import { ProductModel, TRating } from "@/interfaces";
import { Card } from "@/components";
import cn from "classnames";
import { Button, HrLine, Rating, Tag } from "@/ui";
import styles from "./ProductElement.module.scss";
import { numToRub } from "@/helpers";

interface IProductElement {
  product: ProductModel;
};

export const ProductElement = ({ product }: IProductElement) => {
  console.log(product.image);

  return (
    <Card color="white" className={cn(styles.product, "p-12 mb-10 grid text-[1.6rem] leading-[2rem]")}>
      <img className={styles.image} src={product.image} alt={product.title} />
      {/* <Image fill className={styles.image} src={product.image} alt={product.title} /> */}
      <div className={cn(styles.title, "font-semibold text-[2rem] leading-[2.7rem]")}>{product.title}</div>
      <div className={cn(styles.price, "text-[2rem] leading-[2.7rem]")}>
        {numToRub(product.price)}
        {product.oldPrice && <Tag className="ml-4" color="green">{numToRub(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={cn(styles.credit, "text-[2rem] leading-[2.7rem]")}>{numToRub(product.credit)}/<span className="ml-2">мес</span> </div>
      <div className={styles.rate}>
        <Rating rating={product.reviewAvg as TRating || product.initialRating as TRating} />
      </div>
      <div className={styles.tags}>{product.tags.map(t => <Tag key={t} color="ghost">{t}</Tag>)}</div>
      <div className={styles["price-text"]}>Цена</div>
      <div className={styles["credit-text"]}>В кредит</div>
      <div className={styles["rate-text"]}>Отзывов</div>
      <HrLine className={styles.hr} />
      <div className={cn(styles.description, "mb-6")}>{product.description}</div>
      <div className={styles.features}>
        Features
      </div>
      <div className={styles["adv-block"]}>
        {product.advantages &&
          <div className="pl-6 border-l-[var(--green)] border-l-[0.3rem]">
            <p className="font-bold mb-2">Преимущества</p>
            {product.advantages}
          </div>
        }
        {product.disadvantages &&
          <div className="pl-6 mt-10 border-l-[var(--red)] border-l-[0.3rem]">
            <p className="font-bold mb-2">Недостатки</p>
            {product.disadvantages}
          </div>
        }
      </div>
      <HrLine className={styles.hr} />
      <div className={styles.buttons}>
        <Button appearence="primary" >Узнать подробнее</Button>
        <Button className="ml-10" appearence="ghost" arrow="right" >Читать отзывы</Button>
      </div>
    </Card>
  );
};