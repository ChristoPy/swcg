const generate = require('../../src/generator')

test('[GENERATOR] blocks invalid instruction names', () => {
  expect(() => {
    generate({ $pizza: { name: 'deliciousPizza', value: 'yum' } })
  }).toThrow("Instruction '$pizza' is not supported.")
});

test('[GENERATOR] blocks reserved names', () => {
  expect(() => {
    generate({ $constant: { name: 'if', value: '123' } })
  }).toThrow("Cannot use 'if' since its a reserved word.")
});
