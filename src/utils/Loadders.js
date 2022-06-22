/**
 * @typedef {import("../../typings/index").ApplicationCommandStructure} ApplicationCommandStructure
 * @typedef {import("../../typings/index").TextCommandStructure} TextCommandStructure
 */
const fs = require("fs");

/**
 * @typedef {'text'|'application'} CommandType
 * @type {CommandType}
 */

/**
 * @param {TextCommandStructure|ApplicationCommandStructure} Collection
 * @param {string} path
 * @param {CommandType} type
 */
async function CommandLoadder(Collection, path, type) {
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    const filePath = path + path.sep + file;
    const stat = await fs.promises.stat(filePath);
    if (stat.isDirectory()) {
      await CommandLoadder(Collection, filePath, type);
    } else {
      const command = require(filePath);
      if (typeof command === "function") {
        Collection.set(command.name, command);
      }
    }
  }
}

module.exports.CommandLoadder = CommandLoadder;
