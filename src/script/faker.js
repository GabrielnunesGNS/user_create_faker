// ESM
import { faker } from '@faker-js/faker';
// CJS
// const { faker } = require('./@faker-js/faker');

export function createRandomUser() {
  return {
    id:faker.number.int({ min: 1, max: 9999999 }),
    nome: faker.person.fullName(),
    email:faker.internet.email(),
    idade:faker.number.int({ min: 1, max: 110 }),
    cidade:faker.location.country(),
    estado:faker.location.state(),
    dataCadastro:faker.date.birthdate({mode:'year',min:1990,max:2026}).toLocaleDateString('pt-BR'),
    numeroCompras:faker.number.int({min:1,max:1000}),
    valorTotal:faker.commerce.price({min:10,max:10000})
  };
}

export default function gerarUsuarios(quantidade){
  if(!quantidade) return alert('quantidade deve ser maior 0')

  return faker.helpers.multiple(createRandomUser, {
  count: quantidade,
});
}
