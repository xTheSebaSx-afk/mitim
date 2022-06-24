"use strict";

const Discord = require("discord.js");

/**
 * @typedef {{ type: "Interaction"|"Text", filter: boolean, time: number, buttonsOptions?: { ephemeralMessage: string, buttonGlobalAvatarName: string, buttonGuildAvatarName: string, buttonBannerName: string, buttonGlobalAvatarStyle: Discord.MessageButtonStyle, buttonGuildAvatarStyle: Discord.MessageButtonStyle, buttonBannerStyle: Discord.MessageButtonStyle }, additionalButtons?: Discord.MessageButton[], embedOptions?: { guildAvatar: string, globalAvatar: string, banner: string, guildAvatarColor: Discord.ColorResolvable, globalAvatarColor: Discord.ColorResolvable, bannerColor: Discord.ColorResolvable } }} AvatarOptions
 */

/**
 * Create an avatar command
 * @example
 *
 * //
 * // If filter is false, any user can interact with the buttons else, if is true, the button returns a ephemeral message
 * mitim.AutoCommands.avatar(message, member, { filter: true, time: 1000 })
 *
 * @param {Discord.Message|Discord.CommandInteraction} message
 * @param {Discord.User|Discord.GuildMember} user
 * @param {AvatarOptions} options
 */
module.exports = async (
  message,
  user,
  options = { time: 60000, filter: false }
) => {
  if (!message) throw new Error("message is required");
  if (!user) throw new Error("user is required");

  const member = message.guild?.members.resolve(user.id);

  const row = new Discord.MessageActionRow().addComponents(
    new Discord.MessageButton()
      .setCustomId("guildAvatar")
      .setLabel(options.buttonsOptions?.buttonGuildAvatarName || "Guild Avatar")
      .setStyle(options.buttonsOptions?.buttonGuildAvatarStyle || "SUCCESS")
      .setDisabled(member ? false : true),
    new Discord.MessageButton()
      .setCustomId("globalAvatar")
      .setLabel(
        options.buttonsOptions?.buttonGlobalAvatarName || "Global Avatar"
      )
      .setStyle(options.buttonsOptions?.buttonGlobalAvatarStyle || "SUCCESS"),
    new Discord.MessageButton()
      .setCustomId("banner")
      .setLabel(options.buttonsOptions?.buttonBannerName || "Banner")
      .setStyle(options.buttonsOptions?.buttonBannerStyle || "SUCCESS")
  );

  if (options.additionalButtons && options.additionalButtons.length > 5)
    throw new RangeError("additionalButtons can not be more than 5");

  const row2 = new Discord.MessageActionRow().addComponents(
    options.additionalButtons || []
  );

  const mainEmbed = new Discord.MessageEmbed()
    .setAuthor({
      name: `${
        options.embedOptions?.globalAvatar || `${user.username}'s avatar`
      }`,
    })
    .setColor(options.embedOptions?.globalAvatarColor || `RANDOM`)
    .setImage(user.avatarURL({ format: "png", dynamic: true, size: 1024 }));

  if (options.type === "Text") {
    const m = await message.reply({ embeds: [mainEmbed] });

    const collector = m.createMessageComponentCollector({
      time: options.time || 60000,
    });

    collector.on("collect", async (i) => {
      if (filter) {
        if (i.author.id !== message.author.id)
          return i.reply({
            content:
              options.buttonsOptions?.ephemeralMessage ||
              "You can not interact with this button",
            ephemeral: true,
          });
      }

      if (i.customId === "guildAvatar") {
        await i.deferUpdate();

        const guildAvatarEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.guildAvatar ||
              `${member?.user.username}'s avatar`
            }`,
          })
          .setColor(
            options.embedOptions?.guildAvatarColor || member.displayHexColor
          )
          .setImage(
            member?.user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [guildAvatarEmbed] });
      }

      if (i.customId === "globalAvatar") {
        await i.deferUpdate();

        const globalAvatarEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.globalAvatar || `${user.username}'s avatar`
            }`,
          })
          .setColor(options.embedOptions?.globalAvatarColor || `RANDOM`)
          .setImage(
            user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [globalAvatarEmbed] });
      }

      if (i.customId === "banner") {
        await i.deferUpdate();

        const bannerEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.banner || `${user.username}'s banner`
            }`,
          })
          .setColor(options.embedOptions?.bannerColor || `RANDOM`)
          .setImage(
            user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [bannerEmbed] });
      }
    });
  }

  if (options.type === "Interaction") {
    await message.deferReply();

    const m = await message.editReply({ embeds: [mainEmbed] });

    const collector = m.createMessageComponentCollector({
      time: options.time || 60000,
    });

    collector.on("collect", async (i) => {
      if (filter) {
        if (i.author.id !== message.author.id)
          return message.editReply({
            content:
              options.buttonsOptions?.ephemeralMessage ||
              "You can not interact with this button",
            ephemeral: true,
          });
      }

      if (i.customId === "guildAvatar") {
        await i.deferUpdate();

        const guildAvatarEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.guildAvatar ||
              `${member?.user.username}'s avatar`
            }`,
          })
          .setColor(
            options.embedOptions?.guildAvatarColor || member.displayHexColor
          )
          .setImage(
            member?.user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [guildAvatarEmbed] });
      }

      if (i.customId === "globalAvatar") {
        await i.deferUpdate();

        const globalAvatarEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.globalAvatar || `${user.username}'s avatar`
            }`,
          })
          .setColor(options.embedOptions?.globalAvatarColor || `RANDOM`)
          .setImage(
            user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [globalAvatarEmbed] });
      }

      if (i.customId === "banner") {
        await i.deferUpdate();

        const bannerEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: `${
              options.embedOptions?.banner || `${user.username}'s banner`
            }`,
          })
          .setColor(options.embedOptions?.bannerColor || `RANDOM`)
          .setImage(
            user.avatarURL({ format: "png", dynamic: true, size: 1024 })
          );

        i.editReply({ embeds: [bannerEmbed] });
      }
    });
  }
};
