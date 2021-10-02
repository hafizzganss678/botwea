// MAKASIH BANG DAH PAKE
// KLO NYOLONG/COPY CASE ITU YG BNER BANG JANGAN STENGAH"
// TAMBAHIN NICK GUA JUGA KLO NYOLONG BANG
// MAAP BANG KLO BANYAK ERROR.. SOALNYA MASIH PEMULA
// BY maulansU ARD


const {
	WAConnection: _WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	MimetypeMap,
	WALocationMessage,
	ChatModification,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime
} = require("@adiwajshing/baileys")
const fs = require('fs')
const qrcode = require('qrcode');
const imgbb = require('imgbb-uploader')
const request = require('request')
const requests = require("node-fetch")
const toMs = require('ms')
const ms = require("parse-ms");
const FormData = require('form-data')
const yts = require('yt-search')
const axios = require("axios")
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const lolis = require('lolis.life')
const loli = new lolis()

//******************** 》Stick WM《 ********************\\
const Exif = require('./lib/exif');
const exif = new Exif();

//******************** 》Function《 ********************\\
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { fetchJson, fetchText, kyun } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { validmove, setGame } = require("./lib/tictactoe");
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')
const { yta, ytv } = require("./lib/ytdl");
const { fbdl } = require("./lib/fbdl");
const { uploadimg } = require('./lib/uploadimg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const _prem = require("./lib/premium");
const { addSticker, delCommand, listCommand } = require('./lib/stickcmd.js')
const game = require("./lib/game");
const { smsg } = require('./lib/simple')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { sleeep, isAfk, cekafk, addafk } = require('./lib/offline')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))

//******************** 》Database《 ********************\\
const anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const key = JSON.parse(fs.readFileSync('./database/key.json'))
const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))
const left = JSON.parse(fs.readFileSync('./database/left.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const setting = JSON.parse(fs.readFileSync('./database/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const stcmd = JSON.parse(fs.readFileSync('./database/stickcmd.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const stickerdb = JSON.parse(fs.readFileSync("./database/stickerdb.json"))
const reg = JSON.parse(fs.readFileSync('./database/register.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))

//******************** 》Src《 ********************\\
const pendaftar = JSON.parse(fs.readFileSync('./src/user.json'))
const tmp_hit = JSON.parse(fs.readFileSync('./src/hit.json'))
const tmphit = JSON.parse(fs.readFileSync('./src/today.json'))
//******************** 》Setting《 ********************\\
menusimpel = false
owner = "6285892842367"
ownerN = "6285892842367"
setgrup = "6281226770537-1606097314@g.us"
wa = '0@s.whatsapp.net'
blocked = []
public = false
offline = false
picdetec = false
shp = '⬡'
nama = 'SELFBOT'
fake = 'Fizz'
antidel = false
antical = false
aread = false
autovn = true
ngetik = false
vn = true

//******************** 》Prefix《 ********************\\
let multi = false
let nopref = false
let single = true
let prefa = 'F'

//******************** 》Path Image《 ********************\\
let gambar1 = fs.readFileSync('./pathImage/fizz.jpg')
let gambar2 = fs.readFileSync('./pathImage/fizz.jpg')
let gambar3 = fs.readFileSync('./pathImage/fizz.jpg')
let gambar4 = fs.readFileSync('./pathImage/fizz.jpg')
let fakeg = fs.readFileSync('./pathImage/emror.jpg')
/*
Note :
▪︎ Gambar1 : Pict Error
▪︎ Gambar2 : Pict Anime Witch
▪︎ Gambar3 : Pict Anime 
▪︎ Gambar4 : Pict Kayess
▪︎ Gambar5 : Pict Cute <3
*/


//******************** 》Game《 ********************\\
let tebakgambar = [];
let family100 = [];
let mtk = [];
let ckl = [];

//******************** 》Apikey《 ********************\\
let {
	hard,
	zeks,
	xtem,
	lol,
	tbz,
	ai
} = require('./database/key')

let {
	gamewaktu,
	limitCount
} = require('./database/settings')

//******************** 》Vcard《 ********************\\
const vcard = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ 'FN: FizzXyzzシ︎\n'
	+ 'ORG:SELFBOT;\n'
	+ 'TEL;type=CELL;type=VOICE;waid=6285892842367:+62 858-9284-2367\n'
	+ 'END:VCARD'

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = maulans = async (maulans, sen) => {
	try {
		const { convrt, donld, gem, sess, gc } = require('./lib/tutorial')
		const { menus } = require('./lib/menuSimpel')
		if (!sen.hasNewMessage) return
		sen = sen.messages.all()[0]
		//smsg(maulans, sen)
		if (!sen.message) return
		if (sen.key && sen.key.remoteJid == 'status@broadcast') return
		sen.message = (Object.keys(sen.message)[0] === 'ephemeralMessage') ? sen.message.ephemeralMessage.message : sen.message

		m = smsg(maulans, sen)
		global.prefix
		global.blocked
		
		
		

		const content = JSON.stringify(sen.message)
		const from = sen.key.remoteJid
		const type = Object.keys(sen.message)[0]

		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const mentionByTag = type == "extendedTextMessage" && sen.message.extendedTextMessage.contextInfo != null ? sen.message.extendedTextMessage.contextInfo.mentionedJid : []

		//******************** 》Date & Time《 ********************\\
                const ramadhan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=1&bulan=1')
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const datre = new Date().toLocaleDateString()
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
		const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
		const wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
		var date = new Date(dates);
		var tahun = date.getFullYear();
		var bulan1 = date.getMonth();
		var tanggal = date.getDate();
		var hari = date.getDay();
		var haris = date.getDay();
		var jam = date.getHours();
		var menit = date.getMinutes();
		var detik = date.getSeconds();
		var waktoo = date.getHours();

		switch (hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
		}
		switch (bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
		}
		switch (waktoo) {
			case 0: waktoo = "Malam"; break;
			case 1: waktoo = "Malam"; break;
			case 2: waktoo = "Malam"; break;
			case 3: waktoo = "Malam"; break;
			case 4: waktoo = "Pagi"; break;
			case 5: waktoo = "Pagi"; break;
			case 6: waktoo = "Pagi"; break;
			case 7: waktoo = "Pagi"; break;
			case 8: waktoo = "Pagi"; break;
			case 9: waktoo = "Pagi"; break;
			case 10: waktoo = "Pagi"; break;
			case 11: waktoo = "Siang"; break;
			case 12: waktoo = "Siang"; break;
			case 13: waktoo = "Siang"; break;
			case 14: waktoo = "Siang"; break;
			case 15: waktoo = "Sore"; break;
			case 16: waktoo = "Sore"; break;
			case 17: waktoo = "Sore"; break;
			case 18: waktoo = "Sore"; break;
			case 19: waktoo = "Malam"; break;
			case 20: waktoo = "Malam"; break;
			case 21: waktoo = "Malam"; break;
			case 22: waktoo = "Malam"; break;
			case 23: waktoo = "Malam"; break;
		}
		var Tanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
		var Hari = "" + waktoo;


		const mentionByReply = type == "extendedTextMessage" && sen.message.extendedTextMessage.contextInfo != null ? sen.message.extendedTextMessage.contextInfo.participant || "" : ""
		const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
		const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const cmd = (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()


		//******************* 》Prefix《 *******************\\
		if (multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'

		} else {
			if (nopref) {
				prefix = ''

			} else {
				if (single) {
					prefix = prefa
				}
			}
		}


		body = (type === 'conversation' && sen.message.conversation.startsWith(prefix)) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption.startsWith(prefix) ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption.startsWith(prefix) ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text.startsWith(prefix) ? sen.message.extendedTextMessage.text : (type == 'listResponseMessage') && sen.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? sen.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage' && sen.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix)) ? sen.message.buttonsResponseMessage.selectedButtonId : ''


		var pes = (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : (type == 'listResponseMessage') && sen.message.listResponseMessage.singleSelectReply.selectedRowId ? sen.message.listResponseMessage.singleSelectReply.selectedRowId : ''
		var tas = (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim()
		budy = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
		tmplt = Object.keys(sen.message)[0] == "listResponseMessage" ? sen.message.listResponseMessage.selectedDisplayText : ""
		q2 = Object.keys(sen.message)[0] == "listResponseMessage" ? sen.message.listResponseMessage.singleSelectReply.selectedRowId : ""
		q3 = Object.keys(sen.message)[0] == "buttonsResponseMessage" ? sen.message.buttonsResponseMessage.selectedButtonId : ""
		butresx = (type === 'buttonsResponseMessage') ? sen.message.buttonsResponseMessage.selectedDisplayText : ''

		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		chats = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
		const argss = body.split(/ +/g)

		mess = {
			wait: '[❕]  _Sedang di proses........._',
			limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
			eror: '_Error_',
			success: '✔️ Berhasil ✔️',
			error: {
				stick: '_Ulangi bang_',
				Iv: '_Link tidak valid_ '
			},
			only: {
				prem: `*_Kamu belum Terdaftar di Database Premium!!_\n_Ketik ${prefix}owner untuk Sewa Premium!_*`,
				group: '*_Fitur Dapat digunakan di Dalam Group!_*',
				ownerG: '*_Fitur Dapat digunakan oleh Owner Group!_*',
				ownerB: '*_Fitur Khusus Owner Bot!_*',
				admin: '*_Fitur dapat Digunakan oleh Admin Group!_*',
				Badmin: '*_Fitur dapat Digunakan Setelah Bot menjadi ADMIN!_*'
			}
		}
if (autovn) {
	if (autovn === false) return
await maulans.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await maulans.updatePresence(from, Presence.composing)
}
		
		const totalchat = await maulans.chats.all()
		const botNumber = maulans.user.jid
		const botN = botNumber.replace('@s.whatsapp.net', '')
		const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = sen.key.fromMe ? maulans.user.jid : isGroup ? sen.participant : sen.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const groupMetadata = isGroup ? await maulans.groupMetadata(from) : ''
		const isOwner = ownerNumber.includes(sender)
		const isPremium = isGroup ? _prem.checkPremiumUser(sender, premium) : false
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const itsMe = sen.key.fromMe ? true : false
		const isUser = pendaftar.includes(sender)
		const isRegister = reg.includes(sender)
		const isBanned = ban.includes(sender)
		const isAntilink = isGroup ? anlink.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isLeft = isGroup ? left.includes(from) : false
		const isBanchat = isGroup ? bancht.includes(from) : false
		const q = args.join(' ')
		const isVote = isGroup ? voting.includes(from) : false
		conts = sen.key.fromMe ? maulans.user.jid : maulans.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		const pushname = sen.key.fromMe ? maulans.user.name : conts.notify || conts.vname || conts.name || '-'
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user

		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}

		// ******************** 》Fake《 ******************** \\
		finvite = {
			"key": {
				"fromMe": false,
				"participant": "0@s.whatsapp.net",
				"remoteJid": "0@s.whatsapp.net"
			},
			"message": {
				"groupInviteMessage": {
					"groupJid": setgrup,
					"inviteCode": "NgsCIU2lXKh3VHJT",
					"groupName": groupName,
					"caption": fake,
					"height": 6080,
					"width": 6000
				}
			}
		}

const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": ` ${waktoo} ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./pathImage/bim.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true}
            })
        }


		//******************** 》Advance《 ********************\\

		function monospace(string) {
			return '```' + string + '```'
		}
		function jsonformat(string) {
			return JSON.stringify(string, null, 2)
		}
		function randomNomor(angka) {
			return Math.floor(Math.random() * angka) + 1
		}
		const nebal = (angka) => {
			return Math.floor(angka)
		}

		const replyWithFakeLink = (teks) => {
			maulans.sendMessage(from, teks, text, {
				contextInfo: {
					text: 'hi',
					"forwardingScore": 1000000000,
					isForwarded: false,
					sendEphemeral: false,
					"externalAdReply": {
						"title": `Whatsapp-BOT\nF i z z. (@fizz_xyzz) •Instagram photos and Videos`,
						"body": "",
						"previewType": "PHOTO",
						"thumbnailUrl": "https://i.ibb.co/KzcqYCk/9518353dca01.jpg",
						"thumbnail": gambar3,
						"sourceUrl": ``
					}, mentionedJid: [sender]
				}, quoted: sen
			})
		}
		const replyWithFake = (teks) => {
			maulans.sendMessage(from, teks, text, { quoted: finvite })
		}
		const reply = (teks) => {
			maulans.sendMessage(from, teks, text, { quoted: sen, thumbnail: gambar4 })
		}
		const sendMess = (hehe, teks) => {
			maulans.sendMessage(hehe, teks, text, { contextInfo: { forwardingScore: 9999, isForwarded: true }, thumbnail: gambar4 })
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? maulans.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : maulans.sendMessage(from, teks.trim(), extendedText, { quoted: sen, thumbnail: gambar4, contextInfo: { "mentionedJid": memberr } })
		}

		const sendMediaURL = async (to, url, text = "", mids = []) => {
			if (mids.length > 0) {
				text = normalizeMention(to, text, mids)
			}
			const fn = Date.now() / 10000;
			const filename = fn.toString()
			let mime = ""
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					mime = res.headers['content-type']
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, filename, async function () {
				console.log('done');
				let media = fs.readFileSync(filename)
				let type = mime.split("/")[0] + "Message"
				if (mime === "image/gif") {
					type = MessageType.video
					mime = Mimetype.gif
				}
				if (mime.split("/")[0] === "audio") {
					mime = Mimetype.mp4Audio
				}
				maulans.sendMessage(to, media, type, { quoted: sen, mimetype: mime, caption: text, contextInfo: { "mentionedJid": mids } })

				fs.unlinkSync(filename)
			});
		}

		const sendStickerFromUrl = async (to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
			var names = getRandom('.webp')
			var namea = getRandom('.png')
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, namea, async function () {
				let filess = namea
				let asw = names
				require('./lib/exif.js')
				exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
						let media = fs.readFileSync(asw)
						maulans.sendMessage(to, media, sticker)
						console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
						fs.unlinkSync(asw)
						fs.unlinkSync(filess)
					});
				});
			});
		}

		const sendStickerUrl = async (to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
			var names = getRandom('.webp')
			var namea = getRandom('.png')
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, namea, async function () {
				let filess = namea
				let asw = names
				require('./lib/exif.js')
				exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
						let media = fs.readFileSync(asw)
						maulans.sendMessage(from, media, sticker, { quoted: sen })
						console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
				});
			});
		}

