const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '' //KAYIT YETKİLİSİ ID
let verbuse = '' //VERİLECEK ROL ID
let verbusem = '' //VERİLECEK ROL ID
let albuse = '' //ALINACAK ROL ID
let isimön = '' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let isimson = '' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 💖')
  
  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.addRole(albusem)
  },4000)
  
  
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Kayıt Yapıldı")
    .setThumbnail(message.author.avatarURL)
    .setDescription( `**Kayıt Edilen Kullanıcı :** **${member.user}** \n 
        **Teyit Eden Yetkili :**  ${message.author}  \n 
        **Kayıt Islemınde Verılen Rol :** <@&${verbuse}> \n
        **Alınan Rol :** <@&${albuse}>`)
client.channels.get('Kayıt Kanalının ID'si').send(embed)
};
  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek','e','man'],
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!erkek <yeni nick>'
}
