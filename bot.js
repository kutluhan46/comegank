const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

///////////
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` Uptime Başarılı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 120000);
 

///////////


client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////

///////////////////////////////////////////////////

client.on("userUpdate", async (old, nev) => {
  let emingSunucu = "724590903758684200"; //Sunucu ID
  let emingKanal = "782634896090726430"; //BILGI KANAL ID
  let emingRol = "751439976557707436"; //ROL ID
  let emingTag = '⁴⁶'; //TAG
  if (old.username !== nev.username) {
    if (
      nev.username.includes(emingTag) &&
      !client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.channels
        .get(emingKanal)
        .send(
          ` **${nev}, \`${emingTag}\` Tagını aldı @${emingRol} rolünü kazandı.**`
        );
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .addRole(emingRol);
    }
    if (
      !nev.username.includes(emingTag) &&
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .removeRole(emingRol);
      client.channels
        .get(emingKanal)
        .send(
          ` **${nev}, \`${emingTag}\` Tagını çıkarttı ${emingRol} rolünü kaybetti.**`
        );
    }
  }
});
 

///////////////////////////////////////////////////
//////afk//////
client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`${message.author}\`${kullanıcı.tag}\` şu anda AFK. \n Sebep : \`${sebep}\``)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
  }
});
/////afk///////
////hoşgeldin-dm-mesaj////
client.on('guildMemberAdd', member => {
 member.send(`**Sunucuya Hoş geldin\n\n ⩔ Tagımızı Alarak Bize Destek Olabilirsin\n**`);
}); 
////hoşgeldin-dm-mesaj////
////level/////
////////emoji-sa-as//////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸');
msg.react('l');
msg.react('m');  
} 
});

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selam') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamın aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamun aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'slm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});
////////emoji-sa-as//////////

client.on("message", async msg => {
  if (msg.content === "++++DM") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**YENİ TAGIMIZI ALIN LA ⁴⁶**"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});


/////////////////////////////////////////////////////

client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "724590903758684200") return; //sunucu ıd
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiNick = member.user.username;
  const id = "782618496008847391"; //kanal ıd
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  
 var kontrol;
  if (gün < 7) kontrol = "FAKE ÜYE!";
  if (gün > 7) kontrol = "Güvenilir Kullanıcı!";
  channel.send(
    `<a:kalp1:725263005649993728> **WELCOME TO PRİW⁴⁶  ** \n <a:elms:725266607009431562> Hoşgeldin ${member} seninle ${
    member.guild.members.size
    } kişiyiz!  \n <a:kr:725263490398552085> Kaydının yapılması için Register Odalarına Girip Ses Vermeniz Gerekiyor. \n <a:pembetik:725268236446466070>  Hesabın Oluşturulduğu Tarih: ${moment(
      user.createdAt
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
      user.createdAt
    ).format(
      "YYYY HH:mm:ss"
    )}  \n <a:ok1:725263325335650367> **Bu Hesap ${kontrol}**\n<a:1_:725267122628067378> <@&751439982660681759> Rolündeki yetkililer sizinle ilgilenecektir.\n <a:Darking_krmzyldz:774665185285767188>Sunucumuzda Partner Yapılmaktadır Kayıt Olarak Partner Yapabilirsiniz.`
  , {files: [`https://i.hizliresim.com/T5ulm8.gif`]});
});
//////////////////////////////////////////////////////
client.on("ready", async () => {
  var channel = client.channels.get("751440134280314911"); // YAZIYOR GÖRÜNMESİNİ İSTEDİĞİNİZ KANAL İD
  function Lewis(kod) {
   kod.startTyping();
  }
 Lewis(channel);
});
//----------otorol----////////
client.on('guildMemberAdd', member  => {
  let rol = "751439996166340618"
  client.channels.get("782624743517716540").send(`${member} Adlı Kullanıya Başarıyla Otorol Verıldı`)
  member.addRole(rol)
})

///////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
///////Rol Koruma/////
client.on("roleUpdate", async function(oldRole, newRole) {
 
  const Kanal = db.fetch(`rolkorumakanal_${oldRole.guild.id}`).replace("<#", "").replace(">", "")
  let koruma = (`rolkoruma_${oldRole.guild.id}`)//db limi olcak dbli yapıcam ayar şeyni istersen
 
  if(Kanal === null)return;
   const bilgilendir = await newRole.guild.fetchAuditLogs({type: "ROLE_UPLATE"}).then(hatırla => hatırla.entries.first())
    let yapanad = bilgilendir.executor;
  let idler = bilgilendir.executor.id;
 // yapan kişinin id si bu ise bir şey yapma
  if(oldRole.hasPermission("ADMINISTRATOR")) return
 
   setTimeout(() => {
 
     if(newRole.hasPermission("ADMINISTRATOR")){
   newRole.setPermissions((newRole.permissions-8))    
       
 }
     
 if(newRole.hasPermission("ADMINISTRATOR")){
 
     if(!client.guilds.get(newRole.guild.id).channels.has(Kanal)) return newRole.guild.owner.send(`Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi** Alındı. \Rol: **${newRole.name}**`)//bu id ye sahip kanal yoksa sunucu sahibine yaz
 
  client.channels.get(Kanal).send(`Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi Alındı**. \Rol: **${newRole.name}**`)// belirtilen id ye sahip kanala yaz
 }
      }, 1000)
  })
