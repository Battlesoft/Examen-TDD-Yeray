import { describe,expect,it } from "vitest";
import { canConfigure } from "./fizzbuzz";


describe('fizzbuzz', () => {


    it('should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow('paramater provided must be a number')
    })

    it('should throw a specific error message not a number is provided', () => {
        expect(() => fizzbuzz(NaN)).toThrow('paramater provided must be a number')
    })

    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 if number provided is 2', () => { // Si es multiplo de 2 saldra "Yeray"
        expect(fizzbuzz(2)).toBe("Yeray")
    })

    it('should return "Santana" if number provided is 3', () => { // Si es multiplo de 3 saldra "Santana"
        expect(fizzbuzz(3)).toBe('Santana')
    })

    it('should return "Santana" if number provided is 11', () => { // Si es multiplo de 11 saldra "Curbelo"
        expect(fizzbuzz(11)).toBe('Curbelo')
    })

    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })


    it('should return buzz if number provided is multiple of 5',()=>{
        expect(fizzbuzz(5)).toBe('buzz')
    })
    it('should return buzz if number provided is multiple of 5',()=>{
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
    })
    it('should return fizzbuzz if number provided is multiple of 3 and 5',()=>{
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })

})