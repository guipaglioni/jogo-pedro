/* =========================================================
   DADOS DOS PAINÉIS
   Para usar uma foto no Painel 1, adicione `img: "img/arquivo.png"`
   ao item — ela substitui o emoji.
   ========================================================= */

const PARES_GENERO = [
  { id: "igualdade", emoji: "⚖️", legenda: "Balança equilibrada", texto: "Igualdade de gênero: mulheres e homens com os mesmos direitos e oportunidades." },
  { id: "salario", emoji: "💸", legenda: "Salário menor", texto: "Desigualdade salarial: mulheres ainda recebem menos que homens na mesma função." },
  { id: "voto", emoji: "🗳️", legenda: "Urna de votação", texto: "Sufrágio feminino: direito das mulheres ao voto, conquistado no Brasil em 1932." },
  { id: "domestico", emoji: "🧺", legenda: "Tarefas de casa", texto: "Divisão do trabalho doméstico: tarefas de casa devem ser compartilhadas por todos." },
  { id: "violencia", emoji: "🙅‍♀️", legenda: "Basta de violência", texto: "Combate à violência contra a mulher: Lei Maria da Penha (2006)." },
  { id: "educacao", emoji: "👩‍🎓", legenda: "Mulher estudante", texto: "Acesso à educação: meninas e mulheres têm direito de estudar e se formar." },
  { id: "politica", emoji: "🏛️", legenda: "Congresso", texto: "Representatividade política: mais mulheres ocupando cargos públicos." }
];

const QUIZ_LGBT = [
  {
    pergunta: "O que significa a letra \"T\" na sigla LGBTQIA+?",
    alternativas: ["Tolerantes", "Transexuais, travestis e transgêneros", "Tradicionais", "Todos"],
    correta: 1,
    explicacao: "O T representa pessoas trans e travestis, cuja identidade de gênero é diferente do sexo atribuído ao nascer."
  },
  {
    pergunta: "O que significa a letra \"I\" na sigla?",
    alternativas: ["Intersexo", "Independentes", "Indefinidos", "Iguais"],
    correta: 0,
    explicacao: "Pessoas intersexo nascem com características sexuais que não se encaixam nas definições típicas de masculino ou feminino."
  },
  {
    pergunta: "Qual evento de 1969, em Nova York, é considerado o marco do movimento LGBTQIA+ moderno?",
    alternativas: ["Marcha de Selma", "Revolta de Stonewall", "Woodstock", "Queda do Muro de Berlim"],
    correta: 1,
    explicacao: "Em 28 de junho de 1969, frequentadores do bar Stonewall Inn reagiram a uma batida policial. Por isso junho é o mês do Orgulho."
  },
  {
    pergunta: "Por que 17 de maio é o Dia Internacional contra a LGBTfobia?",
    alternativas: [
      "Foi o dia da primeira Parada do Orgulho",
      "Nesse dia, em 1990, a OMS retirou a homossexualidade da lista de doenças",
      "É o aniversário de Stonewall",
      "Foi o dia em que a ONU foi criada"
    ],
    correta: 1,
    explicacao: "Em 17/05/1990 a Organização Mundial da Saúde deixou de classificar a homossexualidade como doença."
  },
  {
    pergunta: "Em que ano o STF reconheceu a união estável entre pessoas do mesmo sexo no Brasil?",
    alternativas: ["1988", "2002", "2011", "2020"],
    correta: 2,
    explicacao: "Em 2011 o Supremo Tribunal Federal reconheceu a união homoafetiva. Em 2013, o CNJ garantiu o casamento civil nos cartórios."
  },
  {
    pergunta: "O que o STF decidiu em 2019 sobre a LGBTfobia?",
    alternativas: [
      "Que ela não é crime",
      "Que ela deve ser enquadrada na Lei do Racismo",
      "Que é apenas uma infração administrativa",
      "Que só vale em São Paulo"
    ],
    correta: 1,
    explicacao: "Em 2019 o STF equiparou a homofobia e a transfobia ao crime de racismo até que o Congresso aprove uma lei específica."
  },
  {
    pergunta: "Quem criou a bandeira do arco-íris, símbolo do orgulho LGBTQIA+?",
    alternativas: ["Harvey Milk", "Marsha P. Johnson", "Gilbert Baker", "Freddie Mercury"],
    correta: 2,
    explicacao: "O artista Gilbert Baker criou a bandeira em 1978, em São Francisco (EUA). Cada cor tem um significado."
  },
  {
    pergunta: "O que é o \"nome social\"?",
    alternativas: [
      "Um apelido usado só nas redes sociais",
      "O nome pelo qual a pessoa trans se identifica e quer ser chamada",
      "O nome da família",
      "Um nome usado apenas em festas"
    ],
    correta: 1,
    explicacao: "O nome social respeita a identidade de gênero. Desde 2018 pessoas trans podem mudar nome e gênero direto no cartório."
  }
];

