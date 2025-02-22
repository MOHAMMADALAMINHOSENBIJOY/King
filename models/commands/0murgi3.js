module.exports.config = {
  name: "murgi3",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "...",
  description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
  commandCategory: "nsfw",
  usages: " please @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("আপনি কাকে চুদতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("তোর সবুজ বাপ এর চোদা লো");
setTimeout(() => {a({body: "খাংকির পোলা তর মারে চুদি  AMi S4B7Z (✷‿✷) BoT 🥰।" + " " + name, mentions: arraytag})}, 300);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি বোন রে আমি সবুজ চুদি  😍.." + " " + name, mentions: arraytag})}, 350);
setTimeout(() => {a({body: "মাদারচোদ তর আম্মু পম পম খাংকির পো আমি তোর বাপ সবুজ 🐰" + " " + name, mentions: arraytag})}, 400);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি ভুদায় ভুদায় কামর দিমু i Am তোর আব্বু সবুজ 💔!" + " " + name, mentions: arraytag})}, 450);
setTimeout(() => {a({body: "খাংকি মাগির পোলা কথা ক কম কম তর আম্মু রে চুদে বানামু আইটেম বোম " + " " + name, mentions: arraytag})}, 500);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + " " + name, mentions: arraytag})}, 550);
