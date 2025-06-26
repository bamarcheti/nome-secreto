let amigos = [];

function normalizarNome(nome) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if (amigo.value == "" || amigo.value.length < 2) {
    alert("Insira o nome do amigo.");
    return;
  }

  const nomeNormalizado = normalizarNome(amigo.value.trim());
  const nomeRepetido = amigos.some(
    (amigo) => normalizarNome(amigo) === nomeNormalizado
  );

  if (nomeRepetido) {
    alert("Nome já adicionado! Digite outro.");
    return;
  }

  let lista = document.getElementById("lista-amigos");
  amigos.push(amigo.value);

  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent += ", " + amigo.value;
  }
  amigo.value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos quatro amigos!");
    return;
  }

  embaralha(amigos);

  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];

  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
