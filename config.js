/*
 *Base By Siputzx
 *Pengembang PakoyOffC
 *YT : PakoyOffC / CubluxStore
 *TT : PakoyOffC
 *IG : CubluxStore
 *WA : 089512569449
 
 ─┉┈◈ * BIG THANKS TO *◈┈┉

 Srip Base Ori From Siputzx 
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Siputzx (Penyedia Base) 
» PakoyOffC (Pengembang)
» Penyedia Module & Api
» Dika (Partner)
» Adam (Partner)
» Kyu (Partner)
» FarisOfC (Partner)
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//—————「 Set Owner 」—————//
global.owner = '2348122441244' // UBAH AJA NO OWNER
global.nomerowner = ["2348122441244"] // UBAH AJA NO OWNER
global.namabot = 'Dark-Love-MD-V1' // UBAH AJA NAMA BOT LU
global.namaowner = 'AY TECH' // UBAH AJA NAMA OWNER

//—————「 Set Watermak 」—————//
global.packname ='𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 Dark-Love-MD-V1' //NAMA STICKER
global.author = 'Dark-Love-MD-V1'// UBAH AUA NAMA LU
global.foter1 = '𝚂impl𝚎 𝙱𝚘𝚝 𝙱𝚢 Dark-Love-MD-V1' // BEBAS
global.foter2 = '𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 AY TECH' // BEBAS
global.foter3 = 'Dark-Love-MD-V1 ʙʏ AY TECH' // BEBAS
global.foter4 = 'Dark-Love-MD 𝚅 𝟷' // BEBAS
global.idcennel = 'NONE' // BEBAS
global.thumb = 'https://files.catbox.moe/alffgj.jpg' // BEBAS
global.gc = 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'// BEBAS

//—————「 DATABASE 」—————//
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // JANGAN DI UBAH ERROR NANTI

//—————「 Global Mess 」—————//
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗ Add This Bot As The Admin To Process This Action/Command!*_',
    botAdmin: '_*❗This Feature Can Only Be Used When The Bot Is A Group Admin !*_',
    owner: '_*❗This Feature Can Be Used By My Handsome Owner Only !*_',
    group: '_*❗This Feature Is For Groups Chat !*_',
    private: '_(❗This Feature/Command Is Only For Private Chat !*_',
    wait: '⏳ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐...',
}

//—————「 Set Apikey 」—————//
global.APIs = {
    xyro: "https://api.xyroinee.xyz", // ISI SAMA API LU
    popcat : 'https://api.popcat.xyz' // ISI SAMA API LI
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "5dRkJDWvIG", // ISI SAMA APIKEY LU
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
