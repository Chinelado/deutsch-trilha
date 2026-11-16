// Lições Pocket: situações reais de viagem e de vida na Alemanha, para estudar em 5 a 10 minutos.
// Cada lição: cena, ilustrações interativas (ill), frases para dizer, frases que você vai ouvir, diálogo, dica e teste.
// Formatos compactos: 'de=pt|de=pt' · placas/mapa: 'emoji>de=pt' · diálogo: 'Nome>voz>de=pt' (voz: a, b, c, d como em data/vozes.js).
// Imagens opcionais em images/pocket/<arquivo>.png (prompts em PROMPTS-POCKET.md); sem a imagem, a lição funciona igual.
const POCKETS = [];
const PK = (o) => POCKETS.push(o);
const pkPairs = (s) => (s || '').split('|').filter(Boolean).map((x) => { const [de, pt, ...r] = x.split('='); return { de, pt: pt || '', r }; });
const pkIcons = (s) => pkPairs(s).map((x) => { const i = x.de.indexOf('>'); return { ic: x.de.slice(0, i), de: x.de.slice(i + 1), pt: x.pt, r: x.r }; });
const pkDlg = (pk) => pkPairs(pk.dlg).map((x) => { const [who, v, de] = x.de.split('>'); return { who, v, de, pt: x.pt }; });

// Todo o alemão que tem áudio numa lição Pocket (usado pelo gerador de áudios).
function pocketTexts(pk) {
  const out = [], add = (t) => { if (t && /\p{L}/u.test(t) && !/^[\d\s.,:+\-–/€%x]+$/.test(t)) out.push(t); };
  pkPairs(pk.frases).forEach((x) => add(x.de));
  pkPairs(pk.ouvir).forEach((x) => add(x.de));
  pkDlg(pk).forEach((x) => add(x.de));
  (pk.ill || []).forEach((il) => {
    add(il.t);
    if (il.cols) pkPairs(il.cols).forEach((x) => add(x.de));
    if (il.leg) pkPairs(il.leg).forEach((x) => add(x.de));
    if (il.items) pkIcons(il.items).forEach((x) => add(x.de));
    if (il.secoes) il.secoes.forEach((s) => { add(s.n); pkPairs(s.itens).forEach((x) => add(x.de)); });
    if (il.linhas) pkPairs(il.linhas).forEach((x) => add(x.de));
    if (il.campos) pkPairs(il.campos).forEach((x) => add(x.de));
    if (il.extra) pkPairs(il.extra).forEach((x) => add(x.de));
    if (il.nota) add(il.nota.split('=')[0]);
    if (il.total) add(il.total.split('=')[0]);
    if (il.tags) pkPairs(il.tags).forEach((x) => { add(x.de); if (x.r[2] && /\p{L}/u.test(x.r[2])) add(x.r[2]); });
  });
  return out;
}

PK({ id: 'flughafen', e: '✈️', t: 'Am Flughafen', pt: 'No aeroporto', lv: 'A2',
  cena: 'Você está no aeroporto de Frankfurt para voltar a Lisboa. Precisa fazer o check-in, passar pelo controle de segurança e achar o portão certo no painel.',
  img: [{ f: 'flughafen', alt: 'Saguão de embarque com painel de partidas e placas amarelas' }, { f: 'flughafen-detalhe', alt: 'Cartão de embarque e placas de sinalização' }],
  ill: [
    { k: 'board', t: 'Abflug · Departures', cols: 'Zeit=horário|Flug=voo|Ziel=destino|Gate=portão|Status=situação',
      rows: [['09:50', 'LH 1234', 'Lissabon', 'B12', 'Boarding'], ['10:05', 'LH 400', 'New York', 'Z25', 'pünktlich'], ['10:20', 'TP 579', 'Porto', 'B20', 'verspätet'], ['10:35', 'LH 1830', 'Madrid', 'A14', 'annulliert'], ['10:45', 'LH 1456', 'Rom', 'A22', 'Gate geschlossen']],
      leg: 'Boarding=embarque|pünktlich=no horário|verspätet=atrasado|annulliert=cancelado|Gate geschlossen=portão fechado' },
    { k: 'signs', estilo: 'aero', items: '✈️>Abflug=Partidas|🛬>Ankunft=Chegadas|🧳>Gepäckausgabe=Esteira de bagagem|🛂>Passkontrolle=Controle de passaportes|🔍>Sicherheitskontrolle=Controle de segurança|🚪>Ausgang=Saída|🚻>Toiletten=Banheiros|🚆>Fernbahnhof=Estação de trens de longa distância' },
    { k: 'ticket', t: 'Bordkarte · Boarding Pass', campos: 'Name=nome=SOUZA/ANA|Flug=voo=LH 1234|Datum=data=12. MAI|Gate=portão=B12|Sitz=assento=23A|Boarding=embarque=09:20|Gruppe=grupo=3' },
  ],
  frases: 'Wo ist der Check-in-Schalter?=Onde fica o balcão de check-in?|Ich möchte einen Koffer aufgeben.=Quero despachar uma mala.|Kann ich einen Platz am Fenster haben?=Posso ficar na janela?|Wo ist Gate B12?=Onde fica o portão B12?|Hat der Flug Verspätung?=O voo está atrasado?|Mein Koffer ist nicht angekommen.=Minha mala não chegou.|Wie komme ich in die Stadt?=Como chego ao centro da cidade?|Wo kann ich Geld wechseln?=Onde posso trocar dinheiro?',
  ouvir: 'Ihren Reisepass, bitte.=Seu passaporte, por favor.|Haben Sie Flüssigkeiten im Handgepäck?=Tem líquidos na bagagem de mão?|Bitte legen Sie den Laptop in die Box.=Coloque o notebook na caixa, por favor.|Der Flug nach Lissabon hat dreißig Minuten Verspätung.=O voo para Lisboa está trinta minutos atrasado.|Letzter Aufruf für Passagiere nach Lissabon.=Última chamada para os passageiros com destino a Lisboa.|Das Boarding beginnt um neun Uhr zwanzig.=O embarque começa às 9h20.',
  dlg: 'Mitarbeiter>b>Guten Morgen! Wohin fliegen Sie heute?=Bom dia! Para onde a senhora voa hoje?|Passagierin>a>Nach Lissabon. Hier ist mein Reisepass.=Para Lisboa. Aqui está meu passaporte.|Mitarbeiter>b>Danke. Möchten Sie einen Koffer aufgeben?=Obrigado. Quer despachar uma mala?|Passagierin>a>Ja, einen. Kann ich einen Platz am Fenster haben?=Sim, uma. Posso ficar na janela?|Mitarbeiter>b>Kein Problem: Platz 23A. Das Boarding beginnt um neun Uhr zwanzig an Gate B12.=Sem problema: assento 23A. O embarque começa às 9h20 no portão B12.|Passagierin>a>Vielen Dank! Wo ist die Sicherheitskontrolle?=Muito obrigada! Onde fica o controle de segurança?|Mitarbeiter>b>Gleich dort links. Guten Flug!=Logo ali à esquerda. Boa viagem!',
  dica: 'No painel, **Gate geschlossen** quer dizer que o portão já fechou: depois disso ninguém mais embarca. Na bagagem de mão, líquidos costumam ir em frascos pequenos num saco transparente (confira a regra atual do aeroporto). Para ir ao centro, procure a **S-Bahn** (trem urbano) ou o **Fernbahnhof** (trens de longa distância).',
  quiz: [
    { q: 'O que significa "verspätet" no painel?', o: ['cancelado', 'atrasado', 'no horário'], a: 1 },
    { q: 'Você quer despachar a mala. O que diz?', o: ['Ich möchte einen Koffer aufgeben.', 'Ich möchte einen Koffer kaufen.', 'Mein Koffer ist nicht angekommen.'], a: 0 },
    { q: 'Em que portão embarca o voo LH 1234 para Lisboa?', o: ['A14', 'B12', 'Z25'], a: 1 },
    { q: 'Que placa você segue para pegar a mala depois do voo?', o: ['Abflug', 'Gepäckausgabe', 'Sicherheitskontrolle'], a: 1 },
  ] });

