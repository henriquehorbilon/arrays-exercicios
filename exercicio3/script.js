const arrayOriginal1 = [21,15,50,2031,2025]
const arrayOriginal2 = ['olá','casa','cachorro','amor']
const arrayOriginal3 = [2054,33,'prédio','Pedro',true,false]

const arrayOriginal1Copia = arrayOriginal1.slice()
const arrayOriginal2Copia = arrayOriginal2.slice()
const arrayOriginal3Copia = arrayOriginal3.slice()

//a)
const adiciona1 = arrayOriginal1Copia.unshift(669)
console.log('Original:',arrayOriginal1)
console.log('Copia:',arrayOriginal1Copia)

//b)
const remove1 = arrayOriginal2Copia.pop()
console.log('Original:',arrayOriginal2)
console.log('Copia:',arrayOriginal2Copia)

//c)
const remove2 = arrayOriginal3Copia.splice(1,1)
console.log('Original:',arrayOriginal3)
console.log('Copia:',arrayOriginal3Copia)