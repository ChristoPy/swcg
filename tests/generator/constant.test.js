const generate = require('../../src/generator')

test('[CONSTANT] blocks unsuported type', () => {
  expect(() => {
    generate({ $constant: { name: 'myUnsuported', value: {} } })
  }).toThrow("Received value '{}' has a unsuported type.")
});

test('[CONSTANT] generates correct string variable', () => {
  const expectedCode = 'const myString = "abc";'

  const generatedCode = generate({ $constant: { name: 'myString', value: 'abc' } })
  expect(generatedCode).toBe(expectedCode)
});

test('[CONSTANT] generates correct boolean variable', () => {
  const expectedCode = 'const myBoolean = false;'

  const generatedCode = generate({ $constant: { name: 'myBoolean', value: false } })
  expect(generatedCode).toBe(expectedCode)
});

test('[CONSTANT] generates correct number variable', () => {
  const expectedCode = 'const myNumber = 123;'

  const generatedCode = generate({ $constant: { name: 'myNumber', value: 123 } })
  expect(generatedCode).toBe(expectedCode)
});
