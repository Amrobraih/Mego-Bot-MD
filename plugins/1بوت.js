let handler = async (m, { conn }) => {
    // التأكد من أن المرسل ليس البوت نفسه
    if (m.sender === conn.user.jid) return;

    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> اهلا بك انا بوت واتساب اسمي سون غوكو يمكنك طلب قائمه الاوامر من خلال امر  *.اوامر* او اضغط الزر أسفل👇 انا بوت عباره عن تلبيه طلبك والترفيه واحمي الجروبات ويوجد بي تحميل الاغاني والالعاب و التطبيقات واشياء كثيره وتحميل الفيديوهات من جميع المنصات وهذا يوفر لك استخدام تطبيقات كثيره وكما يوجد العاب تقدر تلعبها انت واصدقائك في الجروبات وعلى ما اظن انه يوجد تحديثات كثيره اخرى نحدثها قريبا وانضم الى قناه الوتساب الرسميه لمعرفه التحديثات المستقبليه

> *https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f*`;

    // إرسال الملف والصورة مع الرسالة
    await conn.sendFile(m.chat, 'https://telegra.ph/file/d422d3780725c251ccad3.jpg', 'video.mp4', message, m);

    // إرسال الرسالة مع الأزرار التفاعلية
    await conn.sendMessage(m.chat, {
        text: message,
        footer: 'اختر أحد الخيارات التالية:',
        buttons: [
            { buttonId: '#اوامر', buttonText: { displayText: 'قــائـمـة الاوامــر🇾🇪🫀🇵🇸' }, type: 1 },
            { buttonId: '.المهام', buttonText: { displayText: 'جـــمــيــع الاوامـــر🇾🇪🫀🇵🇸' }, type: 1 },
            { buttonId: '/المطور', buttonText: { displayText: '𝑮𝑶𝑲𝑼💫𝑩𝑶𝑻⚡🇾🇪🫀🇵🇸' }, type: 1 }
        ],
        headerType: 1
    });
};

// تعيين التفعيل عند مطابقة الأوامر المحددة
handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;