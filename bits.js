import open from "open";
import {r0bsom} from './login.js';
import fs from 'fs';
import GoogleTts from 'google-tts.js';

var abrir = open;
var bitSond = 10000;

r0bsom.on('cheer', (channel, userstate, message) =>{
    console.log('cheer', "Chanel",channel, "Userstate", userstate, "Message", message);

        var quantidade = parseInt(userstate.bits);

        if(quantidade  >= 1     && quantidade <=5);  { try{ audio = true; abrir('./audios/bits/0-10-Tiro.wav');       setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 6     && quantidade <=10); { try{ audio = true; abrir('./audios/bits/11-15-Run.mp3');       setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 11    && quantidade <=15); { try{ audio = true; abrir('./audios/bits/21-25-Buzina.mp3');    setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 16    && quantidade <=20); { try{ audio = true; abrir('./audios/bits/26-30-FBI.mp3');       setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 21    && quantidade <=50); { try{ audio = true; abrir('./audios/bits/31-50-Susto.wav');     setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 51    && quantidade <=100);{ try{ audio = true; abrir('./audios/bits/51-75-CoinDrop.mp3');  setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 101   && quantidade <=150);{ try{ audio = true; abrir('./audios/bits/76-100-Money.mp3');    setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 151   && quantidade <=200);{ try{ audio = true; abrir('./audios/bits/101-150-Susto.mp3');   setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}
        if(quantidade  >= 201 );                     { try{ audio = true; abrir('./audios/bits/151+SS3Remix.mkv');    setTimeout(function () { audio = true }, bitSond); }catch(error){return;}}

    
    

    try {
        fs.readFile('txt/tts.txt', 'utf-8', async function (err, dados) {

            //Fazer coreção usuario tal mandou x bits//
            audio == false;
            var ttss = parseInt(dados) + 1;
            fs.writeFile('txt/tts.txt', ttss.toString(), 'utf8', (err) => {
                fs.unlink("./tts/tts.mp3", function (err) { });
                if (err) { throw err }
                var text = `${userstate["display-name"]} Enviou ${quantidade} Bits` + message.toString().toLowerCase();
                var lang = "pt";
                console.log("🔊");

                setTimeout(function () {
                    const data = `https://translate.google.com/translate_tts?ie=UTF-8&q=${text.replace(/( )/ig, "%20").replace(/(\n)/ig, "%0A")}&tl=${lang}&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1`;
                    GoogleTts.saveFile(text, lang, 'tts/tts.mp3');

                    setTimeout(function () {
                        abrir(`./tts/tts.mp3`);
                    }, 5000);
                }, 5000);
            });
        });
    } catch (error) { return; }
});