//FUNCTION
            

		//******************* 》banchat《 ********************\\
		if (isBanchat) {
			if (!itsMe && !isOwner) return
		}

		if (aread) {
			return maulans.chatRead(from)
		}


		// ******************** 》Self/Public《 ******************** \\
		if (!public) {
			if (!isOwner && !itsMe) return
		}

		// ******************** 》Hit《 ******************** \\
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./src/user.json', JSON.stringify(pendaftar))
		}

		if (isCmd && isGroup) {
			tmp_hit.push(command)
			fs.writeFileSync('./src/hit.json', JSON.stringify(tmp_hit))
			tmphit.push(command)
			fs.writeFileSync('./src/today.json', JSON.stringify(tmphit))
		}

		_prem.expiredCheck(premium)


		// ******************** 》Register《 ******************** \\
		
		cekafk(afk)
            if (!sen.key.remoteJid.endsWith('@g.us') && offline){
            if (!sen.key.fromMe){
            if (isAfk(sen.key.remoteJid)) return
            addafk(sen.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            maulans.sendMessage(sen.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*SABAR JAN SPAM*", 'jpegThumbnail': fs.readFileSync('./pathImage/emror.jpg')}}}})
            }
            }   
            
        if (sen.key.remoteJid.endsWith('@g.us') && offline) {
        if (!sen.key.fromMe){
        if (sen.message.extendedTextMessage != undefined){
        if (sen.message.extendedTextMessage.contextInfo != undefined){
        if (sen.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of sen.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(sen.key.remoteJid)) return
        addafk(sen.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        maulans.sendMessage(sen.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*SABAR JAN SPAM*", 'jpegThumbnail': fs.readFileSync('./pathImage/emror.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }

		
		
		// ******************** 》GAME《 ******************** \\

		game.cekWaktuFam(maulans, family100)
		game.cekWaktuTG(maulans, tebakgambar)
		game.cekWaktuMtk(maulans, mtk)
		game.cekWaktuCkl(maulans, ckl)

		if (game.isMtk(from, mtk)) {
			if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))) {
				var htgm3 = randomNomor(1000)
				addBalance(sender, htgm3, balance)
				await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
				mtk.splice(game.getMtkPosi(from, mtk), 1)
			}
		}

		if (game.isCkl(from, ckl)) {
			if (chats.toLowerCase().includes(game.getJawabanCkl(from, ckl))) {
				var htgm2 = randomNomor(1000)
				addBalance(sender, htgm2, balance)
				await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCkl(from, ckl)}\n*Hadiah :* $${htgm2}\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
				ckl.splice(game.getCklPosi(from, ckl), 1)
			}
		}

		if (game.isTebakGambar(from, tebakgambar)) {
			if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))) {
				var htgm = randomNomor(1000)
				addBalance(sender, htgm, balance)
				await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
				tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
			}
		}

		if (game.isfam(from, family100)) {
			var anjuy = game.getjawaban100(from, family100)
			for (let i of anjuy) {
				if (chats.toLowerCase().includes(i)) {
					var htgm1 = randomNomor(1000)
					addBalance(sender, htgm1, balance)
					await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
					var anug = anjuy.indexOf(i)
					anjuy.splice(anug, 1)
				}
			}
			if (anjuy.length < 1) {
				maulans.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
				family100.splice(game.getfamposi(from, family100), 1)
			}
		}
		// *************** 》 Tictactoe BY MRHRTZ《 *************** \\
		const cmde = budy.toLowerCase().split(" ")[0] || "";
		let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
			const boardnow = setGame(`${from}`);
			if (budy == "Cex") return reply("why");
			if (
				budy.toLowerCase() == "y" ||
				budy.toLowerCase() == "yes" ||
				budy.toLowerCase() == "ya"
			) {
				if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
					if (boardnow.status)
						return reply(`Game telah dimulai sebelumnya!`);
					const matrix = boardnow._matrix;
					boardnow.status = true;
					fs.writeFileSync(`./lib/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2)
					);
					const chatAccept = `T I C T A C T O E  G A M E

INFO :
  Player ❎ : @${boardnow.X}
  Player ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;
					maulans.sendMessage(from, monospace(chatAccept), MessageType.text, {
						quoted: sen,
						contextInfo: {
							mentionedJid: [
								boardnow.X + "@s.whatsapp.net",
								boardnow.O + "@s.whatsapp.net",
							],
						},
					});
				} else {
					maulans.sendMessage(from, `Opsi ini hanya untuk @${boardnow.O} !`,
						MessageType.text, {
							quoted: sen,
						contextInfo: {
							mentionedJid: [boardnow.O + "@s.whatsapp.net"],
						},
					}
					);
				}
			} else if (
				budy.toLowerCase() == "n" ||
				budy.toLowerCase() == "no" ||
				budy.toLowerCase() == "tidak"
			) {
				if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
					if (boardnow.status)
						return reply(`Game telah dimulai sebelumnya!`);
					fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
					maulans.sendMessage(from, `Sayangnya tantangan @${boardnow.X} ditolak ❎😕`,
						MessageType.text, {
							quoted: sen,
						contextInfo: {
							mentionedJid: [boardnow.X + "@s.whatsapp.net"],
						},
					}
					);
				} else {
					maulans.sendMessage(from, `Opsi ini hanya untuk @${boardnow.O} !`, MessageType.text, {
						quoted: sen,
						contextInfo: {
							mentionedJid: [boardnow.O + "@s.whatsapp.net"],
						},
					}
					);
				}
			}
		}

		if (arrNum.includes(cmde)) {
			const boardnow = setGame(`${from}`);
			if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
			if (
				(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
				sender.replace("@s.whatsapp.net", "")
			)
				return;
			const moving = validmove(Number(budy), `${from}`);
			const matrix = moving._matrix;
			if (moving.isWin) {
				if (moving.winner == "SERI") {
					const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
					reply(chatEqual);
					fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
					return;
				}
				const winnerJID = moving.winner == "O" ? moving.O : moving.X;
				const looseJID = moving.winner == "O" ? moving.X : moving.O;
				const limWin = Math.floor(Math.random() * 20) + 10;
				const limLoose = Math.floor(Math.random() * 10) + 5;
				const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
				//    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
				//    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
				maulans.sendMessage(from, chatWon, MessageType.text, {
					quoted: sen, contextInfo: {
						mentionedJid: [
							moving.winner == "O" ?
								moving.O + "@s.whatsapp.net" :
								moving.X + "@s.whatsapp.net",
						],
					},
				});
				fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
			} else {
				const chatMove = `T I C T A C T O E  G A M E

INFO
  Player ❎ : @${moving.X}
  Player ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran : @${moving.turn == "X" ? moving.X : moving.O}

Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;
				maulans.sendMessage(from, monospace(chatMove), MessageType.text, {
					quoted: sen, contextInfo: {
						mentionedJid: [
							moving.X + "@s.whatsapp.net",
							moving.O + "@s.whatsapp.net",
						],
					},
				});
			}
		}

		if ((senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
			orangnye = sender
			teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
			if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
				fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
				mentions(teks, [sender], true)
			} else {
				reply(`Tidak ada sesi yg berlangsung`);
			}
		}


		//******************** 》AntiLink Gc《 ********************\\
		if (isGroup && !sen.key.fromMe && isAntilink) {
			if (budy.includes("://chat.whatsapp.com/")) {
				if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
				console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
				reply(`「 *ANTILINK GROUP DETECTOR* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
				setTimeout(() => {
					maulans.groupRemove(from, [sender])
				}, 2000);
			}
		}

		if (vn) {
			await maulans.updatePresence(from, Presence.recording)
		} else if (ngetik) {
			await maulans.updatePresence(from, Presence.composing)
		}

		// function ANTI viewOnce
		if (isGroup && m.mtype == 'viewOnceMessage') {
			var msg = { ...sen }
			msg.message = sen.message.viewOnceMessage.message
			msg.message[Object.keys(msg.message)[0]].viewOnce = false
			reply('ViewOnce detected!')
			maulans.copyNForward(from, msg)
		}

		// *************** 》 Responder Sticker《 *************** \\
		if (setiker.includes(messagesC)) {
			namastc = messagesC
			buffer = fs.readFileSync(`./src/stick/${namastc}.webp`)
			maulans.sendMessage(from, buffer, sticker, { quoted: sen })
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')



		if (!isGroup && isCmd) console.log(color('[•]', 'aqua'), time, color(command, 'white'), 'from', color(sender.split('@')[0], 'white'), 'args :', color(args.length, 'white'))
		if (isCmd && isGroup) console.log(color('[•]', 'aqua'), time, color(command, 'white'), 'from', color(sender.split('@')[0], 'white'), 'in', color(groupName), 'args :', color(args.length, 'white'))


		let authorname = maulans.contacts[from] != undefined ? maulans.contacts[from].vname || maulans.contacts[from].notify : undefined
		if (authorname != undefined) { } else { authorname = pushname }

		function addMetadata(packname, author) {
			if (!packname) packname = 'WABot'; if (!author) author = 'Bot';
			author = author.replace(/[^a-zA-Z0-9]/g, '');
			let name = `${author}_${packname}`
			if (fs.existsSync(`./database/stickers/${name}.exif`)) return `./database/stickers/${name}.exif`
			const json = {
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
			}
			const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
			const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

			let len = JSON.stringify(json).length
			let last

			if (len > 256) {
				len = len - 256
				bytes.unshift(0x01)
			} else {
				bytes.unshift(0x00)
			}

			if (len < 16) {
				last = len.toString(16)
				last = "0" + len
			} else {
				last = len.toString(16)
			}

			const buf2 = Buffer.from(last, "hex")
			const buf3 = Buffer.from(bytes)
			const buf4 = Buffer.from(JSON.stringify(json))
			const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

			fs.writeFile(`./database/stickers/${name}.exif`, buffer, (err) => {
				return `./database/stickers/${name}.exif`
			})
		}



		if (isGroup && !isVote) {
			if (budy.toLowerCase() === 'vote') {
				let vote = JSON.parse(fs.readFileSync(`./database/pvote/${from}.json`))
				let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))
				let fil = vote.map(v => v.participant)
				let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
				if (fil.includes(id_vote)) {
					return mentions('@' + sender.split('@')[0] + ' Anda sudah vote', fil, true)
				} else {
					vote.push({
						participant: id_vote,
						voting: '✅'
					})
					fs.writeFileSync(`./database/pvote/${from}.json`, JSON.stringify(vote))
					let _p = []
					let _vote = '*Vote* ' + '@' + _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`
					for (let i = 0; i < vote.length; i++) {
						_vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
						_p.push(vote[i].participant)
					}
					_p.push(_votes[0].votes)
					mentions(_vote, _p, true)
				}
			} else if (budy.toLowerCase() === 'devote') {
				const vote = JSON.parse(fs.readFileSync(`./database/pvote/${from}.json`))
				let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))
				let fil = vote.map(v => v.participant)
				let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
				if (fil.includes(id_vote)) {
					return mentions('@' + sender.split('@')[0] + ' Anda sudah vote', fil, true)
				} else {
					vote.push({
						participant: id_vote,
						voting: '❌'
					})
					fs.writeFileSync(`./database/pvote/${from}.json`, JSON.stringify(vote))
					let _p = []
					let _vote = '*Vote* ' + '@' + _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`
					for (let i = 0; i < vote.length; i++) {
						_vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
						_p.push(vote[i].participant)
					}
					_p.push(_votes[0].votes)
					mentions(_vote, _p, true)
				}
			}
		}
		
		            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Ingin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }

		//******************** 》listMessage《 ********************\\
		try {
			switch (tmplt) {
				
				case '+62':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=ItsMeVean`)
					break
				case 'santuy':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=ItsMeVean`)
					break
				case 'bocil':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeVean`)
					break
				case 'ukhti':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=ItsMeVean`)
					break
				case 'rikagusriani':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=ItsMeVean`)
					break
				case 'ghea':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					reply(mess.wait)
					sendMediaURL(from, `https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=ItsMeVean`)
					break

				case 'MP3':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(`Kamu bukan user premium`)
					reply(mess.wait)
					try {
						downm = await yta(q2)
						const { dl_link, thumb, title, filesizeF, filesize } = downm
						if (Number(filesize) >= 50000) {
							short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
						}
						teks = `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Type : MP3\n\nTunggu sebentar\nMusic segera dikirim`
						sendMediaURL(from, thumb, teks)
						sendMediaURL(from, dl_link)
					} catch (e) {
						reply(mess.error)
					}
					break

				case 'MP4':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(`Kamu bukan user premium`)
					reply(mess.wait)
					try {
						downm = await ytv(q2)
						const { dl_link, thumb, title, filesizeF, filesize } = downm
						if (Number(filesize) >= 50000) {
							short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
						}
						teks = `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Type : MP4\n\nTunggu sebentar\nMusic segera dikirim`
						sendMediaURL(from, thumb, teks)
						sendMediaURL(from, dl_link)
					} catch (e) {
						reply(mess.error)
					}
					break
			}
		} catch {
		}



		//BUTTON 
		//UPDATE BAILEYS TO LAST VERSION SO THAT FEATURE CAN BE USED
		
		switch(butresx){
		case 'PING':
		if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				var groups = maulans.chats.array.filter(v => v.jid.endsWith('g.us'))
				var private = maulans.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				const chatsIds = await maulans.chats.all()
				const timestamp = speed();
				const latensi = speed() - timestamp
				p0 = ` Loaded Message
                
- [ ${totalchat.length} ]  Total Chat
- [ ${groups.length} ] Group Chat
- [ ${private.length} ] Private Chat
- [ ${maulans.user.phone.device_manufacturer} ] HANDPHONE
- [ ${maulans.user.phone.wa_version} ] WA Version
- [ Baileys ] Libary

