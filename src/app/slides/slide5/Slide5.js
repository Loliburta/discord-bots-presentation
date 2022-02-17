import React from "react";
import { Slide, Code } from "@gregcello/revealjs-react";

const Top = () => {
  return (
    <>
      <li className="slide5__title">Discord bots</li>
      <li className="slide5__q1">How to create one?</li>
      <li className="slide5__subtitle">The coding part</li>
    </>
  );
};

export const Slide5 = () => {
  return (
    <Slide>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
          <li className="slide5__a1">Start with installing discord.js</li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `//npm i discord.js`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
          <li className="slide5__a1--hid">Start with installing discord.js</li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `//npm i discord.js`,
            }}
          ></Code>
          <li className="slide5__a1">
            Then import Client and Intents and create a new instance of a Client
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
          <li className="slide5__a1--hid">Start with installing discord.js</li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `//npm i discord.js`,
            }}
          ></Code>
          <li className="slide5__a1--hid">
            Then import Client and Intents and create a new instance of a Client
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});`,
            }}
          ></Code>
          <li className="slide5__a2">
            Then it's a time to login with your client
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const connect = async () => {
  try {
    await client.login(/* Secret Bot Token */);
  } catch (error) {
    console.log(error);
  }
};`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
          <li className="slide5__a1--hid">Start with installing discord.js</li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `//npm i discord.js`,
            }}
          ></Code>
          <li className="slide5__a1--hid">
            Then import Client and Intents and create a new instance of a Client
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});`,
            }}
          ></Code>
          <li className="slide5__a1--hid">
            Then it's a time to login with your client
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const connect = async () => {
  try {
    await client.login(/* Secret Bot Token */);
  } catch (error) {
    console.log(error);
  }
};`,
            }}
          ></Code>
          <li className="slide5__a2">
            Make it react to messages sent on the server
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `client.on("messageCreate", async (message) => {
// Ignore bot's messages.
if (message.author.bot) {
  return;
}`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
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
`,
            }}
          ></Code>
          <li className="slide5__a2">
            Create a prefix that your bot will react to
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const prefix = "!";
client.on("messageCreate", async (message) => {
if (message.author.bot) {
  // Ignore bot's messages
  return;
}

if (message.content.startsWith(prefix)) {
  // React to message
}`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
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
`,
            }}
          ></Code>
          <li>
            Extract command and split rest of the text after spaces to ...args
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const prefix = "!";
client.on("messageCreate", async (message) => {
// Ignore bot's messages
if (message.author.bot) {
  return;
}
if (message.content.startsWith(prefix)) {
  const [commandName, ...args] = message.content
  .trim()
  .substring(prefix.length)
  .split(/\\s+/);
}`,
            }}
          ></Code>
        </ul>
      </section>
      <section className="slide5" data-auto-animate>
        <ul>
          <Top />
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
`,
            }}
          ></Code>
          <li className="slide5__a2">
            Now add a command that your bot will react to and it's ready
          </li>
          <Code
            language="javascript"
            noTrim={true}
            lineNumbers="true"
            children={{
              code: `const prefix = "!";
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
