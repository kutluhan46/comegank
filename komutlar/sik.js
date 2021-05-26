exports.run = function(client, message,args) {

    var roman =["Orası Göbek Deliği",
                "5cm Girdin\nÇok Zevk Verdiremedin",
                "15cm Girdi\n5cm Daha Girse Müq Zevk Alcaktı",
                "25cm Girdi\nOlm O nE Lan Sen Zevk Vermekten Anlıyorsun",
                "36cm Girdi\nBaban Zenci Flnmı?",
                "55cm Girdi\nOlm Buda İyi Müq",
                "120cm Girdi\nAdam Öldü Amına Koyim",
                "280cm Girdi\nBunu Yiyip Sağlam Duran Varsa NBLM",
                "340cm Girdi\nYani Söyleyecek Bişey Bulamıyorum",
                "1000cm Girdi\nTarzan Kabilesindenmisin Aq",
               "1000000km Girdi\nOa O Ney Amk",]
    
        let cevap = Math.floor((Math.random() * roman.length));
    
    message.channel.send(roman[cevap])
    };
    
    exports.conf = {
      enabled: true,//True => Komut açık, False => Komut kapalı 
      guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
      aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
      permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
    };
    
    exports.help = {
      name: 'sik',//Komutun adı (Komutu girerken lazım olucak)
      description: '',//Komutun Açıklaması
      usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
    }