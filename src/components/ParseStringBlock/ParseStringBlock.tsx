import parse, { Element } from 'html-react-parser';
import "./ParseStringBlock.scss";

interface IParseStringBlock {
  text: string;
};

export const ParseStringBlock = ({ text }: IParseStringBlock) => {
  return (
    <div id="parsed" className="mb-20 mt-20 font-normal text-[1.8rem] leading-[2.9rem] text-justify">
      {parse(text, {
        replace(domNode) {
          if (domNode instanceof Element && !domNode.children.length) {
            return <></>;
          }
        },
      })}
    </div>
  );
};