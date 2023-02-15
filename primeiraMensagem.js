import { r0bsom } from "./login.js";
import fs from "fs";


var fm = "";

r0bsom.on('message', (channel, tags, message, self) => {
    if (self) { return; }
    else {

        //Primeira mensagem do dia/bot online//
        if (!fm.includes(tags.username)) {

            fm = fm + " " + tags.username;

            if (tags.color == '#00FF7F' || tags.color == '#008000' || tags.color == '#2E8B57') {
                setTimeout(() => {
                    r0bsom.say(channel, `Bem vindo ${tags["display-name"]} é bom te ver aqui. Gostei da cor do nick, eu amo verde VoteYea`);
                }, 2500);
            }
            else if (tags['display-name'] == "lucyjapinha" || tags['display-name'] == "CapNascimentoTv" || tags['display-name'] == "neronunes" ||tags['display-name'] == "dedezim96") {
                setTimeout(() => {
                    r0bsom.say(channel, `Se você ainda não conheçe ${tags['display-name']}, da uma olhada la no canal dele(a), super gente boa <3 !sh ${tags['display-name']}`);
                }, 5000);
            }
            else {
                setTimeout(() => {
                    r0bsom.say(channel, `Bem vindo ${tags["display-name"]} faz tempo que nunca te vi aqui, fique avontade.`);
                }, 2500);
            }
        }
    }
});