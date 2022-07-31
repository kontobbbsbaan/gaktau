
const fs = require("fs")
const chalk = require("chalk")
/*Ubah Nama & Dll Cukup Dari sini(Udah Di set biar smua nama & wm Bisa diubah dari sini) 
Biar Newbie Gapusing ubah nama² 
Other*/
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6283833694338']
global.footer = "「ñå†§µ м∂ ೄྀ​᭄」"
global.fake = "Deffbotz ~ Deff"
global.namebot = "「ñå†§µ м∂ ೄྀ​᭄」"
global.packname = "𝗕𝗬 𝗡𝗔𝗧𝗦𝗨 𝗠𝗗/n𝗝𝗔𝗡𝗚𝗔𝗡 𝗗𝗜 𝗔𝗠𝗕𝗜𝗟 𝗬𝗔/n𝗡𝗢𝗠𝗘𝗥 +62 838-3369-4338/n​᭄/n♨️/n🌹
global.packname2 = "「ñå†§µ м∂ ೄྀ​᭄」"
global.author = "「ñå†§µ м∂ ೄྀ​᭄」"
global.email = ""
global.game = "ñå†§µ Game"
global.nameown = "©ɳαƚʂυ ɱԃ"
global.resultwibu = "Wibu"
global.nameyt = ""
global.instagram = ""
global.sessionName = "session"
global.github = "https://github.com/Kianganz1"
global.done = "𝗗𝗢𝗡𝗘"
global.linkgrupss = "https://chat.whatsapp.com/LKmbdt3kuu23VmzRZYyUVF"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '𝗦𝗨𝗖𝗖𝗘𝗦𝗦',
    admin: '𝗙𝗜𝗧𝗨𝗥 𝗞𝗛𝗨𝗦𝗨𝗦 𝗔𝗗𝗠𝗜𝗡 𝗚𝗥𝗢𝗨𝗣!',
    botAdmin: '𝗕𝗢𝗧 𝗛𝗔𝗥𝗨𝗦 𝗠𝗘𝗡𝗝𝗔𝗗𝗜 𝗔𝗗𝗠𝗜𝗡 𝗧𝗘𝗥𝗟𝗘𝗕𝗜𝗛 𝗗𝗔𝗛𝗨𝗟𝗨!',
    owner: '𝗙𝗜𝗧𝗨𝗥 𝗞𝗛𝗨𝗦𝗨𝗦 𝗢𝗪𝗡𝗘𝗥 𝗕𝗢𝗧',
    group: '𝗙𝗜𝗧𝗨𝗥 𝗗𝗜𝗚𝗨𝗡𝗔𝗞𝗔𝗡 𝗛𝗔𝗡𝗬𝗔 𝗨𝗡𝗧𝗨𝗞 𝗚𝗥𝗢𝗨𝗣!',
    private: '𝗙𝗜𝗧𝗨𝗥 𝗗𝗜𝗚𝗨𝗡𝗔𝗞𝗔𝗡 𝗛𝗔𝗡𝗬𝗔 𝗨𝗡𝗧𝗨𝗞 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗖𝗛𝗔𝗧!',
    bot: '𝗙𝗜𝗧𝗨𝗥 𝗞𝗛𝗨𝗦𝗨𝗦 𝗣𝗘𝗡𝗚𝗚𝗨𝗡𝗔 𝗡𝗢𝗠𝗢𝗥 𝗕𝗢𝗧',
    wait: '𝗟𝗢𝗔𝗗𝗜𝗡𝗚...',
    linkm: '𝗟𝗜𝗡𝗞𝗡𝗬𝗔 𝗠𝗔𝗡𝗔 𝗞𝗔𝗞?',
    ban: '𝗞𝗔𝗠𝗨 𝗧𝗘𝗟𝗔𝗛 𝗗𝗜 𝗕𝗔𝗡𝗡𝗘𝗗'
}
global.BerryAwal = 5000
global.limitAwal= 20
global.gamewaktu = 50
global.waktu = 60000

//-[❌Jangan Ubah bagian ini❌]
global.tebakgambar = []
global.rkyt = []
global.hit = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 
global.ntidel = ['120363043965529911@g.us']
multipref = true;
oneprefix = false;
preff = "!"
//-[❌❌❌❌❌❌❌❌❌❌]
// REGEXX //
global.YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
global.IgIdRegex = /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/
global.FbIdRegex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/
global.TwitIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/
global.TtIdRegex = /(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/

//𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
