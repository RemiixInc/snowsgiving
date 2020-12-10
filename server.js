const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function() {
  console.log("Connected");
});

client.on("message", message => {
  if (message.content.startsWith(`<@!${client.user.id}>`) {
    (async () => {
      var voiceChannel = message.member.voice.channel;
      voiceChannel
        .join()
        .then(async connection => {
          const dispatcher = connection.play(
            "https://ice55.securenetsystems.net/DASH45"
          );
          dispatcher.on("finish", end => {
            voiceChannel.leave();
          });
        })
        .catch(err => console.log(err));
    })();
  }
});

client.login("BOT TOKEN");
