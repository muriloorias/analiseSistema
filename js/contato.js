

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome && email && assunto && mensagem) {
    window.location.href = "../pages/home.html";
    alert("enviado com sucesso em breve entraremos em contato")
  }
});

function returntoHome(){
    window.location.href='../pages/home.html'
}