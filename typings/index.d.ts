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

}

interface CommandPermissions{
    user: PermissionString[];
    bot: PermissionString[];
}

interface TextCommandExecute{
    (client: ExtendedClient, message: Message, args: string[]): Promise<void>;
}

interface ApplicationCommandExecute{
    (client: ExtendedClient, interaction: CommandInteraction): Promise<void>;
}

export interface TextCommandStructure{
    name: string;
    description: string;
    usage?: string;
    examples?: string[] | [];
    aliases?: string[] | [];
    permissions: CommandPermissions;
    category: CommandCategory;
    execute: TextCommandExecute;
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
    run: ApplicationCommandExecute;
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
    constructor(options: ApplicationCommandStructure);
    /** Command name */
    public name: string;
    /** Command description */
    public description: string;
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
    public run: ApplicationCommandExecute
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
    public setRun(run: ApplicationCommandExecute): this;

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
    public execute: TextCommandExecute;
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
    public setExecute(execute: TextCommandExecute): this;

    public toJSON(): this;
}

export class Event<K extends keyof ClientEvents>{
    constructor(options: { name: K, run: (client: ExtendedClient, ...args: ClientEvents[K]) => void });
    /** Event name */
    public name: K;
    /** Event run function */
    public run: (client: ExtendedClient, ...args: ClientEvents[K]) => void;
    /** Event name */
    public setName(name: K): this;
    /** Event run function */
    public setRun(run: (client: ExtendedClient, ...args: ClientEvents[K]) => void): this;

    public toJSON(): this;
}