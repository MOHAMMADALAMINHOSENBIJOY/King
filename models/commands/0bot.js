const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot222",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", " কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাকছো কেনো আসো বুকে আশো🥱","হুম জান তোমার অইখানে উম্মমাহ😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস সবুজ কে একটা গফ দে 🙄","জান হাংগা করবা😁😁","ডাক দিও না আজকে আমার মন ভালো নেই 🥺","কি হইছে জান পমপম খাবা😐"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Love you")) {
     return api.sendMessage("Hmm... বস সবুজ ও তোমাকে ভালোবাসে😇😻 :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };

    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "Will you marry me bot") || (event.body.toLowerCase() == "Will you marry me bot")) {
     return api.sendMessage("আমি বিয়ে করবো না বস সবুজ এর সাথে যোগাযোগ করুন🫡", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "pavel")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "I love you bot")) {
     return api.sendMessage("আমি রোবট তাই প্রেম করতে পারবো না😥\nআমার বস সবুজ এর সাথে প্রেম কর😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "ccc")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\nতরা যেভাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };

   if ((event.body.toLowerCase() == "chi") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\n তরা যেভাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুয়ালাইকুম") || (event.body.toLowerCase() == "আসসালামুয়ালাইকুম")) {
     return api.sendMessage("️ - ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "আস-সালামু আলাইকুম") || (event.body.toLowerCase() == "আস-সালামু আলাইকুম")) {
     return api.sendMessage("- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "Assalam") || (event.body.toLowerCase() == "salam")) {
     return api.sendMessage("কিরে সালাম দিতে কষ্ট হয়😡\nকষ্ট হলে দিস না🙂\n তাও পাপ কামাই করিস না🙂", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "বাল")) {
     return api.sendMessage("~বাল‌ বাল করস কেন 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Hmm... বস সবুজ ও তোমাকে ভালোবাসে😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
