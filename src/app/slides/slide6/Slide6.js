import React from "react";
import { Slide, Code } from "@gregcello/revealjs-react";
export const Slide6 = () => {
  return (
    <Slide>
      <section className="slide6" data-auto-animate>
        <ul>
          <li className="slide6__title">Discord bots</li>
          <li className="slide6__subtitle">
            At the end it should look like this
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `//npm i discord.js

const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const connect = async () => {
  try {
    await client.login(/* Secret Bot Token */);
  } catch (error) {
    console.log(error);
  }
};

const prefix = "!";
client.on("messageCreate", async (message) => {
if (message.author.bot) {
  // Ignore bot's messages
  return;
}

if (message.content.startsWith(prefix)) {
  const [commandName, ...args] = message.content
  .trim()
  .substring(prefix.length)
  .split(/\\s+/);
  if (commandName === "watch"){
    // Code anything your bot should do when someone types this command
  }
}`,
            }}
          ></Code>
        </ul>
      </section>
    </Slide>
  );
};
