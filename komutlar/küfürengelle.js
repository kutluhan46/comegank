const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(': | Yetersiz **yetki!**')
  
  if (!args[0]){
    message.channel.send(' | Geçersiz argüman; **( aç `/` kapat )**')
  }
  if (args[0] === 'aç'){
    message.channel.send(" | Küfür filtresi **aktif!**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send(' | Küfür filtresi **deaktif!**')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 0
}
exports.help = {
  name: "küfür",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}