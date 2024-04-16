"use client";

import { Button, Htag, Paragraph, Tag } from "@/components";
import { Rating, TRating } from "@/components";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<TRating>(3);

  return (
    <>
      <Htag tag="h1">H1 tag</Htag>
      <Htag tag="h2">H2 tag</Htag>
      <Htag tag="h3">H3 tag</Htag>
      <Button appearence="primary" arrow="down">Primary button</Button>
      <Button appearence="ghost" arrow="down">Ghost button</Button>
      <Paragraph size="big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio est sit beatae voluptatum praesentium quos saepe quisquam cupiditate esse, necessitatibus libero, quo obcaecati dolore tempore minus rerum vero! Sunt!</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio est sit beatae voluptatum praesentium quos saepe quisquam cupiditate esse, necessitatibus libero, quo obcaecati dolore tempore minus rerum vero! Sunt!</Paragraph>
      <Paragraph size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio est sit beatae voluptatum praesentium quos saepe quisquam cupiditate esse, necessitatibus libero, quo obcaecati dolore tempore minus rerum vero! Sunt!</Paragraph>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="red" size="med">Red</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="grey" size="med">Gray</Tag>
      <Rating className="flex flex-row" rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}
