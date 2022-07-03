const { CommandInteraction, Message, Client } = require("discord.js")

/**
 * @typedef {import("../../typings/index").ApplicationCommandStructure} ApplicationCommandStructure
 * @typedef {import("../../typings/index").CommandPermissions} CommandPermissions
 * @typedef {import("../../typings/index").ApplicationCommandExecute} ApplicationCommandExecute
 * @typedef {import("../../typings/index").TextCommandStructure} TextCommandStructure
 * @typedef {import("../../typings/index").CommandPermissions} CommandPermissions
 * @typedef {import("../../typings/index").TextCommandExecute} TextCommandExecute
 * @typedef {import("../../typings/index").CommandCategory} CommandCategory 
 */

class ApplicationCommand{
    /**
     * @param {ApplicationCommandStructure} [options = {}]
     */
    constructor(options = {}){
        this.setup(options.name)
    }

    setup(options){
        /**
         * Command name
         * @type {string}
         */
        this.name = options.name ?? null;

        /**
         * Command description
         * @type {string}
         */
        this.description = options.description ?? null;

        /**
         * Command name localization
         * @type {import("discord-api-types/v10").LocalizationMap}
         */
        this.localization = options.localization ?? null;

        /**
         * Command permissions
         * @type {CommandPermissions}
         */
        this.permissions = options.permissions ?? { user: [], client: [] };

        /**
         * Command options
         * @type {import("discord.js").ApplicationCommandOption}
         */
        this.options = options.options ?? [];

        /**
         * Command type
         * @type {import("discord.js").ApplicationCommandType}
         */
        this.type = options.type ?? "CHAT_INPUT";

        /**
         * Command category
         * @type {CommandCategory}
         */
        this.category = options.category ?? null;

        /**
         * Command execute function
         * @type {ApplicationCommandExecute}
         */
        this.execute = options.execute;
    }

    /**
     * Command name
     * @param {string} name 
     */
    setName(name){
        this.name = name;
        return this;
    }

    /**
     * Command description
     * @param {string} description
     */
    setDescription(description){
        this.description = description;
        return this;
    }

    /**
     * Command name localization
     * @param {import("discord-api-types/v10").LocalizationMap} localization
     */
    setLocalization(localization){
        this.localization = localization;
        return this;
    }

    /**
     * Command permissions
     * @param {CommandPermissions} permissions
     */
    setPermissions(permissions){
        this.permissions = permissions;
        return this;
    }

    /**
     * Command options
     * @param {import("discord.js").ApplicationCommandOption} options
     */
    setOptions(options){
        this.options = options;
        return this;
    }

    /**
     * Command category
     * @param {CommandCategory} category
     */
    setCategory(category){
        this.category = category;
        return this;
    }

    /**
     * Command type
     * @param {import("discord.js").ApplicationCommandType} type
     */
    setType(type){
        this.type = type;
        return this;
    }

    /**
     * Command execute function
     * @param {ApplicationCommandExecute} execute
     */
    setExecute(execute){
        this.execute = execute;
        return this;
    }

    /**
     * Transforms the command to a plain object.
     * @returns {ApplicationCommandStructure} The raw data of this command
     */
    toJSON(){
        return this;
    }

}

class TextCommand{
    /**
     * @param {TextCommandStructure} [options = {}]
     */
    constructor(options = {}){
        this.setup(options)
    }

    setup(options){
        /**
         * Command name
         * @type {string}
         */
        this.name = options.name ?? null;

        /**
         * Command description
         * @type {string}
         */
        this.description = options.description ?? null;

        /**
         * Command aliases
         * @type {string[]}
         */
        this.aliases = options.aliases ?? [];

        /**
         * Command permissions
         * @type {CommandPermissions}
         */
        this.permissions = options.permissions ?? { user: [], client: [] };

        /**
         * Command usage
         * @type {string}
         */
        this.usage = options.usage ?? null;

        /**
         * Command category
         * @type {CommandCategory}
         */
        this.category = options.category ?? null;

        /**
         * Command execute function
         * @type {TextCommandExecute}
         */
        this.execute = options.execute;
    }

    /**
     * Command name
     * @param {string} name
     */
    setName(name){
        this.name = name;
        return this;
    }

    /**
     * Command description
     * @param {string} description
     */
    setDescription(description){
        this.description = description;
        return this;
    }

    /**
     * Command aliases
     * @param {string[]} aliases
     */
    setAliases(aliases){
        this.aliases = aliases;
        return this;
    }

    /**
     * Command permissions
     * @param {CommandPermissions} permissions
     */
    setPermissions(permissions){
        this.permissions = permissions;
        return this;
    }

    /**
     * Command usage
     * @param {string} usage
     */
    setUsage(usage){
        this.usage = usage;
        return this;
    }

    /**
     * Command category
     * @param {CommandCategory} category
     */
    setCategory(category){
        this.category = category;
        return this;
    }

    /**
     * Command execute function
     * @param {TextCommandExecute} execute
     */
    setExecute(execute){
        this.execute = execute;
        return this;
    }

    /**
     * Transforms the command to a plain object.
     * @returns {TextCommandStructure} The raw data of this command
     */
    toJSON(){
        return this;
    }
}

module.exports.ApplicationCommand = ApplicationCommand;
module.exports.TextCommand = TextCommand;