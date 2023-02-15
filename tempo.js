
        var dt = new Date();
        var mes = dt.toString().substring(4,7)
        var dia = parseInt(dt.toString().substring(8,10));
        var hora = parseInt(dt.toString().substring(16, 18));
        var minuto = dt.toString().substring(19,21);
        var segundo = dt.toString().substring(22,24);
        var minutos = parseInt(hora.toString().substring(0, 2) * 60);
        var segundos = parseInt(minuto * 60) + parseInt(segundo);

export {mes, dia, dt, hora, minuto, minutos, segundo, segundos}