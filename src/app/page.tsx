import { Button, Htag } from "@/components";

export default function Home() {
  return (
    <>
      <Htag tag="h1">H1 tag</Htag>
      <Htag tag="h2">H2 tag</Htag>
      <Htag tag="h3">H3 tag</Htag>
      <Button appearence="primary">Primary button</Button>
      <Button appearence="ghost">Ghost button</Button>
    </>
  );
}
