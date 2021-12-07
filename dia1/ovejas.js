const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
];

export default function contarOvejas(ovejas) {
    const ovejasRojas = ovejas.filter(oveja => oveja.color === "rojo" && oveja.name.match(/na/ig));
    return ovejasRojas;
}

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);