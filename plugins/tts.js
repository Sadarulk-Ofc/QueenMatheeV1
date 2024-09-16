const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "tts",
    desc: "Text to speech",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply ("*_Please give me a text._*")

let data = await fetchJson(`https://api.maher-zubair.xyz/tts/text-to-speech?apikey=0e8eb80c94cb76da81&lang=en-US&text=${q}`)

await conn.sendMessage(from,{audio: {url: data.result},mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})