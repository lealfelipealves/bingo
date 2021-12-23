const inputNumero = document.querySelector("#inputNumero");
const btnAdicionar = document.querySelector("#btnAdicionar");
const btnZerar = document.querySelector("#btnZerar");

inputNumero.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnAdicionar").click();
  }
});

inputNumero.addEventListener("keyup", function(event) {
  if (event.keyCode === 27) {
      event.preventDefault();
      document.getElementById("btnZerar").click();
  }
});

btnAdicionar.onclick = function () {
  const numero = inputNumero.value;  
  const elemento = document.getElementById(`n${numero}`);
  elemento.classList.add("active");
  inputNumero.value = ''
  inputNumero.focus();
};

btnZerar.onclick = function () {
  const elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
}



function ligaActive(obj) {
  document.getElementById(`${obj.id}`).classList.add("active");
}

const onClick = (event) => {
  if (event.target.nodeName === '#n1') {
    console.log(event.target.id);
  }
}
window.addEventListener('click', onClick);

document.querySelectorAll(".numero").onclick = function () {
  [].forEach.call(numeros, function(el) {
    el.classList.add("active");
  });
}