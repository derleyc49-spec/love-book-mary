let current = 0;
let pages = [];

function checkPassword() {
  if (document.getElementById("password").value === "007@Mary") {
    show("cover");
  } else {
    document.getElementById("error").innerText = "Senha errada";
  }
}

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openBook() {
  current = 0;
  show("book");
  createPages();
}

function createPages() {
  const container = document.getElementById("pages-container");
  if (container.innerHTML !== "") return;

  const textos = [
`Mary (Batman) 🦇
Nesse último tempo que a gente vem trocando mensagens…
eu comecei a perceber algumas coisas.
Eu me animo quando vejo tua mensagem.
Isso muda meu dia.
E sem perceber, já tô sorrindo.`,

`O mais engraçado é teu jeito…
aparece e some tipo Batman 😅
Mas sempre que aparece, melhora tudo.
E quando some…
eu sinto falta rápido.`,

`Eu gosto da leveza entre a gente.
Nada forçado.
Só acontece.
E isso é raro hoje em dia.
E contigo tudo flui.`,

`Com o tempo percebi…
não é só conversa.
É tua presença.
E isso ganhou espaço em mim.`,

`Eu tô ansioso pra te ver.
Dia 3 de abril já é especial.
Quero viver esse momento contigo.
Sem pressão.
Só sendo nós.`,

`E eu não quero apressar nada.
Quero que continue leve.
No tempo certo.
Porque contigo vale a pena.`,

`Eu gosto de falar contigo mais do que imaginei.
E isso já tem valor pra mim.
É simples…
mas é real.`,

`Então eu quis fazer algo diferente.
Pra você lembrar.
E quem sabe…
isso seja só o começo.`,

`Próxima página em branco para podermos escrever nossa história juntos 💌

Uma semana já…
esperando uma resposta sua 😅`
  ];

  for (let i = 0; i < 50; i++) {
    let div = document.createElement("div");
    div.className = "page";

    let text = document.createElement("div");
    text.className = "text-content";

    if (i < textos.length) {
      text.innerHTML = textos[i].replace(/\n/g,"<br>");
    } else {
      text.contentEditable = true;
      text.innerHTML = localStorage.getItem("p"+i) || "";
      text.oninput = ()=> localStorage.setItem("p"+i,text.innerHTML);
    }

    let num = document.createElement("div");
    num.className = "page-number";
    num.innerText = i+1;

    div.appendChild(text);
    div.appendChild(num);
    container.appendChild(div);
  }

  pages = document.querySelectorAll(".page");
  pages[0].classList.add("active");
}

function nextPage() {
  if (current < pages.length - 1) {
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
  }
}

function prevPage() {
  if (current === 0) {
    show("cover");
    return;
  }
  pages[current].classList.remove("active");
  current--;
  pages[current].classList.add("active");
}

/* PERSONALIZAÇÃO */
function toggleSettings(){
  const p = document.getElementById("settings");
  p.style.display = p.style.display === "flex" ? "none" : "flex";
}

function setColor(c){
  document.querySelectorAll(".page").forEach(p=>p.style.background=c);
}

function setTextColor(c){
  document.querySelectorAll(".text-content").forEach(t=>t.style.color=c);
}
