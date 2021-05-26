const chalk = require("chalk");
const Moment = require("moment");
const Discord = require("discord.js");
let prefix = "Bot Prefixi";
module.exports = client => {
  const aktiviteListesi = [
    "Pιяιω⁴²  ❤️ GanK"

  ];

  client.user.setStatus("dnd"); //online = çevrimiçi // idle = boşta // dnd = rahatsız etmeyin

  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1));
    client.user.setActivity(aktiviteListesi[Aktivite]);
  }, 2 * 2500);
};

