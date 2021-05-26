const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send(`Yetkili Başvunu\n Günde Adam Çekebilirsin (Günlük Adam Çekme Sayısı 5)= \n Günde Kaç Saat Aktif Olursun (Chat/Ses) = \n Çektiğin Veya Kayıt Ettiğin  Kişilerden Teyit Almak Zorunlu.\n Kayıt Ederken Tagımızı Alırmısın Gibi Şeyler Sorup Taga Çekmeye Çalışcaksınız. \n Yetkililerimiz Sizinle İlgilencektir İyi Günler.\n **The Darking Yönetim** `)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bs','b','basvuru'],
  permLevel: 0
};

  exports.help = {
  name: "basvuru",
  description: "basvuru",
  usage: "basvuru"
};