let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/7c75dd22d3be0d3bd779b.jpg'
  let { name } = global.db.data.users[who]
  m.react('🪩')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســم الريــاكــشــنـات╎⌞*
*━─╾╃⊱✦⊰🪩⊱✦⊰╄╼─━*
> @منشن اي شخص تريد بعد كتابة الأمر. 😘
*⧉【🤡┋.تنمر】*
*⧉【🫂┋.حضن】*
*⧉【😭┋.يبكي】*
*⧉【👨‍👩‍👦‍👦┋.احضن】* 
*⧉【😀┋.رائع】*
*⧉【👄┋.قبله】*
*⧉【👅┋.يلعق】*
*⧉【👨🏻‍🏫┋.تربيه】*
*⧉【😏┋.متعجرف】*
*⧉【👊🏻┋.ضرب】*
*⧉【🤾‍♀️┋.يرمي بقوه】*
*⧉【😞┋.مكسوف】*
*⧉【🙂┋.يبتسم】*
*⧉【🙌🏻┋.موجه】*
*⧉【👐🏻┋.كفك】*
*⧉【🤝🏻┋.كفك٢】*
*⧉【🤤┋.يأكل】*
*⧉【🦴┋.يعض】*
*⧉【🫂┋.حضن2】*
*⧉【🤚🏻┋.كف】*
*⧉【😵┋.قتل】*
*⧉【😊┋.سعيد】*
*⧉【😉┋.غمزه】*
*⧉【🫳🏻┋.لمس】*
*⧉【🕺🏻┋.رقص】*
*⧉【🤨┋.يستوعب】*
*✦═════ •『🔰』 ═════✦*
> و كذا تم قسم الرياكشنات استمتع بالبوت. 😘
> الـمطور:https://wa.me/967774318278
> قناة البوت:https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f
> 𝑮𝑶𝑲𝑼 𝑩𝑶𝑻 🇾🇪🫀🇵🇸
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
handler.command = ['رياكشنات']

export default handler