Speed : ${latensi.toFixed(4)} Second`
				reply(monospace(p0))
				break
				case 'ALLMENU':
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (menusimpel == false) {
					let tag = owner.split('@')[0]
					let mjid = owner
					let waa = wa.split('@')[0]
					let mjud = wa

					const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
					let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
					const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second` : 'Not Premium'
					let UFree = `${pendaftar.length}`
					let UReg = `${reg.length}`
					let UPrem = `${premium.length}`
					let THit = `${tmp_hit.length}`
					let limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
					let glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
					let blan = `${getBalance(sender, balance)}`
					let usrr = `${sender.split("@")[0]}`
					let runn = process.uptime()
					let njing = `${kyun(runn)}`
					let p = 0
				menu1 = `
			*_-BOT INFO-_*
-Creator Bot : @${tag}
-Total User Free : ${UFree}
-Total Hit : ${THit}
-Jam : ${wib} WIB
-Hari : ${Tanggal}
-Runtime : ${njing}

_Hitung mundur tahun baru_

${ramadhan.data.result}

			*_-USER INFO-_*

-Nama : ${pushname}
-Tag : @${usrr}
-Status : ${premm}
-Expired : ${premi}
-Limit : ${limm}
-Limit Game : ${glimm}
-Balance : $${blan}

              *_-JAM INDONESIA-_*
              
- Jam : ${wib} WIB
- Jam : ${wita} WITA
- Jam : ${wit} WIT

                *_-PREFIX BOT-_*
 
-Prefix : ${prefix}
  `
  menu2 = `
*-------- MENU SELFBOT --------*


- - - *CONVERT :* - - -

-🗃️ ${p += 1}. ${prefix}sticker
-🗃️ ${p += 1}. ${prefix}stickergif
-🗃️ ${p += 1}. ${prefix}stickwm
-🗃️ ${p += 1}. ${prefix}sticknobg
-🗃️ ${p += 1}. ${prefix}stickmeme
-🗃️ ${p += 1}. ${prefix}stickmeme2
-🗃️ ${p += 1}. ${prefix}stickmeme3
-🗃️ ${p += 1}. ${prefix}stickwasted
-🗃️ ${p += 1}. ${prefix}stickwasted2
-🗃️ ${p += 1}. ${prefix}take
-🗃️ ${p += 1}. ${prefix}exif
-🗃️ ${p += 1}. ${prefix}colong
-🗃️ ${p += 1}. ${prefix}attp
-🗃️ ${p += 1}. ${prefix}ttp
-🗃️ ${p += 1}. ${prefix}ttp2
-🗃️ ${p += 1}. ${prefix}ttp3
-🗃️ ${p += 1}. ${prefix}toimg
-🗃️ ${p += 1}. ${prefix}togif
-🗃️ ${p += 1}. ${prefix}tovid
-🗃️ ${p += 1}. ${prefix}tomp3
-🗃️ ${p += 1}. ${prefix}tovn
-🗃️ ${p += 1}. ${prefix}emoji
-🗃️ ${p += 1}. ${prefix}img2url
-🗃️ ${p += 1}. ${prefix}url2img
-🗃️ ${p += 1}. ${prefix}zodiak


- - - *DOWNLOADER :* - - -

 -⏳ ${p += 1}. ${prefix}mp
 -⏳ ${p += 1}. ${prefix}play
 -⏳ ${p += 1}. ${prefix}ytdown
 -⏳ ${p += 1}. ${prefix}playmp3
 -⏳ ${p += 1}. ${prefix}playmp4
 -⏳ ${p += 1}. ${prefix}playvid
 -⏳ ${p += 1}. ${prefix}ytsearch
 -⏳ ${p += 1}. ${prefix}ytmp3
 -⏳ ${p += 1}. ${prefix}ytmp4
 -⏳ ${p += 1}. ${prefix}joox
 -⏳ ${p += 1}. ${prefix}tiktok
 -⏳ ${p += 1}. ${prefix}tiktokwm
 -⏳ ${p += 1}. ${prefix}tiktoknowm
 -⏳ ${p += 1}. ${prefix}ig
 -⏳ ${p += 1}. ${prefix}igstory
 -⏳ ${p += 1}. ${prefix}fb
 -⏳ ${p += 1}. ${prefix}xnxxsearch
 -⏳ ${p += 1}. ${prefix}xnxxstalk
 -⏳ ${p += 1}. ${prefix}xnxxdownload


- - - *FUN :* - - -

 -✨  ${p += 1}. ${prefix}jadian
 -✨  ${p += 1}. ${prefix}hobby
 -✨  ${p += 1}. ${prefix}rate
 -✨  ${p += 1}. ${prefix}bisakah
 -✨  ${p += 1}. ${prefix}apakah
 -✨  ${p += 1}. ${prefix}kapankah


- - - *OWNER :* - - -

 -👑  ${p += 1}. ${prefix}searchmsg
 -👑  ${p += 1}. ${prefix}picdetect
 -👑  ${p += 1}. ${prefix}setmenu
 -👑  ${p += 1}. ${prefix}setprefix
 -👑  ${p += 1}. ${prefix}clearall
 -👑  ${p += 1}. ${prefix}self
 -👑  ${p += 1}. ${prefix}bc
 -👑  ${p += 1}. ${prefix}banchat
 -👑  ${p += 1}. ${prefix}listbanchat
 -👑  ${p += 1}. ${prefix}unbanchat
 -👑  ${p += 1}. ${prefix}antidelete
 -👑  ${p += 1}. ${prefix}anticall
 -👑  ${p += 1}. ${prefix}autoread
 -👑  ${p += 1}. ${prefix}q
 -👑  ${p += 1}. x
 -👑  ${p += 1}. >
 -👑  ${p += 1}. =>
 -👑  ${p += 1}. $


- - - *GAME :* - - -

 -⚔️  ${p += 1}. ${prefix}tictactoe
 -⚔️  ${p += 1}. ${prefix}delttc
 -⚔️  ${p += 1}. ${prefix}math
 -⚔️  ${p += 1}. ${prefix}caklontong
 -⚔️  ${p += 1}. ${prefix}family100
 -⚔️  ${p += 1}. ${prefix}tebakgambar
 -⚔️  ${p += 1}. ${prefix}limit
 -⚔️  ${p += 1}. ${prefix}giftlimit
 -⚔️  ${p += 1}. ${prefix}buylimit
 -⚔️  ${p += 1}. ${prefix}buyglimit
 -⚔️  ${p += 1}. ${prefix}topbalance
 -⚔️  ${p += 1}. ${prefix}tod
 -⚔️  ${p += 1}. ${prefix}truth
 -⚔️  ${p += 1}. ${prefix}dare


- - - *SESSION :* - - -

 -📲  ${p += 1}. ${prefix}jadibot
 -📲  ${p += 1}. ${prefix}stopjadibot
 -📲  ${p += 1}. ${prefix}listbot
 -📲  ${p += 1}. ${prefix}vote
 -📲  ${p += 1}. ${prefix}delvote
 -📲  ${p += 1}. vote
 -📲  ${p += 1}. devote


- - - *SEARCH :* - - -

 -🔎  ${p += 1}. ${prefix}covidindo
 -🔎  ${p += 1}. ${prefix}covid
 -🔎  ${p += 1}. ${prefix}covidglobal


- - - *ADVANCE :* - - -

 -📚  ${p += 1}. cekprefix
 -📚  ${p += 1}. ${prefix}sc
 -📚  ${p += 1}. ${prefix}join
 -📚  ${p += 1}. ${prefix}asupan
 -📚  ${p += 1}. ${prefix}owner
 -📚  ${p += 1}. ${prefix}tts
 -📚  ${p += 1}. ${prefix}runtime
 -📚  ${p += 1}. ${prefix}ping
 -📚  ${p += 1}. ${prefix}addprem
 -📚  ${p += 1}. ${prefix}delprem
 -📚  ${p += 1}. ${prefix}cekprem
 -📚  ${p += 1}. ${prefix}listprem
 -📚  ${p += 1}. ${prefix}blocklist
 -📚  ${p += 1}. ${prefix}listgroup


- - - *STALKING :* - - -

 -🔍  ${p += 1}. ${prefix}lirik
 -🔍  ${p += 1}. ${prefix}igstalk
 -🔍  ${p += 1}. ${prefix}tiktokstalk
 -🔍  ${p += 1}. ${prefix}searchmusic


- - - *MAKER :* - - -

 -🖼  ${p += 1}. ${prefix}tahta
 -🖼  ${p += 1}. ${prefix}thunder
 -🖼  ${p += 1}. ${prefix}marvel
 -🖼  ${p += 1}. ${prefix}glitch
 -🖼  ${p += 1}. ${prefix}blackpink


- - - *STORAGE :* - - -

 -📂  ${p += 1}. ${prefix}addcmd
 -📂  ${p += 1}. ${prefix}listcmd
 -📂  ${p += 1}. ${prefix}delcmd
 -📂  ${p += 1}. ${prefix}addstick
 -📂  ${p += 1}. ${prefix}liststick
 -📂  ${p += 1}. ${prefix}dellstick


- - - *GROUP :* - - -

 -💍  ${p += 1}. ${prefix}welcome
 -💍  ${p += 1}. ${prefix}left
 -💍  ${p += 1}. ${prefix}setwelcome
 -💍  ${p += 1}. ${prefix}delwelcome
 -💍  ${p += 1}. ${prefix}setleft
 -💍  ${p += 1}. ${prefix}delleft
 -💍  ${p += 1}. ${prefix}antilink
 -💍  ${p += 1}. ${prefix}disable
 -💍  ${p += 1}. ${prefix}enable
 -💍  ${p += 1}. ${prefix}group
 -💍  ${p += 1}. ${prefix}promote
 -💍  ${p += 1}. ${prefix}demote
 -💍  ${p += 1}. ${prefix}add
 -💍  ${p += 1}. ${prefix}radd
 -💍  ${p += 1}. ${prefix}kick
 -💍  ${p += 1}. ${prefix}rkick
 -💍  ${p += 1}. ${prefix}setnamegc
 -💍  ${p += 1}. ${prefix}setdescgc
 -💍  ${p += 1}. ${prefix}linkgroup
 -💍  ${p += 1}. ${prefix}revokelink
 -💍  ${p += 1}. ${prefix}leave
 -💍  ${p += 1}. ${prefix}infoall
 -💍  ${p += 1}. ${prefix}getpic
 -💍  ${p += 1}. ${prefix}getstatus
 -💍  ${p += 1}. ${prefix}hidetag
 -💍  ${p += 1}. ${prefix}totag
 -💍  ${p += 1}. ${prefix}mention
 -💍  ${p += 1}. ${prefix}tagme
 -💍  ${p += 1}. ${prefix}read
 -💍  ${p += 1}. ${prefix}getsider
 -💍  ${p += 1}. ${prefix}groupinfo
 -💍  ${p += 1}. ${prefix}me
 -💍  ${p += 1}. ${prefix}delete
 -💍  ${p += 1}. ${prefix}listadmin


- - - *THANKS TO :* - - -

${shp} : WhatsApp : @${waa}
${shp} : Mhankbarbar
${shp} : XinzBot
${shp} : Bimbim
${shp} : Hafizz
${shp} : Fajar
${shp} : Hardianto
${shp} : All Creator Bot
${shp} : Penyedia RestApi dan Module
`
					let mhan = await maulans.prepareMessage('0@s.whatsapp.net', gambar1, MessageType.image, {})
					mhan.message.imageMessage.jpegThumbnail = gambar4
					mhan.message.imageMessage.fileLength = (String(9)).repeat(8)
					let gbutsan = [
						{ buttonId: 'OWNER', buttonText: { displayText: 'OWNER' }, type: 1 }
					]
					let gbuttonan = {
						imageMessage: mhan.message.imageMessage,
						contentText: `${menu1}`,
						footerText: `${menu2}`,
						buttons: gbutsan,
						headerType: 4
					}
					await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
						contextInfo: {
							"externalAdReply": {
                    "title": `► Hi ${pushname}`,
                    "body": `Saya Fizz\n${Tanggal}`,
                    "mediaType": "2",
                    "thumbnailUrl": "https://i.ibb.co/xHG25Yn/298d8b4b8877.jpg",
                    "mediaUrl": "https://youtu.be/kiqEEr7CK2g",
                    "thumbnail": fakeg,
                    "sourceUrl": "",
                },
							mentionedJid: [mjid, sender, mjud],
							forwardingScore: 1e7,
							isForwarded: true
						}, quoted: sen
					})
				}
				else if (menusimpel = true) {
					reply(menus(prefix, pushname, waktoo, wib, hari, Tanggal))
				}
				break
		case 'OWNER': 
		
		maulans.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact ,{ quoted : sen})
		.then((res) => maulans.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
		break
		
		case 'WM' :
		if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		reply(mess.wait)
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lol}&url=${q3}`)
		maulans.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: sen, caption : monospace(`T I K T O K  W I T H  W M`)})
		break
		
		case 'MUSIC' :
		if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		if (!isPremium) return reply(`Kamu bukan user premium`)
		reply(mess.wait)
		ttms = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${q3}`)
		sendMediaURL(from, ttms.mp3)
		break
		
		case 'NOWM' :
		if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		  reply(mess.wait)
		anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=HafzzYourBaka&url=${q3}`, {method: 'get'})
		if (anu.error) return reply(anu.error)
		tt = `「 *TIKTOK NO WM* 」\n\n*Judul:* ${anu.result.title}\n*Keywords:* ${anu.result.keywords}\n*Desc:* ${anu.result.description}`
		 buff = await getBuffer(anu.result.link)
		 maulans.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: sen,caption : tt})
		 break
		 
		
		case 'AUDIO': 
		
		if (!isPremium) return reply(`Kamu bukan user premium`)
		
		try {
		reply('_Sedang DiProsess.._')
		let yut = await yts(q3)
		yta(yut.videos[0].url)
		.then((res) => {
		const { dl_link, thumb, title, filesizeF, filesize } = res
		axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		.then((a) => {
		if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		
		const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
		//sendMediaURL(from, thumb, captionis)
		sendMediaURL(from, dl_link, '')
		
		})
		})
		.catch((err) => reply(`${err}`))
		} catch (err) {
		sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
		console.log(color('[PlayMp3]', 'red'), err)
		reply(mess.error.api)
		}
		break
		case 'BUGGC':
		maulans.toggleDisappearingMessages(from, 0)
		break
		
		
		case 'VIDEO' :
		if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		if (!isPremium) return reply(`Kamu bukan user premium`)
		try {
		reply(mess.wait)
		let yut = await yts(q3)
		ytv(yut.videos[0].url)
		.then((res) => {
		const { dl_link, thumb, title, filesizeF, filesize } = res
		axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		.then((a) => {
		if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
							   
		const mp4 = `
		*PLAY VIDEO\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
		//sendMediaURL(from, thumb, mp4)
		sendMediaURL(from, dl_link, mp4)
		limitAdd(sender, limit)
		})
		})
		.catch((err) => reply(`${err}`))
		} catch (err) {
		sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
		console.log(color('[PlayMp4]', 'red'), err)
		reply(mess.error)
		}
		break
		  
		}
		

		//******************** 》CmdWithPrefix《 ********************\\
		//const antibot = sen.isBaileys
		// (antibot === true) return
		switch (command) {
			case 'delvote':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!sen.key.remoteJid) return
				if (isVote) return reply('Tidak ada sesi Voting')
				delVote(from)
				reply('Sukses Menghapus sesi Voting Di Grup Ini')
				break

			case 'voting': case 'vote':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroupAdmins && !itsMe) return
				if (!isGroup) return reply(mess.only.group)
				if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
				if (!q) return reply(`*Voting*\n\n ${prefix + command} @tag target | reason  | 1 (1 = 1 Menit)`)
				if (sen.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || sen.message.extendedTextMessage.contextInfo == null) {
					let id = sen.message.extendedTextMessage.contextInfo.mentionedJid[0]
					split = args.join(' ').replace('@', '').split('|')
					if (!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
					await mentions('Vote ' + '@' + id.split('@')[0] + ' Di Mulai' + '\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`, [id], true)
					addVote(from, split[1], split[0], split[2], reply)
				}
				break

			case 'jadibot':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		
				if (itsMe) return reply('Tidak bisa jadibot di dalam bot')
				if (isGroup) return reply(`*Fitur Hanya dapat digunakan dalam Private Chat! => wa.me/${botN}?text=${prefix}jadibot*`)
				jadibot(reply, maulans, from, sen)
				break

			case 'stopjadibot':
				if (!itsMe && !isOwner) return reply('tidak bisa stopjadibot kecuali owner')
				stopjadibot(reply)
				break
				case 'autovn':

if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`) 
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break

			case 'listbot':
				let tekss = 'L I S T B O T \n\n'
				let lbt = [];
				for (let i of listjadibot) {
					lbt.push(i.jid)
					tekss += `N a m a : ${i.name}
T a g : @${i.jid.split('@')[0]}
D e v i c e: ${i.phone.device_manufacturer}
M o d e l : ${i.phone.device_model}\n\n`
				}
				mentions(monospace(tekss), lbt, true)
				break
    case  'on':
    
		            if (!sen.key.fromMe) return 
		            offline = false
		            reply(' ```ANDA TELAH ONLINE``` ')
		            break       
		    
		    case  'off':
		            if (!sen.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            reply(' ```ANDA TELAH OFFLINE``` ')
		            break   
			case 'sc': case 'script':
				reply(`*COMING SOON!!*`)
				break

			case 'tutorial':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (args[0] == 'convert') {
					conv = `${convrt(prefix, pushname)}`
					reply(monospace(conv))
				} else if (args[0] == 'download') {
					don = `${donld(prefix, pushname)}`
					reply(monospace(don))
				} else if (args[0] == 'game') {
					gm = `${gem(prefix, pushname)}`
					reply(monospace(gm))
				} else if (args[0] == 'session') {
					sss = `${sess(prefix, pushname)}`
					reply(monospace(sss))
				} else if (args[0] == 'group') {
					gp = `${gc(prefix, pushname)}`
					reply(monospace(gp))
				} else {
					reply(monospace(`Wrong Format!!\n\nExample ${prefix + command} convert\n\nList Opinion\n  • convert\n  • download\n  • session\n  • game\n  • group`))
				}
				break

			case 'setmenu':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (args[0] == 'simpel') {
					menusimpel = true
					reply('Sucsess')
				} else if (args[0] == 'ori') {
					menusimpel = false
					reply('Sucsess')
				} else {
					reply(`Cara Penggunaan : ${prefix + command} image\n\nTersedia\n •simpel\n •ori`)
				}
				break

			case 'caripesan': case 'searchmsg':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isOwner && !itsMe) return
				if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n • ${prefix + command} bot|10`)
				tekse = args.join('')
				if (tekse.includes("|")) {
					try {
						var ve = tekse.split("|")[0]
						var za = tekse.split("|")[1]
						if (za > 15) return reply('minimum 15')
						sampai = `${za}`
						batas = parseInt(sampai) + 1
						cok = await maulans.searchMessages(`${ve}`, from, batas, 1)
						if (cok.messages.lenght < 2) return reply('Message Not Found')
						if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
						for (let i = 1; i < cok.messages.length; i++) {
							if (cok.messages[i].message) {
								maulans.sendMessage(from, `This Chat!`, text, { quoted: cok.messages[i] })
							}
						}
					} catch (e) {
						console.log(e)
						return reply(`*Pesan Yang Anda Cari Tidak DiTemukan!*`)
					}
				} else {
					reply(`Error`)
				}
				break
				case 'tes5':
const fkontak ={
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage' : { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname}, ;;;\nFN:${pushname}, \nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./pathImage/senku.jpg')}}}
imeg = await maulans.prepareMessage(from, fs.readFileSync('./pathImage/senku.jpg'), 'imageMessage')
imeu = imeg.message.imageMessage
maulans.relayWAMessage(await maulans.prepareMessageFromContent(from, {productMessage: {
businessOwnerJid: '6285892842367@s.whatsapp.net',
product: {
productId: '1011',
productImage:imeu,
title: 'HALO SAYA SELFBOT',
description:  `Silahkan Ketik #menu`,
currencyCode: 'IDR',
priceAmount1000: '10000000',
retailerId: '0507',
url: 'https://wa.me/62895349917040',
productImageCount: 1,
salePriceAmount1000: '7.8000',
}
}
}, {quoted:fkontak}))
let ler = await maulans.prepareMessage(from, fs.readFileSync('./pathImage/senku.jpg'), image)
gbutsan = [
{ buttonId: 'OWNER', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: 'PING', buttonText: { displayText: 'PING' }, type: 1 },
]
gbuttonan = {
imageMessage: ler.message.imageMessage,
contentText: 'Hi Perkenalkan aku adalah Fizz yang menemanimu di saat kamu gabut/bete.',
footerText: 'Pilih Salah Satu Dibawah ini yah\n_____________________________________',
buttons: gbutsan,
headerType: 1
}
await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: sen})
break
//case 'bug':

let l0r = await maulans.prepareMessage(from, fs.readFileSync('./pathImage/senku.jpg'), image)
gbunan = [
{ buttonId: 'BUGGC', buttonText: { displayText: 'BUGGC🥵' }, type: 1 },
{ buttonId: 'BUGGC', buttonText: { displayText: 'BUGTROLI' }, type: 1 },
]
gbunan = {
imageMessage: l0r.message.imageMessage,
contentText: 'Hi Perkenalkan aku adalah Fizz yang menemanimu di saat kamu gabut/bete.',
footerText: 'Pilih Salah Satu Dibawah ini yah\n_____________________________________',
buttons: gbunan,
headerType: 1
}
await maulans.sendMessage(from, gbunan, MessageType.buttonsMessage, {quoted: sen})
break

			//* CAN BE USED AFTER UPDATE LAST BAILEYS *
