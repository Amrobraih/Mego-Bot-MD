let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/a82beae64b9496da6eba9.png'
  let { name } = global.db.data.users[who]
  m.react('👨🏻‍💻')
let str = `                 『𝑮𝒐𝒌𝒖🇾🇪🫀🇵🇸』
*· · • • • • ✦ • • • • · ·*
*⌬ ❛╏ اهلا,* ${name}⁩
*⌬ ❛╏ الوقت:${wib}
*⌬ ❛╏ التاريخ:${date}
*⌬ ❛╏ المستخدمين:${rtotal}
*⌬ ❛╏ المنصه ⩾ 𝐻𝐸𝑅𝛩𝐾𝑈
*· · • • • • ✦ • • • • · ·*
*₪↲ معلومات المطور ┆⥌❄️⥍*
*⌬ ❛╏𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫🇵🇸🫀🇾🇪╏❛ ⌬* *اسم المطور*

*⌬ ❛╏𝑮𝒐𝒌𝒖╏❛ ⌬* *لقب المطور* 

*⌬ ❛╏https://wa.me/+967774318278 ╏❛ ⌬* ‬‏*رقم المطور

*⌬ ❛╏ ⌬* *جروب المطور*
https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g
*⌬ ❛╏ ⌬* *جروب دعم المطور*
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ info sc owner :
 -----------------------------
  ⌬ | *𝚈𝙾𝚄𝚃𝚄𝙱𝙴*:https://www.youtube.com/@user-to2qq1ji1r
  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:https://www.instagram.com/mrwbryh?igsh=MWxwZ2o4N2NkMHN5YQ==
  -----------------------------  
                    ✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥
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
