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
  return (
    <Card color="white" className={cn("max-xs:product-xs product-sm sm:product-md xl:product-main p-6 sm:p-12 mb-10 grid text-[1.6rem] leading-[2rem]")}>
      <Image
        src={product.image}
        width={70}
        height={70}
        className={cn(styles.logo, "mb-4 sm:mb-6 xl:mb-0 rounded-[0.5rem]")}
        alt={product.title}
      />
      <div className={cn(styles.title, "self-end font-semibold text-[2rem] leading-[2.7rem]")}>{product.title}</div>
      <div className={cn(styles.price, "xs:max-sm:mb-4 self-end text-[2rem] leading-[2.7rem] whitespace-nowrap")}>
        {numToRub(product.price)}
        {product.oldPrice && <Tag className="ml-4" color="green">{numToRub(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={cn(styles.credit, "xs:max-sm:mb-4 self-end text-[2rem] leading-[2.7rem] whitespace-nowrap")}>{numToRub(product.credit)}/<span className="text-[1.4rem] leading-[1.9rem] ml-2">мес</span> </div>
      <div className={cn(styles.rate, "xs:max-sm:mb-4 self-end")}>
        <Rating rating={product.reviewAvg as TRating || product.initialRating as TRating} />
      </div>
      <div className={cn(styles.tags, "mb-6 xl:mb-0")}>{product.tags.map(t => <Tag key={t} className="mt-3" color="ghost">{t}</Tag>)}</div>
      <div className={cn(styles["price-text"], "max-xs:mb-6 sm:mt-2 text-[1.4rem] leading-[1.9rem] text-[var(--black)]")}>цена</div>
      <div className={cn(styles["credit-text"], "max-xs:mb-6 sm:mt-2 text-[1.4rem] leading-[1.9rem] text-[var(--black)]")}>в кредит</div>
      <div className={cn(styles["rate-text"], "sm:mt-2 text-[1.4rem] leading-[1.9rem] text-[var(--black)] whitespace-nowrap")}>{product.reviewCount} {numDecl(product.reviewCount, "отзыв", ["", "а", "ов"])}</div>
      <HrLine className={styles.hr1} />
      <div className={cn(styles.description, "mb-6 leading-[2.4rem] text-justify")}>{product.description}</div>
      <div className={cn(styles.features, "mb-6 pr-0 xl:mb-0 xl:pr-24")}>
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
      <div className={cn(styles["adv-block"], "pr-0 xl:pr-[4.5rem]")}>
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
      <HrLine className={styles.hr2} />
      <div className={styles.buttons}>
        <Button appearence="primary" >Узнать подробнее</Button>
        <Button className="ml-10" appearence="ghost" arrow="right" >Читать отзывы</Button>
      </div>
    </Card>
  );
};