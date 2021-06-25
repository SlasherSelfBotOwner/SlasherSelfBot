function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const dogFacts = require('dog-facts');
const align = require('center-align')
const clc = require("cli-colors")
const superagent = require("superagent")
const client = new Discord.Client();
const token = ""
let prefix = "?";
let BotVersion = "Slasher Dev V4";



client.on('ready', () => {
    var center = require('center-align');
    console.log(clc.red(` 
      ██████   ███                                                     
    ███    ███ ███                    ███                              
     ███       ███    ███      █████  ███         ███     ██ ████      
       ███     ███  ███  ███  ███     █████     ██   ███   ███         
          ███  ███ ███   ███    ████  ███  ██  █████████   ███         
    ███    ███ ███ ███   ███      ███ ██   ███ ██          ███         
      ██████   ███   ███ ████ ██████  ██   ███   █████    ████         
`, process.stdout.columns));
    console.log('Status')
    console.log(clc.white(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`, process.stdout.columns));
    console.log(`Version[4]`);
    console.log(`Status [online]`);
    console.log(`Dev Status [40%]`);
    console.log(clc.white(` `, process.stdout.columns));
    console.log('READ ALL INFO BELOW')
    console.log(`AS SELFBOTS ARE AGAINST DISCORD'S TOS`);
    console.log(`PLEASE NOTE THAT YOUR ACCOUNT IS AT RISK`);
    console.log(`SLASHER ON A WHOLE IS NOT RESPONSIBLE FOR ANY BANS`);
    console.log(`SLASHER IS ALSO I SOMETHING I DO AS A HOBBY SO THATS WHY ITS NOT THE GREATEST`);
    console.log(clc.white(` `, process.stdout.columns));
    console.log(`SLASHER COMMANDS`);
    console.log("?MENU", "THE COMMANDS FOR SLASHER");
    console.log("?USER", " this command will bring up the USER tab");
    console.log("?FUN", " this command will bring up the FUN tab");
    console.log("?STORES", " this command will bring up the STORES tab");
    console.log("?Raid", " this command will bring up the RAID tab");
    console.log("?Kill", "Kills the selfbot");
});

  client.on('message', msg => {

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (msg.content.startsWith(prefix + 'MENU')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Slasher Commands')
                .addField("?USER", "will bring up the USER tab")
                .addField("?FUN", "will bring up the FUN tab")
                .addField("?ANIMAL", "will bring up the FUN tab")
                .addField("?ABUSE ","will bring up the ABUSE tab")
                .addField("?STORES ","will bring up the STORES tab")
                .addField("?Raid ","will bring up the Raid tab")
                .addField("?Kill","This Will Kill The SelfBot")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'STORES')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Recommended stores')
                .addField("?Mod-Menus", " this command will bring up the mod menu stores  tab")
                .addField("?Coldwar-gta-recoveries", " this command will bring up the Coldwar-gta-recoveries tab")
                .addField("?Accounts", "This command will bring up the account stores tab")
                .addField("?Self-bots", "This command will bring up the selfbot stores tab")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'Accounts')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Recommended stores')
                .addField("Bob's Burger Shop", "https://discord.gg/5pGTGxqGpW")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'Self-bots')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Recommended stores')
                .addField("henpett1's Store", "https://www.excessum.org/")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'Coldwar-gta-recoveries')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Recommended stores')
                .addField("Syphon Services", "https://discord.gg/syphonservices")
                .addField("Ghostys Services", "https://discord.gg/RMcmbUhVRe")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'Mod-Menus')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Recommended stores')
                .addField("Retro Recoveries", "https://retrorecoveries.com/")
                .addField("Eleniummods", "https://eleniummods.com/")
                .addField("Arch's store", "https://kingofcash.store/")
                .addField("Bsences store", "https://bsense.store/")
                .addField("henpett1's Sellix Store", "https://www.excessum.org/")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb  ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher DEV V4', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
 
    if (msg.content.startsWith(prefix + 'USER')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/R93959fd7d21b920019aebf8fefa577e8?rik=0EOC92og8ZFqOQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('USER Commands')
                .addField("?Latency", " this command will show your latency")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher Self Bot', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content.startsWith(prefix + 'FUN')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/Rf0bb325b9a41fae0f19b30c4014fd613?rik=Pr4sVIRTZFbteQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('FUN Commands')
                .addField("?Gay", " this command will show you how gay you are")
                .addField("?Chicken-nugget", " this command will show you how much of a chicken nugget you are")
                .addField("?Straight", " this command will show you how straight you are")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher Self Bot', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }

    if (msg.content.startsWith(prefix + 'ABUSE')) {
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/R93959fd7d21b920019aebf8fefa577e8?rik=0EOC92og8ZFqOQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Abuse Commands')
                .addField("?Channel-Maker", " this command currently is not working due to api errors will be fixed in v5")
                .addField("?Swastica", "Spam Swasticas")
                .addField("?GayEvery1", "call @everyone gay")
                .setFooter('Join my server https://discord.gg/99u6EAHxzb ', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher Self Bot', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content === prefix + 'Raid'){
        if (msg.author.id !== client.user.id) return;
        if (!args.length) {
            msg.delete()
                // HELP        

            const ping1 = new Discord.MessageEmbed()
                .setThumbnail('https://th.bing.com/th/id/R93959fd7d21b920019aebf8fefa577e8?rik=0EOC92og8ZFqOQ&pid=ImgRaw')
                .setColor('#ff0000')
                .setTitle('Raid Options')
                .addField("?Channel-Maker", "You must have manage channels to use this command")
                .addField("?Ghost-pinging", "will @everyone over 500 times")
                .addField("?Channel-delete", "will delete all channels")
                .setFooter('Creadit to @henpett1#4781 on discord for the channel maker and deleter', 'https://th.bing.com/th/id/Rce64d49d38069b423e21e3f1030290ef?rik=uA%2bdNb5osfK1%2fQ&riu=http%3a%2f%2fgame-icons.net%2ficons%2fdelapouite%2foriginals%2fpng%2fffffff%2ftransparent%2finvisible.png&ehk=hh9WbDwFBjEYQgrsYqKlIR8DGrNr8EtEmmf26%2bHZtKo%3d&risl=&pid=ImgRaw')
                .setTimestamp('Slasher Dev V4')
                .setAuthor('Slasher Self Bot', icon_url = 'https://cdn.discordapp.com/attachments/844315101422026844/850110394860961822/unknown.png')
            msg.channel.send(ping1).then(msg => {
                msg.delete({ timeout: 5500 /*time unitl delete in milliseconds*/ });
            })







        } else {
            return msg.reply("This command doesnt exist.");
        }
    }
    if (msg.content === '@everyone') {
        console.log(` `);
        console.log(`Someone pinged you`);
        console.log('${msg.author.tag} ${msg.content')
        console.log(` `);
    }

    if (msg.content === '@here') {
        console.log(` `);
        console.log(`Someone pinged you`);
        console.log('${msg.author.tag} ${msg.content')
        console.log(` `);
    }


    if (msg.content === prefix + 'Chicken-nugget') {
        if (msg.author.id !== client.user.id) return;
        msg.reply("You are: " + getRandomInt(100) + "% a chicken nugget.")
        msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/ });
    }

    if (msg.content === prefix + 'GayEvery1') {
        if (msg.author.id !== client.user.id) return;
        msg.reply("@everyone you are gay")
        msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/ });
    }

    if (msg.content === prefix + 'Gay') {
        if (msg.author.id !== client.user.id) return;
        msg.reply("You are: " + getRandomInt(50) + "% a gay.")
        msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/ });       
    }

    if (msg.content === prefix + 'Straight') {
        if (msg.author.id !== client.user.id) return;
        msg.reply("You are: " + getRandomInt(100) + "% Straight")
        msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/ });
    }


    if (msg.content === prefix + 'Swastica') {
        if (msg.author.id !== client.user.id) return;
        msg.reply("卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐")
        msg.reply("卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐")
        msg.reply("卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐")
        msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/ });
    }


    if (msg.content === prefix + 'Channel-delete') {
        if (msg.author.id !== client.user.id) return;
        msg.guild.channels.cache.forEach(channel => channel.delete());
    }

    if (msg.content === prefix + 'Kill') {
        msg.delete()
        if (msg.author.id !== client.user.id) return;
        console.log(clc.red(` `));
        console.log(clc.red(`the command killbot was used!`));
        console.log(clc.red(` `));
        process.exit();
    };

    
    if (msg.content === prefix + 'Channel-maker') {
        if (msg.author.id !== client.user.id) return;
        console.log("Nuking Started");
        msg.guild.channels.cache.forEach(channel => channel.delete());
        msg.guild.setName('Raided By Slasher Selfbot');
        msg.guild.channels.create('Server finna go byebye');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');
        msg.guild.channels.create('i like the new server🤣');




    }



      if (msg.content === prefix + 'Ghost-pinging') {
        if (msg.author.id !== client.user.id) return;
        msg.delete()
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")
        msg.reply("@everyone")
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")     
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")        
        msg.reply("@everyone")       
        msg.reply("@everyone")   
        msg.reply("@everyone")        
        msg.reply("@everyone")
      };




  }); 
  

client.login(token);