import React from "react";
import { Slide } from "@gregcello/revealjs-react";
export const Slide1 = () => {
  return (
    <Slide>
      <section className="slide1" data-auto-animate>
        <ul>
          <li className="slide1__title">Automating tasks using</li>
          <li className="slide1__title2">Discord bots</li>
        </ul>
      </section>
      <section className="slide1" data-auto-animate>
        <ul>
          <li className="slide1__q1">What even are</li>
          <li className="slide1__title2">Discord bots</li>
        </ul>
      </section>
    </Slide>
  );
};
