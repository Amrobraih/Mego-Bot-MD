import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['967774318278', '🌩️ ẉa.me//𝑮𝒐𝒌𝒖‖.peị!‽ 👑', true], ['967735038560', '𝑮𝑶𝑲𝑼💫𝑩𝑶𝑻⚡', true], ['967737776023', '𝑮𝑶𝑲𝑼💫𝑩𝑶𝑻⚡', true], ['967735038560'], ['967735038560'], ['967735038560'], ['967735038560'], ['967735038560'], ['967735038560'], ['967735038560'], ['967735038560']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['967774318278']
global.suittag = ['967774318278']
global.mods = []
global.prems = []

global.packname = '『 +967774318278 』'
global.author = '『 غوكـو بــ☠️ـوت 』'
global.wm = '『غـوكـو بــ🐍ـؤؤت 』'
global.wm2 = '『 غــوكـو بــ💎ـوت 』'
global.azami = '『غـوكو بــ💀وت 』'
global.cb = '『 غــوكــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𝑮𝒐𝒌𝒖_BOT'
global.devnum = '+967774318278'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
