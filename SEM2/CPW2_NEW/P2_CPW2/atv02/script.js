let areaTexto = document.getElementById("areaTexto");

function mostrar() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let telefone = document.getElementById("telefone").value.toString();
  let endereco = document.getElementById("endereco").value;
  let idade = document.getElementById("idade").value;

  if (nome == "" || sobrenome == "" || email == "" || cpf == "" || telefone == "" || endereco == "" || idade == "") {
    return areaTexto.innerHTML = "[Erro]: Dado(s) Inválido(s)!";
  }

  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();

  cpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);

  telefone = "(" + telefone.slice(0, 2) + ")" + telefone.slice(2, 7) + "-" + telefone.slice(7, 11);

  let emailTrue = email.includes("@");
  if (!emailTrue) {
    return areaTexto.innerHTML = "[Erro]: E-mail Inválido";
  }

  areaTexto.innerHTML = `Nome: ${nome}<br>            
      Sobrenome: ${sobrenome}<br>
      E-mail: ${email}<br>
      CPF: ${cpf}<br>
      Endereço: ${endereco}<br>
      Idade: ${idade}`;
}