case 'menu': case 'help':{
	if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			tag = owner.split('@')[0]
			let mjid = owner
			waa = wa.split('@')[0]
			let mjud = wa
			const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
			let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second`:'Not Premium'
			UFree = `${pendaftar.length}`
			UReg = `${reg.length}`
			UPrem = `${premium.length}`
			THit = `${tmp_hit.length}`
			limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
			glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
			blan = `${getBalance(sender, balance)}`
			usrr = `${sender.split("@")[0]}`
			runn = process.uptime()
			njing = `${kyun(runn)}`
			let p = 0
			menu1 = `
			
  -Creator Bot : @${tag} 
  -Thanks To : @${waa} 
  -Total User Free : ${UFree} 
  -Total Hit : ${THit} 
  -Hari : ${Tanggal} 
  -Runtime : ${njing} 

_Hitung mundur tahun baru_

${ramadhan.data.result}
		   
*_-USER INFO-_*

  -Nama : ${pushname} 
  -Tag : @${usrr} 
  -Status : ${premm} 
  -Expired : ${premi} 
  -Limit : ${limm} 
  -Limit Game : ${glimm} 
  -Balance : $${blan} 
  `
  menu2 = `
  JAM INDONESIA
  Jam : ${wib} WIB
  Jam : ${wita} WITA
  Jam : ${wit} WIT
  
  PREFIX BOT
  Prefix : ${prefix}
`		  
let gbutsan = [
					{ buttonId: 'OWNER', buttonText: { displayText: 'OWNER' }, type: 1 },
	                                { buttonId: 'ALLMENU', buttonText: { displayText: 'ALLMENU' }, type: 1 }
				]
				let gbuttonan = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar3
					},
					contentText: `${menu1}`,
					footerText: `${menu2}`,
					buttons: gbutsan,
					headerType: 6
				}
				await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [mjid, sender, mjud],
						forwardingScore: 1e7,
						isForwarded: true
					}, quoted: finvite
				})
			break		   
}
case 'start': case 'menu2': case 'allmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (menusimpel == false) {
					let tag = owner.split('@')[0]
					let mjid = owner
					let waa = wa.split('@')[0]
					let mjud = wa
					const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
					let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
					const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second` : 'Not Premium'
					let UFree = `${pendaftar.length}`
					let UReg = `${reg.length}`
					let UPrem = `${premium.length}`
					let THit = `${tmp_hit.length}`
					let limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
					let glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
					let blan = `${getBalance(sender, balance)}`
					let usrr = `${sender.split("@")[0]}`
					let runn = process.uptime()
					let njing = `${kyun(runn)}`
					let p = 0
				menu1 = `
			*_-BOT INFO-_*
-Creator Bot : @${tag} 
-Thanks To : @${waa} 
-Total User Free : ${UFree} 
-Total Hit : ${THit} 
-Jam : ${wib} WIB 
-Hari : ${Tanggal} 
-Runtime : ${njing} 

_Hitung mundur tahun baru_

${ramadhan.data.result}
 
			*_-USER INFO-_*
			
-Nama : ${pushname} 
-Tag : @${usrr} 
-Status : ${premm} 
-Expired : ${premi} 
-Limit : ${limm} 
-Limit Game : ${glimm} 
-Balance : $${blan} 

            *_-JAM INDONESIA-_*
            
- Jam : ${wib} WIB
- Jam : ${wita} WITA
- Jam : ${wit} WIT
  
           *_-PREFIX BOT-_*
           
- Prefix : ${prefix}
  `
  menu2 = `
*-------- MENU SELFBOT --------*
 
 
- - - *CONVERT :* - - -

-🗃️ ${p += 1}. ${prefix}sticker 
-🗃️ ${p += 1}. ${prefix}stickergif 
-🗃️ ${p += 1}. ${prefix}stickwm 
-🗃️ ${p += 1}. ${prefix}sticknobg 
-🗃️ ${p += 1}. ${prefix}stickmeme 
-🗃️ ${p += 1}. ${prefix}stickmeme2 
-🗃️ ${p += 1}. ${prefix}stickmeme3 
-🗃️ ${p += 1}. ${prefix}stickwasted 
-🗃️ ${p += 1}. ${prefix}stickwasted2 
-🗃️ ${p += 1}. ${prefix}take 
-🗃️ ${p += 1}. ${prefix}exif  
-🗃️ ${p += 1}. ${prefix}colong 
-🗃️ ${p += 1}. ${prefix}attp
-🗃️ ${p += 1}. ${prefix}ttp 
-🗃️ ${p += 1}. ${prefix}ttp2 
-🗃️ ${p += 1}. ${prefix}ttp3 
-🗃️ ${p += 1}. ${prefix}toimg 
-🗃️ ${p += 1}. ${prefix}togif 
-🗃️ ${p += 1}. ${prefix}tovid 
-🗃️ ${p += 1}. ${prefix}tomp3 
-🗃️ ${p += 1}. ${prefix}tovn 
-🗃️ ${p += 1}. ${prefix}emoji 
-🗃️ ${p += 1}. ${prefix}img2url 
-🗃️ ${p += 1}. ${prefix}url2img  
-🗃️ ${p += 1}. ${prefix}zodiak 
 
 
- - - *DOWNLOADER :* - - -

 -⏳ ${p += 1}. ${prefix}mp 
 -⏳ ${p += 1}. ${prefix}play 
 -⏳ ${p += 1}. ${prefix}ytdown 
 -⏳ ${p += 1}. ${prefix}playmp3 
 -⏳ ${p += 1}. ${prefix}playmp4 
 -⏳ ${p += 1}. ${prefix}playvid 
 -⏳ ${p += 1}. ${prefix}ytsearch 
 -⏳ ${p += 1}. ${prefix}ytmp3 
 -⏳ ${p += 1}. ${prefix}ytmp4 
 -⏳ ${p += 1}. ${prefix}joox 
 -⏳ ${p += 1}. ${prefix}tiktok 
 -⏳ ${p += 1}. ${prefix}tiktokwm 
 -⏳ ${p += 1}. ${prefix}tiktoknowm 
 -⏳ ${p += 1}. ${prefix}ig 
 -⏳ ${p += 1}. ${prefix}igstory 
 -⏳ ${p += 1}. ${prefix}fb 
 -⏳ ${p += 1}. ${prefix}xnxxsearch 
 -⏳ ${p += 1}. ${prefix}xnxxstalk 
 -⏳ ${p += 1}. ${prefix}xnxxdownload 
 
 
- - - *FUN :* - - -

 -✨  ${p += 1}. ${prefix}jadian 
 -✨  ${p += 1}. ${prefix}hobby 
 -✨  ${p += 1}. ${prefix}rate 
 -✨  ${p += 1}. ${prefix}bisakah 
 -✨  ${p += 1}. ${prefix}apakah 
 -✨  ${p += 1}. ${prefix}kapankah 
 
 
- - - *OWNER :* - - -

 -👑  ${p += 1}. ${prefix}searchmsg 
 -👑  ${p += 1}. ${prefix}picdetect 
 -👑  ${p += 1}. ${prefix}setmenu 
 -👑  ${p += 1}. ${prefix}setprefix 
 -👑  ${p += 1}. ${prefix}clearall 
 -👑  ${p += 1}. ${prefix}self 
 -👑  ${p += 1}. ${prefix}bc 
 -👑  ${p += 1}. ${prefix}banchat 
 -👑  ${p += 1}. ${prefix}listbanchat 
 -👑  ${p += 1}. ${prefix}unbanchat 
 -👑  ${p += 1}. ${prefix}antidelete 
 -👑  ${p += 1}. ${prefix}anticall 
 -👑  ${p += 1}. ${prefix}autoread 
 -👑  ${p += 1}. ${prefix}q 
 -👑  ${p += 1}. x 
 -👑  ${p += 1}. >  
 -👑  ${p += 1}. =>   
 -👑  ${p += 1}. $ 
 
 
- - - *GAME :* - - -

 -⚔️  ${p += 1}. ${prefix}tictactoe 
 -⚔️  ${p += 1}. ${prefix}delttc   
 -⚔️  ${p += 1}. ${prefix}math  
 -⚔️  ${p += 1}. ${prefix}caklontong  
 -⚔️  ${p += 1}. ${prefix}family100   
 -⚔️  ${p += 1}. ${prefix}tebakgambar   
 -⚔️  ${p += 1}. ${prefix}limit   
 -⚔️  ${p += 1}. ${prefix}giftlimit   
 -⚔️  ${p += 1}. ${prefix}buylimit   
 -⚔️  ${p += 1}. ${prefix}buyglimit   
 -⚔️  ${p += 1}. ${prefix}topbalance 
 -⚔️  ${p += 1}. ${prefix}tod 
 -⚔️  ${p += 1}. ${prefix}truth 
 -⚔️  ${p += 1}. ${prefix}dare 
 
 
- - - *SESSION :* - - -

 -📲  ${p += 1}. ${prefix}jadibot 
 -📲  ${p += 1}. ${prefix}stopjadibot 
 -📲  ${p += 1}. ${prefix}listbot 
 -📲  ${p += 1}. ${prefix}vote 
 -📲  ${p += 1}. ${prefix}delvote 
 -📲  ${p += 1}. vote 
 -📲  ${p += 1}. devote 
 
 
- - - *SEARCH :* - - -

 -🔎  ${p += 1}. ${prefix}covidindo   
 -🔎  ${p += 1}. ${prefix}covid   
 -🔎  ${p += 1}. ${prefix}covidglobal   
 
 
- - - *ADVANCE :* - - -

 -📚  ${p += 1}. cekprefix 
 -📚  ${p += 1}. ${prefix}sc
 -📚  ${p += 1}. ${prefix}join   
 -📚  ${p += 1}. ${prefix}asupan   
 -📚  ${p += 1}. ${prefix}owner   
 -📚  ${p += 1}. ${prefix}tts   
 -📚  ${p += 1}. ${prefix}runtime   
 -📚  ${p += 1}. ${prefix}ping   
 -📚  ${p += 1}. ${prefix}addprem   
 -📚  ${p += 1}. ${prefix}delprem   
 -📚  ${p += 1}. ${prefix}cekprem   
 -📚  ${p += 1}. ${prefix}listprem      
 -📚  ${p += 1}. ${prefix}blocklist  
 -📚  ${p += 1}. ${prefix}listgroup 
 
 
- - - *STALKING :* - - -

 -🔍  ${p += 1}. ${prefix}lirik   
 -🔍  ${p += 1}. ${prefix}igstalk   
 -🔍  ${p += 1}. ${prefix}tiktokstalk   
 -🔍  ${p += 1}. ${prefix}searchmusic 
			

- - - *MAKER :* - - -

 -🖼  ${p += 1}. ${prefix}tahta   
 -🖼  ${p += 1}. ${prefix}thunder   
 -🖼  ${p += 1}. ${prefix}marvel  
 -🖼  ${p += 1}. ${prefix}glitch   
 -🖼  ${p += 1}. ${prefix}blackpink   
 
 
- - - *STORAGE :* - - -

 -📂  ${p += 1}. ${prefix}addcmd  
 -📂  ${p += 1}. ${prefix}listcmd   
 -📂  ${p += 1}. ${prefix}delcmd  
 -📂  ${p += 1}. ${prefix}addstick   
 -📂  ${p += 1}. ${prefix}liststick   
 -📂  ${p += 1}. ${prefix}dellstick  
 
 
- - - *GROUP :* - - -

 -💍  ${p += 1}. ${prefix}welcome 
 -💍  ${p += 1}. ${prefix}left  
 -💍  ${p += 1}. ${prefix}setwelcome  
 -💍  ${p += 1}. ${prefix}delwelcome  
 -💍  ${p += 1}. ${prefix}setleft   
 -💍  ${p += 1}. ${prefix}delleft   
 -💍  ${p += 1}. ${prefix}antilink  
 -💍  ${p += 1}. ${prefix}disable 
 -💍  ${p += 1}. ${prefix}enable 
 -💍  ${p += 1}. ${prefix}group 
 -💍  ${p += 1}. ${prefix}promote   
 -💍  ${p += 1}. ${prefix}demote   
 -💍  ${p += 1}. ${prefix}add   
 -💍  ${p += 1}. ${prefix}radd   
 -💍  ${p += 1}. ${prefix}kick   
 -💍  ${p += 1}. ${prefix}rkick   
 -💍  ${p += 1}. ${prefix}setnamegc 
 -💍  ${p += 1}. ${prefix}setdescgc 
 -💍  ${p += 1}. ${prefix}linkgroup   
 -💍  ${p += 1}. ${prefix}revokelink   
 -💍  ${p += 1}. ${prefix}leave   
 -💍  ${p += 1}. ${prefix}infoall   
 -💍  ${p += 1}. ${prefix}getpic   
 -💍  ${p += 1}. ${prefix}getstatus  
 -💍  ${p += 1}. ${prefix}hidetag   
 -💍  ${p += 1}. ${prefix}totag   
 -💍  ${p += 1}. ${prefix}mention   
 -💍  ${p += 1}. ${prefix}tagme   
 -💍  ${p += 1}. ${prefix}read    
 -💍  ${p += 1}. ${prefix}getsider   
 -💍  ${p += 1}. ${prefix}groupinfo   
 -💍  ${p += 1}. ${prefix}me   
 -💍  ${p += 1}. ${prefix}delete   
 -💍  ${p += 1}. ${prefix}listadmin   


- - - *THANKS TO :* - - -

${shp} : Mhankbarbar   
${shp} : XinzBot   
${shp} : Bimbim [ OWNER ]
${shp} : senku
${shp} : Fizz [ PARTNER ]
${shp} : Hardianto   
${shp} : All Creator Bot   
${shp} : Penyedia RestApi dan Module 
`
					let mhan = await maulans.prepareMessage('0@s.whatsapp.net', gambar1, MessageType.image, {})
					mhan.message.imageMessage.jpegThumbnail = gambar3
					mhan.message.imageMessage.fileLength = (String(9)).repeat(8)
					let gbutsan = [
						{ buttonId: 'OWNER', buttonText: { displayText: 'OWNER' }, type: 1 },
						{ buttonId: 'PING', buttonText: { displayText: 'PING' }, type: 1 }
						
					]
					let gbuttonan = {
						imageMessage: mhan.message.imageMessage,
						contentText: `${menu1}`,
						footerText: `${menu2}`,
						buttons: gbutsan,
						headerType: 4
					}
					await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
						contextInfo: {
							"externalAdReply": {
                    "title": `► Hi ${pushname}`,
                    "body": `Saya Fizz\n${Tanggal}`,
                    "mediaType": "2",
                    "thumbnailUrl": "https://i.ibb.co/xHG25Yn/298d8b4b8877.jpg",
                    "mediaUrl": "https://youtu.be/kiqEEr7CK2g",
                    "thumbnail": fakeg,
                    "sourceUrl": "",
                },
							mentionedJid: [mjid, sender, mjud],
							forwardingScore: 1e7,
							isForwarded: true
						}, quoted: finvite
					})
				}
				else if (menusimpel = true) {
					reply(menus(prefix, pushname, waktoo, wib, hari, Tanggal))
				}
				break
case 'convertmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				let prep = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 CONVERT MENU 」\n\n${shp} ${prefix}sticker\n${shp} ${prefix}stickergif\n${shp} ${prefix}stickwm\n${shp} ${prefix}sticknobg\n${shp} ${prefix}stickmeme\n${shp} ${prefix}stickmeme2\n${shp} ${prefix}stickmeme3\n${shp} ${prefix}stickwasted\n${shp} ${prefix}stickwasted2\n${shp} ${prefix}take\n${shp} ${prefix}exif\n${shp} ${prefix}colong\n${shp} ${prefix}ttp2\n${shp} ${prefix}ttp3\n${shp} ${prefix}toimg\n${shp} ${prefix}togif\n${shp} ${prefix}tovid\n${shp} ${prefix}tomp3\n${shp} ${prefix}tovn\n${shp} ${prefix}emoji\n${shp} ${prefix}img2url\n${shp} ${prefix}url2img\n${shp} ${prefix}zodiak`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep);
                        break
case 'downloadmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let tol = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 DOWNLOADER MENU 」\n\n${shp} ${prefix}mp\n${shp} ${prefix}play\n${shp} ${prefix}ytdown\n${shp} ${prefix}playmp3\n${shp} ${prefix}playmp4\n${shp} ${prefix}playvid\n${shp} ${prefix}ytsearch\n${shp} ${prefix}ytmp3\n${shp} ${prefix}ytmp4\n${shp} ${prefix}joox\n${shp} ${prefix}tiktok\n${shp} ${prefix}tiktokwm\n${shp} ${prefix}tiktoknowm\n${shp} ${prefix}ig\n${shp} ${prefix}igstory\n${shp} ${prefix}fb\n${shp} ${prefix}xnxxsearch\n${shp} ${prefix}xnxxstalk\n${shp} ${prefix}xnxxdownload`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(tol);
                        break
case 'funmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let jem = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 FUN MENU 」\n\n${shp} ${prefix}jadian\n${shp} ${prefix}hobby\n${shp} ${prefix}rate\n${shp} ${prefix}bisakah\n${shp} ${prefix}apakah\n${shp} ${prefix}kapankah`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(jem);
                        break
case 'ownermenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep2 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 OWNER MENU 」\n\n${shp} ${prefix}searchmsg\n${shp} ${prefix}picdetect\n${shp} ${prefix}setmenu\n${shp} ${prefix}setprefix\n${shp} ${prefix}clearall\n${shp} ${prefix}self\n${shp} ${prefix}public\n${shp} ${prefix}bc\n${shp} ${prefix}banchat\n${shp} ${prefix}listbanchat\n${shp} ${prefix}unbanchat\n${shp} ${prefix}antidelete\n${shp} ${prefix}anticall\n${shp} ${prefix}autoread\n${shp} ${prefix}q\n${shp} x\n${shp} >\n${shp} =>\n${shp} $`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep2);
                        break
case 'gamemenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep3 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 GAME MENU 」\n\n${shp} ${prefix}tictactoe\n${shp} ${prefix}delttc\n${shp} ${prefix}math\n${shp} ${prefix}caklontong\n${shp} ${prefix}family100\n${shp} ${prefix}tebakgambar\n${shp} ${prefix}limit\n${shp} ${prefix}giftlimit\n${shp} ${prefix}buylimit\n${shp} ${prefix}buyglimit\n${shp} ${prefix}topbalance\n${shp} ${prefix}tod\n${shp} ${prefix}truth\n${shp} ${prefix}dare`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep3);
                        break
case 'sessionmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep4 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 SESSION MENU 」\n\n${shp} ${prefix}jadibot\n${shp} ${prefix}stopjadibot\n${shp} ${prefix}listbot\n${shp} ${prefix}vote\n${shp} ${prefix}delvote\n${shp} vote\n${shp} devote`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep4);
                        break
case 'searchmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep5 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 SEARCH MENU 」\n\n${shp} ${prefix}covidindo\n${shp} ${prefix}covid\n${shp} ${prefix}covidglobal`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep5);
                        break
case 'advancemenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep6 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 ADVANCE MENU 」\n\n${shp} cekprefix\n${shp} ${prefix}sc\n${shp} ${prefix}join\n${shp} ${prefix}asupan\n${shp} ${prefix}owner\n${shp} ${prefix}tts\n${shp} ${prefix}runtime\n${shp} ${prefix}ping\n${shp} ${prefix}addprem\n${shp} ${prefix}delprem\n${shp} ${prefix}cekprem\n${shp} ${prefix}listprem\n${shp} ${prefix}blocklist\n${shp} ${prefix}listgroup`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep6);
                        break
case 'groupmenu':
case 'grupmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep7 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 GROUP MENU 」\n\n${shp} ${prefix}welcome\n${shp} ${prefix}left\n${shp} ${prefix}setwelcome\n${shp} ${prefix}delwelcome\n${shp} ${prefix}setleft\n${shp} ${prefix}delleft\n${shp} ${prefix}antilink\n${shp} ${prefix}disable\n${shp} ${prefix}enable\n${shp} ${prefix}group\n${shp} ${prefix}promote\n${shp} ${prefix}demote\n${shp} ${prefix}add\n${shp} ${prefix}radd\n${shp} ${prefix}kick\n${shp} ${prefix}rkick\n${shp} ${prefix}setnamegroup\n${shp} ${prefix}revokelink\n${shp} ${prefix}leave\n${shp} ${prefix}infoall\n${shp} ${prefix}getpic\n${shp} ${prefix}getstatus\n${shp} ${prefix}hidetag\n${shp} ${prefix}totag\n${shp} ${prefix}mention\n${shp} ${prefix}tagme\n${shp} ${prefix}read\n${shp} ${prefix}getsider\n${shp} ${prefix}groupinfo\n${shp} ${prefix}me\n${shp} ${prefix}delete\n${shp} ${prefix}listadmin`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep7);
                        break
case 'storagemenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep8 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 STORAGE MENU 」\n\n${shp} ${prefix}addcmd\n${shp} ${prefix}listcmd\n${shp} ${prefix}delcmd\n${shp} ${prefix}addcmd\n${shp} ${prefix}liststick\n${shp} ${prefix}dellstick`,
                                footerText: "🌹 Created By Fizz 🌹",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep8);
                        break
case 'makermenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep9 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 MAKER MENU 」\n\n${shp} ${prefix}tahta\n${shp} ${prefix}thunder\n${shp} ${prefix}marvel\n${shp} ${prefix}glitch\n${shp} ${prefix}blackpink`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep9);
                        break
