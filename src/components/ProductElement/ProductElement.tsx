import { ProductModel, TRating } from "@/interfaces";
import { Card } from "@/components";
import cn from "classnames";
import { Button, HrLine, Rating, Tag } from "@/ui";
import styles from "./ProductElement.module.scss";
import { numToRub, numDecl } from "@/helpers";
import Image from 'next/image';
interface IProductElement {
  product: ProductModel;
};

export const ProductElement = ({ product }: IProductElement) => {
  console.log(product.image);

  return (
    <Card color="white" className={cn(styles.product, "p-12 mb-10 grid text-[1.6rem] leading-[2rem]")}>
      <Image
        src={product.image}
        width={70}
        height={70}
        className={styles.image}
        alt={product.title}
      />
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
      <div className={cn(styles["price-text"], "text-[1.4rem] leading-[1.9rem] text-[var(--black)]")}>цена</div>
      <div className={cn(styles["credit-text"], "text-[1.4rem] leading-[1.9rem] text-[var(--black)]")}>в кредит</div>
      <div className={cn(styles["rate-text"], "text-[1.4rem] leading-[1.9rem] text-[var(--black)]")}>{product.reviewCount} {numDecl(product.reviewCount, "отзыв", ["", "а", "ов"])}</div>
      <HrLine className={styles.hr} />
      <div className={cn(styles.description, "mb-6")}>{product.description}</div>
      <div className={cn(styles.features, "pr-24")}>
        {product.characteristics.map((c, index) => {
          return (
            <div key={index} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 mb-[1.1rem]">
              <span className="font-bold">{c.name}</span>
              <span className="font-medium border-b-[0.1rem] border-[#c4c4c4] border-dotted"></span>
              <span>{c.value}</span>
            </div>
          );
        })}
      </div>
      <div className={cn(styles["adv-block"], "pr-[4.5rem]")}>
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