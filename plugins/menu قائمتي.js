let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/516144c494f759ddb42d8.mp4'
  let { name } = global.db.data.users[who]
  m.react('👑')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســم الــمــطــور عــمــرو╎⌞*
*━─╾╃⊱✦⊰👨🏻‍💻⊱✦⊰╄╼─━*
❏..🔕╎❯ .بان⌉
❏..🔔╎❯ .بانفك⌉
❏..🚫╎❯ .بانشات⌉
❏..⭕╎❯ .بانشاتفك⌉
❏..🔖╎❯ .حطهابروفايل⌉
❏..💎╎❯ .ضيفالماس⌉
❏..💱╎❯ .ضيفاكسبي⌉
❏..🔄╎❯ .اعاده⌉
❏..📤╎❯ .اخرج⌉
❏..📥╎❯ .ادخل⌉
❏..👨🏻‍💻╎❯ .تهكير⌉
❏..🧹╎❯ .تنظيف⌉
❏..🪄╎❯ .الامردا⌉
❏..⛔╎❯ .البلوكات⌉
❏..🔰╎❯ .فكالبلوك⌉
❏..📵╎❯ .بلوك⌉
❏..🖱╎❯ .بريم⌉
❏..🖲╎❯ .حذف_بريم⌉
❏..🎖╎❯ .المميزين⌉
❏..🏃‍♂️╎❯ .تسريع⌉
❏..🗞╎❯ .نشر⌉
❐..💀╎❯ .هاك⌉
*✦═════ •『🔰』 ═════✦*
> استمتع بابوت سون غوكو  الاسطورة. 
> صلِّ على سيدنا محمد ﷺ. 
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
handler.command = ['قائمتي' ,'قايمه','القايمه']
handler.rowner = true
export default handler
