import { r0bsom } from "./login.js";

const palavroes = ["Puta", "Penis", "Buceta", "Vagina", "Cu"];

r0bsom.on('message', (channel, tags, message, self) => {
    if (!self) {
        for (var i = 0; i < palavroes.length; i++) {
            let chingamento = palavroes[i].toLowerCase();
            console.log(chingamento)
            if (message.includes(chingamento)) {
                r0bsom.say(channel, `Olha a boca ${tags["display-name"]} aqui não é lugar para chingamentos.`);
                break;
            }
        }
    }
})