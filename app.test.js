// app.test.js — Nuestros tests con Jest

const { sumar } = require('./app');

// "describe" agrupa tests relacionados bajo un nombre
describe('Función sumar', () => {

  // Cada "test" verifica un comportamiento específico
  test('debe sumar 2 + 3 y retornar 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('debe sumar números negativos correctamente', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

  test('debe retornar 0 cuando se suman 0 + 0', () => {
    expect(sumar(0, 0)).toBe(0);
  });

});