const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', async() => {
var server = "399549569769144320"; // ايدي السررفر
var channel = "515593865575661578";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Glory is the best , Glory is the best , Glory is the best , Glory is the beste , Glory is the best , Glory is the best , Glory is the best , **')
    },305);
 
    client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(/)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

 if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

  

 


if (command == "embed") {

    let say = new Discord.RichEmbed()

    .setDescription(args.join(" "))

    .setColor(0x23b2d6)

    message.channel.sendEmbed(say);

    message.delete();

  }



});





client.login("NTA2NDU3OTE2MTQ5MDcxODcy.DtwPyQ.UeAJ8rgcmCnz3ZNEOcUSVN844uI");
