const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send(`**<a:elms:725266607009431562>----Yetkili Nasıl Olunur?-----\n\n<a:elms:725266607009431562>1- Tag Almaznız Gerekiyor \n\n<a:elms:725266607009431562>2- 3 Kişi Davet Etmeniz Gerekiyor\n\n<a:elms:725266607009431562>3- Yetki Kavgası Etmiyeceksiniz\n\n<a:elms:725266607009431562>4- Aktif Olacak Sınız\n\n**   @everyone && @here`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ytal'],
  permLevel: 0
};

exports.help = {
  name: "ytal",
  description: "Bostinfo",
  usage: "Bostinfo"
};