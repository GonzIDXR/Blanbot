let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
    let teks = `
︵‿︵‿︵‿︵ *DONASI BOT* ︵‿︵‿︵‿︵
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [ 083181666350 ] 
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [ 083181666350 ]
│ • *Saweria:* [ saweria.co/ReyzXd ]
❏────

*ʙᴀᴄᴋ ᴛᴏ ᴀʟʟ ᴍᴇɴᴜ*: .?
*ᴘɪɴɢ*: .ping
*ᴄʀᴇᴀᴛᴏʀ*: .creator
︵‿︵‿︵‿︵︵‿︵‿︵‿︵︵‿︵‿︵‿
Created by Reyz
`

    let you = flaaa.getRandom()

    await conn.sendFile(m.chat, you + 'Donasi', 'donasi.jpg', m); 
};

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)$/i;

export default handler;
