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
  assert.equal(res,4)

  // Sollte 4 Wörter zählen.
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

if (currentElement === ' '){
count = count + 1 

}
  }
  count = count + 1
  return count
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


export function aufgabe07(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'U') {
      if (input[i+1] === 'n') {
        if (input[i+2] === 'd') {
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
}
result.push(currentElement)
  }
return result.join("")

}

export function aufgabe16 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (currentElement === $)


  return result.join("")
}
}




export function aufgabe18 (args) {
  const input = args
  const result = []
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
}

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
  
}
  return result.join("")
}



export function aufgabe22 (args) {
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
}
  if (currentElement !== 'k') {
    return true 
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



