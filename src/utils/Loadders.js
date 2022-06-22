'use strict';

/**
 * @typedef {import("../../typings/index").ApplicationCommandStructure} ApplicationCommandStructure
 * @typedef {import("../../typings/index").TextCommandStructure} TextCommandStructure
 */
const fs = require("fs");

/**
 * Load all commands from the given directory.
 * @param {TextCommandStructure|ApplicationCommandStructure} Collection
 * @param {string} path
 */
function CommandLoadder(Collection, path) {
  if (!Collection || !Collection.set)
    throw new TypeError("Collection must be a discord collection");

  if (!path || typeof path !== "string")
    throw new TypeError("Path must be a string");

  const files = fs.readdirSync(path);
  for (const file of files) {
    const filePath = `${path}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      const command = require(`../../../.${filePath}`);
      Collection.set(command.name, command);
    } else {
      const command = require(`../../../.${filePath}`);
      Collection.set(command.name, command);
    }
  }
}

/**
 * Execute the events
 * @param {import("../class/Client")} Client
 * @param {string} path
 */
function EventLoadder(Client, path) {
  if (!Client || !Client.ws)
    throw new TypeError("Client must be a discord client");

  if (!path || typeof path !== "string")
    throw new TypeError("Path must be a string");

  const files = fs.readdirSync(path);
  for (const file of files) {
    const filePath = `${path}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      const event = require(`../../../.${filePath}`);
      Client.on(event.name, event.run.bind(null, Client));
    } else {
      const event = require(`../../../.${filePath}`);
      Client.on(event.name, event.run.bind(null, Client));
    }
  }
}

module.exports.CommandLoadder = CommandLoadder;
module.exports.EventLoadder = EventLoadder;
