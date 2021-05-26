const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send(`---Priw⁴² Kuralları---\n\n
                       Küfür Ve Argo Kullanımı Yasaktır.\n
                       Birilerine Sataşmak, Aşağılamak, Dışlamak, Ayrımcılık Yapmak Ve Trollemek Yasaktır.\n
                       Sunucuda Dini, Irki Ve Siyasi Görüşleri Tartışmak Yasaktır.\n
                       Caps Lock İle Abartıcak Şekilde Random Vb. Yasaktır.\n
                       Bir Kural İhlali Gördüğünüzde Lütfen Yetkililere Bildiriniz.\n
                       Odalarda gereksiz yere mikrofon kullanımı yasaktır.(Boş Yere Bass Açma-Troll Yapmak)\n
                       Sunucudaki Bayanları Rahatsız etmek Kesinlikle Yasaktır.\n
                       Yetki Veya Röl İstemek Yasaktır.\n
                       Yetkilileri Boş Yere Rahatsız Etmek Yasaktır.\n
                       Cinsel (Pornografik), Kan Ve Küfur İçerikli Herhangi Paylaşım Yasaktır.\n
                       Yetkili Birine Saygısızlık Yapmak Yasaktır.\n
                       Spam Ve Flood Yapmak Yasaktır.\n
                       Çekiliş, Youtube Ve Twitch Kanal Linki Paylaşımı Yasaktır.\n
                       Reklam Veya Tanıtım Yapmak Yasaktır.\n
                       DM Üzerinden Veya Başka Bir Şekilde Discord Sunucu Reklamı Yapmak Yasaktır.\n
                       Bu Sunucu Üyelerini Başka Sunucuya Davet Etmek Yasaktır.\n
                       Kişisel Ban/Kick/Mute/Seslide Mute/Jail Atmak Yetkinizin Bir Alt Seviyeye Çekilir. Olay Bir Daha Tekrarlanırsa Yetkinit Alınır.\n
                       Ben Allahım demek/ Allah'a Sövmek UYARI+BAN SEBEBİDİR\n
                       ==Kurallarımız Bu Kadardır==n\n\n
                       **Kuralları Okumak Zorunludur. Üstünüzde Bir İşlem Yapılırsa Kuralları Okumuş sayılacaksınız**
            ` )
}

exports.conf = {   
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

  exports.help = {
  name: "krl",
  description: "tag",
  usage: "tag"
};