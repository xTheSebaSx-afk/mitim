const { Client, Collection } = require('discord.js')

/**
 * Create the main client
 * @example
 * const client = new mitim.Client({ intents: 32767 })
 * 
 * client.login('token')
 * @extends {Client}
 */
class ExtendedClient extends Client{
    /**
     * @param {import('discord.js').ClientOptions} options 
     */
    constructor(options){
        super(options)
    }

    /**
     * @type {Collection<string, import('../../typings').ApplicationCommandStructure>}
     */
    ApplicationCommands = new Collection()

    /**
     * @type {Collection<string, import('../../typings').ApplicationCommandStructure>}
     */
    TextCommands = new Collection()
}

module.exports = ExtendedClient;