import Discord from "discord.js";
import { Client } from "../../class/Client";

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

import Discord from "discord.js";
import { Client } from "../src/class/Client";

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

export * as Client from '../src/class/Client';
export * as Command from '../src/class/Command';
export * as Event from '../src/class/Event';

export * as Loadders from '../src/utils/Loadders';