const EVENTOS_TRABALHO = [
  { ano: "≈1760", ordem: 1760, emoji: "🏭", texto: "Revolução Industrial começa na Inglaterra, com jornadas de até 16 horas." },
  { ano: "1886", ordem: 1886, emoji: "✊", texto: "Greve e Revolta de Haymarket em Chicago pela jornada de 8 horas — origem do 1º de Maio." },
  { ano: "1917", ordem: 1917, emoji: "📢", texto: "Greve Geral em São Paulo: operários param a cidade por melhores salários e condições." },
  { ano: "1919", ordem: 1919, emoji: "🌍", texto: "Criação da Organização Internacional do Trabalho (OIT)." },
  { ano: "1943", ordem: 1943, emoji: "📘", texto: "Getúlio Vargas assina a CLT (Consolidação das Leis do Trabalho)." },
  { ano: "1978", ordem: 1978, emoji: "🔧", texto: "Greves dos metalúrgicos do ABC paulista desafiam a ditadura militar." },
  { ano: "1988", ordem: 1988, emoji: "📜", texto: "Constituição Federal garante direitos como férias, 13º salário e jornada de 44 horas." }
];

const PONTOS = { parCerto: 10, parErrado: -2, quizCerto: 10, eventoCerto: 10 };

/* =========================================================
   ESTADO E UTILITÁRIOS
   ========================================================= */

const estado = { painelAtual: 0, pontos: 0, concluidos: [] };

