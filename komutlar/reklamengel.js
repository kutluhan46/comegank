const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` <a:reddetmek:754599471580446810>  Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`<a:reddetmek:754599471580446810>  Reklam Filtresini Ayarlamak İçin \`reklam-engelleme aç\` | Kapatmak İstiyorsanız \`reklam-engelleme kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`<a:reddetmek:754599471580446810>  Reklam Filtresini Ayarlamak İçin \`reklam-engelleme aç\` | Kapatmak İstiyorsanız \`reklam-engelleme kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<a:emoji:759035318556688405> Reklam Filtresi başarıyla ayarlandı.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`<a:emoji:759035318556688405> Reklam Filtresini Kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 2
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: 's$$kanal'
};