export default function listGifts(letter) {
    // ¡Tú puedes!

    let cartaSinTachados = letter.replace(/\s+_[a-z]+/g, '');
    console.log(cartaSinTachados);
    //let cartaSoloUnEspacio = cartaSinTachados.replace(/\s+/g, ' ');
    //console.log(cartaSoloUnEspacio);

    let arrayCarta = cartaSinTachados.split(' ');
    console.log(arrayCarta);
    let regalos = {};
    arrayCarta.forEach(element => {
        (regalos[element] !== undefined) ? regalos[element]++ : regalos[element] = 1;
    });
}

const carta = 'bici coche balón _playstation bici coche peluche';
const regalos = listGifts(carta);
