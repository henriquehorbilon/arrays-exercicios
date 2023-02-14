const array1 = [21,15,50,2031,2025]
const array2 = ['olá','casa','cachorro','amor']
const array3 = [2054,33,'prédio','Pedro',true,false]

// a)

console.log(`Quantidade de itens:`,array1.length)
console.log(`Quantidade de itens:`,array2.length)
console.log(`Quantidade de itens:`,array3.length)

// b)
console.log(`Primeiro item:`,array1[0])
console.log(`Segundo item:`,array2[1])
console.log(`Terceiro item:`,array3[2])

// c)
const verificaItem = array1.includes(15)
console.log('Existe o item?',verificaItem)

const verificaItem2 = array3.includes('gato')
console.log('Existe o item?',verificaItem2)