let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/349224fb248966019f7e6.mp4'
  let { name } = global.db.data.users[who]
  m.react('🎞')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قـسـم الاديـت+الصـور╎⌞*
*━─╾╃⊱✦⊰🎞⊱✦⊰╄╼─━*
❐╎🎎❯ .طقم⌉
❐╎👨🏻‍💼❯ .طقم_اولاد⌉
❐╎👯‍♀️❯ .طقم_بنات⌉
❐╎🖼❯ .خلفيه⌉
❐╎🎁❯ .خلفيات⌉
❐╎🤣❯ .ميمز⌉
❐╎🧝🏻‍♀️❯ .بنت⌉
❐╎📹❯ .ايديت⌉
❐╎💃🏻❯ .ايديت1⌉
❐╎🚘❯ .ايديت2⌉
❐╎⚽❯ .ايديت3⌉
❐╎🪞❯ .ايديت4⌉
❐╎🗼❯ .ايديت5⌉
❐╎🫗❯ .ماء⌉
❐╎😂❯ .لصديق⌉
❐╎🎞❯ .ايديت-مختلط⌉
❐╎🎧❯ .ايديت-اغنيه⌉
❐╎😎❯ .دراغون-بول⌉
❐╎🎐❯ .بليتش⌉
*✦═════ •『🔰』 ═════✦*
> و بكذا تخلص قائمة الايديات و الصور استمتع بالبوت. 
> قـنـات الـبـوت:https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f
*⎔⋅• ┗╼╃✦⊰⟦𝑮𝒐𝒌𝒖_𝒃𝒐𝒕⟧⊱✦╄╾┛ •⋅⎔*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الايديت']

export default handler