case 'stalkmenu':
if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
let prep0 = maulans.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/senku.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `「 STALKING MENU 」\n\n${shp} ${prefix}lirik\n${shp} ${prefix}igstalk\n${shp} ${prefix}tiktokstalk\n${shp} ${prefix}searchmusic`,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await maulans.relayWAMessage(prep0);
                        break
			case 'test':
				replyWithFakeLink('*Active!*')
				break

			case 'runtime':
				if (!isGroup) return reply(mess.only.group)
				uptime = process.uptime()
				anjink = `◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
 ${kyun(uptime)}`
				reply(monospace(anjink))
				break

			case 'status':
				const s1 = public ? 'Public' : 'Self'
				const s2 = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
				const s3 = antidel ? 'Aktif' : 'NonAktif'
				const s4 = aread ? 'Aktif' : 'NonAktif'
				stat = `*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*${shp} Mode : ${s1}*\n*${shp} Status : ${s2}*\n*${shp} Antidelete : ${s3}*\n*${shp} Auto Read : ${s4}*`
				reply(stat)
				break


			case 'ping':
			case 'speed':
				var groups = maulans.chats.array.filter(v => v.jid.endsWith('g.us'))
				var private = maulans.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				const chatsIds = await maulans.chats.all()
				const timestamp = speed();
				const latensi = speed() - timestamp
				p0 = ` Loaded Message
                
- [ ${totalchat.length} ]  Total Chat
- [ ${groups.length} ] Group Chat
- [ ${private.length} ] Private Chat
- [ ${maulans.user.phone.device_manufacturer} ] HANDPHONE
- [ ${maulans.user.phone.wa_version} ] WA Version
- [ Baileys ] Libary

Speed : ${latensi.toFixed(4)} Second`
				reply(monospace(p0))
				break

			//******************** 》CONVERT《 ********************\\

			case 'gifstiker': case 's':
			case 'stickergif': case 'sticker': case 'stiker':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (isMedia && !sen.message.videoMessage || isQuotedImage) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					let media = await maulans.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply(mess.error)
						})
						.on('end', function () {
							console.log('Sucsess convert to sticker...')
							exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(mess.error)
								maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: sen })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && sen.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					let media = await maulans.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
					await ffmpeg(`${media}`)
						.inputFormat(media.split('.')[4])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(mess.error)
						})
						.on('end', function () {
							console.log('Sucsess convert to sticker...')
							exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(mess.error)
								maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: sen })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((args[0])) {
					sendStickerUrl(from, `${args[0]}`)
				} else {
					reply(`*Format Error!*\n\n*Example :*\n• *_Kirim gambar dengan Caption ${prefix}sticker_*\n• *_Kirim Video dengan Caption ${prefix}stickergif (Max 10detik)_*\n\n*NOTE :*\n*_Bisa digunakan dengan Reply gambar/video_*`)
				}
				limitAdd(sender, limit)
				break

			case 'stickwm': case 'swm':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (isMedia && !sen.message.videoMessage || isQuotedImage) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					if (!q) return reply(`Example : ${prefix + command} nama|author`)
					let media = await maulans.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = q.split('|')[0]
					var author = q.split('|')[1]
					await ffmpeg(`${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply(mess.error)
						})
						.on('end', function () {
							console.log('Finish')
							exif.create(packname, author, `takestick_${sender}`)
							exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('Error')
								maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, { quoted: sen })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && sen.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					var pembawm = body.slice(9)
					let media = await maulans.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					reply(mess.wait)
					await ffmpeg(`${media}`)
						.inputFormat(media.split('.')[4])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(mess.error)
						})
						.on('end', function () {
							console.log('Finish')
							exif.create(packname, author, `takestick_${sender}`)
							exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('Error')
								maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, { quoted: sen })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else {
					reply(`*Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_*`)
				}
				limitAdd(sender, limit)
				break

			case 'sticknobg': case 'snobg': case 'stickernobg':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					filePath = await maulans.downloadAndSaveMediaMessage(encmedia)
					file_name = getRandom('.png')
					file_name = getRandom('.webp')
					request({
						url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}`,
						method: 'POST',
						formData: {
							"img": fs.createReadStream(filePath)
						},
						encoding: "binary"
					}, function (error, response, body) {
						fs.unlinkSync(filePath)
						fs.writeFileSync(file_name, body, "binary")
						ffmpeg(`./${file_name}`)
							.input(file_name)
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(file_name)
							})
							.on('end', function () {
								maulans.sendMessage(from, fs.readFileSync(file_name), sticker, { quoted: sen })
								fs.unlinkSync(file_name)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(file_name)
					});
				} else {
					reply(`*Format Error!*\n\n*Example :*\n• *_Kirim gambar dengan Caption ${prefix + command}_*\n\n*NOTE :*\n*_Bisa digunakan dengan Reply gambar_*`)
				}
				break

			case 'emoji':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example : ${prefix + command} 😗`)
				qes = args.join(' ')
				emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
					sendStickerFromUrl(from, `${teks}`)
					console.log(teks)
				})
				limitAdd(sender, limit)
				break

			case 'stickwasted':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
					ger = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					reply(mess.wait)
					owgi = await maulans.downloadMediaMessage(ger)
					await fs.writeFileSync(`./stickwasted.jpeg`, owgi)
					var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickwasted.jpeg')
					teks = `${anu.display_url}`
					sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/imagemaker?endPoint=wasted&imgUrl=${teks}&apikey=hardianto`, sen)
					fs.unlinkSync('./stickwasted.jpeg')
				}
				limitAdd(sender, limit)
				break

			case 'stickwasted2':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
					ger = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					reply(mess.wait)
					owgi = await maulans.downloadMediaMessage(ger)
					await fs.writeFileSync(`./stickwasted2.jpeg`, owgi)
					var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
					teks = `${anu.display_url}`
					sendStickerFromUrl(from, `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${lol}&img=${teks}`, sen)
					fs.unlinkSync('./stickwasted2.jpeg')
				}
				limitAdd(sender, limit)
				break

			case 'size':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (args.length < 1) return reply('Masukan angkanya')
				filsize = args[0]
				costick = await maulans.prepareMessageFromContent(from, {
					"stickerMessage": {
						"url": m.quoted.url,
						"fileSha256": m.quoted.fileSha256.toString('base64'),
						"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
						"mediaKey": m.quoted.mediaKey.toString('base64'),
						"mimetype": m.quoted.mimetype,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"directPath": m.quoted.directPath,
						"fileLength": filsize,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
						"isAnimated": m.quoted.isAnimated
					}
				}, { quoted: sen })
				maulans.relayWAMessage(costick)
				break

			case 'sizeimg':
				if (args.length < 1) return reply('Masukan angkanya')
				filsizei = args[0]
				costick3 = await maulans.prepareMessageFromContent(from, {
					"imageMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"caption": m.quoted.caption,
						"fileSha256": m.quoted.fileSha256.toString('base64'),
						"fileLength": filsizei,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"mediaKey": m.quoted.mediaKey.low,
						"jpegThumbnail": m.quoted.jpegThumbnail
					}
				}, { quoted: sen })
				maulans.relayWAMessage(costick3)
				break


			case 'stickmeme':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} maulans`)
				if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
					ger = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					reply(mess.wait)
					owgi = await maulans.downloadMediaMessage(ger)
					await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
					var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
					teks = `${anu.display_url}`
					sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${q}`, sen)
					fs.unlinkSync('./stickmeme.jpeg')
				}
				limitAdd(sender, limit)
				break

			case 'stickmeme2':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example : Reply sticker dengan Caption ${prefix + command} Sen`)
				if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
					ger = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					reply(mess.wait)
					owgi = await maulans.downloadMediaMessage(ger)
					await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
					var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
					teks = `${anu.display_url}`
					sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, sen)
					fs.unlinkSync('./stickmeme.jpeg')
				}
				limitAdd(sender, limit)
				break

			case 'stickmeme3':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isQuotedSticker) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
				var tex1 = body.slice(12).split('|')[0]
				var tex2 = body.slice(12).split('|')[1]
				if (!tex2) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
				if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
					ger = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					reply(mess.wait)
					owgi = await maulans.downloadMediaMessage(ger)
					await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
					var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
					teks = `${anu.display_url}`
					sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, sen)
					fs.unlinkSync('./stickmeme.jpeg')
				}
				limitAdd(sender, limit)
				break

			case 'take':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
				var pembawm = body.slice(6)
				var encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				var media = await maulans.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				var packname = pembawm.split('|')[0]
				var author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, { quoted: sen })
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break

			case 'exif':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
				if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				reply('sukses')
				break

			case 'colong':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
				const encmediia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const meidia = await maulans.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('error')
					maulans.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, { quoted: sen })
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break

			case 'url2img':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply('Url nya mana?')
				reply(mess.wait)
				sendMediaURL(from, `${q}`)
				limitAdd(sender, limit)
				break

			case 'img2url':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
				var media = await maulans.downloadAndSaveMediaMessage(encmedia)
				var imgbb = require('imgbb-uploader')
				imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
					.then(data => {
						var caps = `❒ 「 *IMGBB TO URL* 」\n\n➸ *ID :* ${data.id}\n➸  *MimeType :* ${data.image.mime}\n➸ *Extension :* ${data.image.extension}\n➸ *URL :* ${data.display_url}`
						ibb = fs.readFileSync(media)
						maulans.sendMessage(from, ibb, image, { quoted: sen, caption: caps })
					})
					.catch(err => {
						throw err
					})
				limitAdd(sender, limit)
				break

			case 'tovn': case 'getvn':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isQuotedAudio && !isQuotedVideo) return reply('Tag audio/vn/video nya!')
				encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await maulans.downloadAndSaveMediaMessage(encmedia)
				hah = fs.readFileSync(media)
				maulans.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: sen })
				fs.unlinkSync(media)
				break

			case 'tomp3': case 'getmp3':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				maulans.updatePresence(from, Presence.composing)
				if (!isQuotedVideo && !isQuotedAudio) return reply(`Format salah!!\nExample : Reply video dengan caption ${prefix + command}`)
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await maulans.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(mess.eror)
					buffer = fs.readFileSync(ran)
					maulans.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: sen })
					fs.unlinkSync(ran)
				})
				limitAdd(sender, limit)
				break

			case 'tovid': case 'tovideo':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
					encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.xtInfo
				media = await maulans.downloadAndSaveMediaMessage(encmedia)
				memek = await webp2gifFile(media)
				reply(mess.wait)
				console.log(memek)
				sendMediaURL(from, memek.result, 'Nih..')
				limitAdd(sender, limit)
				break

			case 'togif':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
					encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await maulans.downloadAndSaveMediaMessage(encmedia)
				memek = await webp2gifFile(media)
				reply(mess.wait)
				console.log(memek)
				anu = await getBuffer(memek.result)
				maulans.sendMessage(from, anu, video, { mimetype: 'video/gif', caption: 'Nih..', quoted: sen })
				limitAdd(sender, limit)
				break

			case 'ttp':  
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
        if (!isPremium) return reply('fitur khusus user premium')
        
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `https://xteam.xyz/ttp?file&text=${woy}`
sendStickerUrl(from, anjay)
break
         case 'attp':  
         if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
