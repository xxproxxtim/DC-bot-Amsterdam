const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("!info", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }

    if (command === `${prefix}info`) {

        var botEnbed = new discord.MessageEmbed()
        .setTitle("Amsterdam info")
        .setDescription("Info van Amsterdam.")
        .setColor("#e0cc10")
        .addFields(
            {name: "Bot naam:", value: client.user.username}
        )
        .setTimestamp();
 
        return message.channel.send(botEnbed);
    
    }

    if (command === `${prefix}serverinfo`) {
 
        var serverEmbed = new discord.MessageEmbed()
            .setDescription("Info van deze server.")
            .setColor("#e0cc10")
            .addField("Bot naam", client.user.username)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);
 
        return message.channel.send(serverEmbed);
    }
 
});