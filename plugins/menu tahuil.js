let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/0501b0332d9e03828f6f8.mp4'
  let { name } = global.db.data.users[who]
  m.react('♻️')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســم الــتـحويــلات╎⌞*
*━─╾╃⊱✦⊰♻️⊱✦⊰╄╼─━*
❐╎🎈❯ .ملصق⌉
❐╎⚜️❯ .حقوق⌉
❐╎🏞️❯ .لصورة⌉
❐╎🎞️❯ .لفيديو⌉
❐╎⭕❯ .دائري⌉
❐╎🎭❯ .دمج⌉
❐╎🖇❯ .تليجراف⌉
❐╎🔊❯ .لصوت⌉
❐╎🔗❯ .لريك⌉
❐╎✉️❯ .تيلجرام⌉
❐╎🦁❯ .حيوان⌉
❐╎🐈❯ .قط⌉
❐╎🐕‍🦺❯ .كلب⌉
❐╎📦❯ .ستك⌉
❐╎🗂❯ .لملف⌉
❐╎🎲❯ .نرد⌉
❐╎🦸🏻‍♂️❯ .لانمي⌉
❐╎🖌❯ .ارسم⌉
❐╎⚽❯ .كريستيانو⌉
❐╎🐏❯ .ميسي⌉
❐╎⛰️❯ .جبل⌉
❐╎🥷🏻❯ .ببجي⌉
❐╎🛰❯ .تكنولوجيا⌉
❐╎👨🏻‍💻❯ .هكر⌉
❐╎🎼❯ .انميز⌉
❐╎🪐❯ .كوكب⌉
❐╎🦸🏻‍♂️❯ .كرتون⌉
❐╎🎮❯ .جيمينج⌉
❐╎🚙❯ .سيارة⌉
*✦═════ •『🔰』 ═════✦*
> و بكذا تخلص قائمة التحويلات استمتع بالبوت. 
> متنساش تصلي على النبي ﷺ. 
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
handler.command = ['التحويلات']
export default handler
