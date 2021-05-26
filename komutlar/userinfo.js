const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "kendi bot adÄ±nÄ±z"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
        let user = msg.mentions.users.first() || msg.author;
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `RahatsÄ±z Etmeyin`)
        .replace("online", `Ã‡evrimiÃ§i`)
        .replace("idle", `BoÅŸta`)
        .replace("offline", `Ã‡evrimdÄ±ÅŸÄ±`)
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**DD** MMMM **YYYY** dddd **[GÃ¼nÃ¼]** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**SalÄ±**`)
        .replace("Wednesday", `**Ã‡arÅŸamba**`)
        .replace("Thursday", `**PerÅŸembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Åžubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**MayÄ±s**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**AÄŸustos**`)
        .replace("September", `**EylÃ¼l**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**KasÄ±m**`)
        .replace("December", `**AralÄ±k**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**DD** MMMM **YYYY** dddd **[GÃ¼nÃ¼]** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**SalÄ±**`)
        .replace("Wednesday", `**Ã‡arÅŸamba**`)
        .replace("Thursday", `**PerÅŸembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Åžubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**MayÄ±s**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**AÄŸustos**`)
        .replace("September", `**EylÃ¼l**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**KasÄ±m**`)
        .replace("December", `**AralÄ±k**`)
         
        const uembed = new Discord.RichEmbed()
        .setThumbnail(userinfo.avatar)
        .setColor('RANDOM')
        .setTitle('KullanÄ±cÄ± Bilgi')
        .addField("KullanÄ±cÄ±", `<@!${userinfo.id}>`, true)
        .addField("KullanÄ±cÄ± ID", `**${userinfo.id}**`, true)
        .addBlankField()
        .addField("Durum", `**${userinfo.status}**`, true)
        .addField("Åžuan OynadÄ±ÄŸÄ± Oyun", `__**${userinfo.od1}**__`, true)
        .addBlankField()
        .addField("Sunucuya KatÄ±lma Tarihi", `${userinfo.dctarihkatilma}`, true)
        .addField("Hesap OluÅŸturma Tarihi", `${userinfo.dctarih}`, true)
        .setFooter('ContraBey Code - KullanÄ±cÄ± Bilgi')
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["info","kullanÄ±cÄ±-bilgi","k-bilgi","userinfo"],
  permLevel: 0
};
exports.help = {
  name: 'userinfo',
  description: 'Ä°stediÄŸiniz kullanÄ±cÄ±nÄ± bilgilerini gÃ¶sterir.',
  usage: 'userinfo'
};