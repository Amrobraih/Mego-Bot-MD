let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/0501b0332d9e03828f6f8.mp4'
  let { name } = global.db.data.users[who]
  m.react('👥')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســـم الاعــضــاء╎⌞*
*━─╾╃⊱✦⊰🏆⊱✦⊰╄╼─━*
❐╎🔦❯ .اختفاء⌉
❐╎⛔❯ .ابلاغ⌉
❐╎👀❯ .شوف⌉
❐╎🧊❯ .بارد⌉
❐╎😶‍🌫️❯ .سيري⌉
❐╎🗣❯ .تحدث⌉
❐╎🤖❯ .بوت⌉
❐╎👥❯ .بينغ⌉
❐╎🔖❯ .بروفايل⌉
❐╎🏃‍♂️❯ .سرعه⌉
❐╎✍🏻❯ .خط⌉
❐╎⁉️❯ .هل⌉
❐╎📧❯ .منشني⌉
❐╎🖥❯ .توب⌉
❐╎✒️❯ .تصاميم⌉
❐╎🖋❯ .تصميم⌉
❐╎👨🏻‍💻❯ .المطور⌉
❐╎💬❯ .تعليق⌉
❐╎📹❯ .ايديت⌉
❐╎📃❯ .الاستماره⌉
❐╎🪙❯ .الدعم⌉
❐╎🌏❯ .الطقس⌉
❐╎☘️❯ .بوست⌉
❐╎🌿❯ .عبارات⌉
❐╎📎❯ .رابطي⌉
❐╎📄❯ .السورس⌉
❐╎📜❯ .قوانين⌉
❐╎🫂❯ .المعرف⌉
❐╎👥❯ .المستخدمين⌉
❐╎💬❯ .بايدن⌉
❐╎🤳❯ .سيلفي⌉
❐╎💪🏻❯ .غوكو⌉
❐╎✒️❯ .خط-عربي⌉
❐╎💘❯ .الحب⌉
❐╎🥱❯ .تست⌉
❐╎👨🏻‍💻❯ .مطور⌉
❐╎💻❯ .الصانع⌉
❐╎👫🏻❯ .توام⌉
❐╎😚❯ .بوسه⌉
❐╎🥱❯ .نوعيه⌉
❐╎📯❯ .سوالف⌉
❐╎💀❯ .اعدام⌉
*✦═════ •『🔰』 ═════✦*
> و بكذا تخلص قائمة الأعضاء استمتع بالبوت. 
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
handler.command = ['الاعضاء']

export default handler