const $ = (id) => document.getElementById(id);

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function somarPontos(valor) {
  estado.pontos = Math.max(0, estado.pontos + valor);
  $("pontos").textContent = estado.pontos;
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach((t) => t.classList.remove("ativa"));
  $(id).classList.add("ativa");
  const m = id.match(/^painel-(\d)$/);
  document.body.dataset.tema = m ? m[1] : "0";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function atualizarProgresso() {
  document.querySelectorAll(".etapa").forEach((etapa) => {
    const n = Number(etapa.dataset.painel);
    const icone = etapa.querySelector(".icone");
    etapa.classList.remove("atual", "concluida");
    if (estado.concluidos.includes(n)) {
      etapa.classList.add("concluida");
      icone.textContent = "✅";
    } else if (n === estado.painelAtual || n === estado.concluidos.length + 1) {
      if (n === estado.painelAtual) etapa.classList.add("atual");
      icone.textContent = "🔓";
    } else {
      icone.textContent = "🔒";
    }
  });
}

function setFeedback(id, texto, tipo) {
  const el = $(id);
  el.innerHTML = texto;
  el.className = "feedback " + (tipo || "");
}

/* =========================================================
   FLUXO GERAL
   ========================================================= */

function iniciarPainel(n) {
  estado.painelAtual = n;
  atualizarProgresso();
  mostrarTela("painel-" + n);
  if (n === 1) montarPainel1();
  if (n === 2) montarPainel2();
  if (n === 3) montarPainel3();
}

function concluirPainel(n) {
  if (!estado.concluidos.includes(n)) estado.concluidos.push(n);
  atualizarProgresso();
}

function mostrarFinal() {
  estado.painelAtual = 0;
  atualizarProgresso();
  const max =
    PARES_GENERO.length * PONTOS.parCerto +
    QUIZ_LGBT.length * PONTOS.quizCerto +
    EVENTOS_TRABALHO.length * PONTOS.eventoCerto;
  $("pontos-final").textContent = estado.pontos;
  $("pontos-max").textContent = max;
  const pct = estado.pontos / max;
  let msg;
  if (pct >= 0.9) msg = "Excelente! Você domina o tema de diversidade e direitos. 🌈";
  else if (pct >= 0.6) msg = "Muito bem! Você sabe bastante — continue aprendendo. 💪";
  else msg = "Bom começo! Jogue de novo para aprender ainda mais. 📚";
  $("mensagem-final").textContent = msg;
  mostrarTela("tela-final");
}

function reiniciar() {
  estado.painelAtual = 0;
  estado.pontos = 0;
  estado.concluidos = [];
  $("pontos").textContent = 0;
  iniciarPainel(1);
}

/* =========================================================
   PAINEL 1 — LIGAR IMAGEM AO TEXTO
   ========================================================= */

const p1 = { selecionada: null, ligados: [] };

function montarPainel1() {
  p1.selecionada = null;
  p1.ligados = [];
  setFeedback("feedback-1", "");
  $("btn-fim-1").classList.add("escondido");

  const colImg = $("coluna-imagens");
  const colTxt = $("coluna-textos");
  colImg.innerHTML = "";
  colTxt.innerHTML = "";

  embaralhar(PARES_GENERO).forEach((par) => {
    const el = document.createElement("div");
    el.className = "item imagem";
    el.dataset.id = par.id;
    el.innerHTML = par.img
      ? `<img src="${par.img}" alt="${par.legenda}">`
      : `<span class="emoji" aria-hidden="true">${par.emoji}</span><span class="legenda">${par.legenda}</span>`;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", par.legenda);
    el.addEventListener("click", () => selecionarImagem(el));
    colImg.appendChild(el);
  });

  embaralhar(PARES_GENERO).forEach((par) => {
    const el = document.createElement("div");
    el.className = "item texto";
    el.dataset.id = par.id;
    el.textContent = par.texto;
    el.setAttribute("role", "button");
    el.addEventListener("click", () => selecionarTexto(el));
    colTxt.appendChild(el);
  });

  desenharLinhas();
}

function selecionarImagem(el) {
  if (el.classList.contains("ligado")) return;
  document.querySelectorAll("#coluna-imagens .item").forEach((i) => i.classList.remove("selecionado"));
  el.classList.add("selecionado");
  p1.selecionada = el;
}

function selecionarTexto(el) {
  if (el.classList.contains("ligado")) return;
  if (!p1.selecionada) {
    setFeedback("feedback-1", "Primeiro escolha uma imagem!", "erro");
    return;
  }
  const img = p1.selecionada;
  if (img.dataset.id === el.dataset.id) {
    img.classList.remove("selecionado");
    img.classList.add("ligado");
    el.classList.add("ligado");
    p1.ligados.push({ img, txt: el });
    somarPontos(PONTOS.parCerto);
    setFeedback("feedback-1", "Correto! ✔", "ok");
    desenharLinhas();
    if (p1.ligados.length === PARES_GENERO.length) {
      setFeedback("feedback-1", "Painel 1 concluído! 🎉", "ok");
      concluirPainel(1);
      $("btn-fim-1").classList.remove("escondido");
    }
  } else {
    somarPontos(PONTOS.parErrado);
    setFeedback("feedback-1", "Não combina. Tente outra vez!", "erro");
    [img, el].forEach((x) => {
      x.classList.add("errado");
      setTimeout(() => x.classList.remove("errado"), 450);
    });
  }
  p1.selecionada = null;
  img.classList.remove("selecionado");
}

function desenharLinhas() {
  const svg = $("linhas");
  const base = $("ligar").getBoundingClientRect();
  svg.innerHTML = "";
  p1.ligados.forEach(({ img, txt }) => {
    const a = img.getBoundingClientRect();
    const b = txt.getBoundingClientRect();
    const linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    linha.setAttribute("x1", a.right - base.left);
    linha.setAttribute("y1", a.top + a.height / 2 - base.top);
    linha.setAttribute("x2", b.left - base.left);
    linha.setAttribute("y2", b.top + b.height / 2 - base.top);
    svg.appendChild(linha);
  });
}

window.addEventListener("resize", desenharLinhas);
// redesenha quando o tamanho dos cartões muda (ex.: botão aparece e a área encolhe)
if ("ResizeObserver" in window) new ResizeObserver(desenharLinhas).observe($("ligar"));

/* =========================================================
   PAINEL 2 — QUIZ LGBTQIA+
   ========================================================= */

const p2 = { indice: 0, perguntas: [] };

function montarPainel2() {
  p2.indice = 0;
  p2.perguntas = embaralhar(QUIZ_LGBT);
  mostrarPergunta();
}

function mostrarPergunta() {
  const q = p2.perguntas[p2.indice];
  const total = p2.perguntas.length;
  $("quiz-contador").textContent = `Pergunta ${p2.indice + 1} de ${total}`;
  $("quiz-barra").style.width = (p2.indice / total) * 100 + "%";
  $("quiz-pergunta").textContent = q.pergunta;
  setFeedback("feedback-2", "");
  $("btn-proxima").classList.add("escondido");

  const box = $("quiz-alternativas");
  box.innerHTML = "";
  q.alternativas.forEach((texto, i) => {
    const b = document.createElement("button");
    b.className = "alternativa";
    b.textContent = texto;
    b.addEventListener("click", () => responder(i));
    box.appendChild(b);
  });
}

function responder(escolha) {
  const q = p2.perguntas[p2.indice];
  const botoes = document.querySelectorAll(".alternativa");
  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correta) b.classList.add("certa");
    else if (i === escolha) b.classList.add("errada");
  });

  if (escolha === q.correta) {
    somarPontos(PONTOS.quizCerto);
    setFeedback("feedback-2", `Correto! ✔<span class="explicacao">${q.explicacao}</span>`, "ok");
  } else {
    setFeedback("feedback-2", `Ops, não é essa. ✘<span class="explicacao">${q.explicacao}</span>`, "erro");
  }

  const ultima = p2.indice === p2.perguntas.length - 1;
  const btn = $("btn-proxima");
  btn.textContent = ultima ? "Ir para o Painel 3 →" : "Próxima →";
  btn.classList.remove("escondido");
  if (ultima) {
    $("quiz-barra").style.width = "100%";
    concluirPainel(2);
  }
}

