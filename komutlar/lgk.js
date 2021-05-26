const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("**Mesaj Log kapatıldı iyi günler **")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

  exports.help = {
  name: "log-kapat",
  description: "log-kapat",
  usage: "log-kapat"
};