//Seleciona elementos do documento HTML e os armazena em variáveis
const passInput = document.querySelector("#inputSenhaId");
const lenInput = document.querySelector("#inputComprimentoId");
const infoLength = document.querySelector('label[for="inputComprimentoId"]');
const btnGerar = document.querySelector("#btnGerar");

// Seleciona as caixas de seleção para caracteres
const chkLower = document.querySelector("#chkMinusculoId");
const chkUpper = document.querySelector("#chkMaiusculoId");
const chkNumber = document.querySelector("#chkNumeroId");
const chkSymbols = document.querySelector("#chkSimbolosId");

// Arrays com números e símbolos
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

// Gera arrays de letras minúsculas e maiúsculas 
const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

// Exibe o valor inicial do comprimento da senha 
infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

// Adiciona um listener ao botão de gerar senha
btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});
// Função para gerar a senha
const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [ // Cria um array combinando os tipos de caracteres selecionados
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

    // Gera a senha com o comprimento especificado
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};