function proximaPergunta() {
  if (p2.indice < p2.perguntas.length - 1) {
    p2.indice++;
    mostrarPergunta();
  } else {
    iniciarPainel(3);
  }
}

/* =========================================================
   PAINEL 3 — LINHA DO TEMPO TRABALHISTA
   ========================================================= */

const p3 = { tentativas: 0, arrastando: null, travado: false };

function montarPainel3() {
  p3.tentativas = 0;
  p3.travado = false;
  setFeedback("feedback-3", "");
  $("btn-verificar").classList.remove("escondido");
  $("btn-fim-3").classList.add("escondido");

  let ordem = embaralhar(EVENTOS_TRABALHO);
  // garante que não comece já ordenado
  while (ordem.every((e, i) => i === 0 || e.ordem > ordem[i - 1].ordem)) ordem = embaralhar(EVENTOS_TRABALHO);

  const lista = $("linha-tempo");
  lista.innerHTML = "";
  ordem.forEach((ev) => lista.appendChild(criarEvento(ev)));
  numerarEventos();
}

function criarEvento(ev) {
  const li = document.createElement("li");
  li.className = "evento";
  li.draggable = true;
  li.dataset.ordem = ev.ordem;
  li.dataset.ano = ev.ano;
  li.innerHTML = `
    <span class="num"></span>
    <span class="emoji" aria-hidden="true">${ev.emoji}</span>
    <span class="desc">${ev.texto}<span class="ano"></span></span>
    <span class="setas">
      <button type="button" aria-label="Mover para cima">↑</button>
      <button type="button" aria-label="Mover para baixo">↓</button>
    </span>`;

  const [cima, baixo] = li.querySelectorAll(".setas button");
  cima.addEventListener("click", () => mover(li, -1));
  baixo.addEventListener("click", () => mover(li, 1));

  li.addEventListener("dragstart", (e) => {
    if (p3.travado) return e.preventDefault();
    p3.arrastando = li;
    li.classList.add("arrastando");
    e.dataTransfer.effectAllowed = "move";
  });
  li.addEventListener("dragend", () => {
    li.classList.remove("arrastando");
    p3.arrastando = null;
    numerarEventos();
  });
  li.addEventListener("dragover", (e) => {
    e.preventDefault();
    const alvo = p3.arrastando;
    if (!alvo || alvo === li) return;
    const r = li.getBoundingClientRect();
    const depois = e.clientY > r.top + r.height / 2;
    li.parentNode.insertBefore(alvo, depois ? li.nextSibling : li);
  });
  return li;
}

