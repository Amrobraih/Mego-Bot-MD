let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/d422d3780725c251ccad3.jpg'
  let { name } = global.db.data.users[who]
  m.react('👨🏻‍💻')
let str = `                  *⎔⋅• ┓╼╃✦⊰⟦﷽⟧⊱✦╄╾┏ •⋅⎔*
*· · • • • • ✦ • • • • · ·*
*⌬ ❛╏ اهــلا, ${name}⁩*
*⌬ ❛╏ الــوقـت:${wib}*
*⌬ ❛╏ الـتـاريــخ:${date}*
*⌬ ❛╏ المـسـتـخـدمـيـن:${rtotal}*
*⌬ ❛╏ المـنـصـه ⩾ 𝐻𝐸𝑅𝛩𝐾𝑈*
*· · • • • • ✦ • • • • · ·*
*₪↲ معلومات المطور ┆⥌❄️⥍*
*⌬ ❛╏𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫🇵🇸🫀🇾🇪╏❛ ⌬* *اســم الـمــطـور*

*⌬ ❛╏𝑮𝒐𝒌𝒖╏❛ ⌬* *لـقـب الـمـطـور* 

*⌬ ❛╏https://wa.me/+967774318278 ╏❛ ⌬* ‬‏*رقــم الـمـطــور

*⌬ ❛╏ ⌬* *جــروب الــمـطـور*
> https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g
*⌬ ❛╏ ⌬* *قـنــات دعــم الـمـطـور*
> https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ info sc owner :
 *· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
  > ⌬ | *𝚈𝙾𝚄𝚃𝚄𝙱𝙴*:https://www.youtube.com/@user-to2qq1ji1r
>  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:https://www.instagram.com/mrwbryh?igsh=MWxwZ2o4N2NkMHN5YQ==
 *· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
> و السلام عليكم ورحمة الله وبركاته تمتع بالبوت و اذا فيه مشكله كلم المطور 👆🏻. 
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
handler.command = ['الصانع']

export default handler
