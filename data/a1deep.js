// Aula passo a passo das lições do A1, para quem começa do zero. Mesma marcação do guide.js.
let ai = 0;
function A(md) { LESSONS[ai++].deep = md; }

// 1 · Hallo! Ich bin …
A(`
Hoje você aprende a dizer quem você é e a perguntar o nome de alguém. Para isso precisa de dois verbos: **sein** (ser, estar) e **heißen** (chamar-se).
# Passo 1: quem é quem (os pronomes)
Antes de qualquer verbo, você precisa das palavras que dizem **quem** faz a ação:
| Alemão | Português |
| ich | eu |
| du | você (informal) |
| er / sie / es | ele / ela / "ele" para coisas neutras |
| wir | nós |
| ihr | vocês (informal) |
| sie | eles, elas |
| Sie | o senhor, a senhora (formal) |
! **sie** (minúsculo) pode ser "ela" ou "eles". **Sie** (maiúsculo) é o tratamento formal. O verbo e o contexto mostram qual é.
# Passo 2: o verbo sein (ser e estar)
Em português temos dois verbos, ser e estar. O alemão usa um só: **sein**. Ele é irregular, ou seja, não segue regra e precisa ser decorado:
| Pessoa | sein | Português |
| ich | bin | eu sou / estou |
| du | bist | você é / está |
| er / sie / es | ist | ele, ela é / está |
| wir | sind | nós somos / estamos |
| ihr | seid | vocês são / estão |
| sie / Sie | sind | eles são · o senhor é |
~ Ich bin Ana. = Eu sou a Ana.
~ Ich bin müde. = Eu estou cansada.
~ Bist du Paulo? = Você é o Paulo?
BR Em alemão o pronome **nunca** some. Em português dizemos só "Estou cansada"; em alemão é obrigatório dizer "Ich bin müde".
# Passo 3: o verbo heißen (chamar-se)
heißen segue a regra normal dos verbos (você vai ver no dia 2), com um detalhe: com du, como o radical termina em ß, entra só um -t.
| Pessoa | heißen |
| ich | heiße |
| du | heißt |
| er / sie / es | heißt |
| wir | heißen |
| Sie | heißen |
~ Ich heiße Lena. = Eu me chamo Lena.
~ Wie heißt du? = Como você se chama?
~ Wie heißen Sie? = Como o senhor se chama?
# Passo 4: a regra de ouro da frase
Em alemão, o verbo conjugado fica sempre na **segunda posição**. Repare:
~ Ich heiße Lena. = 1 Ich · 2 heiße · Lena
~ Wie heißt du? = 1 Wie · 2 heißt · du
Na pergunta, "Wie" ocupa o primeiro lugar, o verbo continua em segundo e o sujeito (du) vai para depois.
# Passo 5: três jeitos de se apresentar
- Ich bin Ana. (Eu sou a Ana.)
- Ich heiße Ana. (Eu me chamo Ana.)
- Mein Name ist Ana. (Meu nome é Ana.)
Todas são corretas. Para responder a uma apresentação: **Freut mich!** (Prazer!).
> Decore como blocos: **Wie heißt du?** e **Ich heiße …**. Diga em voz alta com o seu nome agora.
? Como se diz "Eu sou o Paulo"? || Ich bin Paulo.
? Complete: Du ___ müde. (sein) || bist
? Por que em "Wie heißt du?" o "du" vem depois do verbo? || Porque o verbo fica na 2ª posição; Wie ocupa a primeira.
`);

// 2 · Woher kommst du?
A(`
Hoje você aprende a regra que vale para a maioria dos verbos alemães e a dizer de onde vem e onde mora.
# Passo 1: o radical
Todo verbo no infinitivo tem duas partes: o **radical** e a terminação **-en**. Tire o -en e sobra o radical:
| Infinitivo | Radical |
| kommen (vir) | komm- |
| wohnen (morar) | wohn- |
| lernen (aprender) | lern- |
# Passo 2: cole a terminação de cada pessoa
| Pessoa | Terminação | kommen | wohnen |
| ich | -e | komme | wohne |
| du | -st | kommst | wohnst |
| er / sie / es | -t | kommt | wohnt |
| wir | -en | kommen | wohnen |
| ihr | -t | kommt | wohnt |
| sie / Sie | -en | kommen | wohnen |
> Truque: wir e sie/Sie são sempre iguais ao infinitivo. Então você só precisa decorar quatro terminações: **e, st, t, t**.
# Passo 3: de onde (aus) e onde (in)
- **aus** + país ou cidade = de onde você vem: Ich komme **aus** Brasilien.
- **in** + cidade ou país = onde você está ou mora: Ich wohne **in** Berlin.
~ Ich komme aus Brasilien. = Eu venho do Brasil.
~ Ich wohne in São Paulo. = Eu moro em São Paulo.
~ Woher kommen Sie? = De onde o senhor vem?
BR Em português dizemos "do Brasil", com artigo. Em alemão a maioria dos países **não tem artigo**: aus Brasilien, aus Deutschland. Exceções: die Schweiz, die Türkei, die USA (aus der Schweiz).
# Passo 4: falar línguas (sprechen)
sprechen é quase regular, mas muda o **e para i** com du e er/sie/es:
|-
| ich spreche | du sprichst | er spricht | wir sprechen |
~ Ich spreche Portugiesisch. = Eu falo português.
~ Sprichst du Deutsch? = Você fala alemão?
# Passo 5: números de 0 a 12
|-
| 0 null | 1 eins | 2 zwei | 3 drei |
| 4 vier | 5 fünf | 6 sechs | 7 sieben |
| 8 acht | 9 neun | 10 zehn | 11 elf |
| 12 zwölf |  |  |  |
! Lembre a pronúncia: **zwei** soa "tsvai", **vier** soa "fiir", **zehn** soa "tsein".
? Conjugue "wohnen" com du. || du wohnst
? Complete: Ich komme ___ Brasilien. || aus
? Como se diz "Ela mora em Berlim"? || Sie wohnt in Berlin.
`);

