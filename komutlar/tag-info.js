const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send(`<a:elms:725266607009431562>**Tag Alırsan Ne Mi Olur? Hemen Anlatim. \n\n<a:elms:725266607009431562> Sunucumuzun Tagını Alırsan Ayrı Olarak <@&751439976557707436> Rolüne Sahip Olursunuz. \n\n <a:elms:725266607009431562>İnvite Yaparak Yetkili Olma Hakkına Sahip Olursun \n\n<a:elms:725266607009431562> Tagımız=> **⩔** \n\n<a:elms:725266607009431562> İyi Günler**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "taginfo",
  description: "taginfo",
  usage: "taginfo"
};