PK({ id: 'weg', e: '🧭', t: 'Nach dem Weg fragen', pt: 'Pedindo direções', lv: 'A1',
  cena: 'Você está no centro de uma cidade alemã e procura o museu. Pergunte o caminho e acompanhe a resposta no mapa: você está no ponto 📍.',
  img: [{ f: 'weg', alt: 'Turista com mapa numa praça de cidade alemã, com placas de rua' }],
  ill: [
    { k: 'map', t: 'Stadtplan · Mapa do centro', items: '🚉>Bahnhof=estação|🏛️>Museum=museu|⛪>Kirche=igreja|🏦>Bank=banco|📍>Sie sind hier=você está aqui|💊>Apotheke=farmácia|🏨>Hotel=hotel|🏢>Rathaus=prefeitura|☕>Café=café', leg: 'Hauptstraße=rua principal|Ampel=semáforo|Kreuzung=cruzamento' },
    { k: 'route', items: '⬆️>geradeaus=em frente|⬅️>links abbiegen=virar à esquerda|➡️>rechts abbiegen=virar à direita|🚦>bis zur Ampel=até o semáforo|↪️>um die Ecke=virando a esquina|↔️>gegenüber=em frente (do outro lado)|👫>neben=ao lado de|↩️>zurück=voltar' },
    { k: 'signs', estilo: 'rua', items: '⛔>Einbahnstraße=Mão única|🚶>Fußgängerzone=Calçadão|🅿️>Parkhaus=Estacionamento coberto|🚉>Hauptbahnhof=Estação central|🏰>Altstadt=Centro histórico' },
  ],
  frases: 'Entschuldigung, wie komme ich zum Bahnhof?=Com licença, como chego à estação?|Ist das weit von hier?=É longe daqui?|Kann man zu Fuß gehen?=Dá para ir a pé?|Wo ist die nächste Apotheke?=Onde fica a farmácia mais próxima?|Welcher Bus fährt ins Zentrum?=Que ônibus vai para o centro?|Können Sie mir das auf der Karte zeigen?=Pode me mostrar no mapa?|Ich habe mich verlaufen.=Eu me perdi.|Können Sie das bitte langsamer sagen?=Pode falar mais devagar, por favor?',
  ouvir: 'Gehen Sie geradeaus bis zur Ampel.=Siga em frente até o semáforo.|Dann biegen Sie links ab.=Depois vire à esquerda.|Nehmen Sie die zweite Straße rechts.=Pegue a segunda rua à direita.|Das ist gleich um die Ecke.=É logo ali na esquina.|Die Apotheke ist gegenüber vom Rathaus.=A farmácia fica em frente à prefeitura.|Das sind ungefähr zehn Minuten zu Fuß.=São uns dez minutos a pé.',
  dlg: 'Touristin>a>Entschuldigung, wie komme ich zum Museum?=Com licença, como chego ao museu?|Passant>b>Zum Museum? Gehen Sie hier geradeaus bis zur Ampel.=Ao museu? Siga em frente até o semáforo.|Touristin>a>Und dann?=E depois?|Passant>b>Dann ist das Museum direkt vor Ihnen, neben der Kirche.=Aí o museu fica bem na sua frente, ao lado da igreja.|Touristin>a>Ist das weit?=É longe?|Passant>b>Nein, nur fünf Minuten zu Fuß.=Não, só cinco minutos a pé.|Touristin>a>Vielen Dank!=Muito obrigada!',
  dica: 'Na Alemanha, pedestres esperam o sinal verde mesmo com a rua vazia: atravessar no vermelho é malvisto e pode dar multa. Para abordar alguém na rua, comece sempre com **Entschuldigung**. E se não entender, peça: **Können Sie das bitte langsamer sagen?**',
  quiz: [
    { q: 'O que significa "links abbiegen"?', o: ['seguir em frente', 'virar à esquerda', 'virar à direita'], a: 1 },
    { q: 'No mapa, o que fica ao lado da igreja?', o: ['o museu', 'o banco', 'o hotel'], a: 0 },
    { q: '"Das ist gleich um die Ecke" quer dizer…', o: ['É bem longe.', 'É logo ali na esquina.', 'Fica do outro lado da cidade.'], a: 1 },
  ] });