// 3 · Was ist das?
A(`
Hoje você entra no assunto que mais assusta quem começa: o **gênero** das palavras. Calma: com o método certo, vira hábito.
# Passo 1: três famílias
Todo substantivo alemão pertence a uma de três famílias, e cada família tem seu artigo:
| Família | Artigo (o / a) | Exemplo |
| masculino | **der** | der Stuhl (a cadeira) |
| feminino | **die** | die Lampe (o abajur) |
| neutro | **das** | das Buch (o livro) |
BR Repare: "a cadeira" é feminina em português, mas der Stuhl é masculino. O gênero alemão **não segue o português**. Não tente adivinhar pela tradução.
# Passo 2: como decorar
- Nunca aprenda só "Stuhl". Aprenda o bloco **der Stuhl**.
- Use as cores da plataforma: **azul** der, **vermelho** die, **verde** das. Imagine a cadeira azul, o abajur vermelho, o livro verde.
- Diga sempre em voz alta com o artigo. O ouvido acaba sabendo o que soa certo.
# Passo 3: um, uma (ein, eine)
O artigo indefinido (um, uma) também depende da família:
| Família | o / a | um / uma |
| masculino | der | **ein** |
| feminino | die | **eine** |
| neutro | das | **ein** |
~ Das ist ein Stuhl. = Isso é uma cadeira.
~ Das ist eine Lampe. = Isso é um abajur.
~ Das ist ein Buch. = Isso é um livro.
> Truque: só o feminino ganha o -e: **eine**.
# Passo 4: substantivo com maiúscula
Repare que Stuhl, Lampe, Buch começam com maiúscula. Em alemão **todo substantivo** é assim, no meio da frase também.
# Passo 5: perguntar o que é algo
~ Was ist das? = O que é isso?
~ Das ist mein Handy. = Isso é o meu celular.
~ Ist das deine Tasche? = Essa é a sua bolsa?
Aqui **das** tem outro uso: significa "isso". O contexto mostra se é "isso" ou o artigo neutro.
# Pistas de gênero (vão ajudar muito)
| Terminação | Gênero | Exemplo |
| -ung, -heit, -keit, -ion | sempre die | die Wohnung |
| -chen, -lein | sempre das | das Mädchen |
| -e (na maioria) | quase sempre die | die Tasche |
| dias, meses, estações | der | der Montag |
? Complete: Das ist ___ Lampe. || eine (Lampe é feminino)
? Qual o artigo de Buch? || das (neutro)
? Como se diz "O que é isso?" || Was ist das?
`);

