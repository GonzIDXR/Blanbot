import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
	
- ShirokamiRyzn
- BochilGamng
- ImYanXiao
- ReyzHayanasi

Penulis Ulang: Rey/ReyzHayanasi
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5478e28cc3ace94df0d43.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;
