let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/2e1181054d811a77c60f5.jpg'
  let { name } = global.db.data.users[who]
  m.react('⚡')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝╎قــســـم الــتـصــامــيــم╎⌞*
*━─╾╃⊱✦⊰🌟⊱✦⊰╄╼─━*
*⧉【⚡┋.تصميم】*
*⧉【⚡┋.تصميم1】*
*⧉【⚡┋.تصميم2】*
*⧉【⚡┋.تصميم3】*
*⧉【⚡┋.تصميم4】*
*⧉【⚡┋.تصميم5】*
*⧉【⚡┋.تصميم6】*
*⧉【⚡┋.تصميم7】*
*⧉【⚡┋.تصميم8】*
*⧉【⚡┋.تصميم9】*
*⧉【⚡┋.تصميم10】*
*⧉【⚡┋.تصميم11】*
*⧉【⚡┋.تصميم12】*
*⧉【⚡┋.صمملي】*
*⧉【⚡┋.صمم】*
*✦═════ •『🔰』 ═════✦*
> هاذه قائمة التصاميم اكتب الاسم الذي تريد تصممة بجانب الامر. 
> افضل الصلاه والسلام على سيدنا محمد ﷺ🌺. 
> قـنــات الـبـوت:https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f
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
handler.command = ['تصاميم']

export default handler
