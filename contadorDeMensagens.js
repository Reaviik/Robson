import fs from 'fs';
import { r0bsom } from "./login.js";
r0bsom.on('message', async (channel, tags, message, self) => {
    if (self) { return; }
    else {
            //Contador de mensagens//
            try {
                fs.readFile('txt/mensagens.txt', 'utf-8', function (err, data) {
                    if (err) { throw err }
                        var msg = parseInt(data) + 1;
                        fs.writeFile('txt/mensagens.txt', msg.toString(), 'utf8', (err) => {
                        if (err) { throw err }
                    });
                });
            } catch {
                return;
        }
    }
});

