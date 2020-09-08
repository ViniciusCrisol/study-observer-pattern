const createCore = require('./core');

const mock = { start: () => {}, stop: () => {} };

const core = createCore({
  database: mock,
  webserver: mock,
});

function testarImportação(core) {
  console.log('A importação deve possuir o método start e stop');

  if (!core.start || !core.stop) {
    console.log('Falhou!');
    return;
  }

  console.log('Passou!');
}

function testarErrosDeExecucao(core) {
  console.log('O core não deve retornar erros');

  try {
    core.start();
    console.log('Passou!');
  } catch (err) {
    console.log(err);
    console.log('Falhou!');
  }
}

testarImportação(core);
testarErrosDeExecucao(core);