// 4 · Meine Familie
A(`
Hoje você aprende a falar da família e a dizer de quem é algo: meu, seu, dele, dela.
# Passo 1: os possessivos
| Pessoa | Possessivo | Português |
| ich | mein | meu, minha |
| du | dein | seu, sua (informal) |
| er | sein | dele |
| sie | ihr | dela |
| wir | unser | nosso |
| Sie | Ihr | seu, sua (formal) |
# Passo 2: o final segue a família da COISA
O possessivo se comporta igual a ein: sem final para der e das, com **-e** para die e para o plural.
| Família da coisa | Forma | Exemplo |
| der (Vater) | mein | mein Vater |
| die (Mutter) | meine | meine Mutter |
| das (Kind) | mein | mein Kind |
| plural (Eltern) | meine | meine Eltern |
! O que decide é o gênero da coisa possuída, não da pessoa que fala. Um homem diz **meine** Mutter; uma mulher diz **mein** Vater.
BR Em português "seu" pode ser dele, dela ou de você. Em alemão é mais claro: **sein** = dele, **ihr** = dela, **dein** = de você.
~ Das ist mein Bruder. = Esse é o meu irmão.
~ Meine Mutter heißt Eva. = A minha mãe se chama Eva.
~ Wie heißt dein Vater? = Como se chama o seu pai?
~ Ihr Mann kommt aus Wien. = O marido dela vem de Viena.
# Passo 3: ter (haben), primeira olhada
Para falar de família, você vai usar **haben** (ter). Ele é um pouco irregular:
|-
| ich habe | du hast | er / sie hat | wir haben | Sie haben |
~ Ich habe einen Bruder. = Eu tenho um irmão.
~ Hast du Kinder? = Você tem filhos?
> Por que "einen" e não "ein"? Porque o irmão é o objeto (tenho o quê?). Isso é o acusativo, e você vai entender direitinho no dia 9. Por enquanto, guarde o bloco **Ich habe einen Bruder**.
? Complete: Das ist ___ Schwester. (minha) || meine (Schwester é feminino)
? Como se diz "o pai dela"? || ihr Vater
? Conjugue haben com du. || du hast
`);

// 5 · Was machst du gern?
A(`
Hoje você domina a conjugação do presente, que serve para a maioria dos verbos, e aprende a dizer do que gosta.
# Passo 1: a tabela completa
Você já viu a regra no dia 2. Agora com seis verbos de lazer:
| Pessoa | Final | spielen | kochen | tanzen |
| ich | -e | spiele | koche | tanze |
| du | -st | spielst | kochst | tanzt |
| er / sie / es | -t | spielt | kocht | tanzt |
| wir | -en | spielen | kochen | tanzen |
| ihr | -t | spielt | kocht | tanzt |
| sie / Sie | -en | spielen | kochen | tanzen |
# Passo 2: dois casos especiais
- Radical que termina em **-t ou -d** ganha um **e** de apoio, senão não dá para pronunciar: arbeiten → du arbeit**e**st, er arbeit**e**t.
- Radical que termina em **s, ß, z** recebe só **-t** com du: tanzen → du tanzt; heißen → du heißt.
# Passo 3: um verbo serve para três tempos do português
BR **Ich koche** pode ser "eu cozinho", "eu estou cozinhando" ou até "eu vou cozinhar" (com uma palavra de tempo). O alemão não tem gerúndio: não procure um "cozinhando".
# Passo 4: gostar de fazer (gern)
Para dizer que gosta de fazer algo, use o verbo + **gern**:
~ Ich koche gern. = Eu gosto de cozinhar.
~ Ich koche nicht gern. = Eu não gosto de cozinhar.
~ Was machst du gern? = O que você gosta de fazer?
~ Ich spiele gern Fußball. = Eu gosto de jogar futebol.
! Não traduza "gostar" ao pé da letra aqui. Em alemão não se diz "Ich mag kochen" no dia a dia; o natural é **Ich koche gern**.
> Para coisas (não ações), use **mögen**: Ich mag Musik (eu gosto de música). Você verá mais sobre isso adiante.
? Conjugue "lernen" com er. || er lernt
? Conjugue "arbeiten" com du. || du arbeitest (com e de apoio)
? Como se diz "Ela gosta de dançar"? || Sie tanzt gern.
`);

// 6 · Fragen stellen
A(`
Hoje você aprende a fazer perguntas, a ferramenta mais útil de quem está aprendendo.
# Passo 1: perguntas com palavra interrogativa
| Palavra | Pergunta sobre | Exemplo |
| wer | pessoa (quem) | Wer ist das? |
| was | coisa (o que) | Was machst du? |
| wo | lugar (onde) | Wo wohnst du? |
| woher | origem (de onde) | Woher kommst du? |
| wohin | destino (para onde) | Wohin fährst du? |
| wann | tempo (quando) | Wann kommst du? |
| wie | modo (como) | Wie heißt du? |
| warum | motivo (por que) | Warum lernst du Deutsch? |
| wie viel | quantidade (quanto) | Wie viel kostet das? |
A ordem é sempre: **palavra W (1) + verbo (2) + sujeito + resto**.
~ Wann lernst du Deutsch? = Quando você estuda alemão?
~ Wo arbeitet sie? = Onde ela trabalha?
! Cuidado: **wer** soa "ver" e significa **quem**, não "onde". **Wo** é onde.
# Passo 2: perguntas de sim ou não
Sem palavra interrogativa, o **verbo vem em primeiro lugar**:
~ Du wohnst hier. = Você mora aqui. (afirmação)
~ Wohnst du hier? = Você mora aqui? (pergunta)
BR Em português a pergunta muitas vezes é só a entonação: "Você mora aqui?". Em alemão a ordem muda: o verbo pula para a frente.
# Passo 3: responder ja, nein e doch
- **Ja** = sim. **Nein** = não.
- **Doch** = "sim, sim!" para contradizer uma pergunta **negativa**:
~ Kommst du nicht? – Doch! = Você não vem? – Venho sim!
? Que palavra pergunta "de onde"? || woher
? Transforme em pergunta: Du arbeitest heute. || Arbeitest du heute?
? Como se diz "Por que você aprende alemão?" || Warum lernst du Deutsch?
`);

