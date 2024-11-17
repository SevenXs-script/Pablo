module.exports = {
    name: "ping",
    run: async(client, message) => {
        message.reply(`🏓 **|** ping \`${client.ws.ping}ms\``)
    }
}