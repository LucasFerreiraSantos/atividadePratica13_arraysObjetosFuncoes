const listaCarros = []

// 1 - Cadastrar veículo
function create(){
  let idVeiculo = 1
  do{
    const modelo = prompt('Qual o modelo do veículo?')
    const marca = prompt('Qual a marca do veículo?')
    const ano = Number(prompt('Qual o ano do veículo?'))
    const cor = prompt('Qual a cor do veículo?')
    const preco = parseFloat(prompt('Qual o preço do veículo?')).toFixed(2)
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
}

// 2 - Listar todos os veículos
function listarVeiculos(){
  listaCarros.filter(veiculo => {
    console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}.`)
  })
}

// 3 - Filtrar veículos por marca
function filtrarCarrosMarca(){
  const escolhaMarca = prompt('Qual a marca que você deseja filtrar?')
  const veiculosFiltrados = listaCarros.filter(carro => carro.marca.includes(escolhaMarca))
  veiculosFiltrados.forEach(veiculo => {
    console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}.`)
  })
}

// 4 - Atualizar veículo
function atualizarVeiculo(){
  const idVeiculoAtualizar = Number(prompt('Qual o ID do veículo que deseja atualizar?'))
  const index = listaCarros.findIndex(veiculo => veiculo.id === idVeiculoAtualizar);
    if (index !== -1) {
      const novaCor = prompt('Qual a nova cor?')
      const novoPreco = prompt('Qual o novo preço?')
      listaCarros[index].cor = novaCor
      listaCarros[index].preco = novoPreco
      console.log('Veiculo atualizado com sucesso:', listarVeiculos())
    } else {
      console.log("Veículo, não encontrado. O usuário deve voltar para o menu inicial depois")
    }
}

// 5 - Remover veículo
function removerVeiculo(){
  const idVeiculoDeletar = Number(prompt('Qual o ID do veículo que deseja atualizar?'))
  idVeiculoDeletar -1
  const index = listaCarros.findIndex(veiculo => veiculo.id === idVeiculoDeletar);
    if (index !== -1) {
      listaCarros.splice(index, 1)
      console.log('Veiculo removido com sucesso:', listarVeiculos())
    } else {
      console.log("Veículo, não encontrado. O usuário deve voltar para o menu inicial depois")
    }
}

let sair = true

while(sair){
  const sistemaCRUD = prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem X carros cadastrados\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo;\n2 - Listar todos os veículos;\n3 - Filtrar veículos por marca;\n4 - Atualizar veículo;\n5 - Remover veículo;\n6 - Sair do sistema.`)

  switch(sistemaCRUD){
    case '1':
        create()
      break
    case '2':
        listarVeiculos()
      break
    case '3':
        filtrarCarrosMarca()
      break
    case '4':
        atualizarVeiculo()
      break
    case '5':
        removerVeiculo()
      break
    case '6':
      // 6 - Sair do sistema
      sair = false
      break
  }
}