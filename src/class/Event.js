const Discord = require("discord.js");
const Client = require("./Client");

/**
 * @template {keyof Discord.ClientEvents} EventKey
 */

/**
 * Create a new event
 * @example
 * new Event({
 *    name: "channelCreate",
 *    run: (client, channel) => {}
 * })
 */
class Event {
  /**
   * @typedef {{ name: EventKey, run: (client: Client, ...args: Discord.ClientEvents[EventKey]) => void; }} EventOptions
   * @param {EventOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.run = options.run;
  }
}

module.exports = Event;
