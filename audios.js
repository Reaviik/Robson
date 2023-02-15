import open from "open";
import { r0bsom } from './login.js';
import GoogleTts from 'google-tts.js';
import fs from "fs";
import {comandos} from './comandos.js';

var abrir = open;
var text = '';
let ttsn = false;
let audio = true;
var delay = 10000;
var delayTTSBaixar = 2500;
var delayTTSFalar = 2500;
var delayTTSFinal = 25000;


r0bsom.on('message', (channel, tags, msg, self) => {
    var message = msg.toLowerCase().toString();
    if (self || !message.startsWith("!")) {
        return;
    }else {
        //Espera, Audios//
        if (audio == false) {
            var random = Math.floor(Math.random() * 5 - 0);
            if (random == 0) { r0bsom.say(channel, "Eu sei que você esta empougado " + tags["display-name"] + ", mas seguara a onda ae senão vira bagunça."); }
            if (random == 1) { r0bsom.say(channel, "Calma ae meu chapa, á outro pedido na fila."); }
            if (random == 2) { r0bsom.say(channel, "Aquieta esse fogo ai " + tags["display-name"] + ", relaxa senão não encaixa."); }
            if (random == 3) { r0bsom.say(channel, "Calma, calma, calma, espera só um pouquinho " + tags["display-name"] + "."); }
            if (random == 4) { r0bsom.say(channel, "Devagar " + tags["display-name"] + " um audio de cada vez."); }
        }

        //Audios//
        else if (audio == true && message == '!abcf')       { audio = false; abrir('./Audios/abcf.mp3');        console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!bunito')     { audio = false; abrir('./Audios/acheiBunito.wav'); console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!adm')        { audio = false; abrir('./Audios/adm.wav');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!banana')     { audio = false; abrir('./Audios/banana.mp3');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!boanoite')   { audio = false; abrir('./Audios/boaNoite.wav');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!bomdia')     { audio = false; abrir('./Audios/bomDia.wav');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!brabo')      { audio = false; abrir('./Audios/brabo.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!bonito')     { audio = false; abrir('./Audios/bunito.wav');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!errou')      { audio = false; abrir('./Audios/errou.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == 'errou')       { audio = false; abrir('./Audios/ErrouFeio.m4a');   console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == 'morreu')      { audio = false; abrir('./Audios/eMorreu.m4a');     console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!morreu')     { audio = false; abrir('./Audios/eMorreu.mp3');     console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!loko')       { audio = false; abrir('./Audios/euToLoco.mp3');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!grilo')      { audio = false; abrir('./Audios/grilo.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!ha')         { audio = false; abrir('./Audios/haGay.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!hey')        { audio = false; abrir('./Audios/HEY.wav');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!jhonsena')   { audio = false; abrir('./Audios/jhonSena.mp3');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!licenca')    { audio = false; abrir('./Audios/licenca.mp3');     console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!miau')       { audio = false; abrir('./Audios/mial.mp3');        console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!mimimi')     { audio = false; abrir('./Audios/mimimi.wav');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!moises')     { audio = false; abrir('./Audios/moises.mp3');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!nao')        { audio = false; abrir('./Audios/nao.mp3');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!olt')        { audio = false; abrir('./Audios/olt.mp3');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!opa')        { audio = false; abrir('./Audios/opa.mp3');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!pinga')      { audio = false; abrir('./Audios/pinga.wav');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!pq')         { audio = false; abrir('./Audios/pqAgredi.mp3');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!priguica')   { audio = false; abrir('./Audios/priguica.mp3');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!rsrs')       { audio = false; abrir('./Audios/risos.wav');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!bagunca')    { audio = false; abrir('./Audios/soBagunca.wav');   console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!sumiu')      { audio = false; abrir('./Audios/sumiu.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!surprise')   { audio = false; abrir('./Audios/surprise.mp3');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!titanic')    { audio = false; abrir('./Audios/titanic.mp3');     console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!treta')      { audio = false; abrir('./Audios/treta.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!errado')     { audio = false; abrir('./Audios/tuoErrado.mp3');   console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!vitas')      { audio = false; abrir('./Audios/vitas.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!wtf')        { audio = false; abrir('./Audios/wtf.mp3');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!sparta')     { audio = false; abrir('./Audios/sparta.mp3');      console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true &&  message == '!wee')       { audio = false; abrir('./Audios/wee.wav');         console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        else if (audio == true && message == '!cafe'    || message == '!café')      { audio = false; abrir('./Audios/QueroCafé.m4a');    console.log('🔊');     setTimeout(function () { audio = true }, delay); }
        //Comandos !cmd//
        else if (audio == true && message == '!audio') {
            r0bsom.say(channel, `Os comandos de audio existentes são: ►!abcf ►!bunito ►!adm ►!banana ►!boanoite ►!bomdia ►!brabo ►!bonito ►!errou  ►errou ►!morreu  ►morreu ►!errou ►!loko ►!grilo ►!grito ►!ha ►!hey ►!jhonsena ►!licenca ►!miau ►!mimimi ►!moises ►!nao ►!olt ►!pinga ►!pq ►!preguica ►!rsrs ►!bagunca ►!sparta ►!sumiu ►!surprise ►!titanic ►!treta ►!tts ►!errado ►!vitas ►wee ►!wtf`);
        }

        
    //TTS//

    //Espera, Texto Falado//
    if (message.startsWith('!tts') && message.length > 5) {
        if (ttsn === true) {
            var random = Math.floor(Math.random() * 5 - 0);
            if (random == 0) { r0bsom.say(channel, "deixa só eu terminar meu café " + tags["display-name"] + ", já falo com você."); }
            if (random == 1) { r0bsom.say(channel, "Um momentinho " + tags["display-name"] + " estou de boca cheia."); }
            if (random == 2) { r0bsom.say(channel, "Aquieta esse fogo ai " + tags["display-name"] + " ."); }
            if (random == 3) { r0bsom.say(channel, "Eu preciso de um copo de café " + tags["display-name"] + "."); }
            if (random == 4) { r0bsom.say(channel, "A pressa é inimiga da perfeição " + tags["display-name"] + ", curioso."); }
        }
        //Texto Muito Grande//
        else if (message.length >= 201) {
            r0bsom.say(channel, `Olha, eu gosto de falar, ler não é uma das minhas melhores habilidades, coloca menos de 200 caracteres que eu leio, ${message.length} é muito pra min`)
        }
        //Texto Falado//
        else {
            ttsn = true;
            fs.readFile('txt/tts.txt', 'utf-8', function (err, dados) {
                if (err) { throw err }
                var ttss = parseInt(dados) + 1;
                fs.writeFile('txt/tts.txt', ttss.toString(), 'utf8', (err) => {
                    fs.unlink("txt/tts.mp3", function (err) { });
                    if (err) { throw err }
                    var text = message.slice(5);
                    var lang = "pt";
                    console.log("🔊");

                    setTimeout(function () {
                        const data = `https://translate.google.com/translate_tts?ie=UTF-8&q=${text.replace(/( )/ig, "%20").replace(/(\n)/ig, "%0A")}&tl=${lang}&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1`;
                        GoogleTts.saveFile(text, lang, 'tts/tts.mp3');

                        setTimeout(function () {
                            abrir(`./tts/tts.mp3`);
                        }, delayTTSFalar);
                    }, delayTTSBaixar);
                });
            });
            setTimeout(function () {ttsn = false;},delayTTSFinal);
            }
        }
    //}
}
    //Audios alternativos//
    if (audio == true && message == 'sparta')  { audio = false; abrir('./Audios/sparta.mp3');       console.log('🔊');     setTimeout(function () { audio = true }, delay); }
    if (audio == true && message == 'wee')     { audio = false; abrir('./Audios/wee.wav');          console.log('🔊');     setTimeout(function () { audio = true }, delay); }
    //Saldações//
    if (message.toLowerCase() === "boa\ tarde" || message.toLowerCase() === "bom\ dia" || message.toLowerCase() === "boa\ noite" && ttsn == false) {
        ttsn = true;

        fs.readFile('txt/tts.txt', 'utf-8', function (err, dados) {
            if (err) { throw err }
            var ttss = parseInt(dados) + 1;
            fs.writeFile('txt/tts.txt', ttss.toString(), 'utf8', (err) => {
                fs.unlink("txt/tts.mp3", function (err) { });
                if (err) { throw err }
                var text = message + tags["display-name"];
                var lang = "it";
                console.log("🔊");

                setTimeout(function () {
                    const data = `https://translate.google.com/translate_tts?ie=UTF-8&q=${text.replace(/( )/ig, "%20").replace(/(\n)/ig, "%0A")}&tl=${lang}&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1`;
                    GoogleTts.saveFile(text, lang, 'tts/tts.mp3');

                    setTimeout(function () {
                        abrir(`txt/tts.mp3`);
                        ttsn = false;
                    }, delayTTSFalar);
                }, delayTTSBaixar);
            });
        });
        setTimeout(function () {ttsn = false;},delayTTSFinal);
    }
    //}
});
export {audio, ttsn}