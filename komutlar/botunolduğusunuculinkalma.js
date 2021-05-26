const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

const embed = new Discord.RichEmbed()

  .setColor('RANDOM')

  .setTitle("Bot Adı Diyorki;")

  .addField(`sahip bey dmden davet gönderdim 😜`,` Bot Adı İnvite Alma`)

    if (message.author.id !== "484297876697251872") return;

    let sv = client.guilds.get(args[0])

    if (!sv) return message.channel.send(`Botun Ekli Olan Sunucu ID Giriniz`)

    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

message.channel.send(embed)

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["invite"],

  permLevel: 4

};

exports.help = {

  name: 'invite',

  description: 'davet sistemi .',

  usage: 'invite'

};