function mover(li, direcao) {
  if (p3.travado) return;
  const lista = li.parentNode;
  if (direcao < 0 && li.previousElementSibling) lista.insertBefore(li, li.previousElementSibling);
  if (direcao > 0 && li.nextElementSibling) lista.insertBefore(li.nextElementSibling, li);
  limparMarcacoes();
  numerarEventos();
}

function numerarEventos() {
  document.querySelectorAll("#linha-tempo .evento").forEach((li, i) => {
    li.querySelector(".num").textContent = i + 1 + ".";
  });
}

function limparMarcacoes() {
  document.querySelectorAll("#linha-tempo .evento").forEach((li) => li.classList.remove("certo", "errado"));
}

function verificarLinhaTempo() {
  const itens = [...document.querySelectorAll("#linha-tempo .evento")];
  const corretos = [...EVENTOS_TRABALHO].sort((a, b) => a.ordem - b.ordem);
  let acertos = 0;

  itens.forEach((li, i) => {
    const certo = Number(li.dataset.ordem) === corretos[i].ordem;
    li.classList.toggle("certo", certo);
    li.classList.toggle("errado", !certo);
    if (certo) acertos++;
  });

  p3.tentativas++;
  if (p3.tentativas === 1) somarPontos(acertos * PONTOS.eventoCerto);

  if (acertos === itens.length) {
    p3.travado = true;
    itens.forEach((li) => {
      li.classList.add("travado");
      li.draggable = false;
      li.querySelector(".ano").textContent = " (" + li.dataset.ano + ")";
      li.querySelector(".setas").style.visibility = "hidden";
    });
    setFeedback("feedback-3", "Linha do tempo correta! 🎉", "ok");
    $("btn-verificar").classList.add("escondido");
    $("btn-fim-3").classList.remove("escondido");
    concluirPainel(3);
  } else {
    const extra = p3.tentativas === 1 ? ` (+${acertos * PONTOS.eventoCerto} pontos)` : "";
    setFeedback("feedback-3", `${acertos} de ${itens.length} na posição certa${extra}. Reorganize os vermelhos e verifique de novo.`, "erro");
  }
}

/* =========================================================
   EVENTOS DOS BOTÕES
   ========================================================= */

$("btn-comecar").addEventListener("click", () => iniciarPainel(1));
$("btn-fim-1").addEventListener("click", () => iniciarPainel(2));
$("btn-proxima").addEventListener("click", proximaPergunta);
$("btn-verificar").addEventListener("click", verificarLinhaTempo);
$("btn-fim-3").addEventListener("click", mostrarFinal);
$("btn-reiniciar").addEventListener("click", reiniciar);

atualizarProgresso();
