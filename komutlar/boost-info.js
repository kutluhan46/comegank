const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send(`<a:elms:725266607009431562>**Priw⁴² Sunucusuna Boost Basarsanız Ne Mi Olur?**"\n\n <a:elms:725266607009431562>**Hemen Anlatalım** \n\n <a:elms:725266607009431562>**Sunucumuza Boost Basrsanız Çekilişlere x2 Yazılırsınız** \n\n<a:elms:725266607009431562> <@&750025367590404097> **Rolüne Sahip Olursunuz** \n\n<a:elms:725266607009431562>**Sunucumuza Destekte Bulunmuş Olursunuz** \n\n <a:elms:725266607009431562>**İyi Günler**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bostinfo'],
  permLevel: 0
};

exports.help = {
  name: "Bost-info",
  description: "Bostinfo",
  usage: "Bostinfo"
};