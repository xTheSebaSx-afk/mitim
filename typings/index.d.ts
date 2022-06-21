import Discord from "discord.js";
import Client from "../src/class/Client";
import Event from "../src/class/Event";

type CommandCategory = "general" | "moderation" | "fun" | "owner";

export interface TextCommandStructure {
  name: string;
  description: string;
  usage: string;
  aliases?: string[] | [];
  category: CommandCategory;
  ownerOnly?: boolean | false;
  permissions?:
    | {
        user: Discord.PermissionString[];
        bot: Discord.PermissionString[];
      }
    | { user: []; bot: [] };
  run: (client: Client, message: Discord.Message, args: string[]) => void;
}

export interface ApplicationCommandStructure {
  name: string;
  description: string;
  category: CommandCategory;
  options?: Discord.ApplicationCommandOption[] | [];
  ownerOnly?: boolean | false;
  permissions: {
    user?: Discord.PermissionString[] | [];
    bot?: Discord.PermissionString[] | [];
  };
  run: (client: Client, interaction: Discord.CommandInteraction) => void;
}

export interface ExtendedClientOptions extends Discord.ClientOptions {
  prefix: string;
}

export { Client, Event };
export * as Command from "../src/class/Command";
export * as Loadders from "../src/utils/Loadders";
