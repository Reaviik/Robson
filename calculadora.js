import {r0bsom} from './login.js'

r0bsom.on('message', (channel, tags, message, self) => {
    if (self) { return; }

    else {
        //Calculadora//
        if (message.startsWith('!c ')) {
            const numeros = message.slice(3)

            //Adição//
            if (message.includes('\+')) {
                const mais = numeros.replace(/(\+)/ig, "                     ");
                var tamanho1 = mais.length;
                var tamanho2 = mais.length / 2;
                var n1 = mais.substring(0, tamanho2);
                var n2 = mais.substring(tamanho2, tamanho1);
                var n3 = parseInt(n1);
                var n4 = parseInt(n2);
                r0bsom.say(channel, `Resultado: ${n3 + n4}`);
            }

            //Subtração//
            if (message.includes('\-')) {
                const menos = numeros.replace(/(\-)/ig, "                     ");
                var tamanho3 = menos.length;
                var tamanho4 = menos.length / 2;
                var n5 = menos.substring(0, tamanho4);
                var n6 = menos.substring(tamanho4, tamanho3);
                var n7 = parseInt(n5);
                var n8 = parseInt(n6);
                r0bsom.say(channel, `Resultado: ${n7 - n8}`);
            }

            //Multiplicação//
            if (message.includes('\*')) {
                const vezes = numeros.replace(/(\*)/ig, "                     ");
                var tamanho5 = vezes.length;
                var tamanho6 = vezes.length / 2;
                var n9 = vezes.substring(0, tamanho6);
                var n0 = vezes.substring(tamanho6, tamanho5);
                var n10 = parseInt(n9);
                var n11 = parseInt(n0);
                r0bsom.say(channel, `Resultado: ${n10 * n11}`);
            }

            //Divisão//
            if (message.includes('\/')) {
                const dividido = numeros.replace(/(\/)/ig, "                     ");
                var tamanho7 = dividido.length;
                var tamanho8 = dividido.length / 2;
                var n12 = dividido.substring(0, tamanho8);
                var n13 = dividido.substring(tamanho8, tamanho7);
                var n14 = parseInt(n12);
                var n15 = parseInt(n13);
                r0bsom.say(channel, `Resultado: ${n14 / n15}`);
            }

            //Raiz quadrada//
            if (message.includes('v')) {
                var raiz4 = numeros.replace(/(v)/ig, '');
                var n16 = parseInt(raiz4);
                var resultado = Math.sqrt(n16);
                var n17 = resultado.toString();
                if (n17.includes('\.')) {
                    r0bsom.say(channel, `${raiz4} não possui uma raiz exata: ${resultado}`);
                }
                else if (n17.includes('N')) {
                    r0bsom.say(channel, 'Parece que você digitou errado !c<espaço><v><numero inteiro>');
                }
                else if (!n17.includes('\.')) {
                    r0bsom.say(channel, `A raiz quadrada de ${raiz4} é: ${resultado}`);
                }
            }

            //Erro//
            if (!message.includes('\+') && !message.includes('\-') && !message.includes('\*') && !message.includes('\/') && !message.includes('v')) {
                r0bsom.say(channel, 'Parece que você digitou errado !c<espaço><n1><operador><n2>');
            }
            else {
                return;
            }
        }
    }
});