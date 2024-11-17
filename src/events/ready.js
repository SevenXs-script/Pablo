module.exports = {
    name: "ready",
    run: async(client) => {
        console.log(`logged in ${client.user.tag}`)
    }
}