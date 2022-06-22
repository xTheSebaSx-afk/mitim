const Discord = require("discord.js");
const Client = require("./Client");

/**
 * Create a new event
 * @example
 * new Event({
 *    name: "channelCreate",
 *    run: (client, channel) => {}
 * })
 */

/**
 * @template {keyof Discord.ClientEvents} K
 */

class Event {

  /**
   * @typedef {{ name: K, run: (client: Client, ...args: Discord.ClientEvents[K]) => void; }} EventOptions
   * @param {EventOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.run = options.run;
  }
}

module.exports = Event;
