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
