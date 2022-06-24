"use strict";

const Discord = require("discord.js");

/**
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
  constructor(options) {
    this.setup(options);
  }

  setup(options) {
    /**
     * Text command name
     * @type {string}
     */
    this.name = options.name;

    /**
     * Text command description
     * @type {string}
     */
    this.description = options.description;

    /**
     * Text command aliases
     * @type {string[]}
     */
    this.aliases = options.aliases;

    /**
     * Text command category
     * @type {"general"|"moderation"|"fun"|"owner"}
     */
    this.category = options.category;

    /**
     * Text command owner only
     * @type {boolean}
     */
    this.ownerOnly = options.ownerOnly;

    /**
     * Text command usage
     * @type {string}
     */
    this.usage = options.usage;

    /**
     * Text command permissions
     * @type {{ User: import("discord.js").PermissionString[], Client: import("discord.js").PermissionString[] }}
     */
    this.permissions = options.permissions;

    /**
     * Text command run
     * @type {(client: import("discord.js").Client, message: import("discord.js").Message, args: string[]) => void}
     */
    this.run = options.run;
  }

  /**
   * Text command names
   * @param {string} name
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Text command description
   * @param {string} description
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Text command category
   * @param {"general"|"moderation"|"fun"|"owner"} category
   */
  setCategory(category) {
    this.category = category;
    return this;
  }

  /**
   * Text command owner only
   * @param {boolean} ownerOnly
   */
  setOwnerOnly(ownerOnly) {
    this.ownerOnly = ownerOnly;
    return this;
  }

  /**
   * Text command aliases
   * @param {string[]} aliases
   */
  setAliases(aliases) {
    if (this.aliases) {
      this.aliases.push(aliases);
      return this;
    } else {
      this.aliases = aliases;
      return this;
    }
  }

  /**
   * Text command usage
   * @param {string} usage
   */
  setUsage(usage) {
    this.usage = usage;
    return this;
  }

  /**
   * Text command permissions
   * @param {{ User: import("discord.js").PermissionString[], Client: import("discord.js").PermissionString[] }} permissions
   */
  setPermissions(permissions) {
    this.permissions = permissions;
    return this;
  }

  /**
   * Text command run
   * @param {(client: import("discord.js").Client, message: import("discord.js").Message, args: string[]) => void} run
   */
  setRun(run) {
    this.run = run;
    return this;
  }

  toJSON() {
    return this;
  }
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
  constructor(options) {
    this.setup(options);
  }

  setup(options) {
    /**
     * Application command name
     * @type {string}
     */
    this.name = options.name;

    /**
     * Application command description
     * @type {string}
     */
    this.description = options.description;

    /**
     * Application command options
     * @type {Discord.ApplicationCommandOption}
     */
    this.options = options.options;

    /**
     * Application command owner only
     * @type {boolean}
     */
    this.ownerOnly = options.ownerOnly;

    /**
     * Application command permissions
     * @type {{ User: import("discord.js").PermissionString[], Client: import("discord.js").PermissionString[] }}
     */
    this.permissions = options.permissions;

    /**
     * Application command run
     * @type {(client: import("discord.js").Client, message: import("discord.js").Message, args: string[]) => void}
     */
    this.run = options.run;
  }

  /**
   * Application command name
   * @param {string} name
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Application command description
   * @param {string} description
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Application command options
   * @param {Discord.ApplicationCommandOption[]} options
   */
  setOptions(options) {
    this.options = options;
    return this;
  }

  /**
   * Application command owner only
   * @param {boolean} ownerOnly
   */
  setOwnerOnly(ownerOnly) {
    this.ownerOnly = ownerOnly;
    return this;
  }

  /**
   * Application command permissions
   * @param {{ User: import("discord.js").PermissionString[], Client: import("discord.js").PermissionString[] }} permissions
   */
  setPermissions(permissions) {
    this.permissions = permissions;
    return this;
  }

  /**
   * Application command run
   * @param {(client: import("discord.js").Client, message: import("discord.js").Message, args: string[]) => void} run
   */
  setRun(run) {
    this.run = run;
    return this;
  }

  toJSON() {
    return this;
  }
}

module.exports.TextCommand = TextCommand;
module.exports.ApplicationCommand = ApplicationCommand;
