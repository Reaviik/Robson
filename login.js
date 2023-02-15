import {Client} from 'tmi.js'


//Fazer login//
const r0bsom = new Client({
    options: {
         debug: true 
        },
    identity: {
        username: 'R0BSOM',
        password: 'oauth:token',
    },
    channels: ['Reavik']
});

//Conectar//
r0bsom.connect();
console.log("Conectando a Twitch...");

export {r0bsom}
