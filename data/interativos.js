// Textos das facilitações interativas (relógio e gata no caixote), com áudio gravado.
// A interface fica em interativo.js; o gerador de áudio lê daqui (uhrText e KATZE).

// ---------- relógio (Wie spät ist es?) ----------
const NUM_DE = ['', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];
const MIN_DE = { 5: 'fünf', 10: 'zehn', 15: 'fünfzehn', 20: 'zwanzig', 25: 'fünfundzwanzig', 30: 'dreißig', 35: 'fünfunddreißig', 40: 'vierzig', 45: 'fünfundvierzig', 50: 'fünfzig', 55: 'fünfundfünfzig' };
// h de 1 a 12, m múltiplo de 5. Forma do dia a dia: depois dos :20, a referência passa a ser a hora seguinte.
function uhrText(h, m) {
  const H = NUM_DE[h], N = NUM_DE[(h % 12) + 1];
  const t = {
    0: `${H === 'eins' ? 'ein' : H} Uhr`, 5: `fünf nach ${H}`, 10: `zehn nach ${H}`, 15: `Viertel nach ${H}`, 20: `zwanzig nach ${H}`,
    25: `fünf vor halb ${N}`, 30: `halb ${N}`, 35: `fünf nach halb ${N}`, 40: `zwanzig vor ${N}`, 45: `Viertel vor ${N}`, 50: `zehn vor ${N}`, 55: `fünf vor ${N}`,
  }[m];
  return `Es ist ${t}.`;
}
// forma oficial (rádio, estação, horários): hora + minutos
const uhrFormal = (h, m) => `${NUM_DE[h] === 'eins' ? 'ein' : NUM_DE[h]} Uhr${m ? ' ' + MIN_DE[m] : ''}`;

// ---------- a gata e o caixote (Wo ist …? e Wohin damit?) ----------
// wo: onde está (posição, dativo) · wohin: para onde vai (movimento, acusativo). h = trecho destacado.
const KATZE = [
  { p: 'auf', pt: 'em cima', wo: 'Die Katze ist auf dem Karton.', woH: 'auf dem', wohin: 'Die Katze springt auf den Karton.', wohinH: 'auf den' },
  { p: 'in', pt: 'dentro', wo: 'Die Katze ist im Karton.', woH: 'im', wohin: 'Die Katze springt in den Karton.', wohinH: 'in den' },
  { p: 'unter', pt: 'embaixo', wo: 'Die Katze ist unter dem Karton.', woH: 'unter dem', wohin: 'Die Katze kriecht unter den Karton.', wohinH: 'unter den' },
  { p: 'neben', pt: 'ao lado', wo: 'Die Katze ist neben dem Karton.', woH: 'neben dem', wohin: 'Die Katze läuft neben den Karton.', wohinH: 'neben den' },
  { p: 'hinter', pt: 'atrás', wo: 'Die Katze ist hinter dem Karton.', woH: 'hinter dem', wohin: 'Die Katze läuft hinter den Karton.', wohinH: 'hinter den' },
  { p: 'vor', pt: 'na frente', wo: 'Die Katze ist vor dem Karton.', woH: 'vor dem', wohin: 'Die Katze läuft vor den Karton.', wohinH: 'vor den' },
  { p: 'zwischen', pt: 'entre', wo: 'Die Katze ist zwischen den Kartons.', woH: 'zwischen den', wohin: 'Die Katze läuft zwischen die Kartons.', wohinH: 'zwischen die' },
];

