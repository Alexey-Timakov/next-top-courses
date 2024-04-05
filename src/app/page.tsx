import { Button, Htag, Paragraph } from "@/components";

export default function Home() {
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
    </>
  );
}