PK({ id: 'bewerbung', e: '💼', t: 'Das Vorstellungsgespräch', pt: 'Entrevista de emprego', lv: 'B1',
  cena: 'Você foi chamada para uma entrevista numa agência de viagens em Colônia. Leia o anúncio, separe os documentos e treine as respostas.',
  img: [{ f: 'bewerbung', alt: 'Entrevista de emprego num escritório claro' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Stellenanzeige · Anúncio de vaga', linhas: 'Wir suchen=procuramos=Kundenberater (m/w/d)|Vollzeit=tempo integral=40 Stunden|unbefristet=por tempo indeterminado=ab 1. August|Ihr Profil=seu perfil=Erfahrung im Kundenservice|Sprachen=idiomas=Deutsch und Englisch|Wir bieten=oferecemos=30 Tage Urlaub, Homeoffice|Bewerbungsschluss=prazo de candidatura=30. Juni' },
    { k: 'info', t: 'Bewerbungsunterlagen · Documentos', linhas: 'Anschreiben=carta de apresentação=1 Seite|Lebenslauf=currículo=tabellarisch|Zeugnisse=certificados e referências=Kopien|Foto=foto=optional' },
  ],
  frases: 'Vielen Dank für die Einladung.=Muito obrigada pelo convite.|Ich habe drei Jahre Erfahrung im Kundenservice.=Tenho três anos de experiência em atendimento.|Meine Stärken sind Zuverlässigkeit und Geduld.=Meus pontos fortes são confiabilidade e paciência.|Ich arbeite gern im Team.=Gosto de trabalhar em equipe.|Mich reizt besonders der Kontakt mit internationalen Kunden.=O que mais me atrai é o contato com clientes internacionais.|Wie sieht ein typischer Arbeitstag aus?=Como é um dia de trabalho típico?|Ab wann ist die Stelle zu besetzen?=A partir de quando é a vaga?|Wie geht es nach dem Gespräch weiter?=Quais são os próximos passos?',
  ouvir: 'Erzählen Sie doch bitte etwas über sich.=Fale um pouco sobre você, por favor.|Warum möchten Sie bei uns arbeiten?=Por que a senhora quer trabalhar conosco?|Was sind Ihre Schwächen?=Quais são seus pontos fracos?|Wo sehen Sie sich in fünf Jahren?=Onde a senhora se vê daqui a cinco anos?|Was ist Ihre Gehaltsvorstellung?=Qual é sua pretensão salarial?|Wir melden uns bis Ende der Woche.=Daremos retorno até o fim da semana.',
  dlg: 'Personalchef>b>Guten Tag, Frau Souza. Schön, dass Sie da sind. Bitte nehmen Sie Platz.=Boa tarde, sra. Souza. Que bom que veio. Sente-se, por favor.|Bewerberin>a>Guten Tag. Vielen Dank für die Einladung.=Boa tarde. Muito obrigada pelo convite.|Personalchef>b>Erzählen Sie doch bitte etwas über sich.=Fale um pouco sobre você, por favor.|Bewerberin>a>Gern. Ich komme aus Brasilien und habe drei Jahre in einem Hotel in Recife gearbeitet, vor allem an der Rezeption.=Claro. Sou do Brasil e trabalhei três anos num hotel em Recife, principalmente na recepção.|Personalchef>b>Und warum möchten Sie zu uns wechseln?=E por que a senhora quer vir para cá?|Bewerberin>a>Mich reizt besonders der Kontakt mit internationalen Kunden. Außerdem spreche ich Portugiesisch, Englisch und Deutsch.=O que mais me atrai é o contato com clientes internacionais. Além disso, falo português, inglês e alemão.|Personalchef>b>Das passt sehr gut. Wir melden uns bis Ende der Woche.=Isso combina muito bem. Damos retorno até o fim da semana.',
  dica: 'Na Alemanha, a pretensão salarial (**Gehaltsvorstellung**) é anual e bruta, e esperam um número. Pontualidade conta na avaliação: chegue 5 a 10 minutos antes. O "**(m/w/d)**" dos anúncios significa masculino, feminino e diverso: a vaga é para qualquer pessoa.',
  quiz: [
    { q: '"unbefristet" no anúncio significa…', o: ['temporário', 'por tempo indeterminado', 'meio período'], a: 1 },
    { q: 'Como se diz "currículo" em alemão?', o: ['Anschreiben', 'Lebenslauf', 'Zeugnis'], a: 1 },
    { q: 'Que pergunta mostra interesse no fim da entrevista?', o: ['Wie viel Urlaub habe ich?', 'Wie sieht ein typischer Arbeitstag aus?', 'Muss ich pünktlich sein?'], a: 1 },
  ] });

PK({ id: 'restaurant', e: '🍽️', t: 'Im Restaurant', pt: 'Pedindo comida num restaurante', lv: 'A1',
  cena: 'Você está num restaurante típico alemão (Gasthaus) com uma amiga. Peça mesa, escolha no cardápio, pergunte sobre alergias e peça a conta.',
  img: [{ f: 'restaurant', alt: 'Salão de um Gasthaus alemão com mesas de madeira' }, { f: 'restaurant-detalhe', alt: 'Cardápio de restaurante alemão sobre a mesa' }],
  ill: [
    { k: 'menu', t: 'Gasthaus Zur Linde', sub: 'Speisekarte', secoes: [
      { n: 'Vorspeisen', pt: 'Entradas', itens: 'Kartoffelsuppe=sopa de batata=4,90|Gemischter Salat=salada mista=5,50' },
      { n: 'Hauptgerichte', pt: 'Pratos principais', itens: 'Wiener Schnitzel mit Pommes=bife à milanesa de vitela com fritas=16,90|Bratwurst mit Sauerkraut=salsicha grelhada com chucrute=11,50|Käsespätzle=massa com queijo (vegetariana)=12,90|Gegrillter Lachs mit Gemüse=salmão grelhado com legumes=18,50' },
      { n: 'Nachspeisen', pt: 'Sobremesas', itens: 'Apfelstrudel mit Vanillesoße=strudel de maçã com creme de baunilha=6,50' },
      { n: 'Getränke', pt: 'Bebidas', itens: 'Mineralwasser 0,5 l=água mineral=3,20|Apfelschorle 0,4 l=suco de maçã com água com gás=3,50|Hausbier 0,5 l=cerveja da casa=4,60' }],
      nota: 'Alle Preise in Euro inklusive Mehrwertsteuer=Todos os preços em euros, com impostos' },
    { k: 'receipt', t: 'Rechnung · Tisch 7', linhas: '1 x Wiener Schnitzel=bife à milanesa=16,90|1 x Käsespätzle=massa com queijo=12,90|2 x Apfelschorle=suco de maçã com gás=7,00', total: 'Summe=36,80', extra: 'Trinkgeld=gorjeta|Zusammen oder getrennt?=Junto ou separado?|Stimmt so!=Pode ficar com o troco!' },
  ],
  frases: 'Einen Tisch für zwei Personen, bitte.=Uma mesa para duas pessoas, por favor.|Ich hätte gern die Speisekarte.=Gostaria do cardápio.|Was können Sie empfehlen?=O que o senhor recomenda?|Ich nehme die Käsespätzle.=Vou querer o käsespätzle.|Ist das Gericht vegetarisch?=Esse prato é vegetariano?|Ich bin allergisch gegen Nüsse.=Tenho alergia a nozes.|Die Rechnung, bitte.=A conta, por favor.|Stimmt so!=Pode ficar com o troco!',
  ouvir: 'Haben Sie reserviert?=Vocês têm reserva?|Was darf ich Ihnen bringen?=O que posso trazer para vocês?|Möchten Sie schon bestellen?=Já querem pedir?|Hat es Ihnen geschmeckt?=Gostaram da comida?|Zusammen oder getrennt?=Junto ou separado?|Das macht sechsunddreißig Euro achtzig.=Dá 36,80 euros.',
  dlg: 'Kellner>b>Guten Abend! Was darf ich Ihnen bringen?=Boa noite! O que posso trazer?|Gast>a>Ich nehme die Käsespätzle und eine Apfelschorle, bitte.=Vou querer o käsespätzle e uma apfelschorle, por favor.|Kellner>b>Gern. Und für Ihre Freundin?=Claro. E para a sua amiga?|Gast>a>Sie nimmt das Wiener Schnitzel. Ist da Schweinefleisch drin?=Ela quer o wiener schnitzel. Tem carne de porco?|Kellner>b>Nein, das Wiener Schnitzel ist immer aus Kalbfleisch.=Não, o wiener schnitzel é sempre de vitela.|Gast>a>Perfekt. Und später die Rechnung, bitte. Wir zahlen getrennt.=Perfeito. E depois a conta, por favor. Vamos pagar separado.',
  dica: 'A gorjeta (**Trinkgeld**) fica entre 5 e 10% e é dita na hora de pagar: a conta deu 36,80 e você entrega 40 dizendo **Stimmt so!** ou "Vierzig, bitte". Água da torneira raramente é servida de graça: peça **Mineralwasser**. E o garçom não traz a conta sozinho: é preciso pedir.',
  quiz: [
    { q: 'Quanto custa a Kartoffelsuppe?', o: ['4,90 €', '5,50 €', '6,50 €'], a: 0 },
    { q: 'O que é "Nachspeisen" no cardápio?', o: ['entradas', 'bebidas', 'sobremesas'], a: 2 },
    { q: 'A conta deu 36,80 € e você quer pagar 40 €. O que diz?', o: ['Die Rechnung, bitte.', 'Vierzig, bitte. Stimmt so!', 'Zusammen oder getrennt?'], a: 1 },
    { q: 'Que prato é vegetariano?', o: ['Bratwurst mit Sauerkraut', 'Käsespätzle', 'Wiener Schnitzel'], a: 1 },
  ] });

PK({ id: 'kneipe', e: '🍺', t: 'In der Kneipe', pt: 'Pedindo uma cerveja no pub', lv: 'A2',
  cena: 'Sexta à noite, você entra numa Kneipe (o bar de bairro alemão) com colegas. Peça cerveja, entenda os tamanhos e brinde do jeito alemão.',
  img: [{ f: 'kneipe', alt: 'Interior de uma Kneipe alemã com balcão de madeira e chope' }, { f: 'kneipe-detalhe', alt: 'Copos de chope e porta-copos com riscos' }],
  ill: [
    { k: 'menu', estilo: 'quadro', t: 'Zum Goldenen Hirsch', sub: 'Getränkekarte', secoes: [
      { n: 'Bier vom Fass', pt: 'Chope', itens: 'Pils 0,3 l=pilsen pequeno=3,20|Pils 0,5 l=pilsen grande=4,50|Weizen 0,5 l=cerveja de trigo=4,90|Radler 0,3 l=cerveja com limonada, pequeno=3,10|Radler 0,5 l=cerveja com limonada, grande=4,30' },
      { n: 'Aus der Flasche', pt: 'De garrafa', itens: 'Alkoholfreies Bier 0,5 l=cerveja sem álcool=3,90|Alkoholfreies Weizen 0,5 l=cerveja de trigo sem álcool=4,20' },
      { n: 'Ohne Alkohol', pt: 'Sem álcool', itens: 'Apfelschorle 0,4 l=suco de maçã com água com gás=3,40|Cola 0,33 l=refrigerante de cola=3,10' }],
      nota: 'Happy Hour Montag bis Freitag von 18 bis 20 Uhr=Happy hour de segunda a sexta, das 18h às 20h' },
    { k: 'signs', estilo: 'pub', items: '🚭>Rauchen verboten=Proibido fumar|🍺>Bier vom Fass=Chope|🔞>Kein Ausschank an Jugendliche unter 16 Jahren=Não servimos álcool a menores de 16|🕛>Letzte Bestellung=Último pedido|💶>Nur Barzahlung=Só dinheiro' },
  ],
  frases: 'Ein Bier, bitte.=Uma cerveja, por favor.|Ein großes Pils, bitte.=Um pilsen grande, por favor.|Was haben Sie vom Fass?=O que vocês têm de chope?|Ich hätte gern ein Radler.=Queria um radler.|Noch eine Runde, bitte!=Mais uma rodada, por favor!|Prost!=Saúde!|Ist der Platz noch frei?=Esse lugar está livre?|Diese Runde geht auf mich.=Essa rodada é por minha conta.',
  ouvir: 'Groß oder klein?=Grande ou pequeno?|Vom Fass oder aus der Flasche?=Chope ou garrafa?|Noch eins?=Mais um?|Zum Wohl!=Saúde! (mais formal)|Letzte Bestellung!=Último pedido!|Kann ich schon abkassieren?=Posso já fechar a conta?',
  dlg: 'Wirtin>a>Hallo! Was darf’s sein?=Oi! O que vai ser?|Gast>b>Zwei Pils und ein Radler, bitte.=Dois pilsen e um radler, por favor.|Wirtin>a>Groß oder klein?=Grande ou pequeno?|Gast>b>Die Pils groß und das Radler klein, bitte.=Os pilsen grandes e o radler pequeno, por favor.|Wirtin>a>Kommt sofort. Zahlt ihr zusammen?=Já sai. Vocês pagam junto?|Gast>b>Ja, diese Runde geht auf mich. Prost!=Sim, essa rodada é por minha conta. Saúde!',
  dica: 'Ao brindar com **Prost!**, olhe nos olhos de cada pessoa: a tradição diz que quem desvia o olhar terá sete anos de azar. Em muitas Kneipen, quem serve marca cada bebida com um risco no **Bierdeckel** (porta-copos) e soma tudo no fim. E "Diese Runde geht auf mich" é bem-vindo: na próxima rodada, outra pessoa paga.',
  quiz: [
    { q: 'Quanto custa um Pils grande (0,5 l)?', o: ['3,20 €', '4,50 €', '4,90 €'], a: 1 },
    { q: 'O que é "vom Fass"?', o: ['de garrafa', 'chope (da torneira)', 'sem álcool'], a: 1 },
    { q: 'Ao brindar na Alemanha, o que se faz?', o: ['bater o copo na mesa', 'olhar nos olhos de cada pessoa', 'beber tudo de uma vez'], a: 1 },
  ] });

PK({ id: 'einkaufen', e: '🏷️', t: 'Was kostet das?', pt: 'Perguntando preços em lojas', lv: 'A1',
  cena: 'Você está numa loja de roupas em liquidação. Leia as etiquetas, pergunte tamanhos e preços, experimente e pague no caixa.',
  img: [{ f: 'einkaufen', alt: 'Loja de roupas com cartazes de liquidação' }, { f: 'einkaufen-detalhe', alt: 'Etiquetas de preço com descontos' }],
  ill: [
    { k: 'tags', tags: 'Jeans=calça jeans=49,99 €=69,99 €=-30 %|Turnschuhe=tênis=79,95 €==Neu|T-Shirt=camiseta=12,99 €==2 für 1|Winterjacke=jaqueta de inverno=89,00 €=129,00 €=Sale|Schal=cachecol=19,90 €==reduziert' },
    { k: 'signs', estilo: 'loja', items: '🧾>Kasse=Caixa|👗>Umkleidekabinen=Provadores|🏷️>Sale=Liquidação|🔓>Geöffnet=Aberto|🔒>Geschlossen=Fechado|↩️>Umtausch nur mit Kassenbon=Troca só com a nota' },
  ],
  frases: 'Was kostet das?=Quanto custa isso?|Wie viel kosten die Turnschuhe?=Quanto custam os tênis?|Haben Sie das in Größe 38?=Tem esse no tamanho 38?|Kann ich das anprobieren?=Posso experimentar?|Gibt es das auch in Blau?=Tem também em azul?|Ist das im Angebot?=Está em promoção?|Kann ich mit Karte zahlen?=Posso pagar com cartão?|Kann ich das umtauschen?=Posso trocar?',
  ouvir: 'Kann ich Ihnen helfen?=Posso ajudar?|Die Umkleidekabinen sind dort hinten.=Os provadores ficam lá no fundo.|Das ist schon reduziert.=Já está com desconto.|Bar oder mit Karte?=Dinheiro ou cartão?|Brauchen Sie eine Tüte?=Precisa de sacola?|Bitte heben Sie den Kassenbon auf.=Guarde a nota, por favor.',
  dlg: 'Verkäufer>b>Hallo! Kann ich Ihnen helfen?=Olá! Posso ajudar?|Kundin>a>Ja, was kostet diese Jeans?=Sim, quanto custa esse jeans?|Verkäufer>b>Neunundvierzig neunundneunzig. Sie ist schon um dreißig Prozent reduziert.=49,99. Já está com 30% de desconto.|Kundin>a>Haben Sie sie in Größe 38?=Tem no tamanho 38?|Verkäufer>b>Ja, hier. Die Umkleidekabinen sind dort hinten.=Sim, aqui. Os provadores ficam lá no fundo.|Kundin>a>Danke! Sie passt gut. Ich nehme sie.=Obrigada! Serviu bem. Vou levar.|Verkäufer>b>Super. Bar oder mit Karte?=Ótimo. Dinheiro ou cartão?',
  dica: 'A numeração de roupas e sapatos pode ser diferente da brasileira: confira a tabela de medidas da loja antes de comprar. Algumas lojas pequenas ainda preferem dinheiro, então procure o aviso **Kartenzahlung möglich**. E guarde o **Kassenbon**: sem ele, a troca pode ser recusada.',
  quiz: [
    { q: 'Quanto custava a jaqueta de inverno antes da liquidação?', o: ['89,00 €', '129,00 €', '49,99 €'], a: 1 },
    { q: 'O que significa "Umkleidekabinen"?', o: ['caixa', 'provadores', 'vitrine'], a: 1 },
    { q: '"Bar oder mit Karte?" pergunta sobre…', o: ['o tamanho', 'a forma de pagamento', 'a cor'], a: 1 },
  ] });

PK({ id: 'sehenswuerdigkeiten', e: '🏰', t: 'Sehenswürdigkeiten', pt: 'Orientações em pontos turísticos', lv: 'A2',
  cena: 'Você visita um castelo-museu (fictício) no sul da Alemanha. Leia horários e preços, compre o ingresso e entenda as regras da visita.',
  img: [{ f: 'sehenswuerdigkeiten', alt: 'Castelo alemão com turistas na entrada' }, { f: 'sehenswuerdigkeiten-detalhe', alt: 'Placa com horários e preços do museu' }],
  ill: [
    { k: 'info', estilo: 'placa', t: 'Schloss Lindenhain', linhas: 'Öffnungszeiten=horário de funcionamento=Di–So 9–18 Uhr|Montag=segunda-feira=geschlossen|Erwachsene=adultos=12 €|ermäßigt=meia (estudantes, idosos)=8 €|Kinder unter 6 Jahren=crianças até 6 anos=frei|Führung auf Deutsch=visita guiada em alemão=11 und 14 Uhr|Führung auf Englisch=visita guiada em inglês=12 Uhr|Audioguide=audioguia=3 €|letzter Einlass=última entrada=17:30 Uhr' },
    { k: 'signs', estilo: 'museu', items: '🎟️>Kasse=Bilheteria|🚪>Eingang=Entrada|🚶>Ausgang=Saída|🧥>Garderobe=Guarda-volumes|📷>Fotografieren ohne Blitz erlaubt=Fotos sem flash permitidas|🚫>Bitte nicht berühren=Não toque, por favor|👥>Treffpunkt Führungen=Ponto de encontro das visitas' },
  ],
  frases: 'Wann hat das Museum geöffnet?=Quando o museu abre?|Wie viel kostet der Eintritt?=Quanto custa a entrada?|Gibt es eine Ermäßigung für Studierende?=Tem desconto para estudantes?|Gibt es eine Führung auf Englisch?=Tem visita guiada em inglês?|Darf man hier fotografieren?=Pode fotografar aqui?|Wo ist der Eingang?=Onde fica a entrada?|Wie alt ist das Schloss?=Quantos anos tem o castelo?|Können Sie ein Foto von uns machen?=Pode tirar uma foto nossa?',
  ouvir: 'Montags ist das Museum geschlossen.=Às segundas o museu fecha.|Die nächste Führung beginnt um vierzehn Uhr.=A próxima visita guiada começa às 14h.|Bitte geben Sie Ihren Rucksack an der Garderobe ab.=Deixe sua mochila no guarda-volumes, por favor.|Fotografieren ohne Blitz ist erlaubt.=Fotos sem flash são permitidas.|Der Treffpunkt ist am Eingang.=O ponto de encontro é na entrada.|Haben Sie einen Studentenausweis?=Tem carteirinha de estudante?',
  dlg: 'Tourist>b>Guten Tag! Zwei Karten, bitte. Gibt es eine Ermäßigung für Studierende?=Bom dia! Dois ingressos, por favor. Tem desconto para estudantes?|Kassiererin>a>Ja, mit Studentenausweis kostet der Eintritt acht Euro.=Sim, com carteirinha de estudante a entrada custa 8 euros.|Tourist>b>Super, ich bin Student. Meine Freundin zahlt den normalen Preis.=Ótimo, sou estudante. Minha namorada paga o preço normal.|Kassiererin>a>Das macht dann zwanzig Euro. Möchten Sie einen Audioguide?=Então dá 20 euros. Querem um audioguia?|Tourist>b>Gibt es auch eine Führung auf Englisch?=Tem também visita guiada em inglês?|Kassiererin>a>Ja, um zwölf Uhr. Der Treffpunkt ist am Eingang.=Sim, ao meio-dia. O ponto de encontro é na entrada.',
  dica: 'Muitos museus alemães fecham às **segundas-feiras** (montags geschlossen). Estudantes e idosos costumam pagar meia (**ermäßigt**): leve um documento. Mochilas grandes vão para a **Garderobe** ou para os armários (**Schließfächer**), que muitas vezes pedem uma moeda.',
  quiz: [
    { q: 'Quanto paga um estudante?', o: ['12 €', '8 €', 'nada'], a: 1 },
    { q: 'Até que horas dá para entrar no castelo?', o: ['17h30', '18h', '14h'], a: 0 },
    { q: 'O que significa "Bitte nicht berühren"?', o: ['Não fotografe', 'Não toque', 'Não coma'], a: 1 },
  ] });

PK({ id: 'hotel', e: '🏨', t: 'Im Hotel', pt: 'No hotel', lv: 'A2',
  cena: 'Você chega ao hotel em Munique depois de um voo longo. Faça o check-in, pergunte pelo café da manhã e pelo Wi-Fi e resolva um problema no quarto.',
  img: [{ f: 'hotel', alt: 'Recepção de hotel com recepcionista e hóspede com mala' }],
  ill: [
    { k: 'info', t: 'Hotel Am Markt · Rezeption', linhas: 'Check-in=entrada no quarto=ab 15 Uhr|Check-out=saída do quarto=bis 11 Uhr|Frühstück=café da manhã=7–10 Uhr, 1. Stock|WLAN=Wi-Fi=Passwort auf der Schlüsselkarte|Rezeption=recepção=24 Stunden geöffnet|Gepäckaufbewahrung=guarda-malas=kostenlos' },
    { k: 'signs', estilo: 'hotel', items: '🛎️>Rezeption=Recepção|🛗>Aufzug=Elevador|🏃>Notausgang=Saída de emergência|🍳>Frühstücksraum=Salão do café da manhã|🤫>Bitte nicht stören=Não perturbe|🧹>Bitte Zimmer aufräumen=Favor arrumar o quarto' },
  ],
  frases: 'Ich habe ein Zimmer auf den Namen Souza reserviert.=Tenho um quarto reservado no nome Souza.|Ist das Frühstück inklusive?=O café da manhã está incluído?|Bis wann muss ich auschecken?=Até que horas preciso fazer o check-out?|Wie ist das WLAN-Passwort?=Qual é a senha do Wi-Fi?|Die Heizung in meinem Zimmer funktioniert nicht.=O aquecimento do meu quarto não funciona.|Kann ich mein Gepäck hier lassen?=Posso deixar minha bagagem aqui?|Können Sie mir ein Taxi rufen?=Pode chamar um táxi para mim?',
  ouvir: 'Darf ich Ihren Ausweis sehen?=Posso ver seu documento?|Ihr Zimmer ist im dritten Stock.=Seu quarto fica no terceiro andar.|Das Frühstück gibt es von sieben bis zehn Uhr.=O café da manhã é das 7h às 10h.|Hier ist Ihre Schlüsselkarte.=Aqui está seu cartão-chave.|Der Aufzug ist rechts.=O elevador fica à direita.|Ich schicke sofort jemanden.=Mando alguém imediatamente.',
  dlg: 'Rezeptionist>b>Guten Abend, willkommen im Hotel Am Markt!=Boa noite, bem-vinda ao Hotel Am Markt!|Gast>a>Guten Abend. Ich habe ein Zimmer auf den Namen Souza reserviert.=Boa noite. Tenho um quarto reservado no nome Souza.|Rezeptionist>b>Einen Moment … Ja, drei Nächte, ein Einzelzimmer. Darf ich Ihren Ausweis sehen?=Um momento… Sim, três noites, quarto individual. Posso ver seu documento?|Gast>a>Hier, bitte. Ist das Frühstück inklusive?=Aqui está. O café da manhã está incluído?|Rezeptionist>b>Ja, von sieben bis zehn Uhr im ersten Stock. Hier ist Ihre Schlüsselkarte, Zimmer dreihundertzwölf.=Sim, das 7h às 10h no primeiro andar. Aqui está seu cartão-chave, quarto 312.|Gast>a>Vielen Dank! Und wie ist das WLAN-Passwort?=Muito obrigada! E qual é a senha do Wi-Fi?|Rezeptionist>b>Das steht auf der Schlüsselkarte. Schönen Aufenthalt!=Está no cartão-chave. Boa estadia!',
  dica: 'No elevador, o térreo aparece como **EG** (Erdgeschoss) ou **0**, e os andares abaixo dele como **UG** (Untergeschoss). Em muitos hotéis o café da manhã é cobrado à parte: confirme se está **inklusive**. E a placa de não perturbe na maçaneta se chama **Bitte nicht stören**.',
  quiz: [
    { q: 'Até que horas é o check-out?', o: ['10h', '11h', '15h'], a: 1 },
    { q: 'O que é "Aufzug"?', o: ['escada', 'elevador', 'saída'], a: 1 },
    { q: '"Bitte nicht stören" significa…', o: ['Favor arrumar o quarto', 'Não perturbe', 'Saída de emergência'], a: 1 },
  ] });

PK({ id: 'bahnhof', e: '🚆', t: 'Am Bahnhof', pt: 'Na estação de trem', lv: 'A2',
  cena: 'Você vai de trem de Frankfurt a Hamburgo. Compre a passagem, ache a plataforma no painel e entenda os avisos do alto-falante.',
  img: [{ f: 'bahnhof', alt: 'Plataforma de estação alemã com trem de alta velocidade e painel' }, { f: 'bahnhof-detalhe', alt: 'Painel de partidas de trem' }],
  ill: [
    { k: 'board', estilo: 'trem', t: 'Abfahrt · Frankfurt Hauptbahnhof', cols: 'Zeit=horário|Zug=trem|Richtung=destino|Gleis=plataforma|Hinweis=aviso',
      rows: [['10:16', 'ICE 578', 'Hamburg-Altona', '7', '+10'], ['10:20', 'RE 4512', 'Gießen', '12', ''], ['10:28', 'S8', 'Flughafen', '102', ''], ['10:34', 'IC 2024', 'Köln Hbf', '9', 'Gleiswechsel'], ['10:45', 'ICE 1093', 'München Hbf', '6', 'fällt aus']],
      leg: 'Gleiswechsel=mudança de plataforma|fällt aus=cancelado|+10=dez minutos de atraso|Hauptbahnhof=estação central' },
    { k: 'ticket', t: 'Fahrkarte · Passagem', campos: 'Von=de=Frankfurt Hbf|Nach=para=Hamburg-Altona|Hinfahrt=ida=12.05., 10:16|Klasse=classe=2|Zug=trem=ICE 578|Wagen=vagão=24|Platz=assento=56' },
    { k: 'signs', estilo: 'trem', items: '🚉>Gleis=Plataforma|ℹ️>Reisezentrum=Central de atendimento|🔐>Schließfächer=Armários|🎫>Fahrkarten=Passagens|🚇>U-Bahn=Metrô|🚌>Busbahnhof=Rodoviária' },
  ],
  frases: 'Eine Fahrkarte nach Hamburg, bitte.=Uma passagem para Hamburgo, por favor.|Hin und zurück, bitte.=Ida e volta, por favor.|Von welchem Gleis fährt der Zug?=De que plataforma sai o trem?|Muss ich umsteigen?=Preciso fazer baldeação?|Ist dieser Platz noch frei?=Esse lugar está livre?|Hat der Zug Verspätung?=O trem está atrasado?|Wo ist Wagen vierundzwanzig?=Onde fica o vagão 24?',
  ouvir: 'Einfach oder hin und zurück?=Só ida ou ida e volta?|Erste oder zweite Klasse?=Primeira ou segunda classe?|Der ICE nach München fällt heute aus.=O ICE para Munique foi cancelado hoje.|Bitte einsteigen und Türen schließen!=Embarquem e fechem as portas, por favor!|Nächster Halt: Hamburg-Altona.=Próxima parada: Hamburg-Altona.|Die Fahrkarten, bitte!=As passagens, por favor!',
  dlg: 'Reisender>b>Guten Tag, eine Fahrkarte nach Hamburg, bitte.=Bom dia, uma passagem para Hamburgo, por favor.|Mitarbeiterin>a>Einfach oder hin und zurück?=Só ida ou ida e volta?|Reisender>b>Einfach, zweite Klasse. Wann fährt der nächste Zug?=Só ida, segunda classe. Quando sai o próximo trem?|Mitarbeiterin>a>Um zehn Uhr sechzehn von Gleis sieben. Er hat aber zehn Minuten Verspätung.=Às 10h16, da plataforma 7. Mas está dez minutos atrasado.|Reisender>b>Muss ich umsteigen?=Preciso fazer baldeação?|Mitarbeiterin>a>Nein, der ICE fährt direkt nach Hamburg-Altona.=Não, o ICE vai direto para Hamburg-Altona.',
  dica: 'Atrasos e mudanças de plataforma (**Gleiswechsel**) são comuns: confira o painel até o último minuto. **Hbf** é a abreviação de Hauptbahnhof, a estação central. No transporte urbano, alguns bilhetes precisam ser validados no **Entwerter** antes de embarcar.',
  quiz: [
    { q: 'De que plataforma sai o ICE para Hamburgo?', o: ['6', '7', '9'], a: 1 },
    { q: 'O que significa "fällt aus"?', o: ['está atrasado', 'foi cancelado', 'mudou de plataforma'], a: 1 },
    { q: 'Como pedir só ida?', o: ['Hin und zurück, bitte.', 'Einfach, bitte.', 'Erste Klasse, bitte.'], a: 1 },
  ] });

PK({ id: 'apotheke', e: '💊', t: 'In der Apotheke', pt: 'Na farmácia', lv: 'A2',
  cena: 'Você acordou com dor de garganta num domingo. Ache a farmácia de plantão, explique o que sente e entenda como tomar o remédio.',
  img: [{ f: 'apotheke', alt: 'Fachada de farmácia alemã com o grande A vermelho' }],
  ill: [
    { k: 'signs', estilo: 'apo', items: '🅰️>Apotheke=Farmácia|🌙>Notdienst=Plantão|💊>rezeptfrei=Sem receita|📋>rezeptpflichtig=Só com receita|🕘>Montag bis Freitag 8 bis 19 Uhr=Segunda a sexta, 8h às 19h' },
    { k: 'info', estilo: 'papel', t: 'Packungsbeilage · Bula', linhas: 'Dosierung=dosagem=3 x täglich 1 Tablette|Einnahme=modo de usar=nach dem Essen mit Wasser|Nebenwirkungen=efeitos colaterais=Müdigkeit, Kopfschmerzen|Nicht einnehmen bei=não tomar em caso de=Schwangerschaft, Allergie|Haltbar bis=validade=03/2028' },
  ],
  frases: 'Ich habe Halsschmerzen und Fieber.=Estou com dor de garganta e febre.|Haben Sie etwas gegen Kopfschmerzen?=Tem algo para dor de cabeça?|Brauche ich dafür ein Rezept?=Preciso de receita para isso?|Wie oft muss ich das nehmen?=Com que frequência devo tomar?|Gibt es Nebenwirkungen?=Tem efeitos colaterais?|Ich bin allergisch gegen Penicillin.=Sou alérgica a penicilina.|Wo ist die nächste Notdienst-Apotheke?=Onde fica a farmácia de plantão mais próxima?',
  ouvir: 'Seit wann haben Sie die Beschwerden?=Desde quando a senhora tem esses sintomas?|Das ist rezeptpflichtig.=Isso só com receita.|Nehmen Sie dreimal täglich eine Tablette.=Tome um comprimido três vezes ao dia.|Bitte nach dem Essen einnehmen.=Tome depois das refeições.|Wenn es nicht besser wird, gehen Sie bitte zum Arzt.=Se não melhorar, procure um médico.|Gute Besserung!=Melhoras!',
  dlg: 'Apotheker>b>Guten Tag, was kann ich für Sie tun?=Bom dia, em que posso ajudar?|Kundin>a>Ich habe seit gestern Halsschmerzen. Haben Sie etwas dagegen?=Estou com dor de garganta desde ontem. Tem algo para isso?|Apotheker>b>Haben Sie auch Fieber?=Está com febre também?|Kundin>a>Nein, nur Halsschmerzen und ein bisschen Husten.=Não, só dor de garganta e um pouco de tosse.|Apotheker>b>Dann empfehle ich diese Lutschtabletten. Nehmen Sie alle drei Stunden eine.=Então recomendo estas pastilhas. Chupe uma a cada três horas.|Kundin>a>Brauche ich dafür ein Rezept?=Preciso de receita?|Apotheker>b>Nein, die sind rezeptfrei. Gute Besserung!=Não, são sem receita. Melhoras!',
  dica: 'Na Alemanha, a maioria dos remédios, até analgésicos simples, só é vendida em farmácia (**Apotheke**), reconhecida pelo grande **A** vermelho. Fora do horário há sempre uma farmácia de plantão (**Notdienst**): a lista fica na porta de qualquer farmácia. Em emergência, ligue **112**.',
  quiz: [
    { q: 'O que significa "rezeptpflichtig"?', o: ['sem receita', 'só com receita', 'em promoção'], a: 1 },
    { q: 'Onde fica a lista das farmácias de plantão?', o: ['no supermercado', 'na porta de qualquer farmácia', 'no hotel'], a: 1 },
    { q: 'Segundo a bula, como tomar o remédio?', o: ['3 vezes ao dia, depois de comer', '1 vez ao dia, em jejum', 'quando quiser'], a: 0 },
  ] });

PK({ id: 'baeckerei', e: '🥨', t: 'In der Bäckerei', pt: 'Na padaria', lv: 'A1',
  cena: 'Sábado de manhã você vai à padaria do bairro comprar pão e um café. A fila anda rápido: prepare as frases antes.',
  img: [{ f: 'baeckerei', alt: 'Balcão de padaria alemã com pretzels e pães' }],
  ill: [
    { k: 'menu', estilo: 'quadro', t: 'Bäckerei Krume', sub: 'Unser Angebot', secoes: [
      { n: 'Brot und Brötchen', pt: 'Pães', itens: 'Brötchen=pãozinho=0,45|Laugenbrezel=pretzel=1,10|Vollkornbrötchen=pãozinho integral=0,75|Roggenbrot 750 g=pão de centeio=4,20' },
      { n: 'Süßes', pt: 'Doces', itens: 'Croissant=croissant=1,40|Berliner=sonho=1,60|Apfelkuchen=torta de maçã (fatia)=2,90' },
      { n: 'Heiße Getränke', pt: 'Bebidas quentes', itens: 'Kaffee=café=2,40|Cappuccino=cappuccino=3,20|Tee=chá=2,20' }],
      nota: 'Zum Mitnehmen oder zum Hieressen?=Para viagem ou para comer aqui?' },
    { k: 'signs', items: '🥨>Bäckerei=Padaria|☕>Café=Café|🕖>Sonntag von 7 bis 11 Uhr geöffnet=Domingo aberto das 7h às 11h|💳>Kartenzahlung ab 5 Euro=Cartão a partir de 5 euros' },
  ],
  frases: 'Ich hätte gern zwei Brötchen.=Queria dois pãezinhos.|Eine Brezel, bitte.=Um pretzel, por favor.|Was ist das?=O que é isso?|Ist da Fleisch drin?=Tem carne?|Zum Mitnehmen, bitte.=Para viagem, por favor.|Einen Kaffee zum Hieressen, bitte.=Um café para tomar aqui, por favor.|Das ist alles, danke.=É só isso, obrigada.',
  ouvir: 'Was darf es sein?=O que vai ser?|Sonst noch etwas?=Mais alguma coisa?|Zum Mitnehmen oder zum Hieressen?=Para viagem ou para comer aqui?|Das macht sechs Euro zehn.=Dá 6,10 euros.|Möchten Sie eine Tüte?=Quer um saquinho?|Schönes Wochenende!=Bom fim de semana!',
  dlg: 'Bäckerin>a>Guten Morgen! Was darf es sein?=Bom dia! O que vai ser?|Kunde>b>Guten Morgen! Vier Brötchen und eine Brezel, bitte.=Bom dia! Quatro pãezinhos e um pretzel, por favor.|Bäckerin>a>Gern. Sonst noch etwas?=Claro. Mais alguma coisa?|Kunde>b>Ja, einen Cappuccino zum Mitnehmen.=Sim, um cappuccino para viagem.|Bäckerin>a>Das macht sechs Euro zehn.=Dá 6,10 euros.|Kunde>b>Hier, bitte. Schönes Wochenende!=Aqui está. Bom fim de semana!|Bäckerin>a>Danke, Ihnen auch!=Obrigada, para o senhor também!',
  dica: 'Na padaria alemã a fila anda rápido: diga logo o que quer e quantas unidades. Aos domingos quase todo o comércio fecha, mas muitas padarias abrem pela manhã. Prove a **Laugenbrezel** e o **Berliner**, que em Berlim, curiosamente, se chama **Pfannkuchen**.',
  quiz: [
    { q: 'Quanto custam dois Brötchen?', o: ['0,90 €', '0,45 €', '1,10 €'], a: 0 },
    { q: 'O que significa "zum Mitnehmen"?', o: ['para comer aqui', 'para viagem', 'sem açúcar'], a: 1 },
    { q: '"Sonst noch etwas?" significa…', o: ['Mais alguma coisa?', 'Quanto custa?', 'Está quente?'], a: 0 },
  ] });

PK({ id: 'supermarkt', e: '🛒', t: 'Im Supermarkt', pt: 'No supermercado', lv: 'A1',
  cena: 'Sua primeira compra num supermercado alemão: o carrinho pede uma moeda, as garrafas voltam pela máquina do Pfand e o caixa é muito rápido.',
  img: [{ f: 'supermarkt', alt: 'Corredor de supermercado alemão com etiquetas de preço' }, { f: 'supermarkt-detalhe', alt: 'Máquina de devolução de garrafas (Pfandautomat)' }],
  ill: [
    { k: 'tags', estilo: 'mercado', tags: 'Vollmilch 1 l=leite integral=1,19 €==|Bananen 1 kg=bananas, o quilo=1,69 €==|Mineralwasser 1,5 l=água mineral=0,59 €==+ 0,25 € Pfand|Kaffee 500 g=café=5,99 €=7,49 €=Angebot|Brot 500 g=pão=1,99 €==' },
    { k: 'receipt', t: 'Kassenbon', linhas: 'Vollmilch=leite integral=1,19|Bananen 1,2 kg=bananas=2,03|Mineralwasser 6 x 1,5 l=água mineral=3,54|Pfand=depósito das garrafas=1,50|Kaffee=café=5,99|Pfandbon=vale do Pfand=-2,25', total: 'Summe=12,00', extra: 'Bar=em dinheiro|Karte=cartão|Pfandbon=vale das garrafas devolvidas' },
    { k: 'signs', items: '♻️>Pfandautomat=Máquina de devolução de garrafas|🛒>Einkaufswagen=Carrinho de compras|🧾>Kasse=Caixa|🥕>Obst und Gemüse=Frutas e verduras|🥛>Kühlregal=Refrigerados' },
  ],
  frases: 'Wo finde ich die Milch?=Onde encontro o leite?|Wo ist der Pfandautomat?=Onde fica a máquina de garrafas?|Haben Sie Tüten?=Vocês têm sacolas?|Kann ich mit Karte zahlen?=Posso pagar com cartão?|Brauche ich eine Münze für den Einkaufswagen?=Preciso de moeda para o carrinho?|Ist das im Angebot?=Está em promoção?',
  ouvir: 'Sammeln Sie Punkte?=Junta pontos?|Möchten Sie den Kassenbon?=Quer a nota?|Kasse drei ist jetzt geöffnet!=O caixa três está aberto!|Das Angebot gilt bis Samstag.=A promoção vale até sábado.|Der Pfandbon wird an der Kasse verrechnet.=O vale do Pfand é descontado no caixa.|Bitte stecken Sie die Karte ein.=Insira o cartão, por favor.',
  dlg: 'Kassierer>b>Hallo! Sammeln Sie Punkte?=Olá! Junta pontos?|Kundin>a>Nein, danke. Und hier ist mein Pfandbon.=Não, obrigada. E aqui está meu vale do Pfand.|Kassierer>b>Danke. Das macht zwölf Euro genau.=Obrigado. Dá doze euros exatos.|Kundin>a>Kann ich mit Karte zahlen?=Posso pagar com cartão?|Kassierer>b>Ja, natürlich. Möchten Sie den Kassenbon?=Sim, claro. Quer a nota?|Kundin>a>Ja, bitte. Schönen Tag noch!=Sim, por favor. Bom dia para você!',
  dica: 'Garrafas e latas com o símbolo do **Pfand** custam de 8 a 25 centavos a mais. Devolva no **Pfandautomat**, pegue o vale (**Pfandbon**) e entregue no caixa: o valor é descontado. No caixa tudo é rápido: vá passando as compras para o carrinho e embale depois, na bancada ao lado.',
  quiz: [
    { q: 'Quanto custa o café na promoção?', o: ['7,49 €', '5,99 €', '1,99 €'], a: 1 },
    { q: 'O que é o "Pfandbon"?', o: ['o vale das garrafas devolvidas', 'o cartão de pontos', 'a sacola'], a: 0 },
    { q: 'Quanto deu o total da nota?', o: ['14,25 €', '12,00 €', '11,99 €'], a: 1 },
  ] });
