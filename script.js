export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

// Ist das Zeichen ein e, so hänge nichts weiter an.
if (currentElement === 'e') {
  result.push("") 
  // Ist das Zeichen ein E, so hänge nichts weiter an. 
} else if  ( currentElement === 'E') {
    result.push("")
  }else { //Das Zeichen soll weder ein e noch ein E sein.
  result.push(currentElement) 
}
  }
  return result.join ("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

// Wandle das aktuelle Element in einen Grossbuchstaben um
const capitalizedElement = currentElement.toUpperCase()

//Hänge den Grossbuchstaben an das Resultat an..
result.push(capitalizedElement)

  }
  return result.join("")
}




export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  //Es sollte nur ein e enthalten. 
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

if (currentElement === 'e' ) {
  
  count = count + 1 

  // Sollte "E"s zählen
}
else if (currentElement === 'E'){
count = count + 1
}
  }
  return count
}

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0
  let isWord = false
 
  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    const isAlphanumeric = /[a-zA-Z0-9äöüÄÖÜß]/.test(currentChar); // Überprüfe, ob das Zeichen alphanumerisch ist
 
    if (isAlphanumeric && !isWord) {
      isWord = true;
      count++;
    } else if (!isAlphanumeric && isWord && currentChar !== '-') {
      isWord = false;
    }
  }
  return count;
}
 


export function aufgabe05(args) {
  const input = args
  const result = []
let capitalLetters = 0

//Enthaltet keine Grossbuchstaben 
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]


if (currentElement === ".") {
  //Macht nichts
}else if (currentElement === " "){
  //Ignoriere Leerschläge

}else if (currentElement !== currentElement.toLowerCase()) {
  capitalLetters++
}
  }

if (capitalLetters > 0) {
  return true
}else {
  return false 
}



  return true
}


export function aufgabe06(args) {
  const input = args; //Diese Aufgabe soll testen, ob in der Eingabe ein Sonderzeichen vorkommt.

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i] ;
  const ascii = currentElement.charCodeAt(0)

  if (65 <= ascii && ascii <= 90) {
    //Prüft, ob es sich hier um einen Grossbuchstaben handelt.
  } else if (97 <= ascii && ascii <=122) {
    //Prüft, ob es sich hier um einen Kleinbuchstaben handelt.
  } else if (currentElement === ' ') {
  }else {
    return true
  }
}
return false
}


export function aufgabe07 (args) {
  const input = args
  const result = []
 
  for (let i=0; i < input.length; i++) {
    const currentElement = input [i]
  if (currentElement === "u") {
    if (input[i+1] === "n") {
      if (input[i+2] === "d") {
        // wenn der Code bis hier kommt, sind die Zeichen u,n,d hintereinander
      return true
      }
    }
  }
  }
return false
}



export function aufgabe08 (args) {
  const input = args
  const result = []


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     if (currentElement === 'e') {
      //ersetzt "e" mit "3"
  result.push('3')
  }else{
    result.push(currentElement)
  }
  }
  return result.join("")
}



 export function aufgabe09 (args) {
  const input = args
  let len = 0 
  for (let i = 0; i < input.length; i++) {
    len++
    
  } 
if (len === 6) {
  //prüft ob die Eingabe 6 Zeichen lang ist
  return true 
}else {
  return false 
}
}






export function aufgabe10(args) {
  const input = args;
  
  if (input.length !== 7) {
  return false;
  }
  
  if (input[0] !== "#") {
  return false;
  }
  
  for (let i = 1; i < input.length; i++) {
  const currentElement = input[i];
  const ascii = currentElement.charCodeAt(0);
  
  if (48 <= ascii && ascii <= 57) {
  // mache nichts: ist eine Zahl
  } else if (65 <= ascii && ascii <= 70) {
  // mache nichts: ist A-F
  } else {
  return false;
  }
  }
  
  return true;
  }






export function aufgabe11 (args) {
  const input = args
  const result = []
  let ascii = null

  if (input.length >1) {  //Funktionswächter
    return null
  }


for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  ascii = currentElement.charCodeAt(0)
  return ascii
}
//Soll null zurückgeben
  return null
}

export function aufgabe12 (args) {
  const input = args
  const result = []
  
let pos = -1
//Position des ersten "e" suchen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    pos = pos + 1 
    if( currentElement ==='e') {
    return pos
  }
  }


  return -1
}



export function aufgabe13 (args) {
  const input = args
  const result = []
  
let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement ==='e') {
    pos = i
  //Sucht die Position des letzten "e"s
  }
  }
  return pos
}


