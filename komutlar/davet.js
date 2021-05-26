const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
      return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu Sunucunun Davet Linki.\nhttps://discord.gg/${invite.code}`).setColor(10038562));
      }
    
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'Bulunduğunuz sunucunun davet linkini atar.',
    usage: 'davet'
  };