// 7 · Wie spät ist es?
A(`
Hoje você aprende os números até 100 e a dizer as horas, essencial para marcar compromissos.
# Passo 1: de 13 a 19
É unidade + **zehn**: dreizehn (13), vierzehn (14), fünfzehn (15).
! Duas exceções: **sechzehn** (16, sem o s) e **siebzehn** (17, sem o en).
# Passo 2: as dezenas
|-
| 20 zwanzig | 30 dreißig | 40 vierzig | 50 fünfzig |
| 60 sechzig | 70 siebzig | 80 achtzig | 90 neunzig |
| 100 hundert |  |  |  |
Repare: terminam em **-zig**, menos **dreißig** (30).
# Passo 3: a unidade vem primeiro
De 21 a 99, o alemão fala a unidade antes, ligada por **und**:
|-
| 21 | einundzwanzig | um e vinte |
| 35 | fünfunddreißig | cinco e trinta |
| 48 | achtundvierzig | oito e quarenta |
BR É como dizer "cinco e trinta" em vez de "trinta e cinco". Treine com números de telefone e preços.
# Passo 4: as horas
**Hora oficial** (rádio, trem, trabalho): Es ist vierzehn Uhr dreißig (14:30).
**Hora do dia a dia** (conversa):
| Hora | Alemão | Ideia |
| 3:00 | Es ist drei Uhr. | três horas |
| 3:15 | Viertel nach drei | um quarto depois das três |
| 3:30 | **halb vier** | meia para as quatro |
| 3:45 | Viertel vor vier | um quarto antes das quatro |
| 3:10 | zehn nach drei | dez depois das três |
| 3:50 | zehn vor vier | dez antes das quatro |
! A armadilha clássica: **halb vier** é 3:30, não 4:30. O alemão conta a meia hora em direção à próxima hora.
# Passo 5: a que horas?
Use **um** para horário de um evento: Der Kurs beginnt **um** neun Uhr.
~ Wie spät ist es? = Que horas são?
~ Es ist halb acht. = São sete e meia.
~ Um wie viel Uhr beginnt der Film? = A que horas começa o filme?
? Como se diz 67? || siebenundsechzig
? Que horas são "halb zehn"? || 9:30
? Complete: Wir essen ___ zwölf Uhr. || um
`);

// 8 · Ich habe Hunger
A(`
Hoje você conhece o seu primeiro **caso**: o acusativo. Parece difícil, mas no A1 a regra cabe numa linha.
# Passo 1: o que é o objeto direto
Na frase "Eu como uma maçã": quem come? Eu (sujeito). Come o quê? **Uma maçã**: esse é o objeto direto, a coisa que recebe a ação.
# Passo 2: a regra de uma linha
Quando a palavra é objeto direto, ela vai para o **acusativo**. E no acusativo **só o masculino muda**:
| Família | Sujeito (nominativo) | Objeto (acusativo) |
| masculino | der / ein | **den / einen** |
| feminino | die / eine | die / eine |
| neutro | das / ein | das / ein |
| plural | die | die |
~ Der Apfel ist rot. = A maçã é vermelha. (sujeito: der)
~ Ich esse den Apfel. = Eu como a maçã. (objeto: den)
~ Ich kaufe einen Käse. = Eu compro um queijo.
~ Ich kaufe eine Milch. = Eu compro um leite. (feminino: não muda)
BR É o mesmo que acontece com "ele" e "o" em português: **ele** chega (sujeito) e eu **o** vejo (objeto). A pessoa é a mesma, a forma muda.
# Passo 3: haben completo
|-
| ich habe | du hast | er / sie / es hat |
| wir haben | ihr habt | sie / Sie haben |
Depois de haben vem sempre um objeto, então: Ich habe **einen** Bruder, **einen** Hund.
# Passo 4: fome e sede se "têm"
~ Ich habe Hunger. = Estou com fome. (literalmente: tenho fome)
~ Hast du Durst? = Você está com sede?
> Para saber se precisa mudar: 1) a palavra é objeto (o quê?)? 2) ela é masculina? Só se as duas respostas forem sim, use den/einen.
? Complete: Ich esse ___ Apfel. (um) || einen (Apfel é masculino e é objeto)
? Complete: Ich trinke ___ Milch. (o) || die (feminino não muda)
? Conjugue haben com er. || er hat
`);

