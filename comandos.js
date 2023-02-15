import { r0bsom } from "./login.js";
import fs from "fs";

var lurk = [];
var mensagem = '0';
var comandos = ["!cmd", "!-ad", "!c", "!cv", "!love", "!opa", "!ads", "!discord", "!pix", "!lurk", "!pack", "!bits", "!tts", "!ad", "!nuds", "!mortes", "!tts", "!audio", "!abcf", "!adm", "!bunito", "!banana", "!boanoite", "!bomdia", "!brabo", "!bonito", "!errou", "!morreu", "!loko", "!grilo", "!ha", "!hey", "!jhoncena", "!miau", "!mimimi", "!moises", "!nao", "!olt", "!pinga", "!pq", "!preguica", "!rsrs", "!bagunca", "!sumiu", "!surprise", "!titanic", "!treta", "!errado", "!vitas", "!wtf", "!cafe", "!café", "!sparta", "!wee", "null"];


//Comandos//
r0bsom.on('message', (channel, tags, msg, self) => {
    
    var message = msg.toLowerCase().toString();

    //Verifica se é o R0BSOM e se o delay ja acabou//
    if (self) {
        return;

        //Comandos sem ! //
    //} else if (!message.startsWith("!")) {
        //return;
        //Comandos com ! //
    } else {
        //Comando inexistente//
        //var i = 0;
        //while (i < comandos.length && comandos[i] != message && !message.startsWith("!tts")) {
            //i++
            //if (comandos[i] == "null") { try { r0bsom.say(channel, "Comando não encontrado. Utilize !audios ou !cmd para saber os comandos") } catch { return; } }
        //}
        //Comandos existentes//
        if (message == '!cmd') {
            try { r0bsom.say(channel, "Os comandos disponiveis até agora são: ►!Discord ►!Nuds ►!Pix ►!Lurk ►!Ad ►!tts('mensagem-falada')"); } catch (error) { return; }
        }
        //Discord//
        else if (message === '!discord') {
            try { r0bsom.say(channel, "Entre no Discord do Reavik \"Beta Nóve\" e participe de varios nadas \"DIARIOS!!!\" ¯\\_(ツ)_/¯ ✔ https://discord.com/invite/xtbrZfK"); } catch (error) { return; }
        
        //IP//
        }else if (message === '!ip') {
            try { r0bsom.say(channel, `Discord do servidor: https://discord.gg/JYDFR9Bwzr Link do Curse: https://www.curseforge.com/minecraft/modpacks/galaxy-mods IP do servidor: mods.galaxymc.com.br`); } catch (error) { return; }
        }
        //Pix//
        else if (message.startsWith('!pix')) {
            try { r0bsom.say(channel, `Winx, quando damos nossas mãos, nos tornamos poderosas... a é pix, não eu ainda não tenho`) } catch (error) { return; }
        }
        //Lurk//
        else if (message.toLowerCase() === '!lurk') {
            if (!lurk.toString().includes(tags.username)) {
                lurk.push(" " + tags.username);
                console.log(lurk);
                if (lurk.length <= 1) { r0bsom.say(channel, tags.username + " Esta agora em Lurk"); }
                if (lurk.length > 1) { r0bsom.say(channel, tags.username + "Esta agora em Lurk com " + lurk) }
                //UnLurk//
            } else { try { r0bsom.say(channel, "Você não esta mais em Lurk, bem vindo de volta " + tags.username); lurk.shift(tags.username) } catch (error) { return; } }
        }
        //Nuds//
        else if (message === "!nuds" || message === "!pack") {
            try {
                r0bsom.say(channel, `Só não mostra pra ninguem, viu e não conta que eu te mandei:
            >>https://imgur.com/7ona8yD.png 
            >>https://imgur.com/tk6ehwe.png 
            >>https://imgur.com/jA6WG63.png 
            >>https://imgur.com/f9ydFd8.png 
            >>https://imgur.com/wfP4i2L.png`);
            } catch (error) { return; }
        }
        //Bits//
        else if (message === '!bits') {
            try {
                r0bsom.say(channel, `Os Alertas de Bits atuais são: 
            🔊 0-10 -> Tiro
            🔊 11-15 -> Run
            🔊 21-25 -> Buzina
            🔊 26-30 -> FBI
            🔊 31-50 -> Susto
            🔊 51-75 -> CoinDrop
            🔊 76-100 -> Money
            🔊 101-150 -> Susto
            🔊 151+ -> Super Sayajin 3 Remix Video <-> (Beta)`)
            } catch (error) { return; }
        }
        //Quantidade de tts's//
        else if (message == ("!tts") && message.endsWith("!tts")) {
            try {
                fs.readFile('txt/tts.txt', 'utf-8', function (err, dados) {
                    if (err) { return }
                    r0bsom.say(channel, `Eu já tive que abrir o bico ${dados} vezes.`);
                });
            } catch (error) { return; }
        }
    }
});


export { mensagem }
export { comandos }