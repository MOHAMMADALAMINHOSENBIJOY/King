module.exports.config = {
 name: "Antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "ARIF BABU",
 description: "THIS BOT WAS MADE BY MR ARIF BABU"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "🙄🙄🙄🙄🙄🙄";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`😏😏😏😏😏`, event.threadID)
   } else api.sendMessage(`🥱🥱🥱🥱🥱`, event.threadID);
  })
 }
}