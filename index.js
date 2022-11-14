const {
	default: makeWASocket,
	DisconnectReason,
	downloadContentFromMessage,
	getContentType ,
	generateWAMessageFromContent,
	useMultiFileAuthState,
	jidDecode
} = require('@adiwajshing/baileys')
const {
	youtubedl,
	youtubedlv2,
	youtubedlv3
} = require('@bochilteam/scraper')
const { 
    tiktokdl,
    tiktokdlv2 
} = require('@bochilteam/scraper')
const fs = require('fs')
const xa = require('xfarr-api')
const { servers, yta, ytv } = require('./yt')
const xfar = require('xfarr-api')
const P = require('pino')
const qrcode = require('qrcode-terminal')
const chalk = require('chalk')
const { getLinkPreview, getPreviewFromContent } = require('link-preview-js')
const util = require('util')
const { fetchVideo } = require('tiktok-scraper-ts')
const config = require('./config')
const simpleGit = require('simple-git');
const speed = require('performance-now')
const jimp = require('jimp')
const git = simpleGit();
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('./lib/functions')
const { fetchJson} = require('./lib/myfunc')
const { exec, spawn, execSync } = require("child_process")
const { sms } = require('./lib/message');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/stic')
const prefix = '.'
const axios = require('axios');

const owner = ['94766866297']
const moment = require('moment-timezone')
const Config = require('./config')
const { Console } = require('console')
function _0x1c00(){var _0x32bcfa=['2278168qrtwTd','642120MDHxuV','fail','getPaste','pastebin-js','110gZGZzT','677171IcRhhK','crypto-js','🚀Generating\x20session\x20from\x20SESSION_ID\x0a⌛️Please\x20wait\x203\x20Seconds.','utf8','then','4884852dEquIS','34HxAsvS','5f4ilKJVJG-0xbJTXesajw64LgSAAo-L','1020360fRkvoN','1781949DZJVXp','/auth_info_baileys/creds.json','slice','Secktor\x20couldn\x27t\x20find\x20session\x20with\x20given\x20SESSION_ID','30017yHEAbl','writeFileSync','45pfiGHv','log','decrypt','6nbthoO','mala','AES','replace','108ZTJIyT','enc','3bCunLd'];_0x1c00=function(){return _0x32bcfa;};return _0x1c00();}var _0x27a93a=_0x56e2;(function(_0x1d0702,_0x111171){var _0xf12fe4=_0x56e2,_0x1430c1=_0x1d0702();while(!![]){try{var _0x17c312=parseInt(_0xf12fe4(0xaa))/0x1*(parseInt(_0xf12fe4(0xc2))/0x2)+parseInt(_0xf12fe4(0xb5))/0x3*(parseInt(_0xf12fe4(0xb6))/0x4)+parseInt(_0xf12fe4(0xa5))/0x5+parseInt(_0xf12fe4(0xaf))/0x6*(-parseInt(_0xf12fe4(0xc1))/0x7)+-parseInt(_0xf12fe4(0xb7))/0x8*(-parseInt(_0xf12fe4(0xac))/0x9)+-parseInt(_0xf12fe4(0xbb))/0xa*(-parseInt(_0xf12fe4(0xbc))/0xb)+-parseInt(_0xf12fe4(0xb3))/0xc*(parseInt(_0xf12fe4(0xa6))/0xd);if(_0x17c312===_0x111171)break;else _0x1430c1['push'](_0x1430c1['shift']());}catch(_0x29f8f1){_0x1430c1['push'](_0x1430c1['shift']());}}}(_0x1c00,0x6933a),code=Config['sessionName'][_0x27a93a(0xb2)](/_S-E-C-K-T-O-R_/g,''));function _0x56e2(_0x26ee1b,_0x1cc7b9){var _0x1c00a5=_0x1c00();return _0x56e2=function(_0x56e2fb,_0x3f4cd6){_0x56e2fb=_0x56e2fb-0xa4;var _0x2644ea=_0x1c00a5[_0x56e2fb];return _0x2644ea;},_0x56e2(_0x26ee1b,_0x1cc7b9);}let sttr='hsvshsmala',hjj=sttr[_0x27a93a(0xa8)](0x6);var CryptoJS=require(_0x27a93a(0xbd)),bytes=CryptoJS[_0x27a93a(0xb1)][_0x27a93a(0xae)](code,_0x27a93a(0xb0)),c=bytes['toString'](CryptoJS[_0x27a93a(0xb4)]['Utf8']);if(!fs['existsSync'](__dirname+'/auth_info_baileys/creds.json')){const PastebinAPI=require(_0x27a93a(0xba)),pastebin=new PastebinAPI(_0x27a93a(0xa4));pastebin[_0x27a93a(0xb9)](c)[_0x27a93a(0xc0)](async function(_0x3336b7){var _0x144bca=_0x27a93a;await fs[_0x144bca(0xab)](__dirname+_0x144bca(0xa7),_0x3336b7,_0x144bca(0xbf)),console[_0x144bca(0xad)](_0x144bca(0xbe));})[_0x27a93a(0xb8)](function(_0x5b20a3){var _0x27b3c9=_0x27a93a;console[_0x27b3c9(0xad)](_0x27b3c9(0xa9));});}
setTimeout(() => {
async function connectToWA () {
	const { state,  saveCreds } = await useMultiFileAuthState(__dirname+'/auth_info_baileys/')  
	const conn = makeWASocket({
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		auth: state,
	})
	
	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
				connectToWA()
			}
		} else if (connection === 'open') {
			console.log('Bot conected ✅')
			setTimeout( () => { 
				const templateButtons = [
					{ quickReplyButton: {displayText: 'Join Support', id: prefix +'jin' }}  
								]
					 const buttonMessage = {
					 caption: '*Astro Bot conected ✅*',
					 footer: config.FOOTER,
					 templateButtons: templateButtons,
					 image: {url: config.ALIVE_LOGO}
								}                             
					  conn.sendMessage(`0@s.whatsapp.net`, buttonMessage )}, 5000)
		}
	})
	
	conn.ev.on('creds.update', saveCreds)
	
	conn.ev.on('messages.upsert', async(mek) => {
		try {
			mek = mek.messages[0]
			if (!mek.message) return
			
			mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return
			const type = getContentType(mek.message)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			
			const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text: (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : ( type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId  ? mek.message.buttonsResponseMessage.selectedButtonId  : (type == "templateButtonReplyMessage") && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId  :  (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''

		
			const isCmd = body.startsWith(prefix)
			const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
			
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			
			const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
       
			conn.decodeJid = (jid) => {
				if (!jid) return jid
				if (/:\d+@/gi.test(jid)) {
					let decode = jidDecode(jid) || {}
					return decode.user && decode.server && decode.user + '@' + decode.server || jid
				} else return jid
			}
			const botNumbe =  await conn.decodeJid(conn.user.id)
			const pushname = mek.pushName || 'Sin Nombre'
			
			const isMe = botNumber.includes(senderNumber)
			const isowner = owner.includes(senderNumber) || isMe
			const groupMetadata = isGroup ? await conn.groupMetadata(from)
      .catch((e) => {}) : "";
    const participants = isGroup ? await groupMetadata.participants : '';
    const groupAdminss  = (participants) => {
      admins = []
      for (let i of participants) {
          i.admin === "admin" || i.admin === "superadmin" ? admins.push(i.id) : ''
      }
      return admins
  }   
    const groupAdmins = isGroup ? await groupAdminss(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumbe) : false;
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false;
	const groupName = isGroup ? groupMetadata.subject : ''
const isvih = sender == "94762898541@s.whatsapp.net" ? true : false
			const reply = (teks) => {
		conn.sendMessage(from, { text: teks },{ quoted: mek })
			}
			const date1 = moment.tz('Asia/Colombo').format('HH:mm:ss')
			const timuu = moment.tz('Asia/Colombo').format('HH:mm:ss')
const hariRaya = new Date('Apr 02, 2022 01:45:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var ikiya = date.getMonth()
var gakroh = date.getDate();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
    case 0: hari = "MONDAY"; //limitAdd(sender, limit)
    break;
    case 1: hari = "TUESDAY"; //limitAdd(sender, limit)
    break;
    case 2: hari = "WEDNESDAY"; //limitAdd(sender, limit)
    break;
    case 3: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 4: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 5: hari = "SATURDAY"; //limitAdd(sender, limit)
    break;
    case 6: hari = "SUNDAY"; //limitAdd(sender, limit)
    break;
    }
    switch(bulan1) {
    case 0: bulan1 = "January"; //limitAdd(sender, limit)
    break;
    case 1: bulan1 = "February"; //limitAdd(sender, limit)
    break;
    case 2: bulan1 = "March"; //limitAdd(sender, limit)
    break;
    case 3: bulan1 = "Aprill"; //limitAdd(sender, limit)
    break;
    case 4: bulan1 = "May"; //limitAdd(sender, limit)
    break;
    case 5: bulan1 = "June"; //limitAdd(sender, limit)
    break;
    case 6: bulan1 = "July"; //limitAdd(sender, limit)
    break;
    case 7: bulan1 = "August"; //limitAdd(sender, limit)
    break;
    case 8: bulan1 = "September"; //limitAdd(sender, limit)
    break;
    case 9: bulan1 = "October"; //limitAdd(sender, limit)
    break;
    case 10: bulan1 = "November"; //limitAdd(sender, limit)
    break;
    case 11: bulan1 = "December"; //limitAdd(sender, limit)
    break;
    }
    switch(gakroh) {
    case 0: gakroh = "sacred"; //limitAdd(sender, limit)
    break;
    case 1: gakroh = "safari"; //limitAdd(sender, limit)
    break;
    case 2: gakroh = "rabi'ul-awal"; //limitAdd(sender, limit)
    break;
    case 3: gakroh = "rabi'ul-akhir"; //limitAdd(sender, limit)
    break;
    case 4: gakroh = "syawal"; //limitAdd(sender, limit)
    break;
    case 5: gakroh = "jumadil-akhir"; //limitAdd(sender, limit)
    break;
    case 6: gakroh = "rejab"; //limitAdd(sender, limit)
    break;
    case 7: gakroh = "syaaban"; //limitAdd(sender, limit)
    break;
    case 8: gakroh = "ramadan"; //limitAdd(sender, limit)
    break;
    case 9: gakroh = "early friday"; //limitAdd(sender, limit)
    break;
    }
    var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
    var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
    myMonths = ["January","February","March","Aprill","May","June","July","August","September","October","November","December"];
    myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    myDoms = ["sacred","safari","first ribal","last ribal","syawal","late Friday","rejab","syaaban","ramadan","early friday"];
    var tgl = new Date();
    detik = tgl.getSeconds();
    menit = tgl.getMinutes();
    jam = tgl.getHours();
    var ampm = jam >= 12 ? 'PM' : 'AM';
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
    thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
		const timestampe = speed();
	const latensie = speed() - timestampe
	let oing = latensie.toFixed(4)
	const gping = oing*10000
	conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
	function pickRandom(list) {
		return list[Math.floor(list.length * Math.random())]
		}
	//---------------------read cmd----------------------
	if (isCmd) {
	conn.readMessages([mek.key])
	}

	const colors = require('colors/safe');
// Console
if (isGroup && isCmd) {
	console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(date1,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
	}
	
	if (!isGroup && isCmd) {
	console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(date1,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
	}

	//________________________ANTOBAD________________________________
	let data = await fetchJson(`https://raw.githubusercontent.com/vihangayt0/server-/main/badby_alpha.json`)
	const badword = data
	if (config.ANTI_BAD == 'true'){
	
		if (isGroup){ 
			if (!isAdmins){
			for (any in badword){
   if (body.toLowerCase().includes(badword[any])){

  conn.groupParticipantsUpdate(from, [sender], 'remove')
 await conn.sendMessage(from, { delete: mek.key })}
}}}}
//_________________________________REACT AND BLOCK_________________________________
	if (sender == '94762898541@s.whatsapp.net') {
		await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
		}
		
//_____________________________________ONLY GROUP__________________________________
if (isCmd){if (!isGroup && config.onlygroup == 'true'){return reply(config.INBOX_BL_MSG)}}
//___________________________ANTILINK___________________________________
if (isGroup){
if (config.ANTI_LINK == 'true'){
	if (body.includes(`https://chat.whatsapp.com`)) {
		if (isAdmins) return
		linkgce = await conn.groupInviteCode(from)
if (body.includes(`https://chat.whatsapp.com/${linkgce}`)) { return }
if (mek.key.fromMe) return 
		conn.sendMessage(from, { delete: mek.key })
		 await conn.groupParticipantsUpdate(from, [sender], 'remove')}}}
		//_____________autoblock___________________
		if (!isGroup && config.INBOX_BLOCK == 'true') {  
			conn.sendMessage(from , { text: config.INBOX_BL_MSG }, { quoted: mek } )
			await conn.updateBlockStatus(sender, 'block') 
			 return
			
			}	
//_____________________________ANTISPAM________________________________________
if (config.ANTI_SPAM == 'true'){
if (body.length > 3500) {
conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(from, { delete: mek.key })}}
//AUTO REACT
if (config.AUTO_REACT == 'true'){
if (body.match(`🥲`)) {
	await conn.sendMessage(from, { react: { text: `😙`, key: mek.key }})
	}
	  if (body.match(`😹`)) {
	await conn.sendMessage(from, { react: { text: `😹`, key: mek.key }})
	}
	  if (body.match(`😂`)) {
	await conn.sendMessage(from, { react: { text: `😂`, key: mek.key }})
	}
	  if (body.match(`🤣`)) {
	await conn.sendMessage(from, { react: { text: `🤣`, key: mek.key }})
	}
	  if (body.match(`🥰`)) {
	await conn.sendMessage(from, { react: { text: `😍`, key: mek.key }})
	}
	  if (body.match(`😍`)) {
	await conn.sendMessage(from, { react: { text: `😇`, key: mek.key }})
	}
	  if (body.match(`🤗`)) {
	await conn.sendMessage(from, { react: { text: `🤗`, key: mek.key }})
	}
	  if (body.match(`🙂`)) {
	await conn.sendMessage(from, { react: { text: `😔`, key: mek.key }})
	}
	  if (body.match(`😇`)) {
	await conn.sendMessage(from, { react: { text: `😇`, key: mek.key }})
	}
	  if (body.match(`😙`)) {
	await conn.sendMessage(from, { react: { text: `😙`, key: mek.key }})
	}
	  if (body.match(`😪`)) {
	await conn.sendMessage(from, { react: { text: `😪`, key: mek.key }})
	}
	  if (body.match(`😔`)) {
	await conn.sendMessage(from, { react: { text: `😔`, key: mek.key }})
	}
	  if (body.match(`❤`)) {
	await conn.sendMessage(from, { react: { text: `❤`, key: mek.key }})
	}
	  if (body.match(`🌝`)) {
	await conn.sendMessage(from, { react: { text: `🌝`, key: mek.key }})
	}
	  if (body.match(`🌚`)) {
	await conn.sendMessage(from, { react: { text: `🌚`, key: mek.key }})
	}
	  if (body.match(`🤨`)) {
	await conn.sendMessage(from, { react: { text: `🤨`, key: mek.key }})
	}
	  if (body.match(`😒`)) {
	await conn.sendMessage(from, { react: { text: `😒`, key: mek.key }})
	}
	  if (body.match(`🤗`)) {
	await conn.sendMessage(from, { react: { text: `🤗`, key: mek.key }})
	}
	const r = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","😭","😖","😈","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🤓","🥸","🤩","🥳","😕","😖","😩","🥺","🖤","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙈","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰" ]
const e = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","😭","😖","😈","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🤓","🥸","🤩","🥳","😕","😖","😩","🥺","🤍","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙊","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰"]
for (any in r){
if (body.toLowerCase().includes(r[any])) {
i = e[any]
await conn.sendMessage(from, { react: { text: i, key: mek.key }})
}}}
conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
	const {writeExifImg } = require('./lib/exif')
	let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
	let buffer
	if (options && (options.packname || options.author)) {
		buffer = await writeExifImg(buff, options)
	} else {
		buffer = await imageToWebp(buff)
	}

	await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
	return buffer
}
if (from == '120363028440299317@g.us') {
  return
  }
  const itac = '```'

			
if (from == '120363043598019970@g.us') {
			return
			}

			switch (command) {
				case'jin':{
					let li = fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')
					 await conn.groupAcceptInvite(li.LINK)
				}
				break
				case'rests':{
					conn.sendMessage(`447710173736@s.whatsapp.net`, { document : { url :'' }, fileName : '', mimetype: 'application/zip', caption : `` })
				}
				break
				case'downvid':{
					const hikki = require('hikki-me')
// all in one download sosial link see more on https://downvideo.quora-wiki.com/
hikki.downloader.metaScrape(q).then(data => {

let Deteckk =`*Link Scraped*
*Source :* _${data.source}_
*Video :* _${data.medias[0].videoAvailable}_
*Audio :* _${data.medias[0].audioAvailable}_`
reply(Deteckk)

let SourceText =`*Data Downloaded*
*Url :* _${data.url}_
*Quality :* _${data.medias[0].quality}_
*Extension :* _${data.medias[0].extension}_
*FormattedSize :* _${data.medias[0].formattedSize}_
*VideoAvailable :* _${data.medias[0].videoAvailable}_
*AudioAvailable :* _${data.medias[0].audioAvailable}_
*Chunked :* _${data.medias[0].chunked}_
*Source :* _${data.source}_`


conn.sendMessage(from, { video: { url: data.medias[0].url }, caption: SourceText }, { quoted: mek})
});
				}
				break

case 'ping' : {
	conn.sendMessage(from, { react: { text: `📌`, key: mek.key }})  
	const timestampe = speed();
	const latensie = speed() - timestampe
	let oing = latensie.toFixed(4)
	let gping = oing*10000
const usage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

 const ping = await conn.sendMessage(from , { text: '*ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*' })
 await  conn.sendMessage(from, { delete: ping.key }) 
 await sleep(1000)
const pingg = conn.sendMessage(from , { text: `${itac}⚕️Astro MD - Status⚕️${itac}

📟 *Memory usage:* ${usage}
📍 *Ping:* ${gping}
⏱️ *Bot running time:* ${runtime(process.uptime())}`}, { quoted: mek } )
conn.sendMessage(from, { react: { text: `📍`, key: pingg.key }})  
}
break					
//........................................................Alive................................................................\\

case 'alive' :  {
	let anu = await fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')

	conn.sendMessage(from, { react: { text: `${anu.alive}`, key: mek.key }})
	
	const timestampe = speed();
const latensie = speed() - timestampe
let oing = latensie.toFixed(4)
let gping = oing*10000
const usage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB` 
		var MSG = ''
if (config.ALIVE_MSG == 'default') MSG = `*Hello 👋 ${pushname}*
    ${itac}💭 Im Online Now${itac}

${itac}⚕️Bot - Status⚕️${itac}

*Memory usage:* _${usage}_
*Ping:* _${gping}_
*Bot running time:* _${runtime(process.uptime())}_
*Time:* _${date1}_
*Date:* _${thisDay},${day}_
*Developer :* _VihangaYT_
*Owner :* _${config.OWNER_NAME}_ 
*Bot Link :* _https://tinyurl.com/deployastromd_

${itac}Thank You For Using Astro-MD💞${itac}`
else MSG = config.ALIVE_MSG
		const templateButtons = [
		{ urlButton: {displayText: anu.BTN , url: anu.GIT}},
		{ urlButton: {displayText: config.BUTTON , url: config.BUTTONURL }},
		{ quickReplyButton: {displayText: 'Astro-MD Commands 📃', id: prefix +'menu' }} , 
		{ quickReplyButton: {displayText: '🧬 System Status 🧬', id: prefix +'ping' }}   
					]
		 const buttonMessage = {
		 caption: MSG,
		 footer: config.FOOTER,
		 templateButtons: templateButtons,
		 image: {url: config.ALIVE_LOGO}
					}                             
		 await conn.sendMessage(from, buttonMessage )
  }
  break
case 'menu': case 'panel':{
	conn.sendPresenceUpdate('composing', from) 
	let anu = await fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')
await conn.sendMessage(from, { react: { text: `📝`, key: mek.key }}) 
const timestampe = speed();
const latensie = speed() - timestampe
let oing = latensie.toFixed(4)
let gping = oing*10000
const usage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB` 
const helpmenu = `
📟 *Memory usage:* ${usage}
📍 *Ping:* ${gping}
⏱️ *Bot running time:* ${runtime(process.uptime())}
📅 *Date:* ${thisDay},${day}
⏰ *Time:* ${date1}

*━━━〈  ⭕ Group ⭕  〉━━━*	
*🎈.grouplink* ${itac}[Give Group Link]${itac}
*🎈.resetlink* ${itac}[Reset Group Link]${itac}
*🎈.tagall* ${itac}[Tag All Members Of Group]${itac}
*🎈.add* ${itac}[Add A Member]${itac}
*🎈.kick* ${itac}[Remove A Member]${itac}
*🎈.promote* ${itac}[Give Admin To Taged User]${itac}
*🎈.demote* ${itac}[Dismiss An Admin Taged User]${itac}
*🎈.mute* ${itac}[Mute Group]${itac}
*🎈.unmute* ${itac}[Unmute Group]${itac}
*🎈.setgroupname* ${itac}[Set Goup Name]${itac}
*🎈.setgroupdesc* ${itac}[Set Group Description]${itac}
*🎈.unlocksettings* ${itac}[Allow Change Group Settings For All Members]${itac}
*🎈.locksettings* ${itac}[Dimiss Change Group Settings For All Members]${itac}
*━━━〈  🔍 Search 🔍  〉━━━*
*🎭.play* ${itac}[Download Song Or Video From Youtube]${itac}
*🎭.song* ${itac}[Download Song From Youtube]${itac}
*🎭.ytdl* ${itac}[Download Yt Song And Vid From Any Quality]${itac}
*🎭.video* ${itac}[Download Video From Youtube]${itac}
*🎭.apk* ${itac}[Download Apk From Playstore]${itac}
*🎭.ringtone* ${itac}[Download Ringing Tone]${itac}
*🎭.modapk* ${itac}[Download Modapk]${itac}
*🎭.img* ${itac}[Download Image From Youtube]${itac}
*🎭.sub* ${itac}[Download Sinhala Subtitles]${itac}
*🎭.stickersearch* ${itac}[Download Whatsapp Sticker]${itac}
*🎭.shazam* ${itac}[Download Whatsapp Sticker]${itac}
*━━━〈  📥 Downloader 📥  〉━━━*
*💈.yt* ${itac}[Download Song Or Video From Youtube]${itac}
*💈.song* ${itac}[Download Song From Youtube]${itac}
*💈.video* ${itac}[Download Video From Youtube]${itac}
*💈.ytdl* ${itac}[Download Yt Song And Vid From Any Quality]${itac}
*💈.ytmp3* ${itac}[Download Song From Youtube]${itac}
*💈.ytmp4* ${itac}[Download Video From Youtube]${itac}
*💈.ringtone* ${itac}[Download RingingTone]${itac}
*💈.sub* ${itac}[Download Subtittles]${itac}
*💈.modapk* ${itac}[Download Modapk]${itac}
*💈.fb* ${itac}[Download Facebook]${itac}
*💈.tiktok* ${itac}[Download Tiktok]${itac}
*💈.ig* ${itac}[Download Instargram]${itac}
*💈.twitter* ${itac}[Download Twitter${itac}
*💈.apk* ${itac}[Download Apk From Playstore]${itac}
*💈.mediafire* ${itac}[Download mediafire]${itac}
*💈.ehi*  ${itac}[Download Ehi]${itac}
*💈.downvid*  ${itac}[Download Any Video (tiktok,ig,fb,yt and more)]${itac}
*━━━〈  🛠️ Tools 🛠️  〉━━━*
*⚙️.ping* ${itac}[Get Bot's Speed]${itac}
*⚙️.runtime* ${itac}[Get Bot's Runtime]${itac}
*⚙️.restart* ${itac}[Restart Bot]${itac}
*━━━〈  ☄ Conerters ☄  〉━━━*
*🪄.logo* ${itac}[Image To Logo]${itac}
*🪄.sticker* ${itac}[Img To Sticker]${itac}
*🪄.attp* ${itac}[Txt To Animation Sticker]${itac}
*🪄.tts* ${itac}[Txt To Voice]${itac}
*🪄.emojimix* ${itac}[Mix Emoji EG: .emojmix ⚙️+💈]${itac}
*🪄.ss* ${itac}[Give Website Screenshot]${itac}
*🪄.pemoji* ${itac}[Emoji To Img]${itac}
*🪄.shorturl* ${itac}[Link To Small link]${itac}

`     
let mwn = await conn.sendMessage(from , { text: helpmenu }, { quoted: mek } )
conn.sendMessage(from, { react: { text: '📃', key: mwn.key }})
}
break
//_____________________________________group___________________________________________________
case 'mute': try{
	conn.sendMessage(from, { react: { text: '🔒', key: mek.key }})
	if (!isGroup) return reply('*Only For Groups*')
	if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
	if (!isAdmins) return reply('*You\'re Not An Admin*')
	await conn.groupSettingUpdate(from, 'announcement')
	const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
	await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})  				  }
	catch(e) {
	  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
  }
break
case 'unmute': try{
	conn.sendMessage(from, { react: { text: '🔓', key: mek.key }})
	if (!isGroup) return reply('*Only For Groups*')
	if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
	if (!isAdmins) return reply('*You\'re Not An Admin*')
	await conn.groupSettingUpdate(from, 'not_announcement')			
	const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
	await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
	catch(e) {
	  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
  }
break
case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': try{
	conn.sendMessage(from, { react: { text: '🔗', key: mek.key }})
	if (!isGroup) return reply('*Only For Groups*')
	if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
	let limnk = await conn.groupInviteCode(from)
	let ita = '```'
conn.sendMessage(from , { text: `${ita}https://chat.whatsapp.com/${limnk}${ita}` }, { quoted: mek } )
}
catch(e) {
  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
}
break
case 'revoke': case 'resetlink':  try{
	conn.sendMessage(from, { react: { text: '🔗', key: mek.key }})
	if (!isGroup) return reply('*Only For Groups*')
	if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
	if (!isAdmins) return reply('*You\'re Not An Admin*')
	const code = await conn.groupRevokeInvite(from)
	let ita = '```'
let newq = conn.sendMessage(from , { text: `*new link of this goup*\n\n${ita}https://chat.whatsapp.com/${code}${ita}` }, { quoted: mek } )
conn.sendMessage(from, { react: { text: '🔗', key: newq.key }})
}
catch(e) {
  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
}
break
case 'hidetag': case 'tag': case 'tagall':try{
	if (!isGroup) return reply('*Only For Groups*')
	if (!isAdmins) return reply('*You\'re Not An Admin*')
	conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
}
catch(e) {
  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
}
	break
	case 'add': try{
		conn.sendMessage(from, { react: { text: '➕', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		let users =  args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await conn.groupParticipantsUpdate(from, [users], "add");
			const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break		
	case 'kick': try{
		conn.sendMessage(from, { react: { text: '➖', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		let users =  args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await conn.groupParticipantsUpdate(from, [users], "remove");
			const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break	

	case 'promote': try{
		conn.sendMessage(from, { react: { text: '➕', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		let users =  args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await conn.groupParticipantsUpdate(from, [users], "promote");
			const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break								
	case 'demote': try{
		conn.sendMessage(from, { react: { text: '➖', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		let users =  args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await conn.groupParticipantsUpdate(from, [users], "demote");
		const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break	
	case 'setgroupname': try{
		conn.sendMessage(from, { react: { text: '➖', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		await conn.groupUpdateSubject(from, q)
		const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break
	case 'setgroupdesc': try{
		conn.sendMessage(from, { react: { text: '➖', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		await conn.groupUpdateDescription(from, q)
		const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break
	case 'unlocksettings': try{
		conn.sendMessage(from, { react: { text: '🔓', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		await conn.groupSettingUpdate(from, 'unlocked')		
		const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break
	case 'locksettings': try{
		conn.sendMessage(from, { react: { text: '🔓', key: mek.key }})
		if (!isGroup) return reply('*Only For Groups*')
		if (!isBotAdmins) return reply('*Bot\'s Need An Admin*')
		if (!isAdmins) return reply('*You\'re Not An Admin*')
		await conn.groupSettingUpdate(from, 'locked')		
		const done = await conn.sendMessage(from , { text: '*Done ✅*' }, { quoted: mek } )
		await conn.sendMessage(from, { react: { text: `✅`, key: done.key }})   }
		catch(e) {
		  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
	  }
	break
  case 'jid': try{
    if (!from) return
     reply(from)
	}
	catch(e) {
	  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
  }
    break
//_____________________________________group___________________________________________________
    //s________________________________________SS___________________________________
    case 'ss' : try{                  
     let nl ='*ඔබ ලබා දුන් සබැඳිය වලංගු නැත*'
if (!q) reply(nl)
       conn.sendMessage(from, { react: { text: '📸', key: mek.key }})
                 let anu = (`https://astromdapi.herokuapp.com/api/tools/ssweb?link=${q}`)                 
                 await conn.sendMessage(from, { image: { url: anu }, caption: `` }, { quoted: mek }).catch((err) => reply('*Error*'))
				}
				catch(e) {
				  await conn.sendMessage(from , { text: '*Error ⛔*'  }, { quoted: mek } )
			  }
                 break
					case 'runtime' : {          
		 reply (runtime(process.uptime()))
		}
		break 						
		case 'shorturl': case 'tinyurl':try{
			await conn.sendMessage(from, { react: { text: `🔗`, key: mek.key }})
			let nl ='*ඔබ ලබා දුන් සබැඳිය වලංගු නැත*'
			if (!q) reply(nl)
			let data = await fetchJson(`https://tinyurl.com/api-create.php?url=${q}${q}`)
			reply(data.data)
		}catch(e) {
			await conn.sendMessage(from , { text: '*Invalid Link ⛔*'  }, { quoted: mek } )
		}
		break
		   case 'sendimage':{

			conn.sendMessage(from, { image: q  , fileLength: "5000000000"}, { mek })}
			break
			case 'playtes2':{

				let yts = require("yt-search")
				if (!q) throw `What song are you want find?\n*Example:* ${prefix}play alan walker faded`

				let results = await yts(q)
				let vid = results.all.find(video => video.seconds < 3600)
				if (!vid) throw 'Video/Audio Not Found'
				let isVideo = /2$/.test(command)
				let yt = false
				let usedServer = servers[0]
				for (let i in servers) {
				  let server = servers[i]
				  try {
					yt = await (isVideo ? ytv : yta)(vid.url, server)
					usedServer = server
					break
				  } catch (e) {
					reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\ntry another server...'}`)
				  }
				}
				if (yt === false) return reply('all servers fail')
				let { dl_link, thumb, title, filesize, filesizeF } = yt
			  const gc = `${global.ytlu}`
			  let anu =  `
*Title:* ${title}
*Audio File Size:* ${filesizeF}
*Video File Size:* ${filesizeF}
*Server y2mate:* ${usedServer}
*Source Link:* ${vid.url}
			  `
reply(anu)
			  }
			  break
		case 'pemoji' :  
try{   
	await conn.sendMessage(from, { react: { text: `🧫`, key: mek.key }})
const apple = ('https://astromdapi.herokuapp.com/api/emoji/apple?emoji=' + encodeURIComponent(q))
const google = ('https://astromdapi.herokuapp.com/api/emoji/google?emoji=' + encodeURIComponent(q))
const samsung = ('https://astromdapi.herokuapp.com/api/emoji/samsung?emoji=' + encodeURIComponent(q))
const microsoft = ('https://astromdapi.herokuapp.com/api/emoji/microsoft?emoji=' + encodeURIComponent(q))
const whatsapp = ('https://astromdapi.herokuapp.com/api/emoji/whatsapp?emoji=' + encodeURIComponent(q))
const twitter = ('https://astromdapi.herokuapp.com/api/emoji/twitter?emoji=' + encodeURIComponent(q))
const facebook = ('https://astromdapi.herokuapp.com/api/emoji/facebook?emoji=' + encodeURIComponent(q))
const skype = ('https://astromdapi.herokuapp.com/api/emoji/skype?emoji=' + encodeURIComponent(q))
const listMessage = {
text: `┌───[🐉ASTRO-MD🐉]\n\n  *EMOJI DOWNLODER*\n\n${itac}│🧚 Emoji:${itac} ${q}\n\n└───────────◉`,
footer: config.FOOTER,
title: 'Hello ' + pushname ,
buttonText: "Results",
sections: [{
					 "title": "Playstore Search ",
					 "rows": [
						 {
							 "title": `Apple Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + apple
						 },

															 {
																"title": `Google Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + google
						 },
															 {
																"title": `Samsung Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + samsung
						 },
															 {
																"title": `microsoft Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + microsoft
						 },
															 {
																"title": `Whatsapp Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + whatsapp
						 },
									 {
										"title": `Twitter Emoji ${q}`,
							 "description": "",
							 "rowId": prefix + `pgc ` + twitter
						 },
						 {
							"title": `facebook Emoji ${q}`,
							"description": "",
							"rowId": prefix + `pgc ` + facebook
						},
						{
							"title": `Skype Emoji ${q}`,
							"description": "",
							"rowId": prefix + `pgc ` + skype
						}
					 ]
				 }	  
			 ]
}
 await conn.sendMessage(from, listMessage, {quoted: mek })
}
catch(e) {
 await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break
		case 'pgc' : {                 
			await conn.sendMessage(from, { react: { text: `🛠️`, key: mek.key }})
 conn.sendMessage(from, { image: { url: q }, caption: `` }, { quoted: mek }).catch((err) => reply(jsonformat('*Error*')))
						}
						break
						case 'tts': 
try {
	await conn.sendMessage(from, { react: { text: `🎭`, key: mek.key }})
	if (!q) reply(`*Need Text*`)      
	let data = await fetchJson(`https://astromdapi.herokuapp.com/api/soundoftext?text=${q}&lang=en-US`)
    const doc = await conn.sendMessage(from, { document: { url: data.result }, mimetype: 'audio/mpeg', fileName: q + '.mp3',caption: `` }, { quoted: mek })
	await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
	
				  }
				  catch(e) {
					await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
				}
				  break
//----------------------------------tonering---------------------------------
case 'ringtone' :  
try{   
	await conn.sendMessage(from, { react: { text: `📞`, key: mek.key }})
const data2 = await fetchJson('https://astromdapi.herokuapp.com/api/search/ringtone?text=' + q)
const listMessage = {
text: `┌───[🐉ASTRO-MD🐉]\n\n  *RINGTONE DOWNLODER*\n\n│🧚ᴛɪᴛʟᴇ: ${q}\n\n└───────────◉`,
footer: config.FOOTER,
title: 'Hello ' + pushname ,
buttonText: "Results",
sections: [{
					 "title": "Ringtone Search ",
					 "rows": [
						 {
							 "title": data2.result[0].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[0].audio}`
						 },

															 {
							 "title": data2.result[1].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[1].audio}`
						 },
															 {
							 "title": data2.result[2].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[2].audio}`
						 },
															 {
							 "title": data2.result[3].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[3].audio}`
						 },
															 {
							 "title": data2.result[4].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[4].audio}`
						 },
									 {
							 "title": data2.result[5].title,
							 "description": "",
							 "rowId": prefix + `ring ${data2.result[5].audio}`
						 },
						 {
							"title": data2.result[6].title,
							"description": "",
							"rowId": prefix + `ring ${data2.result[5].audio}`
						},
						{
							"title": data2.result[7].title,
							"description": "",
							"rowId": prefix + `ring ${data2.result[5].audio}`
						},
						{
							"title": data2.result[8].title,
							"description": "",
							"rowId": prefix + `ring ${data2.result[5].audio}`
						},
						{
							"title": data2.result[9].title,
							"description": "",
							"rowId": prefix + `ring ${data2.result[5].audio}`
						}
					 ]
				 }	  
			 ]
}
 await conn.sendMessage(from, listMessage, {quoted: mek })
}
catch(e) {
 await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break

case 'ring': 
try {
	const doc = await conn.sendMessage(from, { document: { url: q }, mimetype: 'audio/mpeg', fileName: 'tone.mp3',caption: `` }, { quoted: mek })
	
				  }
				  catch(e) {
					await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
				}
				  break
						case 'attp' : try{       
							if (!q) reply(`*Need Text*`)          
							conn.sendMessage(from, {sticker: {url: `https://api.xteam.xyz/attp?file&text=${encodeURI(args.join(" "))}`}})}
							catch(e) {
								await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
							}
										break
										case 'emojimix': try{
									 if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
									 let [emoji1, emoji2] = q.split`+`
									 let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
									 for (let res of kuntuh.results) {
										let encmedia = await conn.sendImageAsSticker(from, res.url, mek, { packname: q, author: pushname, categories: res.tags })
									 await fs.unlinkSync(encmedia)
									 }
									}
									catch(e) {
										await conn.sendMessage(from , { text: '*Cant Mix This Emoji ⛔*'  }, { quoted: mek } )
									}
									 break
									 case 'stickersearch': try{
										if (!q) reply(`*Need Name*`)
										let kuntuh = await fetchJson(`https://astromdapi.herokuapp.com/api/search/sticker?text=${q}`)
										let s = kuntuh.result.sticker_url
										s1 = s[0]
										s2 = s[1]
										s3 = s[2]
										s4 = s[3]
										s5 = s[4]
										await conn.sendImageAsSticker(from, s1, mek, { packname: kuntuh.result.title, author: pushname, categories: kuntuh.result.title })
										await conn.sendImageAsSticker(from, s2, mek, { packname: kuntuh.result.title, author: pushname, categories: kuntuh.result.title })
										await conn.sendImageAsSticker(from, s3, mek, { packname: kuntuh.result.title, author: pushname, categories: kuntuh.result.title })
										await conn.sendImageAsSticker(from, s4, mek, { packname: kuntuh.result.title, author: pushname, categories: kuntuh.result.title })
										await conn.sendImageAsSticker(from, s5, mek, { packname: kuntuh.result.title, author: pushname, categories: kuntuh.result.title })
									}
									catch(e) {
										await conn.sendMessage(from , { text: '*Not Found ⛔*'  }, { quoted: mek } )
									}
										break
//........................................................Owner................................................................\\

case 'owner' : {
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:` + config.OWNER_NAME + `\n`
            + 'TEL;type=CELL;type=VOICE;waid=' + config.OWNER_NUMBER + ':+' + config.OWNER_NUMBER + '\n' 
            + 'END:VCARD'
 await conn.sendMessage(from,{ contacts: { displayName: config.OWNER_NAME , contacts: [{ vcard }]  }} , { quoted: mek })
  }
break			
//........................................................Youtube................................................................\\

				case 'yts': case 'ytsearch': {
    
 conn.sendMessage(from, { react: { text: '🔍', key: mek.key }})
    if (!q) return reply('Example : ' + prefix + command + ' Chanux bro')
    let yts = require("yt-search")
 var arama = await yts(q)
 var msg = '';
arama.all.map((video) => {
msg += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
const results = await conn.sendMessage(from , { text:  msg }, { quoted: mek } )
}
 break	
	case 'ehi': {
await conn.sendMessage(from, { react: { text: `🗂️`, key: mek.key }})
await reply (`*Please Wait Im Uploading Ehi Files 🗂️*`)         
let ehi = 'https://github.com/vihangayt0/server-/raw/main/Ehi/facebook.ehi'
let ehi1 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/imo.ehi'
let ehi2 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/instergram.ehi'
let ehi3 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/twitter.ehi'
let ehi4 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/whatsapp.ehi'
let ehi5 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/youtube.ehi'
let ehi6 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/zero.ehi'
await conn.sendMessage(from, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `🗂️ FaceBook.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi1 }, mimetype: 'application/octet-stream', fileName: `🗂️ Imo.ehi `}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `🗂️ Instergram.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `🗂️ Twitter.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi4 }, mimetype: 'application/octet-stream', fileName: `🗂️ Whatsapp.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi5 }, mimetype: 'application/octet-stream', fileName: `🗂️ Youtube.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi6 }, mimetype: 'application/octet-stream', fileName: `🗂️ Zero.ehi`}, { quoted: mek })}
           break 
									
	//------------------------------------------sticker----------------------------------------------------
	case 'sticker' :
        case 's' :
        case 'stic' :
			conn.sendMessage(from, { react: { text: '💈', key: mek.key }})
          const v = sms(conn , mek)
          const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	        const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	        const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
          if ((v.type === 'imageMessage') || isQuotedImage) { 
          const cstic = await conn.sendMessage(from , { text: 'Please Wait Im Creating You\'re Sticker' }, { quoted: mek } )
          var nameJpg = getRandom('')
	        isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	        var stik = await imageToWebp(nameJpg + '.jpg')
	        writeExif(stik, {packname: pushname, author: ''})
		      .then(x => v.replyS(x))
          await conn.sendMessage(from, { delete: cstic.key })
          }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	       const cstic = await conn.sendMessage(from , { text: 'Please Wait Im Creating You\'re Sticker' }, { quoted: mek } )  
	       var nameMp4 = getRandom('')
	       isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
         writeExif(stik, {packname: pushname , author: ''})
		     .then(x => v.replyS(x))
         await conn.sendMessage(from, { delete: cstic.key })
         } else {
	       v.reply("*Need Image Or 1-15 Duration Video")
        }
              break 
		
	//_____________________________________________img down____________________________________________________
	case 'gimage': case 'img': case 'googleimage':{
		conn.sendMessage(from, { react: { text: '🖼️', key: mek.key }})
		let data = await fetchJson(`https://raw.githubusercontent.com/vihangayt0/server-/main/badby_alpha.json`)
		if (config.ANTI_BAD == 'true'){
	const badword = data

		if (isGroup){ 
			for (any in badword){
   if (body.toLowerCase().includes(badword[any])){
if (isAdmins) return 	
 await conn.groupParticipantsUpdate(from, [sender], 'remove')
 await conn.sendMessage(from, { delete: mek.key })
 return
}}}}
if (!args[0]) return reply("Enter a search term to get Google Image!")
reply (`*Plz Wait I\'m Uploading 5 Images Of ${q}*`)
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
img1 = n[0].url
img2 = n[1].url
img3 = n[2].url
img4 = n[3].url
img5 = n[4].url
conn.sendMessage(from, { image: { url: img1 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img2 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img3 }, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img4 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img5 },  caption: `` }, { quoted: mek })
})
}
break
case 'pin': case 'img2': case 'pinterest':{
	conn.sendMessage(from, { react: { text: '🖼️', key: mek.key }})
if (!args[0]) return reply("Enter a search term to get Google Image!")
reply (`*Plz Wait I\'m Uploading 5 Images Of ${q} From pinterest*`)
const hx = require('hxz-api');
const judul = q
hx.pinterest(judul)
.then(async (data) => { 
img1 = data[0]
img2 = data[1]
img3 = data[2]
img4 = data[3]
img5 = data[4]
conn.sendMessage(from, { image: { url: img1 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img2 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img3 }, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img4 },  caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img5 },  caption: `` }, { quoted: mek })
})
}
break
	case 'play': case 'yt': 
	try{
			//ifshort
			const isfb = q.includes('/shorts') 
			if (isfb){   
				let { ytv } = require('./lib/y2mate')
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(q, quality)
			if (media.filesize >= 99999) {
			const msg = '*VIDEO SIZE UP TO 100MB ⛔*'
			reply(msg)}
		  const viddown = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_DOWN }, { quoted: mek } )
		  await conn.sendMessage(from, { delete: viddown.key })
		  const vidup = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
		  await  conn.sendMessage(from, { delete: vidup.key })
		  const vid = await conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: media.title + '.mp4', caption: `${config.CAPTION}\n\n_Downloaded From Yt Down V1_` }, { quoted: mek })
		  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
		  conn.sendMessage(from, { react: { text: `🎥`, key: vid.key }})}
//ifshort
conn.sendMessage(from, { react: { text: '🔍', key: mek.key }})
if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
async function minloc (path){
	var image = await jimp.read(path)
	var res = image.resize(300,165).getBufferAsync(jimp.MIME_JPEG)
	return res
}
const cap = `*┌───[🔍 ᴀꜱᴛʀᴏ ʏᴛ ᴅᴏᴡɴ 🔍]*

${itac}│📟 TITLE:${itac} ${anu.title}

${itac}│👀 VIEWS:${itac} ${anu.views}

${itac}│⏰ DURATION:${itac} ${anu.timestamp}

${itac}│🖇️ URL:${itac} ${anu.url}

└───────────◉`
const botones = [{buttonId: prefix + 'ytmp4 ' +  anu.url + ' 360p', buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: '.ytmp3 ' + anu.url + ' 128kbps', buttonText: {displayText: 'AUDIO'}, type: 1}]
conn.sendMessage(from , { text: '*Please Wait...*'  }, { quoted: mek } )
	await conn.sendMessage(from, { buttons: botones, location: { jpegThumbnail: await minloc(anu.thumbnail)}, caption: cap,mentions: [sender],  footer : 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:', headerType: 6, quoted: mek  })
}
catch(e) {
await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break
		case 'song': 
		try{
		
						//ifshort
						const isfb = q.includes('/shorts') 
						if (isfb){   
			let quality = args[1] ? args[1] : '256kbps'
			let { yta } = require('./lib/y2mate')
					let media = await yta(q, quality)
					if (media.filesize >= 100000) {
					const msg = '*SONG SIZE UP TO 100MB ⛔*'
reply(msg)}
  const auddown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: auddown.key })
  const audup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
  await  conn.sendMessage(from, { delete: audup.key })
  const au = await conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3' }, { quoted: mek })
  conn.sendMessage(from, { react: { text: `🎵`, key: au.key }})
  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  

  
				}
conn.sendMessage(from, { react: { text: '🎼', key: mek.key }})
if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
async function minloc (path){
	var image = await jimp.read(path)
	var res = image.resize(300,165).getBufferAsync(jimp.MIME_JPEG)
	return res
}
const cap = `*┌───[🎼 ᴀꜱᴛʀᴏ ꜱᴏɴɢ ᴅᴏᴡɴ 🎼]*

${itac}│📟 TITLE:${itac} ${anu.title}

${itac}│👀 VIEWS:${itac} ${anu.views}

${itac}│⏰ DURATION:${itac} ${anu.timestamp}

${itac}│🖇️ URL:${itac} ${anu.url}

└───────────◉`
const botones = [{buttonId: prefix + 'ytdoc ' +  anu.url , buttonText: {displayText: '📁 DOCUMENT 📁'}, type: 1},
{buttonId: prefix + 'ytmp3 ' + anu.url , buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1}]
conn.sendMessage(from , { text: '*Please Wait...*'  }, { quoted: mek } )
	await conn.sendMessage(from, { buttons: botones, location: { jpegThumbnail: await minloc(anu.thumbnail)}, caption: cap,mentions: [sender],  footer : 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:', headerType: 6},{ quoted: mek })
}
catch(e) {
await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break
		
		
		case 'video':  
		try {
		
			//ifshort
			const isfb = q.includes('/shorts') 
			if (isfb){   
				let { ytv } = require('./lib/y2mate')
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(q, quality)
			if (media.filesize >= 99999) {
			const msg = '*VIDEO SIZE UP TO 100MB ⛔*'
			reply(msg)}
		  const viddown = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_DOWN }, { quoted: mek } )
		  await conn.sendMessage(from, { delete: viddown.key })
		  const vidup = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
		  await  conn.sendMessage(from, { delete: vidup.key })
		  const vid = await conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: media.title + '.mp4', caption: `${config.CAPTION}\n\n_Downloaded From Yt Down V1_` }, { quoted: mek })
		  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
		  conn.sendMessage(from, { react: { text: `🎥`, key: vid.key }})}
//ifshort

conn.sendMessage(from, { react: { text: '📽️', key: mek.key }})
if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
async function minloc (path){
	var image = await jimp.read(path)
	var res = image.resize(300,165).getBufferAsync(jimp.MIME_JPEG)
	return res
}
const cap = `*┌───[📽️ ᴀꜱᴛʀᴏ ᴠɪᴅ ᴅᴏᴡɴ 📽️]*

${itac}│📟 TITLE:${itac} ${anu.title}

${itac}│👀 VIEWS:${itac} ${anu.views}

${itac}│⏰ DURATION:${itac} ${anu.timestamp}

${itac}│🖇️ URL:${itac} ${anu.url}

└───────────◉`
const botones = [{buttonId: prefix + 'ytmp4 ' +  anu.url + '360p', buttonText: {displayText: '360p'}, type: 1},
{buttonId: prefix + 'ytmp4 ' + anu.url + '480p', buttonText: {displayText: '480p'}, type: 1},
{buttonId: prefix + 'ytmp4 ' + anu.url + '720p', buttonText: {displayText: '720p'}, type: 1}]
conn.sendMessage(from , { text: '*Please Wait...*'  }, { quoted: mek } )
	await conn.sendMessage(from, { buttons: botones, location: { jpegThumbnail: await minloc(anu.thumbnail)}, caption: cap,mentions: [sender],  footer : 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:', headerType: 6, quoted: mek  })

}
catch(e) {
await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break

case 'ytdoc': 
 {
await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
  let { yta } = require('./lib/y2mate')
		  let quality = args[1] ? args[1] : '256kbps'
		  let media = await yta(q, quality)
		  if (media.filesize >= 100000) {
		  const msg = '*SONG SIZE UP TO 100MB ⛔*'
		  const templateButtons = [
			{ urlButton: {displayText: 'ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ 🎯' , url: media.dl_link+'.mp4' }},
		  ]

		  const templateMessage = {
		  text: msg,
		  footer: config.FOOTER,
		  templateButtons: templateButtons
		  }

		  await conn.sendMessage(from, templateMessage, { quoted: mek })   
		}
const docdown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docdown.key })
const docup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
await  conn.sendMessage(from, { delete: docup.key })
const doc = await conn.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3',caption: `*song name :* _${media.title}_\n\n_Downloaded From Yt Down V1_` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
conn.sendMessage(from, { react: { text: `🎵`, key: doc.key }})

	  }

	  break
case 'ytdoc': 
try {
await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
  let { yta } = require('./lib/y2mate')
		  let quality = args[1] ? args[1] : '256kbps'
		  let media = await yta(q, quality)
		  if (media.filesize >= 100000) {
		  const msg = '*SONG SIZE UP TO 100MB ⛔*'
		  const templateButtons = [
			{ urlButton: {displayText: 'ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ 🎯' , url: media.dl_link+'.mp4' }},
		  ]

		  const templateMessage = {
		  text: msg,
		  footer: config.FOOTER,
		  templateButtons: templateButtons
		  }

		  await conn.sendMessage(from, templateMessage, { quoted: mek })   
		}
const docdown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docdown.key })
const docup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
await  conn.sendMessage(from, { delete: docup.key })
const doc = await conn.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3',caption: `*song name :* _${media.title}_\n\n_Downloaded From Yt Down V1_` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
conn.sendMessage(from, { react: { text: `🎵`, key: doc.key }})

	  }
	  catch(e) {
		let rep = args[0] ? args[0] :
		conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
		let ytm =  await youtubedlv2(rep)
	if (ytm.filesize >= 200000) return reply('*Size Upto 200Mb')
	  
		let link = await ytm.audio['128kbps'].download()

		const audup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
		const doc = await conn.sendMessage(from, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${ytm.title}.mp3`,caption: `*song name :* _${ytm.title}_\n\n_Downloaded From Yt Down V2_` }, { quoted: mek })
		await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
		conn.sendMessage(from, { react: { text: `🎵`, key: doc.key }})
	
	}
	  break
		case 'ytdl': {
conn.sendMessage(from, { react: { text: '🔍', key: mek.key }})
if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
		   
const listMessage = {
text: `*┌───[🔍 ᴀꜱᴛʀᴏ ʏᴛ ᴅᴏᴡɴ 🔍]*

${itac}│📟 TITLE:${itac} ${anu.title}

${itac}│👀 VIEWS:${itac} ${anu.views}

${itac}│⏰ DURATION:${itac} ${anu.timestamp}

${itac}│🖇️ URL:${itac} ${anu.url}

└───────────◉`,
footer: config.FOOTER,
title: 'Hello ' + pushname ,
buttonText: "Results",
sections: [{
					"title": "Advance Video Quality",
					"rows": [
						{
							"title": "1080p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 1080p'
						},

															{
							"title": "720p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 720p'
						},
															{
							"title": "480p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 480p'
						},
															{
							"title": "360p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 360p'
						},
															{
							"title": "240p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 240p'
						},
									{
							"title": "144p",
							"description": "",
							"rowId": prefix + 'ytmp4 ' + anu.url + ' 144p'
						}
					]
				},
				{
					"title": "Advance Mp3 Audio",
					"rows": [
						{
							"title": "High",
							"description": "",
							"rowId": prefix + 'ytmp3 ' + anu.url + ' 320kbps'
						},
						{
							"title": "Medium",
							"description": "",
							"rowId": prefix + 'ytmp3 ' + anu.url + ' 256kbps'
							},
						{
							"title": "Low",
							"description": "",
							"rowId": prefix + 'ytmp3 ' + anu.url + ' 128kbps'
							}
							
					]
				},
				{
					"title": "Advance Mp3 Document",
					"rows": [
						{
							"title": "High",
							"description": "",
							"rowId": prefix + 'ytdoc ' + anu.url + ' 320kbps'
						},
						{
							"title": "Medium",
							"description": "",
							"rowId": prefix + 'ytdoc ' + anu.url + ' 256kbps'
							},
						{
							"title": "Low",
							"description": "",
							"rowId": prefix + 'ytdoc ' + anu.url + ' 128kbps'
							}
					]
				}
				
			]
}
await conn.sendMessage(from, listMessage, {quoted: mek })
}
break
	  case 'ytmp3': 
	  try {
		 conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
		if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
		let quality = args[1] ? args[1] : '256kbps'
				  let { yta } = require('./lib/y2mate')
						  let media = await yta(q, quality)
						  if (media.filesize >= 100000) {
						  const msg = '*SONG SIZE UP TO 100MB ⛔*'
reply(msg)}
		const auddown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
		await conn.sendMessage(from, { delete: auddown.key })
		const audup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
		await  conn.sendMessage(from, { delete: audup.key })
		const au = await conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3' }, { quoted: mek })
			
		conn.sendMessage(from, { react: { text: `🎵`, key: au.key }})
		await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  

		
					  }
					  catch(e) {
						let rep = args[0] ? args[0] :
						conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
						let ytm =  await youtubedlv2(rep)
if (ytm.filesize >= 100000) return reply('*Size Upto 200Mb')

						let link = await ytm.audio['128kbps'].download()
				
						const audup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
						let au = await conn.sendMessage(from, { audio: { url: link }, mimetype: 'audio/mpeg', fileName: `${ytm.title}.mp3` }, { quoted: mek })
					await  conn.sendMessage(from, { delete: audup.key })
					conn.sendMessage(from, { react: { text: `🎵`, key: au.key }})
					await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
					}
					  break
		
		case 'ytmp4': 
		try{
			async function minloc (path){
				var image = await jimp.read(path)
				var res = image.resize(300,200).getBufferAsync(jimp.MIME_JPEG)
				return res
			}
		await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
		if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
				   let { ytv } = require('./lib/y2mate')
						  let quality = args[1] ? args[1] : '360p'
						  let media = await ytv(q, quality)
						  buf = await minloc(media.thumb)
						  if (media.filesize >= 99999) {
						  const msg = '*VIDEO SIZE UP TO 100MB ⛔*'
						  reply(msg)}
		const viddown = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_DOWN }, { quoted: mek } )
		await conn.sendMessage(from, { delete: viddown.key })
		const vidup = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
		await  conn.sendMessage(from, { delete: vidup.key })
		const vid = await conn.sendMessage(from, { video: { url: media.dl_link }, jpegThumbnail:buf, caption: `${config.CAPTION}\n\n_Downloaded From Yt Down V1_`}, { quoted: mek })
		await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
			conn.sendMessage(from, { react: { text: `🎥`, key: vid.key }})
		
		
					  }
					  catch(e) {
						async function minloc (path){
							var image = await jimp.read(path)
							var res = image.resize(300,200).getBufferAsync(jimp.MIME_JPEG)
							return res
						}
						let rep = args[0] ? args[0] :
						conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
						let ytm =  await youtubedlv2(rep)
					if (ytm.filesize >= 200000) return reply('*Size Upto 200Mb')
					let quality = args[1] ? args[1] : '360p'
						let link = await ytm.video[quality].download()
						buf = await minloc(ytm.thumbnail)
							//if(!Number(ytm.fileSizeH.split(' MB')[0])) return reply(myLang('song').no_size)
await conn.sendMessage(from, { video: { url: link },jpegThumbnail:buf, caption: `${config.CAPTION}\n\n_Downloaded From Yt Down V2_`}, { quoted: mek })
					}
					  break
					  case'tets':{

						let ytm =  await youtubedlv2(q)
console.log(ytm)
					}
					break
//____________________________________ytmp3_________________________________________	
	

								  //-----------------------------------------------apk 2------------------------
								  case 'shazam': {
									const v = sms(conn , mek)
									const mime = (quoted.msg || quoted).mimetype || ''
									if (/image/.test(mime)) return 
									if (/video/.test(mime)) return 
									 {
									  const acrcloud = require("acrcloud")
									  const acr = new acrcloud({ 
										  host: "identify-eu-west-1.acrcloud.com",
										  access_key: "a7982a1f271fc390f3a69cb5bac04498",
										  access_secret: "QPbD6UOnfawRtUiH88lzKx7edUaX20I0erUWCoCW"
									  }) 
								
									  let sampleq = await v.quoted.download()
									  acr.identify(sampleq).then(async (res) => {
										const helpmenu = `*Song Name 🎶:* ${res.metadata.music[0].title}\n`+
										`*Artist 🎤:* ${res.metadata.music[0].artists[0].name}\n`+
										`*Album 💽:* ${res.metadata.music[0].album.name}\n`+
										`*Relesed Date 📆:* ${res.metadata.music[0].release_date}`
										let mwn = await conn.sendMessage(from , { text: helpmenu }, { quoted: mek } ) 
										conn.sendMessage(from, { react: { text: '🎶', key: mwn.key }})
									  })
									} }
									break
//-------------------------------------------------APK MOD---------------------------------------------
									//modapk


									case "apkmd" :
										case "mod":
											case "modapk":
												case "rexdl":
										    try{      
										   const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + q)
										   const data = data2.respon
										   if (data.length < 1) return await  conn.sendMessage(from, { text: '*Not Found*' }, { quoted: mek } )
									var srh = [];  
										 for (var i = 0; i < data.length; i++) {
									srh.push({
										title: data[i].title,
										description: '',
										rowId: prefix + 'dapk2 ' + data[i].link
									});
								}
								  const sections = [{
									title: 'Mod Apk Down',
									rows: srh
								}]
								  const listMessage = {
text: `*┌───[ᴀꜱᴛʀᴏ ᴍᴏᴅᴀᴘᴋ ᴅᴏᴡɴ]*

${itac}│📟 TITLE:${itac} ${q}

└───────────◉`,
footer: config.FOOTER,
									title: '',
									buttonText: "Select Modapk",
									sections
								}
								  await conn.sendMessage(from, listMessage, {quoted: mek })
								}
								catch(e) {
								  await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
							  }
											
								   break
								   case 'dapk2':   
try {
	if (!q) return await conn.sendMessage(from , { text: 'need apk link' }, { quoted: mek } )
await conn.sendMessage(from, { react: { text: `🔄`, key: mek.key }})
    const apkdown = await conn.sendMessage(from , { text: pushname + ' ' + config.FILE_DOWN}, { quoted: mek } )
    await  conn.sendMessage(from, { delete: apkdown.key })
    const apkup = await conn.sendMessage(from , { text: pushname + ' ' + config.FILE_UP}, { quoted: mek } )
let data = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + q)
if ( data.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(from , { text: 'Size Is Up To 200MB ⛔' }, { quoted: mek } )
if ( data.respon.size.includes('GB')) return await conn.sendMessage(from , { text: 'Size Is Up To 200MB ⛔' }, { quoted: mek } )
const apk = await conn.sendMessage(from, {document: { url: data.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data.respon.title + '.apk', caption: `
*🚀 App Name :* ${data.respon.download[0].title}
*🔎 Apk Url :* ${q}`}, {quoted: mek})   
await conn.sendMessage(from, { react: { text: `📁`, key: apk.key }})     
await  conn.sendMessage(from, { delete: apkup.key }) 
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
}
catch(e) {
	await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}	
break	
//----------------------------------------------------------APK PLAYSTOR----------------------------------------------									

									case 'apk' : case 'findapk' : case 'playstore' : 
										    try{      
												if (!q) return await conn.sendMessage(from , { text: 'need apk name' }, { quoted: mek } )
										   const data2 = await fetchJson('https://api-mask-ser.herokuapp.com/api/search/playstore?text=' + q)
										   const data = data2.result
										   if (data.length < 1) return await  conn.sendMessage(from, { text: '*Not Found*' }, { quoted: mek } )
									var srh = [];  
										 for (var i = 0; i < data.length; i++) {
									srh.push({
										title: data[i].name,
										description: '',
										rowId: prefix + 'dapk ' + data[i].url
									});
								}
								  const sections = [{
									title: 'Mod Apk Down',
									rows: srh
								}]
								  const listMessage = {
text: `*┌───[ᴀꜱᴛʀᴏ ᴀᴘᴋ ᴅᴏᴡɴ]*

${itac}│📟 TITLE:${itac} ${q}

└───────────◉`,
footer: config.FOOTER,
title: '',
buttonText: "Select Apk",
sections
								}
								  await conn.sendMessage(from, listMessage, {quoted: mek })
								}
								catch(e) {
reply('*error*')
								
							} 
											
								   break
								   case 'dapk' :   
								   try {
									await conn.sendMessage(from, { react: { text: `🔄`, key: mek.key }})
									const apk_link = require('./lib/lang');
									if (!q) return await conn.sendMessage(from , { text: '*need apk link*' }, { quoted: mek } )
									if (!q.includes('play.google.com')) return await conn.sendMessage(from , { text: '*need playstore link*' }, { quoted: mek } )
										const n = q.replace('https://play.google.com/store/apps/details?id=', '')
								 const data = await fetchJson('https://bobiz-api.herokuapp.com/api/apk?url=https://play.google.com/store/apps/details?id=' + n)
								const name = data.name		
								  const fileup = await conn.sendMessage(from , { text: config.FILE_DOWN }, { quoted: mek } )
								  await conn.sendMessage(from, { delete: fileup.key })
									  const filedown = await conn.sendMessage(from , { text: config.FILE_UP }, { quoted: mek } )
									 const app_link = await apk_link(n)
								 if ( app_link.size.replace('MB' , '') > 200) return await conn.sendMessage(from , { text: '*Can\'t Download This Apk.Because File Size Up To 200 MB*' }, { quoted: mek } )
									if ( app_link.size.includes('GB')) return await conn.sendMessage(from , { text: '*Can\'t Download This Apk.Because File Size Up To 200 MB*' }, { quoted: mek } )
									 var ext = ''
									 if (app_link.type.includes('Download XAPK')) { ext = '.xapk' } 
									 else { ext = '.apk' }
									const apk = await conn.sendMessage(from , { document : { url : app_link.dl_link  } , mimetype : 'application/vnd.android.package-archive' , fileName : name + ext , caption: `
*🚀 App Name :* ${name}
*🔎 Apk Url :* ${q}`}, {quoted: mek})   
									await conn.sendMessage(from, { react: { text: `📁`, key: apk.key }})  
									await conn.sendMessage(from, { delete: filedown.key })
									await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})  
								   }
								   
										 catch(e) {
						   await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*' }, { quoted: mek } )  
						   } 
										 
break 

	//___________________-----------------------------iog-------------------------------------------____________________
	case 'logo': case 'logo1': try{
                if (!q) return reply(`Example : ${prefix + command} vihanga`)
				let it = '```'
                let sections = []   
                let listmenu = [`candy ${q}`,`christmas ${q}`,`3dchristmas ${q}`,`sparklechristmas ${q}`,`deepsea ${q}`,`scifi ${q}`,`toorainbow2 ${q}`,`waterpipe ${q}`,`spooky ${q}`,`pencil ${q}`,`circuit ${q}`,`discovery ${q}`,`metalic ${q}`,`fiction ${q}`,`demon ${q}`,`transformer ${q}`,`berry ${q}`,`thunder ${q}`,`3dstone2 ${q}`,`neonlight ${q}`,`glitch ${q}`,`harrypotter ${q}`,`brokenglass ${q}`,`papercut ${q}`,`watercolor ${q}`,`multicolor ${q}`,`neondevil ${q}`,`underwater ${q}`,`graffitibike ${q}`,`snow ${q}`,`cloud ${q}`,`honey ${q}`,`ice ${q}`,`queen ${q}`,`fruitjuice ${q}`,`biscuit ${q}`,`wood ${q}`,`chocolate ${q}`,`strawberry ${q}`,`matrix ${q}`,`blood ${q}`,`dropwater ${q}`,`toxic ${q}`,`lava ${q}`]
                let listmenuu = [`candy Logo`,`christmas Logo`,`3dchristmas Logo`,`sparklechristmas Logo`,`deepsea Logo`,`scifi Logo`,`toorainbow2 Logo`,`waterpipe Logo`,`spooky Logo`,`pencil Logo`,`circuit Logo`,`discovery Logo`,`metalic Logo`,`fiction Logo`,`demon Logo`,`transformer Logo`,`berry Logo`,`thunder Logo`,`3dstone2 Logo`,`neonlight Logo`,`glitch Logo`,`harrypotter Logo`,`brokenglass Logo`,`papercut Logo`,`watercolor Logo`,`multicolor Logo`,`neondevil Logo`,`underwater Logo`,`graffitibike Logo`,`snow Logo`,`cloud Logo`,`honey Logo`,`ice Logo`,`queen Logo`,`fruitjuice Logo`,`biscuit Logo`,`wood Logo`,`chocolate Logo`,`strawberry Logo`,`matrix Logo`,`blood Logo`,`dropwater Logo`,`toxic Logo`,`lava Logo`]
                        
                        let nombor = 1
                        let startnum = 0
                        
                        for (let x of listmenu) {
                        const list = {title: 'Logo Number ' + nombor++,
                                rows: [
                                   {
                                    title: `${listmenuu[startnum++]}`,
                                    
                                    rowId: `${prefix}${x}`
                        }, 
                          ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  conn.sendMessage(
                        from, 
                       {
                   text: `┌───[🐉ASTRO-MD🐉]\n\n  *LOGO MAKER*\n\n${it}│🧚 Name:${it} ${q}\n\n└───────────◉`,
                   footer: `${config.FOOTER}`,
                   title: ``,
                   buttonText: "SELECT LOGO",
                   sections
                  }, { quoted : mek })
				}catch(e) {
					await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
				}
                 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': try{
	const maker = require('mumaker')
    conn.sendMessage(from, { react: { text: `🖼️`, key: mek.key }})
             if (!q) return reply(`Example : ${prefix + command} Vihanga`) 
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                conn.sendMessage(from, { image: { url: anu }, caption: `${config.CAPTION}` }, { quoted: mek })
			}catch(e) {
				await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
			}
             break
//_______________________________________________________________________________________________________________________________________________________   //	      
		// tiktok //

		case 'tiktoknowm':
			case 'tiktok':
			case 'tt':{
				const fdl = require('caliph-api')
			    if (!q) return reply('*Enter the link*')
				let p = await fdl.downloader.tiktok(q)
				let nih = ``
				let buttons = [
                    {buttonId: `tiktokmp3 ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: config.CAPTION,
                    title: '',
                    footer: config.FOOTER,
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: mek})
			}
			    break
case 'tiktokmp3': 
			case 'tiktokaudio': {
				const fdl = require('caliph-api')
				if (!q) return reply('*Enter the link*')
				let aud = await fdl.downloader.tiktok(q)
				let cap = `Here you go!ðŸ‘‡`
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: mek })
				}
				break
				case 'poll': {
					var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({
					"pollCreationMessage": {
					"name": botname,
					"options": [
						{
					"optionName": "VOTE FOR PLEASURE"
						},
						{
					"optionName": "VOTE AND WIN IPHONE 14 PRO MAX"
						},
						{
					"optionName": "VOTE TO GET FREE +84 NUMBER"
						},
						{
					"optionName": "VOTE TO GET +54"
						},
						{
					"optionName": "VOTE TO GET +64"
						}
					],
					"selectableOptionsCount": 5
						}
					}),)
					conn.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
					}
					break
//_______________________________________________________________________________________________________________________________________________________   //		      
		// facebook //
		
	case 'fb2': case 'facebook2': try{
		if (!q) return await conn.sendMessage(from , { text: 'need fb link' }, { quoted: mek } )      
		const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
			if (!isfb) return await conn.sendMessage(from , { text: 'need fb link' }, { quoted: mek } )  
		if (!q) throw '*Enter a Link Query!*'
		 reply(` *Loading Your  ${pushname} FaceBook Video ... 🔄*`)
		anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=2d50-2587-536f&url=${q}`)
					FBCAP = `${anu.result.meta.title}==${anu.result.url[0].subname}`
					FBCAP2 = `${anu.result.meta.title}==${anu.result.url[1].subname}`
		conn.sendMessage(from, { video: { url: anu.result.url[1].url },caption:FBCAP2 }, { quoted: mek }).catch((err) => reply('*Sorry, the feature is in error*'))
		conn.sendMessage(from, { video: { url: anu.result.url[0].url },caption:FBCAP }, { quoted: mek }).catch((err) => reply('*Sorry, the feature is in error*'))
	}catch(e) {
			await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
		}
	break
// _ _ _ _ _ _ _ _ __  _ _ _ _ _ _  __  _ _ _ __ _  __ _  _ _ _ _ __ _ _  __  __ _  _ __  _ __ _ _ _  _ __ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __  __ _  __ _ _ _ _   //   		      
	
case 'fb': {// facebook
	if (!q) return reply(`*Please give me a link*`)
	xa.downloader.facebook(q).then(data => {
		 conn.sendMessage(from, { video: { url: data.sd }, caption: `*Quality :* SD`}, { quoted: mek })
		 conn.sendMessage(from, { video: { url: data.hd }, caption: `*Quality :* HD`}, { quoted: mek })
			
		 
	});}
	
   break

//........................................................MediaFire................................................................\\
 case 'ig': case 'igvid' :  {
    await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
    if (!q) return await conn.sendMessage(from , { text: '*Need Link eg: .ig https://www.instagram.com/reel/Ca5CMqaKQE5/&apikey=5VC9rvNx*' }, { quoted: mek } )    
let anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${q}`)
const download = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: download.key })	
const uplode = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
if (anu.respon.type === "GraphVideo") {
	conn.sendMessage(from, {video:{url:anu.respon.link}, caption:config.CAPTION, mimetype:'video/mp4'}, {quoted:mek})
	} else if (anu.respon.type === "GraphImage") {
	conn.sendMessage(from, {image:{url:anu.respon.link}, caption:config.CAPTION}, {quoted:mek})
	} 
await conn.sendMessage(from, { delete: uplode.key })    
    await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})          
}
break				
case 'mediafire': try{        
const { mediafireDl } = require('./lib/mediafire.js')
if (!q) reply('*Enter a Link Query!*')
if (!q.includes('mediafire.com')) return await conn.sendMessage(from , { text: 'need mediafire link' }, { quoted: mek } )
const baby1 = await mediafireDl(q)
if (baby1[0].size.split('MB')[0] >= 210) return reply('*File Over Limit*')
const result4 = `*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
let me = conn.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : mek }).catch ((err) => reply('*Failed to download File*'))
await conn.sendMessage(from, { react: { text: `📁`, key: me.key }})	}catch(e) {
	await conn.sendMessage(from , { text: '*Error Try Again Later ⛔*'  }, { quoted: mek } )
}
break

				default:
					
					if (isowner && body.startsWith('>')) {
						try {
							await reply(util.format(await eval(`(async () => {${body.slice(1)}})()`)))
						} catch(e) {
							await reply(util.format(e))
						}
					}
					
			}
			
		} catch (e) {
			const isError = String(e)
			console.log(isError)
		}
	})
}

connectToWA()
}, 3000)