// 9 · Im Restaurant
A(`
Hoje você aprende a negar (dizer não) e a pedir num restaurante.
# Passo 1: duas palavras para "não"
O alemão tem **nicht** e **kein**. A escolha é simples:
| Use | Quando | Exemplo |
| kein | antes de substantivo sem artigo ou com ein | Ich habe keinen Hunger. |
| nicht | em todos os outros casos | Das ist nicht teuer. |
> Teste rápido: na frase afirmativa havia **ein** ou nenhum artigo? Então use **kein**. Ich habe **ein** Auto → Ich habe **kein** Auto.
# Passo 2: kein muda como ein
| Família | Sujeito | Objeto |
| masculino | kein | keinen |
| feminino | keine | keine |
| neutro | kein | kein |
| plural | keine | keine |
~ Ich trinke kein Bier. = Eu não bebo cerveja.
~ Er hat keine Zeit. = Ele não tem tempo.
# Passo 3: onde colocar nicht
- Para negar a frase inteira, **nicht vai para o fim**: Ich komme **nicht**. Ich kenne den Mann **nicht**.
- Para negar só uma parte, nicht vem **antes dela**: Das ist **nicht** gut. Ich wohne **nicht** in Berlin.
BR Em português o "não" vem antes do verbo ("eu não venho"). Em alemão quase nunca: o verbo fica em 2º e o nicht vem depois.
# Passo 4: pedir no restaurante
~ Ich hätte gern die Speisekarte. = Eu queria o cardápio.
~ Ich nehme einen Kaffee, bitte. = Vou querer um café, por favor.
~ Die Rechnung, bitte! = A conta, por favor!
~ Zusammen oder getrennt? = Junto ou separado? (o garçom pergunta se a conta é dividida)
? Negue: Ich habe Zeit. || Ich habe keine Zeit.
? Negue: Das Essen ist gut. || Das Essen ist nicht gut.
? Como se pede a conta? || Die Rechnung, bitte!
`);

// 10 · Mein Tag
A(`
Hoje você aprende a contar sua rotina e conhece uma marca registrada do alemão: os verbos que se partem em dois.
# Passo 1: verbos separáveis
Alguns verbos têm um pedacinho na frente, o **prefixo**: **auf**stehen (levantar-se), **an**fangen (começar), **ein**kaufen (fazer compras), **fern**sehen (ver TV), **an**rufen (telefonar).
Na frase, o verbo se parte: a parte conjugada fica na **2ª posição** e o prefixo vai para o **fim**.
~ Ich stehe um sechs Uhr auf. = Eu me levanto às seis.
~ Der Film fängt um acht an. = O filme começa às oito.
~ Ich rufe dich morgen an. = Eu te ligo amanhã.
> Imagine o prefixo como uma tampa que fecha a frase: Ich **stehe** … **auf**.
! Esquecer o prefixo muda tudo: "Ich stehe um sechs Uhr" significa "Eu fico em pé às seis".
# Passo 2: dias e partes do dia
|-
| Montag | segunda | Dienstag | terça |
| Mittwoch | quarta | Donnerstag | quinta |
| Freitag | sexta | Samstag | sábado |
| Sonntag | domingo |  |  |
Para "na segunda" use **am**: am Montag. Para partes do dia também: am Morgen (de manhã), am Abend (à noite). Exceção: **in der Nacht** (de madrugada).
# Passo 3: começar a frase pelo tempo
Você pode abrir a frase com o tempo. O verbo continua em 2º, e o sujeito passa para depois dele:
~ Am Samstag kaufe ich ein. = No sábado eu faço compras.
~ Morgens trinke ich Kaffee. = De manhã eu tomo café.
BR "No sábado eu faço" vira "No sábado faço eu" (Am Samstag **kaufe ich**). Soa estranho no começo, mas é a regra da 2ª posição de sempre.
? Coloque na ordem: ich / auf / um sieben / stehe || Ich stehe um sieben auf.
? Como se diz "na sexta"? || am Freitag
? Complete: Am Montag ___ ich. (arbeiten) || arbeite
`);

