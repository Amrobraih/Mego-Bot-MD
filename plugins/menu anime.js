let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/c31dbc7a9d7ea72196f5f.mp4'
  let { name } = global.db.data.users[who]
m.react('🔮')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــسـم الانــمــي╎⌞*
*━─╾╃⊱✦⊰🔮⊱✦⊰╄╼─━*
❐╎🍙❯ .فانرت⌉
❐╎🍚❯ .هوسبو⌉
❐╎🍥❯ .كانا⌉
❐╎🍡❯ .ميغومين⌉
❐╎🍜❯ .نيكو⌉
❐╎🍱❯ .شوتا⌉
❐╎🍨❯ .وايف⌉
❐╎🍧❯ .الينا⌉
❐╎🔮❯ .مراتي⌉
❐╎🔮❯ .بنت⌉
❐╎🍥❯ .وايفو⌉
❐╎🥨❯ .لولي⌉
❐╎🍓❯ .لولي2⌉
❐╎👘❯ .كوسبلاي⌉
❐╎🗑❯ .ساكورا⌉
❐╎🌩❯ .ساسكي⌉
❐╎🥢❯ .ساجيري⌉
❐╎🧁❯ .نيزوكو⌉
❐╎🦊❯ .ناروتو⌉
❐╎🏹❯ .ميناتو⌉
❐╎🍪❯ .ميكو⌉
❐╎🍩❯ .ميكاسا⌉
❐╎🗿❯ .مادارا⌉
❐╎🍒❯ .جوزو⌉
❐╎🤸‍♂️❯ .كوترو⌉
❐╎🤺❯ .كانيكي⌉
❐╎🪕❯ .كاوري⌉
❐╎🤿❯ .كاجيرو⌉
❐╎🪔❯ .كاجا⌉
❐╎🩹❯ .ايتوري⌉
❐╎🩸❯ .ايتاتشي⌉
❐╎🪴❯ .ايسوزي⌉
❐╎🩰❯ .اينوري⌉
❐╎💒❯ .هيناتا⌉
❐╎🏖❯ .هيستيا⌉
❐╎⛱️❯ .ايميليا⌉
❐╎🗻❯ .ايبا⌉
❐╎🎠❯ .ايرزا⌉
❐╎🌋❯ .ديدارا⌉
❐╎🍃❯ .شيتوجي⌉
❐╎🍄❯ .تشيهو⌉
❐╎🐵❯ .بوروتو⌉
❐╎🥀❯ .أيوزاوا⌉
❐╎🌷❯ .اسونا⌉
❐╎🌺❯ .اناا⌉
❐╎⛹️‍♂️❯ .اكياما⌉
❐╎🕴❯ .اكيرا⌉
*✦═════ •『🔰』 ═════✦*
> و بكذا خلصت قائمة الانمي استمتع بالبوت. 
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
handler.command = ['الانمي']

export default handler
