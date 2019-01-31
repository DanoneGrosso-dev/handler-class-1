const Command = require('../structures/Command')

module.exports = class Ping extends Command {
    constructor(client) {
        super(client)
        this.name = 'ping'
        this.description = 'Mostra a latência e o tempo de reposta do Bot.'
        this.aliases = ['latency']
    }

    async run(message, args) {
        message.channel.send('Pong!')
    }
}