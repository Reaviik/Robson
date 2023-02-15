import {Channel, Client, Guild} from "discord.js";



const token = 'token';
const prefix = '?';
const delayPresence = 15000;

//Intents//
const r0bsom = new Client({
    shards: 'auto',
    restTimeOffset: 100,
    intents: 641,
    partials: ["CHANNEL", "MESSAGE", "REACTION", "USER"]
});
//On Ready//
r0bsom.on('ready', async () => {
    var servidores = r0bsom.guilds.cache.size;
    console.log(`Conectado ao Discord! servidores: `+r0bsom.guilds.cache.size);

    //Atividades//
    try {
        r0bsom.user.setPresence({ activities: [{ name: `A Inicialização Inicializar.`, type: 'WATCHING' }], status: 'idle' });
    //Mudando a Atividade de forma Randomica//
    setInterval(() => {
        let math = Math.floor(Math.random() * 6 - 0);
        if (math == 0) { r0bsom.user.setPresence({ activities: [{ name: `Dados criptografados na velocidade da luz.`, type: 'STREAMING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
        if (math == 1) { r0bsom.user.setPresence({ activities: [{ name: `O Reavik na Twitch.`, type: 'WATCHING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
        if (math == 2) { r0bsom.user.setPresence({ activities: [{ name: `Folhas no chão`, type: 'PLAYING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
        if (math == 3) { r0bsom.user.setPresence({ activities: [{ name: `Algum lugar fora do cosmos.`, type: 'COMPETING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
        if (math == 4) { r0bsom.user.setPresence({ activities: [{ name: `Digite ${prefix}help para saber mais.`, type: 'PLAYING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
        if (math == 5) { r0bsom.user.setPresence({ activities: [{ name: `Tchubiralovers Adventures Team.`, type: 'PLAYING', url: `https://twitch.tv/Reavik` }], status: 'online' }); }
    }, delayPresence);
} catch (error) { return; }
});

//On MessageCreate//

r0bsom.on('messageCreate', async message => {
    let bot = message.author.bot;
    
});

r0bsom.login(token);

export { r0bsom };
