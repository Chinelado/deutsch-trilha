// Núcleo de dados: registro de lições, inteligências e roadmap A1–C2.
const LESSONS = [];
const pairs = (s) => s.split('|').map((x) => { const [de, pt] = x.split('='); return { de, pt }; });

// L(título DE, tema PT, gramática, explicação, exemplos, vocabulário, diálogo, lacunas)
function L(de, pt, gt, gx, ge, v, dlg, cz) {
  const i = LESSONS.length;
  LESSONS.push({
    i, de, pt, gt, gx, pts: [], ex: [],
    ge: pairs(ge),
    v: v.split('|').map((s, j) => { const [a, b, c] = s.split('='); return { k: i + ':' + j, de: a, pt: b, em: c || '' }; }),
    dlg: pairs(dlg),
    cz: cz.split('|').map((s) => { const p = s.split('='); return { q: p[0], a: p[1], w: p.slice(2) }; }),
  });
}

// X(vocabulário extra): acrescenta palavras à próxima lição, na ordem em que as lições foram registradas.
let xi = 0;
function X(v) {
  const l = LESSONS[xi++];
  v.split('|').forEach((s) => { const [a, b] = s.split('='); l.v.push({ k: l.i + ':' + l.v.length, de: a, pt: b, em: '', x: true }); });
}

// D(pontos da explicação, exemplos do dia a dia) e W(por que cada lacuna tem aquela resposta):
// aplicam-se à próxima lição ainda sem esses dados, na ordem em que as lições foram registradas.
let di = 0, wi = 0;
function D(points, ex) { const l = LESSONS[di++]; l.pts = points.split('|'); l.ex = pairs(ex); }
function W(whys) { const l = LESSONS[wi++]; whys.split('|').forEach((w, j) => { if (l.cz[j]) l.cz[j].why = w; }); }

// AK(título, aula): aula passo a passo escrita para uma lição específica, pelo título.
function AK(title, md) { const l = LESSONS.find((x) => x.de === title); if (l) l.deep = md; }

// B(frase desmontada, tradução): cada pedaço é "palavra=FUNÇÃO^nota". Use _ para manter palavras no mesmo pedaço.
const ROLES = {
  S: ['sujeito', 's'], V: ['verbo conjugado', 'v'], AUX: ['verbo auxiliar', 'v'], MOD: ['verbo modal', 'v'],
  INF: ['infinitivo', 'v2'], PT: ['particípio', 'v2'], PX: ['prefixo separável', 'v2'], ZU: ['zu', 'v2'],
  OA: ['objeto direto (acusativo)', 'o'], OD: ['objeto indireto (dativo)', 'o'], G: ['genitivo', 'o'], RX: ['pronome reflexivo', 'o'],
  PR: ['predicativo', 'p'], ADJ: ['adjetivo', 'p'], ART: ['artigo', 'p'], POS: ['possessivo', 'p'],
  T: ['tempo', 'c'], L: ['lugar', 'c'], M: ['modo', 'c'], PP: ['complemento com preposição', 'c'], ADV: ['advérbio', 'c'],
  NEG: ['negação', 'n'], W: ['palavra interrogativa', 'w'], C: ['conjunção', 'w'], REL: ['pronome relativo', 'w'], PK: ['partícula', 'w'], X: ['termo comparado', 'c'],
};
let bi = 0;
function B(tok, pt) {
  const l = LESSONS[bi++];
  l.bd = { pt, t: tok.split('|').map((s) => { const [w, rest] = s.split('='); const [c, n] = (rest || 'X').split('^'); return { w: w.replace(/_/g, ' '), c, n: n || '' }; }) };
}

