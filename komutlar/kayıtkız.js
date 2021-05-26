const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '751439982660681759' //KAYIT YETKİLİSİ ID
let verbuse = '751439985474797677' //VERİLECEK ROL ID
let verbusem = '751439985474797677' //VERİLECEK ROL ID
let albuse = '751439996166340618' //ALINACAK ROL ID
let albusem = '' //ALINACAK ROL ID l Kullanmicaksanız silin kötü gözükür .
let isimön =  '' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let isimson = '⁴⁶' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

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
    .setColor("PİNK")
    .setTitle("Kayıt Yapıldı")
    .setThumbnail(message.author.avatarURL)
    .setDescription( `**Kayıt Edilen Kullanıcı :** **${member.user}** \n 
        **Teyit Eden Yetkili :**  ${message.author}  \n 
        **Kayıt Islemınde Verılen Rol :** <@&${verbuse}> \n
        **Alınan Rol :** <@&${albuse}>`)
client.channels.get('782618496008847391').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['k','kız','kadın'],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!kız <yeni nick>'
}