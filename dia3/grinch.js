export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  const regExp = /\(([^)]+)\)/g; //expresión regular que permite cualquier caracter entre paréntesis menos un ')'
  if (letter.includes("()") || letter.includes("{") || letter.includes("[")) //No permite ni "()", ni un "{" ni un "[" 
    return false;
  else if (regExp.test(letter))
    return true;
  else
    return false;
}


//cierta
const carta = "bici coche (balón) bici coche peluche";
//cierta
//const carta = "(muñeca) consola bici"; 

//falsa
//const carta = "bici coche (balón bici coche";
//falsa
//const carta = "peluche (bici [coche) bici coche balón";
//falsa
//const carta = "(peluche {) bici";
//falsa
//const carta = "() bici";
//falsa 
//const carta = ")bici( casa play";
console.log(isValid(carta));