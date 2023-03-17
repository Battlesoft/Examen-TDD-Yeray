export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('paramater provided must be a number')
  if (Number.isNaN(number)) throw new Error('paramater provided must be a number')

   if(number % 3 == 0 && number % 5 == 0) return 'fizzbuzz' // Si es multiplo de 3 y ademas multiplo de 5 saldra "fizzbuzz"
   if(number % 15 == 0) return 'fizzbuzz' // Si es multiplo de 15 saldra "fizzbuzz"
   if(number % 3 == 0) return 'Santana' // Si es multiplo de 3 saldra "Santana"
   if(number % 2 == 0) return 'Yeray' // Si es multiplo de 2 saldra "Yeray"
   if(number % 11 == 0) return 'Curbelo' // Si es multiplo de 11 saldra "Curbelo"
   if(number % 5 == 0) return 'buzz' // Si es multiplo de 5 saldrá "buzz"
  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object // Operacion entre el numero y la multiplicacion que deberia dar igual a 0
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}
