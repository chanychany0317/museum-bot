const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODUxMzAzNDkzMTE3NjczNTEy.YL2UKQ.W991Fu8uaY4gHh46dgwpap1gmCQ';

client.on('ready', () => {
  console.log(`Logged in as museum`);
  client.user.setActivity("박물관 관리", {
    type: "PLAYING"
  });

client.on('message', (msg) => {
    if(msg.author.bot)return;
    if(msg.content.includes('ㅋ')) {
        msg.channel.send('키읔')
    }

    if(msg.author.bot) return;
    var blacklisted = ['ㄴㄱㅁ', 'ㄴㄱㅂ', '느금마', '느개비', '섹스', '딸', '섹', 'ㅅㅅ', '시발', '씨발', 'ㅅㅂ', 'ㅈㄴ', '존나', 'sex', '병신', '개새', '개새끼', 'testdfgsdfdgdsfgsdfgsdfg'];
    for (var i in blacklisted) {
      if (msg.content.includes(blacklisted[i])){
        const embed = new Discord.MessageEmbed()
        .setAuthor("박물관봇", "https://cdn.discordapp.com/avatars/851303493117673512/2931dcb72d4786bc5f2a7f390c4336b6.png?size=256")
        .setTitle("경고")
        .setColor("##ff0000")
        .setDescription(`<@${msg.author.id}>욕은 검열 및 경고조치 됩니다`)
        msg.channel.send(embed)
        msg.delete();
        msg.channel.send(`!warn <@${msg.author.id}>`)

      
     }
    }});
  })
client.login(token);