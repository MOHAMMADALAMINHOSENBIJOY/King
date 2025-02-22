module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "★彡[ʙʏ ᴋᴀᴡꜱᴀʀ]彡★",
  description: "Restart Bot",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`╭───────♻️\n│${global.config.BOTNAME} is \n│🔄RESTARTING...\n│▄▄▄▄▄▄▄▄▄▄\n│么System RESTART Successful☑\n│么Processing time: 4s\n│▄▄▄▄▄▄▄▄▄▄\n│🅱🅾🆃 ★彡[Sobuj]彡★\n╰───────────⧕`, threadID, () => process.exit(1));
}