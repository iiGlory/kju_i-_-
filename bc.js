const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', async() => {
var server = "399549569769144320"; // ايدي السررفر
var channel = "515593865575661578";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Glory is the best , Glory is the best , Glory is the best , Glory is the beste , Glory is the best , Glory is the best , Glory is the best , **')
    },305);
});





client.login("NTA2NDU3OTE2MTQ5MDcxODcy.DtwPyQ.UeAJ8rgcmCnz3ZNEOcUSVN844uI");
