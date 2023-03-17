import { expect } from 'chai'
import { describe, it } from 'vitest'



const distributegitysc = (packofGits, reindeers) => {
    if (typeof tiporegalo !== 'string') throw new Error('debe ser un string')
    if (typeof nombrerenos !== 'string') throw new Error('debe ser un string')  
    const renopesodoble = reindeers.length / 4 //  4 veces según la longitud del nombre del reno.
    const regalospeso = packsofGifts.length // el peso del regalo seria el pack de los regalos
    return Math.floor(renopesodoble / regalospeso) // El calculo entre  el peso de los renos y el peso de los regalos

    }

    describe('distributegitysc', () => {
    it('debería ser una funcion', () => {
        expect(typeof distributegitysc).toBe('function')
    })
    it('primer paramentro deberia ser un string', () => {
        expect(() => distributegitysc(2).toThrow())
    })
    it('segundo paramentro deberia ser un string', () => {
        expect(() => distributegitysc('a').toThrow())
    })
    it('debe darnos el numero de cajas de regalos que se pueden transportar', () => {
        expect(distributegitysc('bola', 'pepito').toBe('2'))
  })
    
})