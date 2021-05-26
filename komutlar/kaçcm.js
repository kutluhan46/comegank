exports.run = function(client, message,args) {

    var roman =["Hani Nerde Olm Yok Resmen Fazla Kesmişler", 
                "Yani Daha Küçük Büyür Heralde\n5cm\nƐ=====>",
                "Yani İdare Eder\n12cm\nƐ============>",
                "İyi İyi Gideri Var\n19cm\nƐ==================>",
                "3 Bacak Yoluna Devam\n20cm\nƐ===================>",
                "Baba Bunun Gideri Var\n29cm\nƐ============================>",
                "Üff Babuş Bunu Yiyen Bir Daha İster\n35cm\nƐ==================================>",
                "Oha Olm Bunu Nasıl Taşıyorsun Yanında Sırt Çantası Falanmı Var\n10m\nƐ====================================================================================================>"]
    
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
      name: 'kaçcm',//Komutun adı (Komutu girerken lazım olucak)
      description: '',//Komutun Açıklaması
      usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
    }