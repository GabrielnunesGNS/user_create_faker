import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    idade: faker.number.int({ min: 1, max: 110 }),
    cidade: faker.location.country(),
    estado: faker.location.state(),
    dataCadastro: faker.date.birthdate({ mode: 'year', min: 1990, max: 2026 }).toLocaleDateString('pt-BR'),
    numeroCompras: faker.number.int({ min: 1, max: 1000 }),
    valorTotal: faker.commerce.price({ min: 10, max: 10000 })
  };
}

function gerarUsuariosSequenciais(quantidade) {
  if (!quantidade || quantidade <= 0) return alert('Quantidade deve ser maior que 0');

  const usuarios = faker.helpers.multiple(createRandomUser, {
    count: quantidade,
  });

  return usuarios.map((usuario, index) => ({
    id: index + 1,
    ...usuario
  }));
}

function gerarUsuariosAleatoriosUnicos(quantidade) {
  if (!quantidade || quantidade <= 0) return alert('Quantidade deve ser maior que 0');

  const idsDisponiveis = Array.from({ length: quantidade }, (_, index) => index + 1);

  const idsEmbaralhados = faker.helpers.shuffle(idsDisponiveis);

  const usuarios = faker.helpers.multiple(createRandomUser, {
    count: quantidade,
  });

  return usuarios.map((usuario, index) => ({
    id: idsEmbaralhados[index],
    ...usuario
  }));
}


export { gerarUsuariosAleatoriosUnicos,gerarUsuariosSequenciais}