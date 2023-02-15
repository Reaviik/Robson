import { r0bsom } from "./login.js";
import fs from "fs"


r0bsom.on('message', (channel, tags, message, self) => {
    if (self) { return; }

    else {

        //Adiciona uma morte ao contador//
        if (message == "morreu" || message == "!morreu") {
            try {
                fs.readFile('txt/mortes.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                    var nMortes = parseInt(data) + 1;
                    fs.writeFile('txt/mortes.txt', nMortes.toString(), 'utf8', (err) => {
                        if (err) { throw err }
                        r0bsom.say(channel, "O noob do Reavik já morreu " + nMortes + " vezes só hoje. reavikTerere")
                    });
                });
            } catch {
                return;
            }
        }

        //Mostra quantas mortes eu já tenho//
        if (message == '!mortes') {
            try {
                fs.readFile('txt/mortes.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                    var nMortes = parseInt(data)
                    r0bsom.say(channel, "O noob do Reavik já morreu um total de " + nMortes + " vezes. LUL")
                });
            } catch {
                return;
            }
        }
    }
});