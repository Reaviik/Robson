import {Client} from 'tmi.js'


//Fazer login//
const r0bsom = new Client({
    options: {
         debug: true 
        },
    identity: {
        username: 'R0BSOM',
        password: 'oauth:hb6ricul860ysf0cdgc9ajse67dln1',
    },
    channels: ['Reavik']
});

//Conectar//
r0bsom.connect();
console.log("Conectando a Twitch...");

export {r0bsom}
