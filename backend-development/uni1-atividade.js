function construirUsuario(u_nome, u_email, u_senha, u_dataDeNascimento, u_logradouro, u_cidade, u_estado, u_telefone){
  return {
    nome: u_nome,
    email: u_email,
    senha: u_senha,
    dataDeNascimento: u_dataDeNascimento,
    logradouro: u_logradouro,
    cidade: u_cidade,
    estado: u_estado,
    telefone: u_telefone
  }
}

const user1 = construirUsuario('Nome do Usuário', 'email_do@usuario.com', 'senhaDoUsu4r10&', '01/01/1990', 'Rua dos Bobos, 0', 'Cidade sem Nome', 'Rio Grande do Sul', '45 91234-4321')

console.log(user1) 
/*
    {
    nome: 'Nome do Usuário',
    email: 'email_do@usuario.com',
    senha: 'senhaDoUsu4r10&',
    dataDeNascimento: '01/01/1990',
    logradouro: 'Rua dos Bobos, 0',
    cidade: 'Cidade sem Nome',
    estado: 'Rio Grande do Sul',
    telefone: '45 91234-4321'
    }

*/
