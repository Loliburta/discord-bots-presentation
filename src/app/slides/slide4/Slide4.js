import React from "react";
import { Slide } from "@gregcello/revealjs-react";
import newApp from "../../imgs/newApp.png";
import scopes from "../../imgs/scopes.png";
import url from "../../imgs/url.png";
import token from "../../imgs/token.png";

const Top = () => {
  return (
    <>
      <li className="slide4__title">Discord bots</li>
      <li className="slide4__q1">How to create one?</li>
      <li className="slide4__subtitle">Creating bot account</li>
    </>
  );
};

export const Slide4 = () => {
  return (
    <Slide>
      <section className="slide4" data-auto-animate>
        <ul>
          <Top />
        </ul>
      </section>
      <section className="slide4" data-auto-animate>
        <ul>
          <Top />
          <li className="slide4__a1">
            1. Go to{" "}
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noreferrer"
            >
              developer site
            </a>{" "}
            and create a new application
          </li>
          <img className="slide4__newApp" src={newApp} alt="new app" />
        </ul>
      </section>
      <section className="slide4" data-auto-animate>
        <ul>
          <li className="slide4__title">Discord bots</li>
          <li className="slide4__q1">How to create one?</li>
          <li className="slide4__subtitle">Creating bot account</li>
          <li className="slide4__a1">
            1. Go to{" "}
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noreferrer"
            >
              developer site
            </a>{" "}
            and create a new application
          </li>
          <li className="slide4__a2">2. Click on OAuth2 and select scopes</li>
          <img className="slide4__scopes" src={scopes} alt="new app" />
        </ul>
      </section>
      <section className="slide4" data-auto-animate>
        <ul>
          <Top />
          <li className="slide4__a1">
            1. Go to{" "}
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noreferrer"
            >
              developer site
            </a>{" "}
            and create a new application
          </li>
          <li className="slide4__a2">2. Click on OAuth2 and select scopes</li>
          <li className="slide4__a3">
            3. Go to generated url and invite bot to the server
          </li>
          <img className="slide4__url" src={url} alt="new app" />
        </ul>
      </section>
      <section className="slide4" data-auto-animate>
        <ul>
          <Top />
          <li className="slide4__a1">
            1. Go to{" "}
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noreferrer"
            >
              developer site
            </a>{" "}
            and create a new application
          </li>
          <li className="slide4__a2">2. Click on OAuth2 and select scopes</li>
          <li className="slide4__a3">
            3. Go to generated url and invite bot to the server
          </li>
          <li className="slide4__a3">
            4. Click on Bot and copy the secret token
          </li>
          <img className="slide4__url" src={token} alt="new app" />
        </ul>
      </section>
    </Slide>
  );
};
