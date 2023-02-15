
import open from "open";
import { r0bsom } from './login.js';

var abrir = open;
var msg = "";

r0bsom.on('redeem', async (channel, username, rewardType, tags) => {

    //Não Vai Dá//
    if (rewardType == '322f1a23-166f-4355-9a74-13a73f1e1c55') {
        try { abrir('./Audios/vaida.mp3'); } catch (error) { return; }
    }
    // Risada de Bandido//
    if (rewardType == 'f8fb9e42-9cf0-4bc5-9ad2-ef67dd927d7f') {
        try { abrir('./Audios/rir.wav'); } catch (error) { return; }

    }
    //Risada DU//
    if (rewardType == '527e1067-75d6-4247-b29c-0b78a6b1ab91') {
        try { abrir('./videos/du.mp4'); } catch (error) { return; }

    }
    //Banir ação no Jogo//
    if (rewardType == '0233812b-d9f2-440c-afb9-858162d55965') {
        try {
            abrir('./Audios/block.mp3');
            r0bsom.say(channel, "Proibiu o Reavik de " + msg);
            //Colocar um son de bloqueio aqui//
            setTimeout(() => { abrir('./Audios/unblock.mp3'); r0bsom.say(channel, "Esta livre já Reavik, pode voltar a fazer a ação banida") /*Colocar um son de Desbloqueio aqui*/}, 600000);
        } catch (error) { return; }
    }
    //Vip//
    if (rewardType == 'dbb9a436-95bb-4cd1-9db4-647fc5a0f7de') {
        try {
            await r0bsom.say(channel, "/vip " + tags.username);
            //Colocar um son de magia aqui//
            r0bsom.say(channel, `Parabéns ${tags.username}, agora você tambem é VIP do canal e pode aproveitar seu distintivo (em breve mais beneficios)`);
        } catch (error) { return; }

    }
});