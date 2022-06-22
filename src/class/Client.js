'use strict';

/**
 * import typings with jsdoc
 * @typedef {import("../../typings/index").ExtendedClientOptions} ExtendedClientOptions
 * @typedef {import("../../typings/index").ApplicationCommandStructure} ApplicationCommandStructure
 * @typedef {import("../../typings/index").TextCommandStructure} TextCommandStructure
 */
const Discord = require("discord.js");

/**
 * Create the main client
 *
 * @extends {Discord.Client}
 * @example
 * const client = new FriendlyBase.Client()
 *
 * client.login('token')
 */
class Client extends Discord.Client {
  /**
   * @param {ExtendedClientOptions} options
   */
  constructor(options) {
    super(options);
  }

  /**
   * @type {Discord.Collection<string, TextCommandStructure>}
   */
  TextCommand = new Discord.Collection();

  /**
   * @type {Discord.Collection<string, ApplicationCommandStructure>}
   */
  ApplicationCommand = new Discord.Collection();
}

module.exports = Client;