// ---------- linha do tempo dos tempos verbais (esquema Z) ----------
// pos = posição na linha (0 = passado distante, 53 = agora, 100 = futuro); li = lição em que o tempo é ensinado
const ZEITEN = [
  { id: 'plusq', n: 'Plusquamperfekt', c: 'Plusq.', pos: 9, li: 43, f: 'hatte / war + particípio no fim', q: 'O passado do passado: o que já tinha acontecido antes de outra ação passada.', ex: 'Als wir ankamen, war der Zug schon abgefahren.', exPt: 'Quando chegamos, o trem já tinha partido.', lern: 'Ich hatte Deutsch gelernt.' },
  { id: 'praet', n: 'Präteritum', c: 'Prät.', pos: 31, row: 'a', li: 19, f: 'radical + -te (regulares) · forma própria (irregulares)', q: 'O passado dos textos, histórias e notícias. Na conversa, só com sein, haben e os modais (war, hatte, konnte).', ex: 'Es war einmal ein König.', exPt: 'Era uma vez um rei.', lern: 'Ich lernte Deutsch.' },
  { id: 'perf', n: 'Perfekt', c: 'Perfekt', pos: 31, row: 'b', li: 17, f: 'haben / sein + particípio no fim', q: 'O passado da conversa do dia a dia.', ex: 'Wir haben Pizza gegessen.', exPt: 'Nós comemos pizza.', lern: 'Ich habe Deutsch gelernt.' },
  { id: 'praes', n: 'Präsens', c: 'Präsens', pos: 53, li: 0, f: 'radical + -e, -st, -t, -en…', q: 'O agora e os hábitos. Com uma palavra de tempo (morgen), também fala do futuro.', ex: 'Ich lerne heute Deutsch.', exPt: 'Eu estudo alemão hoje.', lern: 'Ich lerne Deutsch.' },
  { id: 'fut1', n: 'Futur I', c: 'Futur I', pos: 76, row: 'a', li: 29, f: 'werden + infinitivo no fim', q: 'Planos, promessas e suposições sobre o futuro.', ex: 'Ich werde morgen nach Wien fahren.', exPt: 'Eu vou viajar para Viena amanhã.', lern: 'Ich werde Deutsch lernen.' },
  { id: 'fut2', n: 'Futur II', c: 'Futur II', pos: 95, row: 'b', li: 93, f: 'werden + particípio + haben / sein no fim', q: 'O que já estará concluído até um ponto do futuro (e suposições sobre o passado).', ex: 'Bis morgen werde ich den Text geschrieben haben.', exPt: 'Até amanhã eu terei escrito o texto.', lern: 'Ich werde Deutsch gelernt haben.' },
];

// ---------- tabela de declinação (esquema A) ----------
// "|" separa a terminação, que acende. Casos: n, a, d, g. Gêneros: m, f, n, p.
const DEKL = {
  der: { t: 'der / die / das', dica: 'Depois de der, die, das, o artigo já mostra o caso: o adjetivo só leva -e ou -en.',
    m: ['der neu|e Tisch', 'den neu|en Tisch', 'dem neu|en Tisch', 'des neu|en Tisches'], f: ['die neu|e Lampe', 'die neu|e Lampe', 'der neu|en Lampe', 'der neu|en Lampe'],
    n: ['das neu|e Buch', 'das neu|e Buch', 'dem neu|en Buch', 'des neu|en Buches'], p: ['die neu|en Stühle', 'die neu|en Stühle', 'den neu|en Stühlen', 'der neu|en Stühle'] },
  ein: { t: 'ein / eine / kein', dica: 'Onde o ein não mostra o gênero (ein Tisch, ein Buch), o adjetivo mostra: -er para masculino, -es para neutro. No resto, -e ou -en.',
    m: ['ein neu|er Tisch', 'einen neu|en Tisch', 'einem neu|en Tisch', 'eines neu|en Tisches'], f: ['eine neu|e Lampe', 'eine neu|e Lampe', 'einer neu|en Lampe', 'einer neu|en Lampe'],
    n: ['ein neu|es Buch', 'ein neu|es Buch', 'einem neu|en Buch', 'eines neu|en Buches'], p: ['keine neu|en Stühle', 'keine neu|en Stühle', 'keinen neu|en Stühlen', 'keiner neu|en Stühle'] },
  zero: { t: 'sem artigo', dica: 'Sem artigo, o adjetivo faz o papel do artigo e copia a terminação dele: dem vira -em, der vira -er, das vira -es.',
    m: ['frisch|er Kaffee', 'frisch|en Kaffee', 'frisch|em Kaffee', 'frisch|en Kaffees'], f: ['frisch|e Milch', 'frisch|e Milch', 'frisch|er Milch', 'frisch|er Milch'],
    n: ['frisch|es Brot', 'frisch|es Brot', 'frisch|em Brot', 'frisch|en Brotes'], p: ['frisch|e Äpfel', 'frisch|e Äpfel', 'frisch|en Äpfeln', 'frisch|er Äpfel'] },
};
const DEKL_CASOS = [['n', 'Nominativo', 'sujeito: … ist da.'], ['a', 'Acusativo', 'objeto: Ich kaufe …'], ['d', 'Dativo', 'depois de mit, bei, von…'], ['g', 'Genitivo', 'depois de wegen, trotz…']];