export function aufgabe14 (args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {// erkennt e
      count = count + 1
      if (count === 3){
        //Position des dritten "e"s suchen
        return i
      }
    }
  }
return -1
}




export function aufgabe15 (args) {
  const input = args
  const result = []
 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  
if (currentElement === " ") {
  return result.join("")
  //bricht nach dem ersten " " ab.
}
result.push(currentElement)
  }
return result.join("")

}

export function aufgabe16(args) {
  const input = args
  const result = []
 
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];
    if (currentElement === '$'){  //sobald ein $ kommt, wird die Liste unterbrochen.
      break;
    }
    result.push(currentElement); // das currentElement wird dem result hinzugefügt.
}
return result.join('')//das result wird zurückgegeben.
}
 



export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')
 
 
  for (let i = 0; i < result.length - 1; i++) {
    for (let i = 0; i < result.length - 1 - i; i++) {
      if (result[i] > result[i + 1]) {
  [result[i], result[i + 1]] = [result[i + 1], result[i]]
      }
    }
  }
 
  return result.join(',')
}


export function  aufgabe18 (args) {
  const input = args
  const result = []
  let ausgabe = []
 
  let parts = input.split(" ")
 
if (parts.length === 2) {
  let name = parts[0].trim()
  let age = parts[1].trim()
ausgabe = "Sie heissen " + name +
" und sind " + age + " Jahre alt"
}
else ausgabe = "Sie heissen " + input +
" und sind Jahre alt"
 
return ausgabe
}
 
 

export function aufgabe19 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //zu dem Element wird das gleiche Element nochmals angesetzt.
    result.push(currentElement + currentElement )
  }
 
  return result.join("")
}





export function aufgabe20 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  if (currentElement === '.' )  
  //Prüfen ob nach jedem Punkt ein Leerzeichen kommt.
  if (input [i+1] === ' ') {
    return true
  }
    
  }

return false


}




export function aufgabe21 (args) {
  const input = args
  const result = []

for (let i = input.length -1; i>=0; i--) {
  const currentElement = input[i]
  result.push(currentElement)//kehrt die Eingabe um.
  
}
  return result.join("")
}

export function aufgabe22 (args) {

  const input = args
  const result = []
  let firstPart = true
   
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (firstPart === true) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
   
   
    if (currentElement === 'k') {
      firstPart = false
    }
   
  }
  return result.join("")
  }

export function aufgabe23(args) {
  const input = args;
  const result = [];

  if (input.length === 0) {
    return ''; // Gibt leer zurück.
  }

  const firstChar = input.charAt(0);

  result.push(firstChar); // Hängt erstes Zeichen am Anfang der Ausgabe an.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    result.push(currentElement);
  }

  result.push(firstChar); // Hängt erstes Zeichen am Schluss der Ausgabe an. 

  return result.join('');
}


export function aufgabe24 (args) {
  const input = args
  const result = []
 
  if (input.length === 1) return input
  const firstElem=input[0]
  const lastElem=input[input.length-1]
 
  result.push(lastElem)
  for (let i = 1; i < input.length -1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
 
result.push(firstElem)
  return result.join("")
}




export function aufgabe25 (args) {
  const input = args
  const result = []

  if (input.length % 2 === 0) {
  //Prüft ob Input.length gerade ist.

// Brauchen -1 um auf Position zu kommen, weil wir bei 0 zu zählenn anfangen. 
const pos = input.length / 2 - 1 

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (i === pos || i === pos + 1){
    //macht nichts.
  }else {
    result.push(currentElement)
}
}


} else {
  //Input.length ist ungerade

  const pos = Math.floor (input.length / 2 )
//Das mittlere Zeichen soll gelöscht werden
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (i === pos){
//macht nichts
}else {
  result.push(currentElement)
}
}
}
  return result.join("")
}



export function aufgabe26 (args) {
   
  const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = 0 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return (result)

}



export function aufgabe27 (args) {
  const input = args
  const result = []
  //falls es keine Eingabe hat, wird es direkt zurückgegeben.
  if (input.length===0){return false}
  for (let i = 0; i < input.length; i++) {
   
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57){
 
  }
else  return false
}
return true
}


export function  aufgabe28 (args) {
  const input = args
  const zahlen = input.split(' ')
 
  if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
    const zahl1 = parseFloat(zahlen[0]);
    const zahl2 = parseFloat(zahlen[1]);
   
    const summe = zahl1 + zahl2;
    return `${summe}`;
} else {
    return null;
}
}



export function bubbleSort (args) {
  
  const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.

      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }


  }
  const result = list.join("")
  return result 
}

