import { r0bsom } from './login.js';


//var comandos = ["café", "r0bsom", "@r0bsom", "robsom", "robson", "r0bson", "oi", "opa", "salve", "bom\ dia", "boa\ tarte", "eae", "bão", "chaguei", "isabela", "já\ volto", "já\ venho", "ja\ volto", "ja\ venho", "vou\ ali", "até\ mais", "flw", "vou\ comer"];


r0bsom.on('message', (channel, tags, msg, self) => {
    var message = msg.toLowerCase().toString();
    if (self || message.startsWith("!")) {
        return;
    } else {
        //Kappa//
        if (message.includes("kappa")) {
            try { r0bsom.say(channel, "( ͡° ͜ʖ ͡°)"); } catch (error) { return; }
        }

        //R0BSOM//
        else if (message.includes('@r0bsom') || message.includes("robsom") || message.includes("r0bsom") || message.includes("robson") || message.includes("r0bson")) {
            try {
                var random = Math.floor(Math.random() * 5 - 0);
                if (random == 0) { r0bsom.say(channel, "Me traga um café que eu te ajudo"); }
                if (random == 1) { r0bsom.say(channel, "Só falar, sou todo ouvidos, não que eu ouça alguma coisa mas se você digitar eu leio."); }
                if (random == 2) { r0bsom.say(channel, "Chamou patrão? tamo aqui"); }
                if (random == 3) { r0bsom.say(channel, "To aqui to aqui, tava..., oque era mesmo?"); }
                if (random == 4) { r0bsom.say(channel, "Oi " + tags["display-name"] + " meu nome é R0BSOM, noque eu posso ajudar?"); }
            } catch (error) { return; }
        }

        //Bom dia//
        else if (message === 'oi' || message === 'opa' || message.includes('salve') || message.includes('bom\ dia') || message.includes('boa\ tarde') || message === 'eae' || message === 'bão' || message === 'cheguei') {
            try {
                var random = Math.floor(Math.random() * 6 - 0);
                if (random == 0) { r0bsom.say(channel, "Oi " + tags["display-name"] + " faz tempo que eu nunca te vi por aqui, como você esta"); }
                if (random == 1) { r0bsom.say(channel, "Opa eae " + tags["display-name"] + " tudo bem comtigo, e as namoradinha?"); }
                if (random == 2) { r0bsom.say(channel, "Eae " + tags["display-name"] + " arasta uma cadeira e senta no chão"); }
                if (random == 3) { r0bsom.say(channel, "É bom te ver por aqui " + tags["display-name"] + " como foi seu dia?"); }
                if (random == 4) { r0bsom.say(channel, "Ola " + tags["display-name"] + " aceita um cafézinho?"); }
                if (random == 5) { r0bsom.say(channel, "Chegou quem eu tava esperando, seja bem vindo"); }
            } catch (error) { return; }
        }

        //Isabela//
        else if (message.includes('isabela')) {
            try {
                var random = Math.floor(Math.random() * 8 - 0);
                if (random == 0) { r0bsom.say(channel, 'Osh, quem é essa ai @Reavik ? essas coisas tu não me conta'); }
                if (random == 1) { r0bsom.say(channel, "Isabela é @Reavik ?"); }
                if (random == 2) { r0bsom.say(channel, tags["display-name"] + " nunca ouvi falar dessa tal de Isabela, ta me escondendo oque @Reavik"); }
                if (random == 3) { r0bsom.say(channel, tags["display-name"] + " conte mais sobre ela, sou curioso mesmo"); }
                if (random == 4) { r0bsom.say(channel, "mais uma @Reavik ?"); }
                if (random == 5) { r0bsom.say(channel, "Essa Isabela não era aquela que só te ignorava?"); }
                if (random == 6) { r0bsom.say(channel, "Definitivamente não conheço nenhuma Isabela"); }
                if (random == 7) { r0bsom.say(channel, "Me apresenta essa mulher " + tags["display-name"]); }
            } catch (error) { return; }
        }

        //Café//
        else if (message.includes('café')) {
            try {
                var random = Math.floor(Math.random() * 8 - 0);
                if (random == 0) { r0bsom.say(channel, 'Aceito um copinho de café, passa pra ca.'); }
                if (random == 1) { r0bsom.say(channel, "Café Hmmmmmmm."); }
                if (random == 2) { r0bsom.say(channel, tags["display-name"] + " Deixa eu provar esse ae."); }
                if (random == 3) { r0bsom.say(channel, tags["display-name"] + " Tambem quero."); }
                if (random == 4) { r0bsom.say(channel, "Quero caféeeeeeeeee"); }
                if (random == 5) { r0bsom.say(channel, "Nem me fale to na abestinencia já, me deem café."); }
                if (random == 6) { r0bsom.say(channel, "café, café, café, vocêis só pensão nisso? tambem quero um copo."); }
                if (random == 7) { r0bsom.say(channel, "é de que marca? " + tags["display-name"]); }
            } catch (error) { return; }
        }

        //Adeus//
        else if (message.includes('já\ volto') || message.includes('já\ venho') || message.includes('ja\ volto') || message.includes('ja\ venho') || message.includes('vou\ ali') || message.includes('até\ mais') || message.includes('flw') || message.includes('vou\ comer')) {
            try {
                var random = Math.floor(Math.random() * 9 - 0);
                if (random == 0) { r0bsom.say(channel, "Quando voltar traz um café pra nóis"); }
                if (random == 1) { r0bsom.say(channel, "Não demora muito, ainda quero meu café"); }
                if (random == 2) { r0bsom.say(channel, "Pera ae, pera ae, leva RS:2.00 e compra um café pra min"); }
                if (random == 3) { r0bsom.say(channel, "E o meu café, vai trazer quando?"); }
                if (random == 4) { r0bsom.say(channel, "Pronto, vai embora e eu vou ficar sem café, depois ainda me pede terrere"); }
                if (random == 5) { r0bsom.say(channel, "Vai pela sombra que o sol sempre foi quente, mas parece que ta mais perto da terra ultimamente, da men pra tomar café mais"); }
                if (random == 6) { r0bsom.say(channel, "leva um casaco que vai chover e na volta me traz um café"); }
                if (random == 7) { r0bsom.say(channel, "Se passar um cafézinho pra min antes de ir eu não reclamaria"); }
                if (random == 8) { r0bsom.say(channel, "Ta cedo são " + hora + ":" + minuto + " ainda da tempo de tomar um cafézinho"); }
            } catch (error) { return; }
        }
    }
});