export default function listGifts(letter) {
    //usamos trim() para eliminar espacios en blanco al inicio y al final del string de juguetes.
    //usamos replace(/\s+/g, ' ') para sustituir 1 o varios espacios seguidos, por un único espacio.
    //mediante split(' ') convertimos el string a un array, tomando como separación un espacio en blanco.
    //con filter(regalo => !regalo.startsWith("_")) eliminamos cualquier regalo tachado (comienza por "_")
    let arrayCarta = letter.trim().replace(/\s+/g, ' ').split(' ').filter(regalo => !regalo.startsWith("_"));
    //console.log(arrayCarta);

    let regalos = {};
    //Si un juguete no existía en el objeto "regalos", se cuenta como la primera vez que aparece(1).
    //Si el juguete ya existía, incrementa el contador de veces que ha aparecido (regalos[element]++).
    arrayCarta.forEach(element => {
        (regalos[element] !== undefined) ? regalos[element]++ : regalos[element] = 1;
    });
    //console.log(regalos);
    return regalos;

}

//const carta = 'bici coche balón _playstation bici coche peluche';
const carta = '       bici        coche               balón     _playstation bici coche     peluche     ';
const regalos = listGifts(carta);
