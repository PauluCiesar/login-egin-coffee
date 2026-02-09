document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector('input[type="email"]');
  const senhaInput = document.querySelector('input[type="password"]');
  

  const EMAIL_VALIDO = "admin@gmail.com";
  const SENHA_VALIDA = "123456";

  form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit disparado");


    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    if (email === EMAIL_VALIDO && senha === SENHA_VALIDA) {
      window.location.href = "entrar.html"; 
    } else {
      alert("Usuário ou senha inválidos!");
    }
  });
});
