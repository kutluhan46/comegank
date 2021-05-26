const Discord = require("discord.js");

exports.run = function(client, message, args) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  setInterval(() => {
    const dcss = message.guild.members.random().user.avatarURL;
    const dcs = new Discord.RichEmbed()
      .setImage('' + dcss + '')
      .setColor("RANDOM")
      .setTimestamp();
    mesajı . kanalı . gönder ( dcs );
  }, 3000 ); // Bu Zaman Aralığıdır! 1000 = 1 SaniyeSan
}; // Not: Bot Sıfırla Durur!

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "random-pp"
};