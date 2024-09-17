const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "tr_en",
    desc: "Translate to english",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.maher-zubair.xyz/misc/translate?apikey=d2d02440c70a98a415&text=${q}&to=en`)

return reply(`${data.result}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "tr_si",
    desc: "Translate to sinhala",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.maher-zubair.xyz/misc/translate?apikey=d2d02440c70a98a415&text=${q}&to=si`)

return reply(`${data.result}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "tr_ta",
    desc: "Translate to tamil",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.maher-zubair.xyz/misc/translate?apikey=d2d02440c70a98a415&text=${q}&to=ta`)

return reply(`${data.result}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})