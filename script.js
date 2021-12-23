let botao = document.querySelector("#zerar");
let tabela = document.querySelector(".tabela");

botao.onclick = function {
  let i = 0;

  while (i < 5) {
    tabela.innerHTML = "teste  ";
    i++;
    let j = 0;
  
    while (j < 5) {
      tabela.innerHTML = "teste  ";
      j++;
    }
    tabela.innerHTML = "<br>";
  }

};