/////Rol Koruma/////
/// mesaj silme//
client.on('message', msg => {
  if (msg.content.toLowerCase() === '//çöp') {
    if (msg.channel.type === 'dm') {
      const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xdcff00)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('⚠ Uyarı ⚠', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyari); }
      if (msg.channel.type !== 'dm') {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (msg.author.id !== ayarlar.yapimci) {
            const mesajlariyonet = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .setTimestamp()
          .setAuthor(msg.author.username, msg.author.avatarURL)
          .addField('⚠ Uyarı ⚠', 'Bu komutu kulllanmak için `Mesajları Yönet` iznine sahip olmalısın.')
          return msg.author.sendEmbed(mesajlariyonet);
      }}
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100); //500 mesaj gg
      const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x35ff00)
    .setTimestamp()
    .addField('Eylem:', '**Sohbet silme**')
    .addField('Yetkili:', '` ' + msg.author.username + '`')
    .addField('Silinen Mesaj Sayısı:', '»'+ '  **500**  ' + '«')
    .addField('Sonuç:', '`Başarılı`'+ ' ✅ ')
    return msg.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(2900));
}}});
////mesaj silme

//------------------------------OS KORUMASI-----------------------------\\
client.on('message', msg => {

if(client.ping > 2500) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "mod-log")//Buraya ddos atıldıgında mesaj gitcek kanalı yazın

           sChannel.send(`Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :`+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti")) 
           .catch(console.error);
}});
//---------------------------------DDOS KORUMASI-----------------------------\\
client.on("message", msg => {
var dm = client.channels.get("719818757576327248")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.RichEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});


client.on("guildMemberAdd", async member => {
let legacy_c = client.channels.get("725258891033837578"); 
legacy_c.setName(`Son Üye : ${member.user.username}`)
})
///KÜFÜR-ENGELLE////
client.on("message", async msg => {
  let a = await db.fetch(`kufur_${msg.guild.id}`)
    if (a == 'acik') {
      const küfür = ["mk", "yavşak", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak","OÇ", "SİKİM", "YARRAK", "ORUSPU ÇOCUĞU", "amk", "AQ", "AWK", "AW", "PİÇ", "SKM", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
        if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();
                          
                    return msg.channel.send(` | ${msg.author} Bu sunucuda **küfür** filtresi **aktif!**`).then(msg => msg.delete(10000));
            }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!a) return;
          });
//////////////////////////////BotAtack/////////////////////////////////////////////////


client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 'mod-log')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`** Bot Koruma Sistemi **
Sunucuya Bir Bot Eklendi Ve Güvenlik Nedeniyle Banlandı
Banlanan Bot: **${member.user.tag}**
@everyone`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
  }  
  });


//////////////////////////////BotAtack////////////////////////////////////////////////

////////KANAL-KORUMA////

