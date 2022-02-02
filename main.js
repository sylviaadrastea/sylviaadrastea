//UDAH GUA KASIH NO ENC NI;)
//KEBANGETAN KALO BELUM SUBSCRIBE
//HAYO LAH KAWAN MANA HATI KALIAN;)
//Subscribe "Ramdani Official"
//Hargai Bang;(
const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./Ramdani.js')
nocache('../Ramdani.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (RAMDANI = new WAConnection()) => {
	RAMDANI.logger.level = 'warn'
	console.log(color(figlet.textSync('RAMDANI', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SELAMAT TAHUN BARU 2022]', 'yellow'), color('\nSUPORT RAMDANI OFFICIAL', 'yellow'))
	console.log(color('SC INI GRATIS YA BAYAR PAKE SUBSCRIBER', 'yellow'))
	console.log(color('SEMANGAT RECODE', 'yellow'))
	RAMDANI.browserDescription = ["Ramdani Official", "Chrome", "3.0.0"];

	// Menunggu QR
	RAMDANI.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA WAKTU 20 DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && RAMDANI.loadAuthInfo(`./${setting.sessionName}.json`)
	RAMDANI.on('connecting', () => {
		console.log(color('[ Ramdani Official]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "R",
    "RA",
    "RAM",
    "RAMD",
    "RAMDA",
    "RAMDAN",
    "RAMDANI",
    "RAMDANI JE",
    "RAMDANI JEL",
    "RAMDANI JELE",
    "RAMDANI JELEK",
    "RAMDANI JELEK T",
    "RAMDANI JELEK TA",
    "RAMDANI JELEK TAP",
    "RAMDANI JELEK TAPI",
    "RAMDANI JELEK TAPI B",
    "RAMDANI JELEK TAPI BO",
    "RAMDANI JELEK TAPI BOO",
    "RAMDANI JELEK TAPI BOON",
    "RAMDANI JELEK TAPI BOONG",
    "RAMDANI JELEK TAPI BOONG A",
    "RAMDANI JELEK TAPI BOONG AW",
    "RAMDANI JELEK TAPI BOONG AWK",
    "RAMDANI JELEK TAPI BOONG AWKO",
    "RAMDANI JELEK TAPI BOONG AWKOW",
    "RAMDANI JELEK TAPI BOONG AWKOWK",
    "RAMDANI JELEK TAPI BOONG AWKOWKO",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 Y",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT H",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT HE",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT HER",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT HERM",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT HERMA",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI C",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI CH",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI CHA",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI CHAN",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT RAMDANI CHANE",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT Ramdani Official",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT Ramdani OfficialY",
    "RAMDANI JELEK TAPI BOONG AWKOWKO ?不 YT Ramdani OfficialYO"
  ]}

	//connect
	RAMDANI.on('open', () => {
		console.log(color('[HC]', 'white'), color('BOT SUDAH SIAP DI GUNAKAN'));
	})

	// session
	await RAMDANI.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(RAMDANI.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	RAMDANI.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	RAMDANI.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	RAMDANI.on('group-participants-update', async (anu) => {
		await welcome(RAMDANI, anu)
	})

	RAMDANI.on('chat-update', async (message) => {
		require('./Ramdani.js')(RAMDANI, message)
	})
}

starts()