// 11 · Unterwegs
A(`
Hoje você aprende a falar de transporte e conhece os verbos que mudam a vogal.
# Passo 1: a mudança acontece só em du e er
Alguns verbos trocam a vogal do radical, **só com du e er/sie/es**. Os outros seguem a regra normal.
| Tipo | Verbo | du | er / sie |
| a → ä | fahren (ir de veículo) | fährst | fährt |
| a → ä | schlafen (dormir) | schläfst | schläft |
| e → i | essen (comer) | isst | isst |
| e → i | nehmen (pegar) | nimmst | nimmt |
| e → ie | lesen (ler) | liest | liest |
| e → ie | sehen (ver) | siehst | sieht |
> Os dicionários mostram isso. Quando aprender um verbo novo, aprenda junto a forma com er: fahren, er **fährt**.
# Passo 2: ir a pé ou de veículo
BR Em português, "ir" serve para tudo. Em alemão: **gehen** é ir a pé (ou ir em geral a um lugar perto), **fahren** é ir de carro, ônibus, trem ou bicicleta, e **fliegen** é ir de avião.
~ Ich gehe zu Fuß. = Eu vou a pé.
~ Er fährt mit dem Bus. = Ele vai de ônibus.
# Passo 3: o meio de transporte (mit)
Use **mit** + o transporte. mit pede o caso dativo, que você estuda direito no dia 16. Por enquanto decore os blocos:
|-
| mit dem Auto | de carro |
| mit dem Bus | de ônibus |
| mit dem Zug | de trem |
| mit der U-Bahn | de metrô |
| mit dem Fahrrad | de bicicleta |
~ Nimmst du den Zug? = Você pega o trem?
~ Sie liest im Zug. = Ela lê no trem.
? Conjugue fahren com du. || du fährst
? Conjugue lesen com er. || er liest
? Como se diz "Ela vai de metrô"? || Sie fährt mit der U-Bahn.
`);

// 12 · Kannst du mir helfen?
A(`
Hoje você aprende os verbos modais, que dão uma "cor" à ação: poder, querer, ter que. Começamos por können e möchten.
# Passo 1: o que é um modal
Compare: "Eu nado" e "Eu **sei** nadar". O segundo verbo (sei) muda o sentido do primeiro. Esse é um modal.
# Passo 2: a frase com modal
O modal fica conjugado na **2ª posição**; o outro verbo vai no **infinitivo para o fim**:
~ Ich kann Deutsch sprechen. = Eu sei falar alemão.
~ Ich möchte einen Kaffee trinken. = Eu gostaria de tomar um café.
~ Kannst du mir helfen? = Você pode me ajudar?
> Pense em uma moldura: o modal abre (2ª posição) e o infinitivo fecha (fim).
# Passo 3: as tabelas
| Pessoa | können (poder, saber) | möchten (gostaria) |
| ich | kann | möchte |
| du | kannst | möchtest |
| er / sie / es | kann | möchte |
| wir | können | möchten |
| ihr | könnt | möchtet |
| sie / Sie | können | möchten |
! Nos modais, **ich e er não têm final** e são iguais: ich kann, er kann. Nada de "er kannt".
BR "Saber" fazer algo (nadar, falar uma língua) também é **können**: Ich kann schwimmen. Saber uma informação é outro verbo (wissen).
# Passo 4: frases para pedir ajuda
~ Können Sie das bitte wiederholen? = Pode repetir, por favor?
~ Können Sie langsam sprechen? = Pode falar devagar?
~ Wie schreibt man das? = Como se escreve isso?
? Complete: Er ___ gut kochen. (können) || kann
? Coloque na ordem: möchte / ich / ein Wasser / trinken || Ich möchte ein Wasser trinken.
? Como se diz "Você pode me ajudar?" || Kannst du mir helfen?
`);

// 13 · Meine Wohnung
A(`
Hoje você aprende a descrever a casa: o que tem e como é.
# Passo 1: "tem" é es gibt
Para dizer que algo existe num lugar, use **es gibt** (há, tem). Ele **não muda** no plural e pede acusativo:
~ Es gibt einen Balkon. = Tem uma varanda.
~ Es gibt zwei Zimmer. = Tem dois quartos.
~ Gibt es hier einen Supermarkt? = Tem um supermercado aqui?
BR Em português dizemos "tem" (Na sala tem um sofá). Não traduza com haben: "Die Wohnung hat einen Balkon" (o apartamento tem uma varanda) também existe, mas para dizer que algo existe num lugar, a expressão é **es gibt**.
# Passo 2: adjetivo depois de sein não muda
Quando o adjetivo vem **depois** de sein, ele fica sempre na forma básica:
~ Die Küche ist groß. = A cozinha é grande.
~ Das Zimmer ist klein. = O quarto é pequeno.
~ Die Zimmer sind hell. = Os quartos são claros.
> Antes do substantivo o adjetivo ganha terminação (ein großes Zimmer). Isso fica para o A2 (dia 32). Hoje, só depois de sein: sem terminação.
# Passo 3: o plural
No plural o artigo é **sempre die**, para as três famílias. A terminação do substantivo varia e deve ser aprendida com a palavra:
| Padrão | Singular | Plural |
| + e | der Tisch | die Tische |
| + er com trema | das Haus | die Häuser |
| + n ou en | die Lampe | die Lampen |
| igual | das Zimmer | die Zimmer |
| + s (palavras estrangeiras) | das Sofa | die Sofas |
> Nas cartas, quando possível, diga o plural junto: der Tisch, die Tische.
? Como se diz "Tem um jardim"? || Es gibt einen Garten.
? Complete: Die Wohnung ist ___. (bonito: schön) || schön (sem terminação depois de sein)
? Qual o artigo de todo plural? || die
`);

