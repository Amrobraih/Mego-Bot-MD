let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/9ffe02eb52dd5a0fd3619.png'
  let { name } = global.db.data.users[who]
  m.react('💵')
let str = `                *╭━─━─━─≪✷◎்۫۫✵≫─━─━─━╮*

*⦓🚩⦔⎽ معلومات الاشتراك*
 
⬡ *سعر "اشتراك" البوت وادخاله اللي جروبك , نقابتك , مملكتك , السعر هو "2 دولار" شهريا اذا ما عجبك الامر واذا في اعتراض ما يمكنك انت تصنع بنفسك وتبذل الجهد وتعرف معنى التعب حقيقي*

> البوت به اكثر من "300" امر مختلف ما بين الفعاليات والالعاب والتحميلات والقرآن الخ... والمزيد من المميزات يمكنك تجربته في جروب الدعم الذي في الاسفل

⬡ *يمكنك اخذ البوت "ثلاثه ايام فقط" لتجربه في الجروب لديك بمقابل بسيط "واحد دولار فقط" واذا عجبك يمكنك دفع الباقي وتكمله المبلغ المطلوب للاشتراك وهذا هو "العرض" الخاص بي*

⬡ *اليمنيين ↯↯*

> اذا انت يمني تعال بمقابل مادي بسيط ما بتقل عليك 
"سعر الاشتراك شهري ( 1200 ريال )"

⬡ *جميع الدول ↯↯*

> تواصل معي للاتفاق ع سعر او مقابل مادي او شحن روبل ببوت توصل وراح افهمك كل شي
"سعر الاشتراك شهري (2 دولار)"


⬡ *المطور*
https://wa.me/967774318278

*⦓🚩⦔⎽ جروبات الدعم الخاصه بالبوت لتجربتها قبل الشراء ↯↯*

⬡ *جروب الدعم¹*
https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g

⬡ *جروب الدعم²*



⬡ *قناه دعم البوت*
https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x

*╰━─━─━─≪✷◎்۫۫✵≫─━─━─━╯*  
                    *✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['اشتراك']

export default handler
