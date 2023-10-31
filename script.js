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



