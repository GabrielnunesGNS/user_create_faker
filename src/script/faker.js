// ESM
import { faker } from '@faker-js/faker';
// CJS
// const { faker } = require('./@faker-js/faker');

export function createRandomUser() {
  return {
    id:faker.string.uuid(),
    nome: faker.internet.username(),
    email:faker.internet.email(),
    telefone:faker.phone.number({style:'international'}),
    pais: faker.location.country(),
  };
}

export default function gerarUsuarios(quantidade){
  if(!quantidade) return alert('quantidade deve ser maior 0')

  return faker.helpers.multiple(createRandomUser, {
  count: quantidade,
});
}
