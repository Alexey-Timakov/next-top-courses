import { Htag, Button, Paragraph, Tag, Input, InputArea } from "@/ui";

export default function Home(): JSX.Element {
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
      <Input placeholder="Тест" />
      <InputArea placeholder="Тест area" />
    </>
  );
}
