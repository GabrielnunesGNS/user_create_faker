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

  // Gera os usuários usando o helper do Faker
  const usuarios = faker.helpers.multiple(createRandomUser, {
    count: quantidade,
  });

  // Mapeia o array adicionando um ID sequencial único para cada um (1, 2, 3...)
  return usuarios.map((usuario, index) => ({
    id: index + 1,
    ...usuario
  }));
}

  function gerarUsuariosAleatoriosUnicos(quantidade) {
  if (!quantidade || quantidade <= 0) return alert('Quantidade deve ser maior que 0');

  // 1. Cria um array de IDs únicos sequenciais (ex: de 1 até a quantidade solicitada)
  const idsDisponiveis = Array.from({ length: quantidade }, (_, index) => index + 1);

  // 2. Embaralha esses IDs de forma totalmente aleatória
  const idsEmbaralhados = faker.helpers.shuffle(idsDisponiveis);

  // 3. Gera os usuários
  const usuarios = faker.helpers.multiple(createRandomUser, {
    count: quantidade,
  });

  // 4. Atribui um ID aleatório único para cada usuário do lote
  return usuarios.map((usuario, index) => ({
    id: idsEmbaralhados[index],
    ...usuario
  }));
}


export default { gerarUsuariosAleatoriosUnicos,gerarUsuariosSequenciais}