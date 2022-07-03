# Mitim

Create a new Discord bot in a way easier

![npm downloads](https://img.shields.io/npm/dt/mitim)
![npm version](https://img.shields.io/npm/v/mitim?label=version)

Compatibility with commonjs and ES6


## **Installation**

```js
npm install mitim@latest
```

## **Example**

```js
const mitim = require('mitim')
const bot = new mitim.Client({ intents: 32767 })

const command = new mitim.Command.TextCommand()
.setName('ping')
.setDescription('Ping!')
.setRun(async (message, args) => {
  message.reply('Pong!')
})

module.exports = new mitim.Event({
    name: "ready",
    run: async (client) => {
        console.log("Ready!")
    }
})

bot.login('token')
```