// 14 · Wo ist …?
A(`
Hoje você conhece o segundo caso, o **dativo**, usado aqui para dizer onde as coisas estão.
# Passo 1: a pergunta Wo? (onde)
Quando você diz **onde** algo está, as preposições de lugar pedem o dativo:
| Preposição | Sentido |
| in | em, dentro de |
| auf | em cima de (superfície) |
| an | em, encostado em (parede, porta) |
| unter | embaixo de |
| neben | ao lado de |
| vor | na frente de |
| hinter | atrás de |
| zwischen | entre |
# Passo 2: os artigos no dativo
| Família | Nominativo | Dativo |
| masculino | der | **dem** |
| feminino | die | **der** |
| neutro | das | **dem** |
| plural | die | **den** (+ n no substantivo) |
~ Das Buch liegt auf dem Tisch. = O livro está em cima da mesa.
~ Die Tasche ist unter dem Stuhl. = A bolsa está embaixo da cadeira.
~ Die Lampe steht neben der Tür. = O abajur está ao lado da porta.
! Pegadinha: no dativo o feminino vira **der**, que parece masculino. "neben **der** Tür" está certo, porque Tür é feminino.
# Passo 3: contrações
|-
| in + dem | im | im Bad (no banheiro) |
| an + dem | am | am Fenster (na janela) |
# Passo 4: verbos de posição
O alemão diz **como** a coisa está:
- **liegen**: deitada (livro na mesa, chave no chão)
- **stehen**: em pé (garrafa, abajur, armário)
- **hängen**: pendurada (quadro na parede)
BR Em português tudo "está" em algum lugar. Em alemão também pode usar **ist**, mas liegen, stehen e hängen soam muito mais naturais.
? Complete: Der Schlüssel liegt auf ___ Tisch. || dem
? Complete: Ich bin ___ Küche. (na) || in der
? O que significa "im"? || in dem (no, na)
`);

// 15 · Einkaufen
A(`
Hoje você aprende a fazer compras: apontar o que quer, perguntar preço e reclamar que está caro.
# Passo 1: este, esta (dieser)
dieser funciona como der, die, das, com as mesmas terminações:
| Família | o / a | este / esta |
| masculino | der | dieser |
| feminino | die | diese |
| neutro | das | dieses |
| plural | die | diese |
~ Dieser Pullover ist schön. = Este suéter é bonito.
~ Diese Hose ist zu lang. = Esta calça é comprida demais.
> Truque: a última letra de dieser/diese/dieses é a mesma de der/die/das (r, e, s).
# Passo 2: quanto custa?
O verbo kosten concorda com a coisa:
~ Was kostet die Jacke? = Quanto custa a jaqueta? (uma coisa)
~ Was kosten die Schuhe? = Quanto custam os sapatos? (várias)
~ Das kostet zwanzig Euro. = Isso custa vinte euros.
# Passo 3: demais (zu)
**zu** antes do adjetivo significa "demais":
|-
| zu teuer | caro demais | zu groß | grande demais |
| zu klein | pequeno demais | zu lang | comprido demais |
# Passo 4: frases da loja
~ Kann ich das anprobieren? = Posso provar?
~ Haben Sie das in Größe 38? = Tem no tamanho 38?
~ Ich nehme es. = Vou levar.
~ Kann ich mit Karte zahlen? = Posso pagar com cartão?
BR Em alemão, as cores são adjetivos comuns: depois de sein não mudam (Die Jacke ist blau). Antes do substantivo ganham terminação, como qualquer adjetivo.
? Complete: ___ Kleid ist schön. (este) || Dieses (Kleid é neutro)
? Como se pergunta o preço dos sapatos? || Was kosten die Schuhe?
? Como se diz "caro demais"? || zu teuer
`);

// 16 · In der Stadt
A(`
Hoje você aprende o imperativo, a forma de dar instruções, pedir e indicar caminhos.
# Passo 1: formal (Sie)
Use o verbo no infinitivo + **Sie**, nessa ordem:
~ Gehen Sie geradeaus! = Siga em frente!
~ Nehmen Sie die zweite Straße links! = Pegue a segunda rua à esquerda!
~ Warten Sie bitte! = Espere, por favor!
# Passo 2: informal (du), em três passos
1. Pegue a forma de du: du gehst, du nimmst.
2. Tire o **-st**: geh, nimm.
3. Não use o pronome: **Geh!** **Nimm!**
| Infinitivo | du … | Imperativo |
| kommen | du kommst | Komm! |
| gehen | du gehst | Geh! |
| nehmen | du nimmst | Nimm! |
| lesen | du liest | Lies! |
| fahren | du fährst | Fahr! (sem trema) |
! Verbos com a → ä **perdem o trema** no imperativo: Fahr!, Schlaf! Já os que trocam e → i **mantêm**: Nimm!, Lies!, Iss!
# Passo 3: para vários amigos (ihr)
É a forma de ihr, sem o pronome: Kommt! Geht! Nehmt!
# Passo 4: direções
|-
| geradeaus | em frente | links | à esquerda |
| rechts | à direita | an der Ampel | no semáforo |
| an der Ecke | na esquina | bis zur Kreuzung | até o cruzamento |
> **bitte** deixa qualquer imperativo educado: Komm bitte! Gehen Sie bitte links!
? Imperativo formal de "warten" || Warten Sie!
? Imperativo informal de "nehmen" || Nimm!
? Como se diz "Vire à direita no semáforo" (formal)? || Gehen Sie an der Ampel rechts!
`);

