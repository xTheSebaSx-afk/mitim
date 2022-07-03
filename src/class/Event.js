const Client = require('./Client')
const Discord = require('discord.js')

/**
 * @example
 * const event = new mitim.Event({
 *   name: "messageCreate",
 *   run: async (client, message) => {}
 * })
 */

/**
 * @template {keyof Discord.ClientEvents} K
 */

class Event{

    /**
     * @typedef {{ name: K, run: (client: Client, ...args: Discord.ClientEvents[K]) => void; }} EventOptions
     * @param {EventOptions} options
     */
    constructor(options){
        this.setup(options)
    }

    setup(options){
        /**
         * Event name
         * @type {K}
         */
        this.name = options.name ?? null;

        /**
         * Event run function
         * @type {(client: Client, ...args: Discord.ClientEvents[K]) => void}
         */
        this.run = options.run ?? null;
    }

    /**
     * Event name
     * @param {string} name 
     */
    setName(name){
        this.name = name;
        return this;
    }

    /**
     * Event run function
     * @param {(client: Client, ...args: Discord.ClientEvents[K]) => void} run
     */
    setRun(run){
        this.run = run;
        return this;
    }

    toJSON(){
        return this;
    }
}

module.exports = Event;