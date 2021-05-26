const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let üye = message.mentions.members.first();
  if(!üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag} Avatar`, message.author.avatarURL)
      .setImage(message.author.avatarURL)
      .setFooter("Darking Bot")
      .setTimestamp()
      .setColor("GOLD")
    message.channel.send(embed)
  }
  if(üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${üye.user.tag} Avatar`, üye.user.avatarURL)
      .setImage(üye.user.avatarURL)
      .setFooter("Darking Bot")
      .setTimestamp()
      .setColor("DARKBLUE")
    message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"]
};

exports.help = {
  name: 'avatar',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