// 17 · Beim Arzt
A(`
Hoje você completa os verbos modais e aprende a dizer o que sente no médico.
# Passo 1: mais três modais
| Pessoa | müssen (ter que) | dürfen (poder, permissão) | wollen (querer) |
| ich | muss | darf | will |
| du | musst | darfst | willst |
| er / sie / es | muss | darf | will |
| wir | müssen | dürfen | wollen |
| ihr | müsst | dürft | wollt |
| sie / Sie | müssen | dürfen | wollen |
A regra é a mesma do dia 13: modal na 2ª posição, infinitivo no fim.
~ Ich muss zum Arzt gehen. = Eu tenho que ir ao médico.
~ Darf ich hier parken? = Posso estacionar aqui?
~ Sie will Ärztin werden. = Ela quer ser médica.
# Passo 2: as pegadinhas de sentido
! **will** não é futuro como em inglês: significa **quero**. Ich will schlafen = eu quero dormir.
! **nicht müssen** significa **não precisar**, e não proibição. Proibir é **nicht dürfen**:
~ Du musst nicht kommen. = Você não precisa vir.
~ Du darfst nicht rauchen. = Você não pode fumar.
BR Poder tem dois sentidos em português: capacidade (können: Ich kann schwimmen) e permissão (dürfen: Darf ich gehen?).
# Passo 3: no médico
~ Ich habe Kopfschmerzen. = Estou com dor de cabeça.
~ Mein Bauch tut weh. = Minha barriga dói.
~ Ich bin krank. = Estou doente.
~ Ich brauche einen Termin. = Preciso de uma consulta.
> Para qualquer dor, junte a parte do corpo a **Schmerzen**: Kopfschmerzen, Bauchschmerzen, Rückenschmerzen.
? Complete: Hier ___ man nicht rauchen. (permissão) || darf
? O que significa "Ich will kommen"? || Eu quero vir.
? Como se diz "Você não precisa trabalhar"? || Du musst nicht arbeiten.
`);

// 18 · Was hast du gemacht?
A(`
Hoje você aprende a falar do passado como os alemães fazem na conversa: com o **Perfekt**.
# Passo 1: duas peças
O Perfekt é uma moldura de duas peças:
- **haben** conjugado, na 2ª posição;
- o **particípio** do verbo, no fim.
~ Ich habe Deutsch gelernt. = Eu estudei alemão.
~ Wir haben Pizza gegessen. = Nós comemos pizza.
~ Hast du den Film gesehen? = Você viu o filme?
BR Um único Perfekt cobre "estudei", "estudava" e "tenho estudado" do português. Na conversa, é praticamente o único passado que você precisa.
# Passo 2: particípio dos verbos regulares
**ge + radical + t**:
| Infinitivo | Particípio |
| machen | gemacht |
| kaufen | gekauft |
| lernen | gelernt |
| spielen | gespielt |
| arbeiten | gearbeitet (com e de apoio) |
# Passo 3: particípio dos irregulares
**ge + radical (às vezes com outra vogal) + en**. Precisam ser decorados:
| Infinitivo | Particípio |
| essen | gegessen |
| trinken | getrunken |
| sehen | gesehen |
| lesen | gelesen |
| schreiben | geschrieben |
| schlafen | geschlafen |
| nehmen | genommen |
# Passo 4: os que não levam ge-
- Verbos em **-ieren**: studieren → studiert, telefonieren → telefoniert.
- Verbos que começam com **be-, ver-, er-**: besuchen → besucht, verstehen → verstanden.
- Separáveis colocam o ge **no meio**: einkaufen → ein**ge**kauft, anrufen → an**ge**rufen.
> No A2 (dia 22) você verá que verbos de movimento usam **sein** em vez de haben: Ich **bin** gegangen.
? Particípio de "kaufen" || gekauft
? Particípio de "trinken" || getrunken
? Como se diz "Eu comi pão"? || Ich habe Brot gegessen.
`);
