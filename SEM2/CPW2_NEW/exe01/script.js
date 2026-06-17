let areaTexto = document.getElementById("areaTexto");

function mostrar() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let telefone = document.getElementById("telefone").value.toString();
  let endereco = document.getElementById("endereco").value;
  let data = document.getElementById("data").value;
  let idade = document.getElementById("idade").value;


  if (nome == "" || sobrenome == "" || email == "" || cpf == "" || telefone == "" || endereco == "" || data == "" || idade == "") {
    return areaTexto.innerHTML = "[Erro]: Dado(s) Inválido(s)!";
  }


  //Nome
  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();

  //CPF
  cpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);

  //Telefone
  telefone = "(" + telefone.slice(0, 2) + ")" + telefone.slice(2, 7) + "-" + telefone.slice(7, 11);

  //Data de Nascimento
  dataPartes = data.split("-");
  data = dataPartes[2] + "/" + dataPartes[1] + "/" + dataPartes[0];

  //Email
  let emailTrue = email.includes("@");
  if (!emailTrue) {
    return areaTexto.innerHTML = "[Erro]: E-mail Inválido";
  }


  areaTexto.innerHTML = `Nome: ${nome}<br>            
  Sobrenome: ${sobrenome}<br>
  E-mail: ${email}<br>
  CPF: ${cpf}<br>
  Endereço: ${endereco}<br>
  Data de Nascimento: ${data}<br>
  Idade: ${idade}`;

}