const INT = {
  lin: { n: 'Linguística', e: '📝', d: 'escrever, traduzir e completar frases' },
  log: { n: 'Lógico-matemática', e: '🧩', d: 'regras, padrões e ordem das palavras' },
  esp: { n: 'Espacial', e: '🎨', d: 'pares visuais, cores de gênero e imagens' },
  mus: { n: 'Musical', e: '🎧', d: 'escuta, som e ritmo da língua' },
  cor: { n: 'Corporal-cinestésica', e: '⚡', d: 'ação rápida, toque e reflexo' },
  int: { n: 'Interpessoal', e: '💬', d: 'diálogos e respostas em conversa' },
  intra: { n: 'Intrapessoal', e: '📔', d: 'frases sobre você e autoavaliação' },
  nat: { n: 'Naturalista', e: '🌿', d: 'classificar, agrupar e achar o intruso' },
};
const IK = Object.keys(INT);

const PRIOR_Q = {
  lin: 'Gosto de ler, escrever e brincar com palavras.',
  log: 'Gosto de entender a regra por trás das coisas.',
  esp: 'Lembro melhor do que vejo: imagens, cores, mapas.',
  mus: 'Decoro músicas com facilidade e reparo em sons e sotaques.',
  cor: 'Aprendo fazendo, mexendo, com as mãos.',
  int: 'Aprendo melhor conversando com outras pessoas.',
  intra: 'Gosto de refletir sozinha e relacionar as coisas com a minha vida.',
  nat: 'Gosto de organizar, classificar e notar padrões na natureza.',
};

// Estrutura por níveis do QECR, como no Goethe-Institut. UE = aula de 45 min (estimativas aproximadas do instituto).
const PHASES = [
  { id: 'A1', n: 'A1 · Start Deutsch 1', when: 'Semanas 1–3', ue: '80–200 UE', weeks: [0, 3],
    can: 'Apresentar-se, fazer pedidos simples, perguntar e responder sobre o dia a dia.' },
  { id: 'A2', n: 'A2 · Goethe-Zertifikat A2', when: 'Semanas 4–7', ue: '200–350 UE', weeks: [3, 7],
    can: 'Contar o que aconteceu, justificar, comparar e resolver situações de rotina.' },
  { id: 'B1', n: 'B1 · Goethe-Zertifikat B1', when: 'Semanas 8–13', ue: '350–650 UE', weeks: [7, 13],
    can: 'Dar opinião, narrar, planejar em conjunto, escrever e-mails e lidar com imprevistos em viagem e trabalho.' },
  { id: 'B2', n: 'B2 · Goethe-Zertifikat B2', when: 'Semanas 14–25', ue: '600–800 UE', weeks: [13, 25],
    can: 'Discutir temas abstratos com fluência e defender um ponto de vista com detalhes.',
    mods: ['Konjunktiv I e discurso indireto', 'Alternativas ao passivo (sich lassen, sein + zu, -bar)', 'Nominalização e Nomen-Verb-Verbindungen', 'Atributos com particípio', 'Conectores avançados (indem, sofern, falls)', 'Modais subjetivos (dürfte, müsste, soll, will)', 'Escrita: Forumsbeitrag e e-mail formal', 'Fala: Vortrag + discussão'] },
  { id: 'C1', n: 'C1 · Goethe-Zertifikat C1', when: 'Semanas 26–31', ue: '800–1000 UE', weeks: [25, 31],
    can: 'Usar o alemão com flexibilidade em contextos acadêmicos e profissionais.',
    mods: ['Nominalstil × Verbalstil', 'Funktionsverbgefüge', 'Modalpartikeln (doch, ja, eben, halt, wohl)', 'Textos jornalísticos e acadêmicos', 'Registros formal e informal', 'Escrita: Erörterung', 'Debate e apresentação longa', 'Expressões idiomáticas'] },
  { id: 'C2', n: 'C2 · Großes Deutsches Sprachdiplom', when: 'Semanas 32–35', ue: '1000+ UE', weeks: [31, 35],
    can: 'Entender praticamente tudo e se expressar com precisão e nuance.',
    mods: ['Nuances de estilo e ironia', 'Literatura e ensaio', 'Variantes regionais (Alemanha, Áustria, Suíça)', 'Redação argumentativa complexa', 'Mediação entre línguas', 'Vocabulário técnico da sua área', 'Fala espontânea e precisa'] },
];
