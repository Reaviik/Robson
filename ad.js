import { r0bsom } from "./login.js";
import fs from "fs"


r0bsom.on('message', (channel, tags, message, self) => {
    if (self) { return; }

    else {
        
        //Adiciona 1 Ad a contagem//
        if (message == "!ad") {
            try {
                fs.readFile('txt/ad.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                    var ads = parseInt(data) + 1;
                    fs.writeFile('txt/ad.txt', ads.toString(), 'utf8', (err) => {
                        if (err) { throw err }
                        r0bsom.say(channel, "Obrigado por ajudar o Streamer a ganhar 0.00001c, graças a você já arecadamos um total de " + ads * 0.01 + " Centavos")
                    });
                });
            } catch {
                return;
            }
        }

        //Remove 1 Ad da contagem//
        if (message == "!-ad" && tags.username.toLowerCase() === "reavik") {
            try {
                fs.readFile('txt/ad.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                    var ads = parseInt(data) + -1;
                    fs.writeFile('txt/ad.txt', ads.toString(), 'utf8', (err) => {
                        if (err) { throw err }
                        r0bsom.say(channel, "Ad removido... total de Ads: " + ads)
                    });
                });
            } catch {
                return;
            }
        }

        //Mostra quantos Ads foram assistidos//
        if (message == '!ads') {
            try {
                fs.readFile('txt/ad.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                    var nMortes = parseInt(data)
                    r0bsom.say(channel, "Já foram assistidos " + nMortes + " Ads desde que eu começei a contar LUL")
                });
            } catch {
                return;
            }
        }
    }
});
