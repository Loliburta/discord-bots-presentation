import { RevealJS } from "@gregcello/revealjs-react";
import { HighlightPlugin, MarkdownPlugin } from "@gregcello/revealjs-react";
import { Slide1 } from "./slides/slide1/Slide1";
import { Slide2 } from "./slides/slide2/Slide2";
import { Slide3 } from "./slides/slide3/Slide3";
import { Slide4 } from "./slides/slide4/Slide4";
import { Slide5 } from "./slides/slide5/Slide5";
import { Slide6 } from "./slides/slide6/Slide6";
import { Slide7 } from "./slides/slide7/Slide7";
import { Slide8 } from "./slides/slide8/Slide8";

export const App = () => {
  return (
    <RevealJS plugins={[HighlightPlugin, MarkdownPlugin]}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
    </RevealJS>
  );
};
