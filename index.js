const listaCarros = []
let idVeiculo = 1

const sistemaCRUD = prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem X carros cadastrados\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo;\n2 - Listar todos os veículos;\n3 - Filtrar veículos por marca;\n4 - Atualizar veículo;\n5 - Remover veículo;\n6 - Sair do sistema.`)

  switch(sistemaCRUD){
    case '1':
        do{
          const modelo = prompt('Qual o modelo do veículo?')
          const marca = prompt('Qual a marca do veículo?')
          const ano = Number(prompt('Qual o ano do veículo?'))
          const cor = prompt('Qual a cor do veículo?')
          const preco = prompt('Qual o preço do veículo?')
          listaCarros.push({
            id: idVeiculo,
            modelo,
            marca,
            ano,
            cor,
            preco
          })
          idVeiculo++
        }while(confirm('Deseja cadastrar um novo veículo?'))
      break
  }


// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática