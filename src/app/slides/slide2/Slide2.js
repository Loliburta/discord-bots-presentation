import React from "react";
import { Slide } from "@gregcello/revealjs-react";
export const Slide2 = () => {
  return (
    <Slide>
      <section className="slide2" data-auto-animate>
        <ul>
          <li className="slide2__q1">What even are</li>
          <li className="slide2__title">Discord bots</li>
          <li className="slide2__q2">...and what is discord?</li>
        </ul>
      </section>
      <section className="slide2" data-auto-animate>
        <ul>
          <li className="slide2__q1">What even are</li>
          <li className="slide2__title">Discord bots</li>
          <li className="slide2__q2">...and what is discord?</li>
          <li className="slide2__a2">
            Discord is a chat app, similar to programs such as Skype, TeamSpeak
            or Slack
          </li>
        </ul>
      </section>
      <section className="slide2" data-auto-animate>
        <ul>
          <li className="slide2__q1">What even are</li>
          <li className="slide2__title">Discord bots</li>
          <li className="slide2__a1">
            Bots on discord are AI created to perform various tasks for your
            server automatically. They have a great number of applications
            starting from moderating chats, informing you when your favorite
            products are on sale and ending at adding games and fun activities
          </li>
          <li className="slide2__q2--hid">...and what is discord?</li>
          <li className="slide2__a2--hid">
            Discord is a chat app, similar to programs such as Skype, TeamSpeak
            or Slack
          </li>
        </ul>
      </section>
    </Slide>
  );
};