// ---------- carta oficial (esquema B) ----------
// Cada zona da carta: o texto (com áudio), o termo e o que ela significa.
const BRIEF = [
  { id: 'abs', z: 'Stadt Musterstadt · Bürgeramt\nMarktplatz 1 · 12345 Musterstadt', de: 'der Absender', pt: 'O remetente: a repartição que escreve.' },
  { id: 'az', z: 'Aktenzeichen: 32.1-4711/26', de: 'das Aktenzeichen', pt: 'O número do processo. Cite sempre no assunto da sua resposta.' },
  { id: 'dat', z: 'Datum: 3. Mai 2026', de: 'das Datum', pt: 'A data da carta. Os prazos costumam contar a partir da entrega (die Zustellung).' },
  { id: 'bet', z: 'Bescheid über Ihren Antrag auf Wohngeld vom 12. März 2026', de: 'der Bescheid', pt: 'O assunto: a decisão oficial (der Bescheid) sobre o seu pedido (der Antrag) de auxílio-moradia.' },
  { id: 'anr', z: 'Sehr geehrte Frau Souza,', de: 'die Anrede', pt: 'A saudação formal.' },
  { id: 'txt', z: 'hiermit wird Ihnen mitgeteilt, dass Ihrem Antrag nicht stattgegeben werden kann. Die Prüfung der Unterlagen ergab, dass die Einkommensgrenze überschritten wurde.', de: 'der Antrag wird abgelehnt', pt: 'A decisão: o pedido foi negado, porque a renda passou do limite. Método: ache o verbo e desfaça a passiva. Em alemão claro: Wir lehnen Ihren Antrag ab.' },
  { id: 'frist', z: 'Bitte reichen Sie fehlende Unterlagen bis zum 31. Mai 2026 ein.', de: 'die Frist', pt: 'O prazo: entregue os documentos que faltam até 31 de maio.' },
  { id: 'rbb', z: 'Rechtsbehelfsbelehrung: Gegen diesen Bescheid kann innerhalb eines Monats nach Bekanntgabe Widerspruch eingelegt werden.', de: 'die Rechtsbehelfsbelehrung', pt: 'Como recorrer: você pode interpor recurso (Widerspruch einlegen) em até um mês. Depois disso, a decisão fica rechtskräftig, definitiva.' },
  { id: 'gr', z: 'Mit freundlichen Grüßen\nIm Auftrag\nM. Becker, Sachbearbeiterin', de: 'die Sachbearbeiterin', pt: 'Im Auftrag (i. A.) = por ordem. Quem assina é a funcionária responsável pelo seu caso.' },
];
const BRIEF_QUIZ = [['o número do processo', 'az'], ['até quando entregar os documentos que faltam', 'frist'], ['como e em quanto tempo recorrer', 'rbb'], ['por que o pedido foi negado', 'txt'], ['quem é responsável pelo seu caso', 'gr']];

// ---------- medidor de certeza (esquema G) ----------
const GEWISS = [
  { v: 0, de: 'kann nicht', pt: 'impossível', jetzt: 'Sie kann nicht zu Hause sein.', past: 'Er kann es nicht gewusst haben.' },
  { v: 30, de: 'könnte', pt: 'possível', jetzt: 'Sie könnte zu Hause sein.', past: 'Er könnte es gewusst haben.' },
  { v: 60, de: 'dürfte', pt: 'provável', jetzt: 'Sie dürfte zu Hause sein.', past: 'Er dürfte es gewusst haben.' },
  { v: 82, de: 'müsste', pt: 'deveria ser, muito provável', jetzt: 'Sie müsste zu Hause sein.', past: 'Er müsste es gewusst haben.' },
  { v: 100, de: 'muss', pt: 'quase certo, a única explicação', jetzt: 'Sie muss zu Hause sein.', past: 'Er muss es gewusst haben.' },
];
const GEWISS_PISTAS = {
  jetzt: { q: 'A Anna está em casa?', p: [
    ['A luz está acesa, o carro dela está na porta e dá para ouvir a voz dela.', 'muss'],
    ['Pela agenda, ela deveria ter chegado há uma hora.', 'müsste'],
    ['Ela costuma chegar às 18h, e agora são 18h30.', 'dürfte'],
    ['Ninguém sabe onde ela está hoje.', 'könnte'],
    ['Ela está de férias no Brasil.', 'kann nicht']] },
  past: { q: 'O Tom sabia da notícia?', p: [
    ['Ele estava na reunião em que a notícia foi dada.', 'muss'],
    ['Era obrigação dele ler o relatório em que ela aparecia.', 'müsste'],
    ['Todos os colegas dele receberam o e-mail.', 'dürfte'],
    ['A notícia saiu num site que ele às vezes lê.', 'könnte'],
    ['A notícia só saiu depois que ele viajou sem internet.', 'kann nicht']] },
};
