const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', async() => {
var server = "399549569769144320"; // ايدي السررفر
var channel = "407304549653807105";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
});





client.login("NTE0ODE2NDc2NzQ2NjEyNzM2.DtcEHQ.5NIUWDVlAPZxBGpmaLBtarb3UHA");