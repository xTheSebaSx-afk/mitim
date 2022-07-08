import { LocalizationMap } from 'discord-api-types/v10'
import { ClientOptions, ApplicationCommandOption, ApplicationCommandType, PermissionString, CommandInteraction, Message, Collection, ClientEvents } from 'discord.js'
import Discord from 'discord.js'

export type CommandCategory =
  | "General"
  | "Fun"
  | "Moderation"
  | "Utility"
  | "Fun"
  | "Music"
  | "NSFW"
  | "Developer"
  | "Staff"
  | "Economy"
  | "Role"
  | "Misc"
  | "Other"

/**
 * The main client
 */
export class Client extends Discord.Client{
    constructor(options?: ClientOptions);
    
    public ApplicationCommands: Collection<string, ApplicationCommandStructure>;

    public TextCommands: Collection<string, TextCommandStructure>;

}

interface CommandPermissions{
    user: PermissionString[];
    bot: PermissionString[];
}

export interface TextCommandStructure{
    name: string;
    description: string;
    usage?: string;
    examples?: string[] | [];
    aliases?: string[] | [];
    permissions: CommandPermissions;
    category: CommandCategory;
    run: (client: Client, message: Message, args: string[]) => void;
}

export interface ApplicationCommandStructure{
    name: string;
    description: string;
    options?: ApplicationCommandOption[] | [];
    type?: ApplicationCommandType | "CHAT_INPUT";
    name_localizations?: LocalizationMap;
    description_localizations?: LocalizationMap;
    permissions?: CommandPermissions | {user: PermissionString[], bot: PermissionString[]};
    category: CommandCategory;
    run: (client: Client, interaction: CommandInteraction) => void;
}

/**
 * Create a new application command
 * @example
 * const command = new mitim.ApplicationCommand({
 *   name: "ping",
 *   description: "Ping!", 
 *   options: [],
 *   type: "CHAT_INPUT",
 *   name_localizations: {},
 *   description_localizations: {},
 *   permissions: {user: ["SEND_MESSAGES"], bot: ["SEND_MESSAGES"]},
 *   category: "General",
 *   run: async (client, interaction) => {}
 * })
 */
export class ApplicationCommand{
    constructor(options?: ApplicationCommandStructure);
    /** Command name */
    public name?: string;
    /** Command description */
    public description?: string;
    /** Command options */
    public options?: ApplicationCommandOption[] | [];
    /** Command type */
    public type?: ApplicationCommandType | "CHAT_INPUT";
    /** Name localized */
    public name_localizations?: LocalizationMap;
    /** Description localized */
    public description_localizations?: LocalizationMap;
    /** Command category */
    public category: CommandCategory;
    /** Command permissions */
    public permissions?: CommandPermissions | { user: [], bot: [] };
    /** Command run function */
    public run?: (client: Client, message: Message, args: string[]) => void;
    /** Command name */
    public setName(name: string): this;
    /** Command description */
    public setDescription(description: string): this;
    /** Command options */
    public setOptions(options?: ApplicationCommandOption[] | []): this;
    /** Command type */
    public setType(type?: ApplicationCommandType | "CHAT_INPUT"): this;
    /** Name localized */
    public setNameLocalizations(name_localizations?: LocalizationMap): this;
    /** Description localized */
    public setDescriptionLocalizations(description_localizations?: LocalizationMap): this;
    /** Command permissions */
    public setPermissions(permissions?: CommandPermissions | { user: [], bot: [] }): this;
    /** Command category */
    public setCategory(category: CommandCategory): this;
    /** Command run function */
    public setRun(run: (client: Client, interaction: CommandInteraction) => void): this;

    public toJSON(): this;
}

export class TextCommand{
    constructor(options: TextCommandStructure);
    /** Command name */
    public name: string;
    /** Command description */
    public description: string;
    /** Command usage */
    public usage?: string;
    /** Command examples */
    public examples?: string[] | [];
    /** Command aliases */
    public aliases?: string[] | [];
    /** Command category */
    public category: CommandCategory;
    /** Command permissions */
    public permissions?: CommandPermissions | { user: [], bot: [] };
    /** Command execute function */
    public run: (client: Client, message: Message, args: string[]) => void;
    /** Command name */
    public setName(name: string): this;
    /** Command description */
    public setDescription(description: string): this;
    /** Command usage */
    public setUsage(usage?: string): this;
    /** Command examples */
    public setExamples(examples?: string[] | []): this;
    /** Command category */
    public setCategory(category: CommandCategory): this;
    /** Command aliases */
    public setAliases(aliases?: string[] | []): this;
    /** Command permissions */
    public setPermissions(permissions?: CommandPermissions | { user: [], bot: [] }): this;
    /** Command execute function */
    public setRun(run: (client: Client, message: Message, args: string[]) => void): this;

    public toJSON(): this;
}

export class Event<K extends keyof ClientEvents>{
    constructor(options: { name: K, run: (client: Client, ...args: ClientEvents[K]) => any });
    /** Event name */
    public name: K;
    /** Event run function */
    public run: (client: Client, ...args: ClientEvents[K]) => any;

    public toJSON(): this;
}