const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '785246817116880917' //KAYIT YETKİLİSİ ID
let verbuse = '785246817116880917' //VERİLECEK ROL ID

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Gold Verme\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  

 
  
  setTimeout(function(){
  member.addRole(verbuse)
  },3000)
  
 const emoji = client.emojis.find(emoji => emoji.name === "tik");
 let embed = new Discord.RichEmbed()
  .setColor('GOLD')
  .setDescription(`Ekip Rolü Verilmiştir\nİyi Günler `)
  .setFooter(`Komutu kullanan yetkili : ${message.author}`) 
  message.channel.send(embed)
message.react(emoji)
};
  
  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'ekip',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!erkek <yeni nick>'
}