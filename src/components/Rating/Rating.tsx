"use client";

import { StarIcon } from "@/app/icons";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, KeyboardEvent, useEffect, useState } from "react";
import styles from "./Rating.module.scss";

export type TRating = 0 | 1 | 2 | 3 | 4 | 5;

interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: TRating;
  isEditable?: boolean;
  setRating?: (newRating: TRating) => void;
};

export const Rating = ({ rating, isEditable = false, setRating, ...props }: IRating) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const onHoverStar = (hoverRating: TRating) => {
    if (!isEditable) {
      return;
    }

    constructRatingArray(hoverRating);
  };

  const onClickStar = (clickRating: TRating) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(clickRating);
  };

  const onSpaceStar = (e: KeyboardEvent<SVGElement>, newRating: TRating) => {
    if (!isEditable || !setRating || e.code !== "Space") {
      return;
    }

    setRating(newRating);
  };

  const constructRatingArray = (currentRating: number) => {
    const updatedRating = ratingArray.map((r, index) => {
      return (
        <span
          key={index}
          onMouseEnter={() => onHoverStar(index + 1 as TRating)}
          onMouseLeave={() => onHoverStar(rating)}
          onClick={() => onClickStar(index + 1 as TRating)}

        >
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: index < currentRating,
              [styles.editable]: isEditable
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => onSpaceStar(e, index + 1 as TRating)}
          />
        </span>
      );
    });

    setRatingArray(updatedRating);
  };

  useEffect(() => {
    constructRatingArray(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, index) => {
        return (
          <span key={index}>{r}</span>
        );
      })}
    </div>
  );
};