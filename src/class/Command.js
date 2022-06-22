'use strict';

/**
 * import typings with jsdoc
 * @typedef {import("../../typings/index").TextCommandStructure} TextCommandStructure
 * @typedef {import("../../typings/index").ApplicationCommandStructure} ApplicationCommandStructure
 */

/**
 * Create a new application command
 * @example
 * new ApplicationCommand({
 *  name: "ping",
 *  description: "Ping!",
 *  category: "general",
 *  ownerOnly: false,
 *  aliases: [],
 *  usage: "",
 *  permissions: {},
 *  run: (client, message, args) => {}
 * })
 */
class TextCommand {
  /**
   * @param {TextCommandStructure} options
   */
  constructor(options) {}
}

/**
 * Create a new application command
 * @example
 * new ApplicationCommand({
 *  name: "ping",
 *  description: "Ping!",
 *  category: "general",
 *  ownerOnly: false,
 *  options: [],
 *  permissions: {},
 *  run: (client, message, args) => {}
 * })
 */
class ApplicationCommand {
  /**
   * @param {ApplicationCommandStructure} options
   */
  constructor(options) {}
}

module.exports.TextCommand = TextCommand;
module.exports.ApplicationCommand = ApplicationCommand;
