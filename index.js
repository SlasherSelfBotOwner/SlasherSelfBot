var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Using slasher selfbot",
assets : {
large_image : "coolcat",
large_text : "You know whats really cool" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Syphon Services" , url : "https://discord.gg/vM72Tamtc2"},{label : "Slasher Self Bot Discord",url : "https://discord.gg/SvbqE8vxUv"}]
}
})
})
client.login({ clientId : "857027688384167947" }).catch(console.error);