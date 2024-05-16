import { Button, Htag, Paragraph, Tag } from "@/components";
import { MenuItem } from "../interfaces/menu.interface";
// import { Rating, TRating } from "@/components";
// import { useState } from "react";

async function fetchMenu(): Promise<MenuItem[] | null> {
  const firstCategory = 0;

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstCategory }),
    cache: "force-cache"
  });

  if (!res.ok) {
    return null;
  }

  if (res.ok) {
    const menuCategories: MenuItem[] = await res.json();

    return menuCategories;
  }
};

export default async function Home() {
  // const [rating, setRating] = useState<TRating>(3);

  const menu = await fetchMenu();

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
      <ul>
        {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
      </ul>
      {/* <Rating className="flex flex-row" rating={rating} isEditable={true} setRating={setRating} /> */}
    </>
  );
}