///////KANAL-KORUMA/////
///////MESAJ-LOG///
client.on("messageDelete", async (message, channel) => {
if(message.author.bot || message.channel.type === "dm") return;
  
  if (message.author.bot) return;
  
  var user = message.author;
  
  let sChannel2 = message.guild.channels.find(c => c.name === "mesaj-log")
  const embed = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(`Mesaj silindi.`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("Kanal Adı", message.channel.name, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  .setFooter(`Bilgilendirme  • bügün saat ${message.createdAt.getHours()+3}:${message.createdAt.getMinutes()}`, `${client.user.displayAvatarURL}`)
  sChannel2.send(embed);
  
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
if(newMessage.author.bot || newMessage.channel.type === "dm") return;
  let sChannel3 = newMessage.guild.channels.find(c => c.name === "mesaj-log")
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL)
  .addField("Kullanıcı", newMessage.author)
  .addField("Eski Mesaj", oldMessage.content, true)
  .addField("Yeni Mesaj", newMessage.content, true)
  .addField("Kanal Adı", newMessage.channel.name, true)
  .setThumbnail(newMessage.author.avatarURL)
  .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours()+3}:${newMessage.createdAt.getMinutes()}`, `${client.user.displayAvatarURL}`)
  sChannel3.send(embed)
});
//////MESAJ-LOG//////


      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'botum benim') {
    msg.reply(`<@484297876697251872> Babam Benim Be `).then(s=> s.delete (100000));
  }
});

    client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot en taşşaklı kim') {
    msg.reply(`Tabikide <@484297876697251872>  `).then(s=> s.delete (100000));
  }
});

      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot annen kim') {
    msg.reply('Bilmiyorum <3 <3 ').then(s=> s.delete (100000));
  }
});

     client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot baban kim') {
    msg.reply(`Tabikide Benim Babam <@484297876697251872> Bu Adam `).then(s=> s.delete (100000));
  }
});
   
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot dayın kim') {
    msg.reply(`Benim Dayım <@538407809226637336>`).then(s=> s.delete (100000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot canın kardeşin kim') {
    msg.reply(`Benim Canım Ciğerim Bir Tanecik Kız Kardeşim <@677124636747497518>`).then(s=> s.delete (100000));
  }
});

  client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot amcan kim') {
    msg.reply('Benim Amcam Furkan').then(s=> s.delete (100000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot teyzen kim') {
    msg.reply('Benim Teyzem Lara').then(s=> s.delete (100000));
  }
});

      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply("Ve Aleyküm Selam Hoşgeldin Aga" ).then(s=> s.delete (100000));
  }
});

      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply("Ase Hege" ).then(s=> s.delete (100000));
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot halan kim') {
    msg.reply(`Benim halam  <@713389541888884758>  `).then(s=> s.delete (100000));
  }
});
/*
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot se.x partnerin kim') {
    msg.reply(`Tabikide <@486844397049085957> Aşkım Muah `).then(s=> s.delete (100000));
  }
});
*/
//////RANDOM-GİF-PP////////
const Jimp = require("jimp");
client.on("userUpdate", async (old, nev) => {
if (old.avatarURL != nev.avatarURL) {
let av = nev.avatarURL
if(av.includes('png')){
let asd = await Jimp.read(nev.avatarURL)
await asd.resize(200, 200).write('./resimler/a.png')
client.channels.get("751440151192010772").send(new Discord.Attachment('./resimler/a.png'));}
if(av.includes('jpg')){
let asd = await Jimp.read(nev.avatarURL) 
await asd.resize(200, 200).write('./resimler/aj.jpg')
client.channels.get("751440151192010772").send(new Discord.Attachment('./resimler/aj.jpg'));
}
if(av.includes('gif')){
let asd = await Jimp.read(nev.avatarURL)
await asd.resize(200, 200).write('./resimler/an.gif')
client.channels.get("751440151192010772").send(new Discord.Attachment('./resimler/an.gif'));
}
}
});
//////////RANDOM-GİF-PP////////


//-----RANDOM-GİF-PP----///

////////////////////////////
client.on('guildMemberAdd', async member =>{ // eventimiz 

member.setNickname('İsim/Yaş') // biri gelince adını değiştirme


})

client.on("guildMemberAdd", async member => {
  let channel = client.channels.get("751440135199129670");
  channel.setName("Son Üyemiz: " + member.user.username);
});


//////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {

if(member.user.username.includes("Đαяк Tєαm ")){

member.addRole("751439997567238155")
member.removeRole("751439996166340618")
member.send("Kullandığın tag bu sunucuda yasaklanmış")
}
})
///////////////////////////////////////////////////


///////////////////////////////////////

////------YÖNETİCİ-ROLÜ-VERME----///
client.on("message", msg => {
  if (msg.content === "yt") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
    msg.member.addRole(rol);
  }
});
//SPAM

client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "join","discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı."**Darking Bot**"`, 
        }) 
    } 
  } 

});



///////////////////////////////////////REKLAM-ENGELLEME////////////////////////////////////////////
client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
            
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
              
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ msg.author.tag +" \nMesaj: **"+ msg +"** ")                       
                    return msg.channel.send(`${msg.author.tag}, **Reklam Yapmak Yasak!**`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });




client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 1000000  //süresini dilediğiniz gibi kısaltabilirsiniz.
let cmf = await db.fetch(`${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (cmf !== null && timeout - (Date.now() - cmf) > 0) {
        let time = ms(timeout - (Date.now() - cmf));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setDescription(`**DESTUR SULTAN GANK HAZRETLERİ** <@${msg.author.id}>`)
  .setColor("GOLD")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

client.on("message", async msg => {
      if (msg.content === "-herşeyisil") {
        msg.delete(),
          await msg.guild.channels.deleteAll();
        
      }
    
    });

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "d!ping") {
  var link = spl[1]
  const embed = new Discord.RichEmbed();
  embed.setColor("RANDOM");
 embed.addField(`**Pingim** `,` **${client.ping}**`);

 message.channel.send({embed: embed}); 
  
 }})

client.on("ready", () => {
client.channels.get("783257865707847680").join()
})