import { r0bsom } from "./login.js";
import open from "open";

var abrir = open;

//Sub//
r0bsom.on('subscription', (channel, username, method, message, userstate) => {
    console.log("subscription", {channel, username, method, message, userstate});
    r0bsom.say(channel, `Obrigado por se subscrever no canal ${username}, ajudando essa bagunça. `);
    abrir('./audios/subSong.m4a');

});

//ReSub//
r0bsom.on('resub', (channel, username, _months, message, userstate, methods) =>{
    console.log("resub", {channel, username, _months, message, userstate, methods});
    //total de meses//
    let streakMonths = userstate["msg-param-streak-months"];
    //total de meses comultativos//
    let comulativeMonths = userstate["msg-param-cumulative-months"];
    //?? é comultativo ??//
    let sharedStreak = userstate["msg-param-should-share-streak"];

    //Não Comultativo//
    if(sharedStreak){
        r0bsom.say(channel, `Obrigado pelo Resub ${username} somando ${streakMonths} contribuindo com essa bagunça`);

    //Comultativo//
    }else{
        r0bsom.say(channel, `Obrigado pelo Resub ${username} somando ${comulativeMonths} consecutivos contribuindo com essa bagunça`)
    }
});