if (!isPremium) return reply('fitur khusus user premium')
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${F}`)
                    maulans.sendMessage(from, anu1, sticker, {quoted: sen})
                    break

			case 'ttp2':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply('fitur khusus user premium')
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example : ${prefix + command} maulans`)
				buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=black`
				reply(mess.wait)
				sendStickerUrl(from, buffer)
				limitAdd(sender, limit)
				break

			case 'ttp3':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply('fitur khusus user premium')
				if (isLimit(sender, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example : ${prefix + command} maulans`)
				buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
				reply(mess.wait)
				sendStickerUrl(from, buffer)
				limitAdd(sender, limit)
				break

			case 'toimage': case 'toimg':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isQuotedSticker) return reply('❎ reply stickernya um ❎')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await maulans.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
					fs.unlinkSync(media)
					if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
					bup = fs.readFileSync(ran)
					buffer = await maulans.prepareMessage(from, bup, image)
					coba = await maulans.prepareMessageFromContent(from, {
						"imageMessage": {
							"url": buffer.message.imageMessage.url,
							"mimetype": buffer.message.imageMessage.mimetype,
							"caption": 'Nih Bang...',
							"fileSha256": buffer.message.imageMessage.fileSha256.toString('base64'),
							"fileLength": 99999999999,
							"height": buffer.message.imageMessage.height,
							"width": buffer.message.imageMessage.width,
							"mediaKey": buffer.message.imageMessage.mediaKey.low,
							"jpegThumbnail": buffer.message.imageMessage.jpegThumbnail
						}
					}, { quoted: sen, caption: 'Nih bang..' })
					maulans.relayWAMessage(coba)
					fs.unlinkSync(ran)
				})
				limitAdd(sender, limit)
				break

			case 'asupan':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				po1 = maulans.prepareMessageFromContent(from, {
					"listMessage": {
						"title": "*Asupan nya Kack :v*",
						"description": `\nPilih salah satu asupan di bawah ini..`,
						"buttonText": "Click Here!",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Asupan",
								"rows": [
									{
										"title": "+62",
										"rowId": ""
									},
									{
										"title": "santuy",
										"rowId": ""
									},
									{
										"title": "bocil",
										"rowId": ""
									},
									{
										"title": "rikagusriani",
										"rowId": ""
									},
									{
										"title": "ghea",
										"rowId": ""
									}
								]
							}
						]
					}
				}, { quoted: sen })
				maulans.relayWAMessage(po1, { waitForAck: true })
				limitAdd(sender, limit)
				break

			case 'tod':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				reply(`Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n➥ ${prefix}truth\n➥ ${prefix}dare`)
				break

			case 'truth':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply('Perintah ini hanya bisa digunakan didalam grup!')
				fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
					.then(res => res.text())
					.then(body => {
						let truthx = body.split('\n')
						let truthz = truthx[Math.floor(Math.random() * truthx.length)]
						reply(truthz)
					})
					.catch(() => {
						reply('Hayolohhh, ada yang error!!')
					})
				break

			case 'dare':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply('Perintah ini hanya bisa digunakan didalam grup!')
				fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
					.then(res => res.text())
					.then(body => {
						let darex = body.split('\n')
						let darez = darex[Math.floor(Math.random() * darex.length)]
							/ reply(darez)
					})
					.catch(() => {
						reply('Hayolohhh, ada yang error!!')
					})
				break

			case 'tts':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix}tts id|Teks lu`)
				var tt = q.split("|")[0]
				var es = q.split("|")[1]
				if (es > 10) return reply('Maksimal 10 kata')
				reply(mess.wait)
				tts = await getBuffer(`http://zekais-api.herokuapp.com/speech?lang=${tt}&text=${es}`)
				maulans.sendMessage(from, tts, audio, { mimetype: 'audio/mp4', filename: `${tts}.mp3`, quoted: sen, ptt: true })
				limitAdd(sender, limit)
				break

			//******************** 》 MAKER 《 ********************\\
			case 'tahta':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('*Teks nya mana?*')
				reply(mess.wait)
				tahta = args.join(" ")
				tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${zeks}&text=${tahta}`)
				maulans.sendMessage(from, tahta, image, { quoted: sen })
				limitAdd(sender, limit)
				break

			case 'thunder':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('*Teks nya mana?*')
				reply(mess.wait)
				thunder = args.join(" ")
				thunder = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=${zeks}&text=${thunder}`)
				maulans.sendMessage(from, thunder, image, { quoted: sen })
				limitAdd(sender, limit)
				break

			case 'blackpink':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('*Teks nya mana?*')
				reply(mess.wait)
				bp = args.join(" ")
				bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=${zeks}&text=${bp}`)
				maulans.sendMessage(from, bp, image, { quoted: sen })
				limitAdd(sender, limit)
				break

			case 'glitch':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix}glitch nama|autor`)
				g1 = q.split('|')[0]
				g2 = q.split('|')[1]
				reply(mess.wait)
				glitch = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=${zeks}&text1=${g1}&text2=${g2}`)
				maulans.sendMessage(from, glitch, image, { quoted: sen })
				limitAdd(sender, limit)
				break

			case 'marvel':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix}marvel nama|autor`)
				m1 = q.split('|')[0]
				m2 = q.split('|')[1]
				reply(mess.wait)
				marvel = await getBuffer(`https://api.zeks.xyz/api/marvellogo?apikey=${zeks}&text1=${m1}&text2=${m2}`)
				maulans.sendMessage(from, marvel, image, { quoted: sen })
				limitAdd(sender, limit)
				break

			//******************** 》DOWNLOAD 《 ********************\\

			case 'xnxxsearch':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example: ${prefix + command} Japanese`)
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${q}`)
				reply(mess.wait)
				get_result = get_result.result
				ini_txt = ""
				for (var x of get_result) {
					ini_txt += `Title : ${x.title}\n`
					ini_txt += `Views : ${x.views}\n`
					ini_txt += `Duration : ${x.duration}\n`
					ini_txt += `Uploader : ${x.uploader}\n`
					ini_txt += `Link : ${x.link}\n`
					ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
				}
				reply(ini_txt)
				break

			case 'xnxx': case 'xnxxstalk':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${q}`)
				reply(mess.wait)
				get_result = get_result.result
				ini_txt = `Title : ${get_result.title}\n`
				ini_txt += `Duration : ${get_result.duration}\n`
				ini_txt += `View : ${get_result.view}\n`
				ini_txt += `Rating : ${get_result.rating}\n`
				ini_txt += `Like : ${get_result.like}\n`
				ini_txt += `Dislike : ${get_result.dislike}\n`
				ini_txt += `Comment : ${get_result.comment}\n`
				ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
				ini_txt += `Description : ${get_result.description}\n`
				ini_txt += "Link : \n"
				ini_link = get_result.link
				for (var x of ini_link) {
					ini_txt += `${x.type} - ${x.link}\n\n`
				}
				thumbnail = await getBuffer(get_result.thumbnail)
				maulans.sendMessage(from, thumbnail, image, { quoted: sen, caption: ini_txt })
				break

			case 'xnxxdownload': case 'xnxxdl':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return replyl(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Search link di Fitur xnxxstalk`)
				reply(mess.wait)
				sendMediaURL(from, `${q}`)
				break

			case 'ytdown':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!q) return reply(`*Example : ${prefix + command} Melukis senja`)
				try {
					ysearch = await yts(q)
				} catch (e) {
					return reply(mess.error)
				}
				p = 0
				teks = `Y T  D O W N\nTotal : ${ysearch.all.length}\n\n`
				for (let i of ysearch.all) {
					teks += `${p += 1}.\nTitle :` + i.title + '\n'
					teks += `Url :` + i.url + '\n'
					teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
				}
				teks += `Ketik # 1 atau angka selanjutnya untuk mengambil Music!\nKetik ! 1 atau angka selanjutnya untuk mengambil Video!\n\nNote :\n  • # : GetMusic\n  • ! : GetVideo`
				reply(monospace(teks))
				break

			case 'ytplay':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply('Mau cari apa diyoutube?')
				reply(mess.wait)
				datai = [];
				try {
					ysearch = await yts(q)
					hdata = ysearch.all
				} catch (e) {
					return reply(mess.error.api)
				}
				num = 1
				for (let i = 0; i < hdata.length; i++) {
					datai.push({
						"rows": [
							{
								"title": "MP3",
								description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
								"rowId": hdata[i].url
							},
							{
								"title": "MP4",
								description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
								"rowId": hdata[i].url
							}
						], title: num
					})
					num += 1
				}
				po = maulans.prepareMessageFromContent(from, {
					"listMessage": {
						"title": "*YOUTUBE DOWNLOAD*",
						"description": `Request By : ${pushname}\n*Hasil Pencarian : ${q}*\n*Download dengan klik tombol dibawah*`,
						"buttonText": "Result",
						"listType": "SINGLE_SELECT",
						"sections": datai
					}
				}, {})
				maulans.relayWAMessage(po, { waitForAck: true })
				break

			case 'mp':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Example : ${prefix + command} 3 Sayang\n\nCommand :\n• ${prefix + command} 3\n• ${prefix + command} 4`)
				if ((args[0]) === '3') {
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${zeks}&q=${args[1]}`)
					yt = `*MP3*\n\n_Title : ${anu.result.title}_\n_Size : ${anu.result.size}_`
					sendMediaURL(from, anu.result.thumbnail, yt)
					//buf = await getBuffer(anu.result.url_audio)
					/*maulans.sendMessage(from, buf, MessageType.audio, {
					"contextInfo": {
					mimetype: 'audio/mp4',
					text: 'hi',
					"forwardingScore": 1000000000,
					isForwarded: false,
					sendEphemeral: false,
					"externalAdReply": {
					"title": '</ 𝘚𝘦𝘯𝘬𝘶𝘶⁴̅⁰͍⁴',
					"body": `${pushname}`,
					"previewType": "PHOTO",
					"thumbnailUrl": "",
					"thumbnail": gambar5,
					"sourceUrl": ""
								}},quoted:sen
					})*/
					sendMediaURL(from, anu.result.url_audio)
				} else if ((args[0]) === '4') {
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=${zeks}&q=${args[1]}`)
					yt1 = `*MP4*\n\n_Title : ${anu.result.title}_\n_Size : ${anu.result.size}_`
					sendMediaURL(from, anu.result.thumbnail, yt1)
					sendMediaURL(from, anu.result.url_video, yt1)
				}
				break

			// CAN BE USED AFTER UPDATE LAST BAILEYS
			case 'play':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
		if (!isPremium) return reply(`Kamu bukan user premium ${pushname}`)
			if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
			reply(mess.wait)
			let yut = await yts(q)
			yta(yut.videos[0].url)
			.then(async(res) => {
			const { thumb, title, filesizeF, filesize } = res
			const capti = `*P L A Y*\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
			//sendMediaURL(from, thumb, capti)
			ya = await getBuffer(thumb)
			py =  await maulans.prepareMessage(from, ya, image)
			gbutsan = [
			{buttonId: `${q}`, buttonText: {displayText: 'AUDIO'}, type: 1},
			{buttonId: `${q}`, buttonText: {displayText: 'VIDEO'}, type: 1}
			]
			gbuttonan = {
			imageMessage: py.message.imageMessage,
			contentText: capti,
			footerText: 'Pilih di bawah y bang',
			buttons: gbutsan,
			headerType: 4
			}
			await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
			})
			break

			case 'playmp3': {
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
				try {
					reply('_Lagu yang anda cari Sedang DiProsess.._')
					let yut = await yts(q)
					yta(yut.videos[0].url)
						.then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res
							axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
									if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

									const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
									sendMediaURL(from, thumb, captionis)
									sendMediaURL(from, dl_link, '')

								})
						})
						.catch((err) => reply(`${err}`))
				} catch (err) {
					sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
					console.log(color('[PlayMp3]', 'red'), err)
					reply(mess.error.api)
				}
			}
				break

			case 'playmp4': {
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(mess.only.prem)
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
				try {
					reply(mess.wait)
					let yut = await yts(q)
					ytv(yut.videos[0].url)
						.then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res
							axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
									if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)

									const mp4 = `
*PLAY MP4*\n\nData DiTemukan!\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Url : ${yut.videos[0].url}\n\n_Tunggu Sebentar File sedang Di Kirim!!_`
									sendMediaURL(from, thumb, mp4)
									sendMediaURL(from, dl_link, '')
									limitAdd(sender, limit)
								})
						})
						.catch((err) => reply(`${err}`))
				} catch (err) {
					sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
					console.log(color('[PlayMp4]', 'red'), err)
					reply(mess.error)
				}
			}
				break

			case 'playvid':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : _${prefix + command} Melukis Senja_`)
				reply(mess.wait)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${q}&apikey=${zeks}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*\n\n⌬  *Judul : ${anu.result.title}*\n⌬  *Source : ${anu.result.source}*\n⌬  *Durasi : ${anu.result.duration}*\n⌬  *Quality : ${anu.result.quality}*\n⌬  *Size : ${anu.result.size}*\n\n*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				maulans.sendMessage(from, buffer, image, { quoted: sen, caption: infomp3 })
				maulans.sendMessage(from, buffer1, video, { mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: sen, caption: 'Nih Gan' })
				break

			case 'joox':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : _${prefix + command} Melukis Senja_`)
				reply(mess.wait)
				kntl = await fetchJson(`https://api.zeks.xyz/api/joox?apikey=${zeks}&q=${q}`)
				if (kntl.error) return reply(kntl.error)
				infomp3 = `*「 JOOX MUSIC 」*\n\n⌬  *Judul : ${kntl.data[0].judul}*\n⌬  *Album : ${kntl.data[0].album}*\n⌬  *Artis : ${kntl.data[0].artist}*\n⌬  *Size : ${kntl.data[0].size}*\n\n\n*[Wait] Tunggu sebentar kak..*`
				buffer = await getBuffer(kntl.data[0].thumb)
				maulans.sendMessage(from, buffer, image, { quoted: sen, caption: infomp3 })
				lagu = await getBuffer(kntl.data[0].audio)
				maulans.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${kntl.data[0].audio}.mp3`, quoted: sen })
				break

			case 'tiktok':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!q) return reply('Masukkan linknya!')
				reply(mess.wait)
				try {
					data = await fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}`)
					buff = await getBuffer(data.result.media_resources.image.contentUrl)
					cap = monospace(`T I K T O K  D O W N L O A D E R`) + '\n\n'
					cap += shp + ' Username : ' + data.result.author_metadata.username + '\n'
					cap += shp + ' Judul : ' + data.result.media_metadata.title.split(' |')[0] + '\n'
					cap += '\n\n'
					cap += monospace('V I D E O  I N F O') + '\n\n'
					cap += shp + ' Durasi : ' + data.result.media_resources.video.duration + 'Detik \n'
					cap += shp + ' Kualitas : ' + data.result.media_resources.video.quality + '\n'
					cap += shp + ' Width : ' + data.result.media_resources.video.width + '\n'
					cap += shp + ' Height : ' + data.result.media_resources.video.height + '\n'
					cap += shp + ' Ratio : ' + data.result.media_resources.video.ratio + '\n'
					cap += '\n\n'
					cap += monospace('S O U N D  I N F O') + '\n\n'
					cap += shp + ' Judul : ' + data.result.media_resources.music.title + '\n'
					cap += shp + ' Author : ' + data.result.media_resources.music.authorName + '\n'
					cap += shp + ' Durasi : ' + data.result.media_resources.music.duration + 'Detik \n'
					tta = await maulans.prepareMessage(from, buff, image)
					gbutsan = [
						{ buttonId: `${q}`, buttonText: { displayText: 'WM' }, type: 1 },
						{ buttonId: `${q}`, buttonText: { displayText: 'NOWM' }, type: 1 },
						{ buttonId: `${q}`, buttonText: { displayText: 'MUSIC' }, type: 1 }
					]
					gbuttonan = {
						imageMessage: tta.message.imageMessage,
						contentText: cap,
						footerText: 'Pilih di bawah y bang',
						buttons: gbutsan,
						headerType: 4
					}
					await maulans.sendMessage(from, gbuttonan, MessageType.buttonsMessage, { quoted: sen })
				} catch {
					reply(mess.error)
				}
				break

			case 'tiktokwm':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
				reply(mess.wait)
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lol}&url=${q}`)
				maulans.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: sen })
				break

			case 'tiktoknowm':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
				reply(mess.wait)
				ttnwm = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lol}&url=${q}`, { method: 'get' })
				if (anu.error) return reply(anu.error)
				tt = `「 *TIKTOK NO WM* 」\n\n*Judul:* ${ttnwm.result.title}\n*Keywords:* ${ttnwm.result.keywords}\n*Desc:* ${ttnwm.result.description}`
				buff = await getBuffer(ttnwm.result.link)
				maulans.sendMessage(from, buff, video, { mimetype: 'video/mp4', quoted: sen, caption: tt })
				break

			case 'ig':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} [Link]`)
				reply(mess.wait)
				y = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}`)
				t = `*「 IG DOWNLOADER 」*\n\n*Deskripsi :* ${y.capt}`
				sendMediaURL(from, y.result[0].url, t)
				break

			case 'igstory':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!q) return reply(`Example : ${prefix}igstory n.lidiawaty|1`)
				usrnm = q.split('|')[0]
				jmlh = q.split('|')[1]
				if (!jmlh) return reply(`Format Salah!\nExample : ${prefix + command} n.lidiawaty|1`)
				if (isNaN(jmlh)) return reply('Jumlah harus berupa angka!')
				reply(mess.wait)
				data = await axios.get(`http://lolhuman.herokuapp.com/api/igstory/${usrnm}?apikey=${lol}`)
				for (let i = 0; i < jmlh; i++) {
					sendMediaURL(from, data.data.result[i], `Instagram Story ${usrnm}`)
				}
				break

			case 'fb': case 'facebook': {
				if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isPremium) return reply(mess.only.prem)
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Kirim perintah *${prefix}fb* url`)
				reply(mess.wait)
				fbdl(q)
					.then((res) => {
						sendMediaURL(from, res.result.links[0].url)
						limitAdd(sender, limit)
					})
					.catch((err) => {
						sendMess(ownerNumber, 'FB Error : ' + err)
						console.log(color('[FB]', 'red'), err)
						reply(mess.error.api)
					})
			}
				break

			case 'ytmp4':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 6000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break

			case 'ytmp3':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				
				if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
				
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 40006) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
			case 'ytsearch':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (args.length < 1) return reply('Tolong masukan query!')
				var srch = args.join('');
				try {
					var aramas = await yts(srch);
				} catch {
					return await maulans.sendMessage(from, 'Error!', MessageType.text, dload)
				}
				aramat = aramas.all
				var tbuff = await getBuffer(aramat[0].image)
				var ytresult = '';
				ytresult += '「 *YOUTUBE SEARCH* 」'
				ytresult += '\n________________________\n\n'
				aramas.all.map((video) => {
					ytresult += '❏ Title: ' + video.title + '\n'
					ytresult += '❏ Link: ' + video.url + '\n'
					ytresult += `❏ Use Dowbload Typing ${prefix}ytmp3 [Link] Or ${prefix}ytmp4 [Link]` + '\n'
					ytresult += '❏ Durasi: ' + video.timestamp + '\n'
					ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
				});
				ytresult += '◩ *BOT*'
				maulans.sendMessage(from, tbuff, image, { quoted: sen, caption: ytresult })
				limitAdd(sender, limit)
				break

			//******************** 》 SEARCH 《 ********************\\

			case 'searchmusic':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (isQuotedAudio) {
					const dlfile = await maulans.downloadMediaMessage(JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
					const bodyForm = new FormData()
					bodyForm.append('audio', dlfile, 'music.mp3')
					bodyForm.append('apikey', `${zeks}`)
					axios('https://api.zeks.xyz/api/searchmusic', {
						method: 'POST',
						headers: {
							"Content-Type": "multipart/form-data",
							...bodyForm.getHeaders()
						},
						data: bodyForm
					})
						.then(({ data }) => {
							if (data.status) {
								reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
							} else reply(data.message)
						}).catch(() => reply('Internal server error!, try again later'))
				} else {
					reply('Wrong format!')
				}
				limitAdd(sender, limit)
				break

			case 'covidindo':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				anu = await fetchJson('https://lindow-api.herokuapp.com/api/covidindo?apikey=LindowApi')
				covid = `❒ *「 Covid Indo 」* ❒ \n\n*Total Kasus : ${anu.result.positif}*\n*Total Sembuh : ${anu.result.sembuh}*\n*Di Rawat : ${anu.result.dirawat}*\n*Total meninggal : ${anu.result.meninggal}*`
				reply(covid)
				limitAdd(sender, limit)
				break

			case 'covid':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!q) return reply(`Example : ${prefix + command} japan`)
				cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
				copid = `❒ *「 Covid ${q} 」* ❒ \n\n*Total Kasus :* _${cvd.result.total_case}_\n*Total Meninggal :* _${cvd.result.total_deaths}_\n*Total Sembuh :* _${cvd.result.total_tests}_\n*Kasus Hari Ini :* _${cvd.result.today_cases}_\n*Meninggal Hari Ini :* _${cvd.result.today_deaths}_\n*Total Dirawat :* _${cvd.result.total_active}_`
				reply(copid)
				limitAdd(sender, limit)
				break

			case 'covidglobal':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				cvdg = await fetchJson(`https://jar-api.xyz/api/covidworld?apikey=${ai}`)
				coped = `❒ *「 Covid World 」* ❒ \n\n*Total Kasus :* _${cvdg.result.totalCases}_\n*Total Meninggal :* _${cvdg.result.deaths}_\n*Total Sembuh :* _${cvdg.result.recovered}_\n*Kasus Tertutup :* _${cvdg.result.closedCases}_\n*Total Dirawat :* _${cvdg.result.activeCases}_`
				reply(coped)
				limitAdd(sender, limit)
				break

			case 'lirik':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} melukis senja`)
				lrk = await fetchJson(`http://zekais-api.herokuapp.com/lirik?query=${q}`)
				lirik = `❒ *「 Lirik Lagu 」* ❒ \n\n*Judul : ${lrk.title}*\n*Author : ${lrk.author}*\n\n*Lirik :* \n${lrk.lirik} `
				buf = await getBuffer(lrk.thumb)
				maulans.sendMessage(from, buf, image, { quoted: sen, caption: lirik })
				limitAdd(sender, limit)
				break

			//******************** 》 STALKER 《 ********************\\

			case 'igstalk':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} Livyrenata`)
				reply(mess.wait)
				igst = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${q}`)
				ig = `*I N S T A G R A M  S T A L K*

 *Username : ${igst.data.username}*

 *Full Name : ${igst.data.fullname}*

 *Followers : ${igst.data.follower}*

 *Following : ${igst.data.following}*

 *BIO : ${igst.data.bio}*`
				buff = await getBuffer(igst.data.profilehd)
				maulans.sendMessage(from, buff, image, { quoted: sen, caption: ig })
				limitAdd(sender, limit)
				break


			case 'tiktokstalk':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Example : ${prefix + command} Jessnolimit`)
				reply(mess.wait)
				ttst = await fetchJson(`http://zekais-api.herokuapp.com/tiktokstalk?query=${q}`)
				ig = `*T I K T O K  S T A L K*

 *Username : ${ttst.username}*

 *Nick Name : ${ttst.nickname}*

 *Video : ${ttst.videoCount}*

 *Likes : ${ttst.likes}*

 *Followers : ${ttst.follower}*

 *Following : ${ttst.following}*

 *BIO : ${ttst.bio}*`
				buff = await getBuffer(ttst.prof_pic)
				maulans.sendMessage(from, buff, image, { quoted: sen, caption: ig })
				limitAdd(sender, limit)
				break

			//******************** 》 OWNER CMD 《 ********************\\
			case 'setshape':
			
				if (args.length < 1) return
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				shpp = args[0]
				setting.shape.maulans = shpp
				fs.writeFileSync('./database/settings.json', JSON.stringify(setting, null, '\t'))
				reply(`Shape berhasil di ubah menjadi : ${shpp}`)
				break

			case 'setprefix':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Custom!)\n\n*Thanks To : ${fake}*`)
				if ((args[0]) == 'multi') {
					if (multi) return reply('_Sudah diaktifkan sebelumnya!_')
					multi = true
					nopref = false
					single = false
					reply(`_Succses mengganti Prefix ke Multiprefix!_`)
				} else
					if ((args[0]) == 'nopref') {
						if (nopref) return reply('_Sudah diaktifkan sebelumnya!_')
						multi = false
						single = false
						nopref = true
						reply(`_Succses mengganti Prefix ke noprefix!_`)
					} else
						if ((args[0]) == `${q}`) {
							multi = false
							nopref = false
							single = true
							prefa = `${q}`
							reply(`_Succses mengganti Prefix ke ${q}_`)
						}
				break

			case 'clearall': {
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				let chiit = await maulans.chats.all()
				for (let i of chiit) {
					maulans.modifyChat(i.jid, 'delete', {
						includeStarred: false
					})
				}
				reply(`*_Succses_*`)
			}
				break

			// List Group ( MyMans APIs & Nurutomo )
			case 'listgroup': case 'grouplist': case 'listgc':
				const txs = maulans.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => `*Nama Group : ${maulans.getName(v.jid)}*\n*Id Group : ${v.jid}*\n*Status : ${v.read_only ? 'Left' : 'Joined'}*`).join`\n\n`
				reply('*List Group*\n\n' + txs)
				break

			case 'anticall':
				if (!isOwner && !itsMe) return
				if (args.length < 1) return reply('Pilih on atau off')
				if (args[0] === "on") {
					if (antical) return reply('Sudah diaktifkan sebelumnya!')
					antical = true
					reply(`Succes mengaktifkan anticall`)
				} else if (args[0] === "off") {
					if (!antical) return reply('Sudah di NonAktifkan sebelumnya!')
					antical = false
					reply(`Succes mematikan anticall`)
				} else {
					reply(`Pilih on atau off`)
				}
				break

			case 'antidelete':
				if (!isOwner && !itsMe) return
				if (args.length < 1) return reply('Pilih on atau off')
				if (args[0] === "on") {
					if (antidel) return reply('Sudah diaktifkan sebelumnya!')
					antidel = true
					reply(`Succes mengaktifkan antidelete`)
				} else if (args[0] === "off") {
					if (!antidel) return reply('Sudah di NonAktifkan sebelumnya!')
					antidel = false
					reply(`Succes mematikan antidelete`)
				} else {
					reply(`Pilih on atau off`)
				}
				break

			case 'bc':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (!q) return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
				bcc = await maulans.chats.all()
				if (isMedia && !sen.message.imageMessage || isQuotedImage) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					let media = await maulans.downloadMediaMessage(encmedia)
					for (let i of bcc) {
						maulans.sendMessage(i.jid, media, image, { contextInfo: { forwardingScore: 9999, isForwarded: true }, caption: `*「  PESAN SIARAN BOT 」*\n\n${q}` })
					}
					reply(`Sukses`)
				} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
					bc = await maulans.downloadMediaMessage(encmedia)
					for (let _ of bcc) {
						maulans.sendMessage(_.jid, bc, video, { caption: `*「 PESAN SIARAN BOT 」*\n\n${q}` })
					}
					reply('Suksess broadcast')
				} else {
					for (let _ of bcc) {
						sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${q}`)
					}
					reply(`Succses BroadCast ${totalchat.length} Total chat`)
				}
				break

			case 'owner': case 'creator':
				maulans.sendMessage(from, { displayname: "jeff", vcard: vcard }, MessageType.contact, {
					contextInfo: {
						text: 'hi',
						"forwardingScore": 1000000000,
						isForwarded: true,
						sendEphemeral: false,
						"externalAdReply": {
							"title": `F i z z. (@Fizz_Xyzz) •Instagram Story's`,
							"body": "",
							"previewType": "PHOTO",
							"thumbnailUrl": "https://telegra.ph/file/d5fc74e55a2efc3cb610b.jpg",
							"thumbnail": gambar3,
							"sourceUrl": ``
						}, mentionedJid: [sender]
					}, quoted: sen
				})
					.then((res) => maulans.sendMessage(from, 'Nih kontak Bos ku', text, { quoted: res }))
				break

			case 'picdetec': case 'picdetect':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if ((args[0]) === 'on') {
					if (picdetec) return reply('_Fitur sudah diaktifkan sebelumnya!_')
					picdetec = true
					reply('*_Succses_*')
				} else if ((args[0]) === 'off') {
					if (!picdetec) return reply('_Fitur sudah diaktifkan sebelumnya!_')
					picdetec = false
					reply('*_Succses_*')
				} else {
					reply(`*Format Error!*\n\n*Example :*\n ▪︎ ${prefix + command} on\n ▪︎ ${prefix + command} off\n\n*Note :*\n • _On : Untuk Me-Aktifkan!_\n • _Off : Untuk Me-NonAktifkan!_`)
				}
				break

			case 'self':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (!public) return reply('*_Fitur sudah diaktifkan sebelumnya!_*')
				public = false
				return reply(`*Mode : Self*`, text)
				break

			case 'public':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (public) return reply('*_Fitur sudah diaktifkan sebelumnya_*')
				public = true
				return reply(`*Mode : Public*`, text)
				break

			case 'autoread':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if ((args[0]) === 'on') {
					if (aread) return reply('_Sudah diaktifkan sebelumnya_')
					aread = true
					return reply(`*Auto Read On!*`, text)
				} else if ((args[0]) === 'off') {
					if (!aread) return reply('_Sudah dimatikan sebelumnya_')
					aread = false
					return reply(`*Auto Read Off!*`, text)
				} else {
					reply('on untuk mengaktifkan, off untuk menonaktifkan')
				}
				break

			case 'listblock':
				if (!itsMe && !isOwner) return
				let blocked = maulans.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != maulans.user.jid)
				maulans.sendMessage(from, `*List Block*` + `\n` + blocked.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n`, text, { contextInfo: { mentionedJid: blocked } })
				break

			//******************** 》 GROUP 《 ********************\\
			case 'add':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				orang = args[0] + '@s.whatsapp.net'
				response = await maulans.groupAdd(from, [orang])
				o = response.participants[0]
				let inv = (Object.values(o))
				if (inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
				else if (inv[0].code == 403) {
					maulans.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, { quoted: sen, contextInfo: { mentionedJid: [orang] } })
					maulans.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject, `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
				}
				break

			case 'radd':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
				mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
				maulans.groupAdd(from, mentioned)
				break

			case 'kick':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!q) return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				y = q.split('@')[1] + '@s.whatsapp.net'
				maulans.groupRemove(from, [y])
				reply(`Succses kick target!`)
				break

			case 'rkick':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
				mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
				maulans.groupRemove(from, mentioned)
				break

			case 'listadmin': case 'atasan': case 'listadmins':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break

			case 'getlink':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!itsMe && !isOwner) return
				if (!q) return reply('*Command disertai ID Group!!*')
				linkgc = await maulans.groupInviteCode(`${q}`)
				reply('https://chat.whatsapp.com/' + linkgc)
				break

			case 'join':
				if (isGroup) return reply('*Fitur Hanya dapat digunakan dalam Private Chat!*')
				if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
				let code = args[0].replace('https://chat.whatsapp.com/', '')
				maulans.acceptInvite(code)
					.then((res) => {
						maulans.sendMessage(res.gid, `*Halo saya ${nama}!*\n_Saya di invit oleh @${sender.split("@")[0]} Untuk masuk ke dalam Group!_\n_Ketik ${prefix}menu untuk Melihat Fitur Bot!_`, text, { contextInfo: { mentionedJid: [sender] }, quoted: finvite })
						replyWithFake(`_Succses Join Group!_`)
					})
					.catch((err) => reply(jsonformat(err)))
				break

			// Set Description Group ( MyMans APIs )
			case 'setdesc': case 'setdescgc':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!q) return reply('Mau ganti Deskripsi Group nya apa?')
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				maulans.groupUpdateDescription(from, `${q}`)
				maulans.sendMessage(from, 'Succes change description group', text, { quoted: sen })
				break

			// Set Name Group ( MyMans APIs )
			case 'setname': case 'setnamegc':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!q) return reply('Mau ganti Nama GC nya apa?')
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				maulans.groupUpdateSubject(from, `${q}`)
				maulans.sendMessage(from, 'Succes change name group', text, { quoted: sen })
				break

			case 'linkgroup': case 'linkgc':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				linkgc = await maulans.groupInviteCode(from)
				reply('https://chat.whatsapp.com/' + linkgc)
				break

			case 'resetlink': case 'revokelink': case 'revoke':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				maulans.query({ json: ['action', 'inviteReset', from], expect200: true })
				linkgc = await maulans.groupInviteCode(from)
				reply('Succses Revoke!\n\nLink Group new:\nhttps://chat.whatsapp.com/' + linkgc)
				break

			case 'leave':
			
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				sendMess(from, `Bye Bye group ${groupName}`)
				setTimeout(() => {
					maulans.groupLeave(from)
				}, 2000);
				break

			case 'infoall': case 'tagall':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				
				if (!q) return reply('Ingfonya apa?')
				if (!isGroup) return reply(mess.only.group)
				var nom = sen.participant
				members_id = []
				teks = '\n'
				for (let mem of groupMembers) {
					teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
					members_id.push(mem.jid)
				}
				mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Info :  ${q}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃` + teks + '┃\n┗⬣', members_id, false)
				break

			case 'welcome':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				if ((args[0]) === 'on') {
					if (isWelkom) return reply('udah on')
					welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply(`*_Succses Aktifkan Fitur!_*`)
				} else if ((args[0]) === 'off') {
					if (!isWelkom) return reply('udah off')
					welkom.splice(from, 1)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply(`*_Succses NonAktifkan Fitur!_*`)
				} else if ((args[0]) === '-help') {
					mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
				} else {
					reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				}
				break

			case 'left':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				if ((args[0]) === 'on') {
					if (isLeft) return reply('udah on')
					left.push(from)
					fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
					reply(`*_Succses Aktifkan Fitur!_*`)
				} else if ((args[0]) === 'off') {
					if (!isLeft) return reply('udah off')
					left.splice(from, 1)
					fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
					reply(`*_Succses NonAktifkan Fitur!_*`)
				} else if ((args[0]) === '-help') {
					mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
				} else {
					reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				}
				break

			case 'antilink':
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				if (args[0] == 'on') {
					if (anlink.includes(from)) return reply('*_Sudah Aktif!_*')
					anlink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
					reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
				} else if (args[0] == 'off') {
					let off = anlink.indexOf(from)
					anlink.splice(off, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
					reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
				} else if ((args[0]) === '-help') {
					mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
				} else {
					reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				}
				break


			case 'q':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!m.quoted) return reply('reply message!')
				let qse = maulans.serializeM(await m.getQuotedObj())
				if (!qse.quoted) return reply('the message you replied does not contain a reply!')
				await qse.quoted.copyNForward(m.chat, true)
				break

			case 'banchat':
				if (!isGroup) return reply(mess.only.group)
				if (!itsMe && !isOwner && !isGroupAdmins) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (isBanchat) return reply(`udah di ban`)
				bancht.push(from)
				fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
				reply(`Bot berhasil Ban di group ini`)
				break

			case 'unbanchat':
				if (!itsMe && !isOwner) return reply(mess.only.ownerB)
				if (!isBanchat) return reply(`udah di UnBan`)
				let ubc = bancht.indexOf(from)
				bancht.splice(ubc, 1)
				fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
				reply(`Bot telah di Unban di group ini`)
				break

			case 'listbanchat': case 'listbc':
				teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
				for (let i of bancht) {
					met = await maulans.groupMetadata(i)
					teks += 'Id : ' + i + '\n'
					teks += 'Nama Group : ' + met.subject + '\n\n'
				}
				reply(teks)
				break
			case 'enable':
				if (!isGroupAdmins && !isOwner && !itsMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`*Format Salah!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
				if ((args[0]) === 'welcome') {
					if (isWelkom) return reply('udah on')
					welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply(`*_Succses Aktifkan Fitur Welcome!_*`)
				} else if ((args[0]) == 'antidelete') {
					if (antidel === true) return
					if (antidel) return reply('Sudah diaktifkan sebelumnya!')
					reply('*_Succses Aktifkan Fitur Antidelete!_*')
				} else if ((args[0]) === 'antilink') {
					if (anlink.includes(from)) return reply('*_Sudah Aktif!_*')
					anlink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
					reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
				} else if ((args[0]) === 'banchat') {
					if (isBanchat) return reply(`udah di ban`)
					bancht.push(from)
					fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
					reply(`Bot berhasil Ban di group ini`)
				} else {
					reply(`*Input (${args[0]}) Tidak Tersedia!!**\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
				}
				break

			case 'disable':
				if (!isGroupAdmins && !isOwner && !itsMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`*Format Salah!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
				if ((args[0]) === 'welcome') {
					if (!isWelkom) return reply('udah off')
					welkom.splice(from, 1)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply(`*_Succses NonAktifkan Fitur!_*`)
				} else if ((args[0]) == 'antidelete') {
					if (antidel === false) return
					if (!antidel) return reply('Sudah di NonAktifkan sebelumnya!')
					antidel = false
					reply(`Succes mematikan antidelete`)
				} else if ((args[0]) === 'antilink') {
					let offf = anlink.indexOf(from)
					anlink.splice(offf, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
					reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
				} else if ((args[0]) === 'banchat') {
					let ank = bancht.indexOf(from)
					bancht.splice(ank, 1)
					fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
					reply(`Bot telah di Unban di group ini`)
				} else {
					reply(`*Input (${args[0]}) Tidak Tersedia!!**\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
				}
				break

			case 'group': case 'grup':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args[0] === 'open') {
					reply(monospace('Succses Open Group!'))
					maulans.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'close') {
					reply(monospace('Succses Close Group!'))
					maulans.groupSettingChange(from, GroupSettingChange.messageSend, true)
				} else if ((args[0]) === '-help') {
					mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} open*\n*${prefix + command} close*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
				} else {
					reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
				}
				break

			case 'infogc': case 'groupinfo':
			case 'infogrup': case 'grupinfo':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				maulans.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				try {
					ppUrl = await maulans.getProfilePicture(from)
				} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				y = `*Nama Group : ${groupName}*\n*Dibuat : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*\n*Owner Grup : @${groupMetadata.owner.split('@')[0]}*\n*Total Member : ${groupMembers.length}*\n*Total Admin : ${groupAdmins.length}*\n\n*Welcome : ${isWelkom ? 'Aktif' : 'NonAktif'}*\n*Left : ${isLeft ? 'Aktif' : 'NonAktif'}*\n*Antilink : ${isAntilink ? 'Aktif' : 'NonAktif'}*\n\n*Deskripsi Group :*\n ${groupDesc}`
				buffer = await getBuffer(ppUrl)
				maulans.sendMessage(from, buffer, image, { quoted: sen, caption: y, contextInfo: { "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')] } })
				break

			case 'pm': case 'promote':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return
				mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
				maulans.groupMakeAdmin(from, mentioned)
				break

			case 'dm': case 'demote':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return
				mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
				maulans.groupDemoteAdmin(from, mentioned)
				break

			case 'jadian':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				if (!isGroup) return reply(mess.only.group)
				lope = 'https://i.ibb.co/2gXBp4B/9401b0c64ab7.jpg'
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Cieee yang baru jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]}`
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				y = await getBuffer(lope)
				mentions(teks, jds, true)
				break

			case 'bisakah':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi ganteng`)
				const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				reply('Pertanyaan : bisakah ' + q + '\n\nJawaban : ' + keh)
				break

			case 'kapankah':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
				const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				reply('Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh)
				break

			case 'apakah':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
				const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				reply('Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah)
				break

			case 'rate':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
				const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
				const te = ra[Math.floor(Math.random() * ra.length)]
				reply('Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%')
				break

			case 'hobby':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
				const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				reply(`Pertanyaan : hobby` + q + '\n\nJawaban : ' + by)
				break

			case 'getstatus': case 'getbio':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (sen.message.extendedTextMessage != undefined) {
					mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid[0]
					var p = await maulans.getStatus(`${mentioned}`, MessageType.text)
					reply(p.status)
					if (p.status == 401) {
						reply("Status Profile Not Found")
					}
				} else {
					reply('Reply pesan atau tag member')
				}
				break

			case 'getpic':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (sen.message.extendedTextMessage != undefined) {
					mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await maulans.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					maulans.sendMessage(from, thumb, image, { quoted: sen })
				} else {
					reply('Reply pesan atau tag member')
				}
				break

			case 'me': case 'profile':
				try {
					ppimg = await maulans.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
				const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second` : 'Not Premium'
				teks = `❒ *「 Profile User 」* ❒ 

❒ *「 User ${pushname} 」*
├ *Tag : @${sender.split("@")[0]}*
├ *Status : ${isPremium ? 'Premium' : 'Free'}*
├ *Banned : ${isBanned ? 'Yes' : 'No'}*
├ *Status Bot : ${isOwner ? 'Owner' : 'User'}*
├ *Expired : ${prmm}*
├ *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
├ *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
└ *Balance User : $${getBalance(sender, balance)}*`
				its = await getBuffer(ppimg)
				maulans.sendMessage(from, its, image, {
					contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender] }, quoted: sen, caption: teks
				})
				break

			case 'del': case 'delete': case 'd':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				try {
					if (!isQuotedMsg) return reply('Reply pesan Bot!')
					pp = { id: sen.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }
					if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
					maulans.deleteMessage(from, pp)
				} catch (e) {
					reply('reply pesan botnya ')
					reply(e)
					console.log(e)
				}
				break

			case 'getsider':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				try {
					if (!isGroup) return reply('Hanya bisa didalam gruop')
					if (!isQuotedMsg) return reply('Reply pesan botnya')
					infom = await maulans.messageInfo(from, sen.message.extendedTextMessage.contextInfo.stanzaId)
					hemm = infom.reads
					hemms = infom.deliveries
					readon = hemms.map(v => v.jid)
					readdin = hemm.map(v => v.jid)
					stamp = hemm.map(v => v.t)

					function toTime(UNIXtimestamp, ribuan) {
						ribuan = (typeof ribuan == 'undefined') ? false : true;

						let a = new Date(UNIXtimestamp);
						if (ribuan) {
							a = new Date(UNIXtimestamp * 1000);
						}
						// ambil pecahan waktu masing-masing
						var hour = a.getHours();
						var min = a.getMinutes();
						var sec = a.getSeconds();
						// gabungkan ke dalam variable time
						var time = `${hour}:${min}:${sec}`;
						return time;
					}

					function toBulan(UNIXtimestamp, ribuan) {
						ribuan = (typeof ribuan == 'undefined') ? false : true;

						let a = new Date(UNIXtimestamp);
						if (ribuan) {
							a = new Date(UNIXtimestamp * 1000);
						}
						//buat index bulan
						var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
						var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
						// tanggal
						var day = a.getDate()
						bulanee = a.getMonth()
						var thisDay = a.getDay(),
							thisDay = myDays[thisDay];
						var yy = a.getYear()
						var year = (yy < 1000) ? yy + 1900 : yy;
						var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
						return bul;
					}
					teksx = `「 *Telah Dibaca* 」\n\n`
					for (let i of hemm) {
						teksx += `${shp} Nama : @${i.jid.split('@')[0]}\n${shp} Waktu : ${toTime(i.t, true)}\n${shp} Tanggal : ${toBulan(i.t, true)}\n\n`
					}
					teksx1 = `「 *Belum DiBaca* 」\n\n`
					for (let i of hemms) {
						teksx1 += `${shp} Nama : @${i.jid.split('@')[0]}\n`
						teksx1 += `${shp} Waktu : ${toTime(i.t, true)}\n${shp} Tanggal : ${toBulan(i.t, true)}\n\n`
					}
					maulans.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: sen, thumbnail: gambar3, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
					maulans.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: sen, thumbnail: gambar3, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
				} catch (e) {
					reply('reply pesan botnya ')
					reply(e)
					console.log(e)
				}
				break

			case 'read': case 'sider':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				if (!isQuotedMsg) return reply('Reply pesan bot')
				infom = await maulans.messageInfo(from, sen.message.extendedTextMessage.contextInfo.stanzaId)
				tagg = []
				teks = `Telah Dibaca Oleh :\n\n`
				for (let i of infom.reads) {
					teks += '⬡' + ' ' + '@' + i.jid.split('@')[0] + '\n'
					teks += `┗━ ⬡ Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
					tagg.push(i.jid)
				}
				mentions(teks, tagg, true)
				break

			case 'hidetag': case 'h':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(mess.only.prem)
				if (!isGroup) return reply(mess.only.group)
				
				if (!q) return reply('Ingfonya apa?')
				var group = await maulans.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
					text: q,
					contextInfo: { mentionedJid: mem },
					quoted: sen
				}
				maulans.sendMessage(from, options, text)
				break

			case 'totag':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
				teks = sen.message.extendedTextMessage.contextInfo.quotedMessage.conversation
				var group = await maulans.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
					text: teks,
					contextInfo: { mentionedJid: mem },
					quoted: sen
				}
				maulans.sendMessage(from, options, text)
				break

			case 'tagme':
				mentions(`@${sender.split("@")[0]}`, [sender], true)
				break

			case 'mention':
				if (!q) return reply('nomernya?')
				mentions(`@${q.split("@")[0]}`, [`${q}@s.whatsapp.net`], false)
				break
case 'shutdown':
             
             reply(`Bye OwnerSama~`)
             await sleep(3000)
             process.exit()
             break
			//******************** 》 STORAGE 《 ********************\\
case 'tobc':
members_id = []
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
				if (args.length < 1) return reply('Teksnya?')
				var bc = body.slice(6)
					maulans.updatePresence(from, Presence.composing)
					anu = await maulans.chats.all()
					if (isMedia && !sen.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await maulans.downloadMediaMessage(encmedia)
						for (let _ of anu) {
						maulans.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./pathImage/fizz.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { "mentionedJid": members_id, "forwardingScore": 508, isForwarded: true}, mimetype: 'audio/mp4', duration: 999999999, ptt: true })
						}
						} else if (isMedia && !sen.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await maulans.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							maulans.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./pathImage/fizz.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break 

case 'addvn':
if (!isPremium) return reply('fitur khusus user premium')
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await maulans.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					reply( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
			teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					maulans.sendMessage(from, teks.trim(), extendedText, { quoted: sen, contextInfo: { "mentionedJid": audionye } })
					break

			case 'addcmd': case 'setcmd':
			if (!isPremium) return reply(mess.only.prem)
				if (!isQuotedSticker) return reply('*Format Error! Command Harus disertai Sticker!*')
				if (!q) return reply(`*Format salah!!*\n\n*Reply sticker dengan caption!..*\n\n*Example :*\n${prefix + command} help`)
				if (q.includes(`#`)) return reply(`Tidak dapat disertai Prefix..`)
				ceemd = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				scmd = await maulans.downloadMediaMessage(ceemd)
				stcmd.push(`${q}`)
				fs.writeFileSync(`./src/stickcmd/${q}.webp`, scmd)
				tesnya = sen.quoted.fileSha256.toString("hex")
				addSticker(tesnya, q, stickerdb)
				reply(`Berhasil menyimpan Sticker Dengan Command : ${q}`)
				break

			case 'listcmd':
			case 'listcommand':
				listCommand(stickerdb, reply, monospace)
				break
case 'delvn':
  
					try {
					 sex = body.slice(7)
					 wanu = audionye.indexOf(sex)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./media/audio/${sex}.mp3`)
					 reply('Sukses')
					} catch (err){
						console.log(err)
						reply('Error njir')
					}
					break
			case 'delcmd':
			if (!isPremium) return reply(mess.only.prem)
				if (!isQuotedSticker) return reply('*Reply Sticker Yang Ingin Dihapus!!*')
				tess = sen.quoted.fileSha256.toString("hex")
				delCommand(tess, stickerdb)
				reply('Command Sticker Tersebut Di Hapus')
				break

			case 'getstik': case 'getstikcmd': case 'getcmd':
				if (!q) return reply(`Example : ${prefix + command} menu`)
				try {
					ga = fs.readFileSync(`./src/stickcmd/${q}.webp`)
					maulans.sendMessage(from, ga, sticker, { quoted: sen })
				} catch {
					reply('Sticker Command tidak terdaftar / Command yg anda gunakan memakai prefix!')
				}
				break


			case 'addstick':
				if (!isGroup) return reply(mess.only.group)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(10)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await maulans.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./src/stick/${svst}.webp`, delb)
				fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
				maulans.sendMessage(from, `Sukses Menambahkan Sticker`, MessageType.text, { quoted: sen })
				break

			case 'dellstick':
				if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(mess.wrongFormat)
				try {
					fs.unlinkSync(`./src/stick/${q}.webp`)
					setiker.splice(q, 1)
					fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
					reply(`Succes delete sticker ${q}!`)
				} catch (err) {
					reply(`Gagal delete sticker ${q}!`)
				}
				break

			case 'liststick':
				if (!isGroup) return reply(mess.only.group)
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				maulans.sendMessage(from, teks.trim(), extendedText, { quoted: sen, contextInfo: { "mentionedJid": setiker } })
				break

			//******************** 》Owner Prem《 ********************\\

			case 'addprem':
				if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
				if (!q) return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n*Tq To : ${fake}*`)
				expired = q.split(" ")[1]
				const pnom = { id: `${q.split(" ")[0].replace("@", '')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
				premium.push(pnom)
				fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
				reply(`_Succses_`)
				break

			case 'delprem':
				if (!itsMe && !isOwner) return reply('Only Owner!')
				user = q.split('@')[1] + '@s.whatsapp.net'
				for (let i = 0; i < premium.length; i++) {
					if (user.includes(premium[i].id)) {
						let del = premium.indexOf(premium[i])
						premium.splice(del, 1)
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
						mentions(`Succes delete premium @${user.split("@")[0]}`, [user], true)
					}
				}
				break

			case 'listprem':
			
				if (!isGroup) return reply(mess.only.group)
				maulans.updatePresence(from, Presence.composing)
				let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
				let men = [];
				for (let i of premium) {
					men.push(i.id)
					let cekvip = ms(i.expired - Date.now())
					txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
				}
				mentions(txt, men, true)
				break

			case 'cekprem': case 'cekpremium':
			
				if (!isPremium) return reply(`Kamu bukan user premium`)
				let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
				let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
				try {
					ppimg = await maulans.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
				its = await getBuffer(ppimg)
				maulans.sendMessage(from, its, image, {
					contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender] }, quoted: sen, caption: teks
				})
				break

			//******************** 》Limit《 ********************\\

case 'ben':
					
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				

			case 'balance': case 'topbalance':
				if (!isGroup) return reply(mess.only.group)
				maulans.updatePresence(from, Presence.composing)
				let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
				let mebn = [];
				for (let i of balance) {
					mebn.push(i.id)
					let bl = (i.balance)
					txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
				}
				mentions(txot, mebn, true)
				break

			case 'limit': case 'ceklimit': case 'balance': case 'glimit':
				reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
				break

			case 'buylimit': {
				if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
				if (q.includes('-')) return reply(`Jangan menggunakan -`)
				if (isNaN(q)) return reply(`Harus berupa angka`)
				let ane = Number(nebal(q) * 100)
				if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
				kurangBalance(sender, ane, balance)
				giveLimit(sender, nebal(q), limit)
				reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
			}
				break

			case 'buyglimit': {
				if (!q) return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
				const koinPerlimit = 100
				const total = koinPerlimit * q
				if (getBalance(sender, balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				kurangBalance(sender, total, balance)
				givegame(sender, q, glimit)
				reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
			}
				break

			case 'giftlimit':
				if (!itsMe && !isOwner) return
				if (!q) return reply(`Example : ${prefix + command} @tag 10`)
				lim = q.split(" ")[1]
				const tag1 = `${q.split(" ")[0].replace("@", '')}@s.whatsapp.net`
				giveLimit(tag1, lim, limit)
				reply('Succes')
				break

			//******************** 》 GAME 《 ********************\\
			case 'tebaklagu':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				
				
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=FuzBot1&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              maulans.sendMessage(from, ini_buffer, MessageType.audio).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
			
			
			case 'tictactoe': case 'ttc':
			if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
			if (!isPremium) return reply(`Kamu bukan user premium`)
			
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				
				if (!isGroup) return reply(mess.only.group)
				if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
					const boardnow = setGame(`${from}`);
					const matrix = boardnow._matrix;
					const chatMove = `T i c t a c t o e  G a m e..
     
Sedang ada sesi permainan digrup ini!!

Info : 
  Player ❎ : @${boardnow.X}
  Player ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Ketik nyerah untuk Menyerah..
Ketik ${prefix}delttc untuk menghapus session Game..`;
					maulans.sendMessage(from, monospace(chatMove), MessageType.text, {
						quoted: sen,
						contextInfo: {
							mentionedJid: [
								boardnow.X + "@s.whatsapp.net",
								boardnow.O + "@s.whatsapp.net",
							],
						},
					});
					return;
				}
				if (argss.length === 1)
					return reply(`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe @TagMember*`
					);
				const boardnow = setGame(`${from}`);
				console.log(`Start Tictactore ${boardnow.session}`);
				boardnow.status = false;
				boardnow.X = sender.replace("@s.whatsapp.net", "");
				boardnow.O = argss[1].replace("@", "");
				fs.writeFileSync(`./lib/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2));
				const strChat = `T i c t a c t o e  G a m e..

@${sender.replace("@s.whatsapp.net", "")} menantang ${argss[1]} untuk Menjadi lawan Game!!
     
${argss[1]}  Ketik Y/N 

Note : 
  • N : menolak tantangan..
  • Y : Terima tantangan..`;
				maulans.sendMessage(from, monospace(strChat), MessageType.text, {
					quoted: sen,
					contextInfo: {
						mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
					},
				});
				gameAdd(sender, glimit)
				break

			case 'delttc':
				if (!isGroup) return reply(mess.only.group)
				if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
					fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
					reply(`Berhasil menghapus sesi di grup ini!`);
				} else {
					reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
				}
				break

			case 'tebakgambar': {
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!isGroup) return reply(mess.only.group)
				if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
				let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeks}`)
				const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
				sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), sen)
				let anih = tbg.data.result.jawaban.toLowerCase()
				game.addgambar(from, anih, gamewaktu, tebakgambar)
				gameAdd(sender, glimit)
			}
				break

			case 'caklontong': {
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!isGroup) return reply(mess.only.group)
				if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
				let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
				const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
				reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
				let anih = anu.data.result.jawaban.toLowerCase()
				game.addckl(from, anih, gamewaktu, ckl)
				gameAdd(sender, glimit)
			}
				break

			case 'math': {
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!isGroup) return reply(mess.only.group)
				if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
				if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
				let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}`)
				//	const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
				reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
				let anih = anu.data.jawaban.toLowerCase()
				game.addmtk(from, anih, gamewaktu, mtk)
				gameAdd(sender, glimit)
			}
				break

			case 'family100': {
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!isGroup) return reply(mess.only.group)
				if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
				let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lol}`)
				reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
				let anoh = anu.data.result.aswer
				let rgfds = []
				for (let i of anoh) {
					let fefs = i.split('/') ? i.split('/')[0] : i
					let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ', '') : fefs
					let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
					rgfds.push(axsf.toLowerCase())
				}
				game.addfam(from, rgfds, gamewaktu, family100)
				gameAdd(sender, glimit)
			}
				break

			case 'hbd': case 'zodiak': case 'zodiac':
				let textus = args.join(" ")
				if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
				const zodiak = [
					["Capricorn", new Date(1970, 0, 1)],
					["Aquarius", new Date(1970, 0, 20)],
					["Pisces", new Date(1970, 1, 19)],
					["Aries", new Date(1970, 2, 21)],
					["Taurus", new Date(1970, 3, 21)],
					["Gemini", new Date(1970, 4, 21)],
					["Cancer", new Date(1970, 5, 22)],
					["Leo", new Date(1970, 6, 23)],
					["Virgo", new Date(1970, 7, 23)],
					["Libra", new Date(1970, 8, 23)],
					["Scorpio", new Date(1970, 9, 23)],
					["Sagittarius", new Date(1970, 10, 22)],
					["Capricorn", new Date(1970, 11, 22)]
				].reverse()

				function getZodiac(month, day) {
					let d = new Date(1970, month - 1, day)
					return zodiak.find(([_, _d]) => d >= _d)[0]
				}
				const date = new Date(textus)
				if (date == 'Invalid Date') throw date
				const d = new Date()
				const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
				const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

				const zodiac = getZodiac(birth[1], birth[2])
				const ageD = new Date(d - date)
				const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

				const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
				const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

				const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
				reply(monospace(teksh))
				break

			default:
			for (let zeeonee of audionye){
	members_id = []
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
				if (budy === zeeonee){
					if (isBanned) return reply('*USER BANNED DETECTED*\n\n_Kalo udah ke banned gausa banyak tingkah_')
		
					console.log(color('[ CMD ]', 'aqua'), 'Audio', color(pushname))
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
	maulans.sendMessage(from, result, audio, {duration: '9', ptt: true, contextInfo: {"mentionedJid": members_id, "forwardingScore": 99999, isForwarded: true}  , quoted: { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) },
"message": {
"conversation":  `${zeeonee}`}}})
}
}
			
				if (budy.startsWith('>')) {
					if (!isOwner) return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
					console.log(color('[EVAL]'), color(moment(sen.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
					ras = budy.slice(1)
					function _(rem) {
						ren = JSON.stringify(rem, null, 2)
						pes = util.format(ren)
						reply(pes)
					}
					try {
						q
						reply(require('util').format(eval(`(async () => { ${ras} })()`)))
					} catch (err) {
						e = String(err)
						reply(e)
					}
				}

				if (chats.startsWith('$ ')) {
					if (!isOwner) return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
					if (!q) return
					var itsme = `${sender}`
					var split = `*maulans-BotWeA*`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(q, (err, stdout) => {
						if (err) return maulans.sendMessage(from, ` ${err}`, text, { quoted: sen })
						if (stdout) {
							maulans.sendMessage(from, stdout, text, term)
						}
					})
				}

				if (chats.startsWith(`! `)) {
					if (!q) return reply('Masukkan nomo urutnya!')
					if (!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
					reply('_Tunggu sebentar Video Sedang di Kirim!_')
					quee = 'Y T  D O W N'
					qteks = m.quoted.text
					if (qteks.includes(quee)) {
						jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
						if (isNaN(args[0])) return reply('Input harus berupa nomor!')
						if (args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
						try {
							pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)
							downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
							const { dl_link, thumb, title, filesizeF, filesize } = downm
							if (Number(filesize) >= 30000) {
								short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								//return sendMediaURL(from, thumb, `*P L A Y V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
								reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
							}
							teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
							//wa.sendFileFromUrl(from, thumb, tod, teks)
							sendMediaURL(from, dl_link, teks)
						} catch (e) {
							reply(mess.error)
						}
					}
				}


				if (chats.startsWith(`# `)) {
					if (!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
					if (!q) return reply('Masukkan nomo urutnya!')
					reply('_Tunggu sebentar Music Sedang di Kirim!_')
					quee = 'Y T  D O W N'
					qteks = m.quoted.text
					if (qteks.includes(quee)) {
						jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
						if (isNaN(args[0])) return reply('Input harus berupa nomor!')
						if (args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
						try {
							pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)
							downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
							const { dl_link, thumb, title, filesizeF, filesize } = downm
							if (Number(filesize) >= 30000) {
								short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								// return sendMediaURL(from, thumb, `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
								reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
							}
							teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
							//sendMediaURL(from,thumb,teks)
							sendMediaURL(from, dl_link)
						} catch (e) {
							reply(mess.error)
						}
					}
				}

				if (chats.startsWith('cekprefix')) {
					y = `*Prefix yg sedang digunakan adalah : ${single ? `${prefa}` : multi ? 'Multiprefix' : 'NoPrefix'}*`
					reply(y)
				}
				
				
		

				if (budy.startsWith('x')){
try {

return maulans.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: sen})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return maulans.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: sen})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){

qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`SELFBOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){

var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	

				if (isGroup && budy != undefined) {
					//	console.log(color('[TEXT]', 'yellow'), 'Chat!', color(sender.split('@')[0]))
				} else {
					return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
				}
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
}
