const { Client, Collections, Collection } = require("discord.js");
const fs = require("fs")

require("dotenv").config()

const client = new Client({
    intents: 53608447,
});

client.commands = new Collection()

client.login(process.env.token)

module.exports = client

fs.readdirSync('commands').forEach(subFolder => {
    fs.readdirSync(`commands/${subFolder}`).forEach(cmd => {
        const cmds = require(`./commands/${subFolder}/${cmd}`)
        client.commands.set(cmds.name, cmds)
        console.log(`${cmds.name} Carregado!`)
    })
})

fs.readdirSync('events').forEach(file => {
    const eventdata = require(`./events/${file}`)
    client.on(eventdata.name, eventdata.run)
})