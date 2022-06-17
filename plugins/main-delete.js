let handler = function (m) {
  if (!m.quoted) throw false
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) throw '𝐩𝐞𝐬𝐚𝐧 𝐭𝐞𝐫𝐬𝐞𝐛𝐮𝐭 𝐛𝐮𝐤𝐚𝐧 𝐝𝐢𝐤𝐢𝐫𝐢𝐦 𝐛𝐨𝐭 𝐦𝐞𝐦𝐞𝐤!'
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.help = ['delete']
handler.tags = ['main']

handler.command = /^del|delete|unsend?$/i
handler.register = false

module.exports = handler
