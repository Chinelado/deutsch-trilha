// Módulo "Comece aqui" (antes do dia 1): aulas curtas em quatro categorias, com desafios interativos.
// Marcação das aulas (uma instrução por linha):
//   # título     > dica     ! erro comum     BR comparação com o português     GO missão
//   ~ alemão = tradução (com áudio)     | a | b |  tabela (a primeira linha é o cabeçalho)     - item de lista     **negrito**
//   @ esquema visual (mesma sintaxe de data/visuals.js)     IMG nome | legenda  (imagem de images/guia/, se existir)
//   ?? pergunta || certa || errada || errada >> explicação   desafio de múltipla escolha (as opções são embaralhadas)
//   ?? 🔊 alemão || certa || errada >> explicação             desafio de ouvir e escolher
//   && alemão = tradução | alemão = tradução                  jogo de ligar os pares
//   ? pergunta || resposta                                    teste rápido de revelar
const GUIDE_CATS = [
  { id: 'start', e: '🚀', t: 'Primeiros passos' },
  { id: 'sons', e: '🔊', t: 'Os sons do alemão' },
  { id: 'frases', e: '💬', t: 'Primeiras frases' },
  { id: 'base', e: '🧩', t: 'Como o alemão funciona' },
];
const GUIDE = [
// ---------- 🚀 Primeiros passos ----------
{ id: 'n01', cat: 'start', e: '🗺️', t: 'Boas-vindas à trilha', s: 'O mapa do A1 ao C2 em três minutos', body: `
Que bom ter você aqui! 🎉 Esta trilha foi feita para quem **nunca estudou outra língua**. Você não precisa saber nada de alemão nem de gramática: tudo é explicado do zero, em português, em aulas curtinhas como esta.
# Seis degraus, uma régua mundial
O mundo inteiro mede o conhecimento de uma língua com a mesma régua, o **Quadro Europeu Comum de Referência**. É a régua das provas do Goethe-Institut, a instituição oficial do alemão.
| Nível | Você consegue… | Semanas aqui |
| A1 | se apresentar e pedir coisas simples | 1 a 3 |
| A2 | contar o que fez e resolver a rotina | 4 a 7 |
| B1 | conversar sobre quase tudo e viajar sem medo | 8 a 13 |
| B2 | discutir temas complexos e trabalhar em alemão | 14 a 25 |
| C1 | usar o alemão com folga no estudo e no trabalho | 26 a 31 |
| C2 | entender praticamente tudo, até ironia | 32 a 35 |
> O **B1** já é considerado o nível de independência: com ele você se vira sozinha ou sozinho na Alemanha.
# Semanas de sete dias
Cada semana tem **6 lições e 1 checkpoint**. O checkpoint mistura tudo o que você viu na semana. Não é prova: é o dia em que o conteúdo gruda.
@ P:Uma semana na trilha;Dias 1 a 6=uma lição nova por dia;Dia 7=checkpoint de revisão;Semana seguinte=o próximo degrau
# Um jogo de verdade
Cada exercício certo vale **XP**. Estudar dias seguidos acende a sua **sequência** 🔥, e as conquistas 🏅 aparecem no Perfil. Não é enfeite: pequenas recompensas ajudam o cérebro a criar o hábito.
# Quanto tempo leva?
Depende do seu ritmo. Para chegar ao B1, somando lições, cartas e alemão fora daqui:
| Por dia | B1 em cerca de |
| 30 minutos | 1 ano e meio a 3 anos |
| 1 hora | 9 meses a 1 ano e meio |
| 2 a 3 horas | 3 a 8 meses |
> O segredo é **um pouco todo dia**. Quinze minutos diários rendem mais que duas horas no domingo.
?? Quantas lições novas tem cada semana? || 6 lições e 1 checkpoint || 7 lições seguidas || 5 lições e 2 provas >> Seis dias de lição nova e um dia de revisão.
?? Qual nível já é considerado de independência? || B1 || A1 || C2 >> No B1 você conversa sobre quase tudo do cotidiano.
?? O que rende mais? || 15 minutos todo dia || 2 horas só no domingo || estudar quando der vontade >> A memória gosta de repetição frequente.
` },
{ id: 'n02', cat: 'start', e: '📅', t: 'Seu dia de estudo', s: 'As quatro etapas de cada dia, e por que errar ajuda', body: `
Todo dia na trilha segue o mesmo roteiro de quatro etapas. Com o caminho sempre igual, você gasta energia aprendendo alemão, e não descobrindo o que fazer. 😉
@ P:As 4 etapas do dia;📖 Aprender=a aula do dia, com áudio;🎯 Praticar=14 exercícios curtos;🃏 Revisar=as cartas de memória;🌍 Usar=alemão fora do app
# 1. Aprender
Leia a aula com calma e toque em 🔊 em cada exemplo. Repita em voz alta: a boca também precisa aprender.
# 2. Praticar
São 14 exercícios em oito formatos: escrever, montar frases, ouvir, conversar, memória visual, responder rápido, falar de você e classificar. O app percebe em quais você vai melhor e usa mais esses, sem abandonar os outros.
# 3. Revisar
A aba **Cartas** traz as palavras de volta na hora certa, logo antes de você esquecer. É a etapa que mais faz o alemão ficar na memória por anos.
# 4. Usar
Uma música, um vídeo, uma frase no diário. A aba **Extras** separa tudo por nível.
# Errar faz parte do método
Quando você erra e logo vê o porquê, o cérebro guarda a regra **melhor** do que se tivesse acertado no chute. Por isso cada erro aqui vem com explicação, e o exercício volta no fim da sessão para você acertar.
! Não pule as cartas: é o erro número 1 de quem desiste. Cinco minutos de cartas valem mais que uma hora de lição nova.
&& 📖 Aprender = ler a aula e ouvir os exemplos | 🎯 Praticar = fazer os exercícios | 🃏 Revisar = virar as cartas de memória | 🌍 Usar = alemão fora do app
?? Você errou um exercício. O que acontece? || Aparece a explicação e ele volta no fim || Você perde a lição || Nada, o app segue em frente >> O erro explicado é um dos jeitos mais fortes de aprender.
?? Qual etapa faz você lembrar por mais tempo? || Revisar as cartas || Ler a aula duas vezes || Fazer só os exercícios >> As cartas voltam no momento certo, antes do esquecimento.
` },
{ id: 'n03', cat: 'start', e: '🧠', t: 'Truques da memória', s: 'Como fazer o alemão grudar na cabeça', body: `
Saber uma regra não basta: você precisa **usar sem pensar**, como faz com o português. Estes cinco truques vêm da ciência da memória. A trilha já aplica todos, mas quem conhece os truques estuda melhor.
# Truque 1: tente lembrar antes de olhar
Reler dá a sensação de que você aprendeu, mas engana. O que fixa é **puxar da memória**: tentar lembrar antes de ver a resposta, mesmo que erre.
> Nas cartas, diga a resposta **em voz alta** antes de virar.
# Truque 2: revise pouco antes de esquecer
Sem revisão, em um ou dois dias você esquece boa parte do que viu. Cada revisão feita **pouco antes de esquecer** faz a lembrança durar mais. Isso se chama **repetição espaçada**, e é o que as cartas fazem por você.
@ P:As cartas voltam cada vez mais tarde;Hoje=você aprende;1 dia depois=1ª revisão;3 dias depois=2ª revisão;1 semana depois=3ª revisão;1 mês depois=a palavra já é sua
# Truque 3: aprenda em blocos
Decore **der Tisch**, nunca só "Tisch". Decore **Wie geht's?** inteiro, e não três palavras soltas. Blocos prontos saem rápido na conversa.
~ der Tisch = a mesa
~ Wie geht's? = Como vai?
# Truque 4: faça eco
Toque o áudio e repita **junto**, imitando o ritmo e a melodia, como um eco. Isso se chama **shadowing**. Parece bobo, mas treina ouvido e boca ao mesmo tempo. Tente agora:
~ Ich lerne Deutsch. = Eu estou aprendendo alemão.
# Truque 5: pouco todo dia, e durma
O cérebro organiza o que você aprendeu **enquanto dorme**. Vinte minutos por dia durante uma semana rendem muito mais que 140 minutos num dia só.
# E quando parecer que travou?
Toda pessoa passa por **platôs**, semanas em que parece que nada melhora. É normal: o cérebro está arrumando a casa. Volte a uma lição antiga e veja como ela ficou fácil. Essa é a prova de que você avançou.
?? Qual é o jeito certo de usar uma carta? || Dizer a resposta em voz alta e só depois virar || Virar logo para ver a resposta || Ler a carta três vezes >> Tentar lembrar, mesmo errando, é o que fixa.
?? Por que decorar "der Tisch" e não só "Tisch"? || Porque o artigo faz parte da palavra || Porque soa mais bonito || Porque "Tisch" sozinho se escreve errado >> Você vai precisar do der em todas as frases com Tisch.
?? O que é shadowing? || Repetir junto com o áudio, como um eco || Ler em silêncio || Traduzir palavra por palavra >> Imitar o ritmo treina ouvido e boca juntos.
` },
// ---------- 🔊 Os sons do alemão ----------
{ id: 'n04', cat: 'sons', e: '🅰️', t: 'Vogais e o trema', s: 'ä, ö, ü, ei, ie e eu: as vogais que mudam tudo', body: `
Boa notícia: o alemão se lê **quase exatamente como se escreve**. Com os sons destas três aulas, você consegue ler em voz alta qualquer palavra, mesmo sem saber o que ela significa. Toque em 🔊 e repita cada exemplo.
> Se a voz de algum exemplo parecer de português, veja o aviso em Perfil → Ajustes.
# As vogais simples
a, e, i, o, u soam quase como em português, só que mais "limpas": o **a** é sempre aberto, como em "pá", e o **u** é sempre "u".
~ Mama = mamãe
~ gut = bom
~ Kino = cinema
# O trema: ä, ö, ü
Os dois pontinhos mudam o som da vogal. Não são enfeite: **schon** (já) e **schön** (bonito) são palavras diferentes!
IMG guia-trema | A boca em cada som: lábios abertos no ä, em bico no ö, em bico apertado no ü.
| Letra | Como fazer | Exemplo |
| ä | como o "é" de café | Käse (queijo) |
| ö | diga "ê" com os lábios em bico, como para "ô" | schön (bonito) |
| ü | diga "i" com os lábios em bico, como para "u" | müde (cansado) |
~ Käse = queijo
~ schön = bonito
~ müde = cansado
> Truque do bico: para o **ü**, faça um bico como se fosse assobiar e tente dizer "i". Para o **ö**, o mesmo bico, dizendo "ê".
# Duplas de vogais
| Escrita | Som | Exemplo |
| ei | "ai" | drei (três), mein (meu) |
| ie | "i" comprido | vier (quatro), die (a) |
| eu e äu | "ói" | neu (novo), Häuser (casas) |
~ drei = três
~ vier = quatro
~ neu = novo
! A troca mais comum: **ei soa "ai"** e **ie soa "i"**. Wein (vinho) soa "vain"; Wien (Viena) soa "viin".
~ Wein = vinho
~ Wien = Viena
?? 🔊 schön || schön || schon >> Ouviu o bico? É o ö de schön (bonito).
?? 🔊 Wien || Wien || Wein >> ie soa "i" comprido: Wien, a capital da Áustria.
?? Como se pronuncia "drei"? || "drai" || "drêi", como em português || "dri" >> ei soa sempre "ai".
?? Qual palavra tem o som "ói"? || neu || nie || nein >> eu soa "ói": neu (novo). nie soa "nii" e nein soa "nain".
` },
{ id: 'n05', cat: 'sons', e: '🐝', t: 'Consoantes surpresa', s: 'w soa v, z soa ts, sch soa ch', body: `
A maioria das consoantes soa como em português. Algumas pregam peças, e são justamente as que mais aparecem. Aqui estão as surpresas, uma de cada vez.
# O trio W, V e Z
| Escrita | Som | Exemplo |
| w | "v" | Wasser (água) |
| v | quase sempre "f" | Vater (pai) |
| z | "ts" | zehn (dez) |
~ Wasser = água
~ Vater = pai
~ zehn = dez
~ Zeit = tempo
> Trava-língua para treinar: **Wie viel Zeit?** (Quanto tempo?) soa "vii fiil tsait".
~ Wie viel Zeit? = Quanto tempo?
# S, ß e J
| Escrita | Som | Exemplo |
| s antes de vogal | "z" | Sonne (sol) |
| ß | "ss" | Straße (rua) |
| j | "i", como em "iate" | ja (sim) |
~ Sonne = sol
~ Straße = rua
~ ja = sim
BR O **ß** (chamado "eszett") é só um jeito de escrever "ss" depois de vogal longa. Se o teclado não tiver, pode escrever ss.
# Os grupos com S
| Escrita | Som | Exemplo |
| sch | "ch" de chá | Schule (escola) |
| sp no início | "chp" | Sport (esporte) |
| st no início | "cht" | Stadt (cidade) |
| qu | "kv" | Quark (coalhada) |
~ Schule = escola
~ Sport = esporte
~ Stadt = cidade
?? 🔊 Wasser || Wasser || Vase || Fass >> w soa "v": Wasser, água.
?? Como soa o z de "zehn"? || "ts" || "z", como em zebra || "s" >> zehn soa "tsêin".
?? Como se lê "Sport" em alemão? || "chport" || "esport" || "sport" >> sp e st no começo da palavra soam "chp" e "cht".
&& Wasser = água | Vater = pai | Schule = escola | Straße = rua
` },
{ id: 'n06', cat: 'sons', e: '🐱', t: 'ch, h, r e os finais', s: 'O chiado do gato, o r da garganta e o Hund que vira "hunt"', body: `
Último trecho dos sons! São os detalhes que fazem você soar como quem fala alemão de verdade.
# O ch tem dois sons
Quem decide é a letra que vem **antes** dele:
IMG guia-ch | Onde a língua faz o ch: no fundo da boca em Buch (raspado), atrás dos dentes em ich (chiado).
| Depois de… | Som | Exemplo |
| a, o, u | raspado no fundo da garganta, como o "rr" carioca de "carro" | Buch (livro), acht (oito) |
| i, e, ä, ö, ü e consoantes | um chiado suave, como um gato bravo | ich (eu), nicht (não) |
~ Buch = livro
~ acht = oito
~ ich = eu
~ nicht = não
> Para o chiado do **ich**: diga "hi" bem forte e solte o ar com a língua na posição do "i". 🐱
# O h e o r
- **h no começo** é um sopro leve: Haus (casa).
- **h depois de vogal** não soa e só deixa a vogal mais comprida: sehr (muito), Bahn (trem).
- **r** é feito no fundo da garganta. No fim da palavra, **-er** soa quase como um "a" curto: Vater soa "fáta".
~ Haus = casa
~ sehr gut = muito bom
~ Vater = pai
# Os finais que endurecem
No fim da palavra, **b, d, g** perdem a força e viram **p, t, k**. E **-ig** no fim soa "ich".
| Escrita | Som | Exemplo |
| -d | "t" | Hund (cachorro) soa "hunt" |
| -g | "k" | Tag (dia) soa "tak" |
| -b | "p" | gelb (amarelo) soa "gelp" |
| -ig | "ich" | zwanzig (vinte) |
~ Hund = cachorro
~ Tag = dia
~ zwanzig = vinte
# Onde fica a força
Na maioria das palavras alemãs a sílaba mais forte é a **primeira**: **Va**ter, **Schu**le, **Was**ser.
?? Em "Buch", que ch você ouve? || o raspado, porque vem depois de u || o chiado, como em ich || nenhum, o ch é mudo >> Depois de a, o, u o ch é raspado.
?? 🔊 nicht || nicht || Nacht >> nicht (não) tem o chiado suave; Nacht (noite) tem o ch raspado.
?? Como soa o final de "Hund"? || "hunt" || "hunde" || "hund", com d forte >> b, d, g no fim viram p, t, k.
?? Em "sehr", o h soa? || Não, só alonga o e || Sim, como um sopro || Sim, como rr >> h depois de vogal é mudo.
` },
// ---------- 💬 Primeiras frases ----------
{ id: 'n07', cat: 'frases', e: '👋', t: 'Oi e tchau', s: 'Cumprimentar em qualquer hora do dia', body: `
Hora de falar! 🎤 Com as frases desta categoria você já consegue cumprimentar, agradecer, pedir ajuda e contar. Ouça, repita três vezes em voz alta e tente dizer de memória.
# Para qualquer hora
~ Hallo! = Olá! (sempre funciona)
~ Hi! = Oi! (entre amigos)
# Pelo relógio
@ P:O dia em alemão;Guten Morgen!=de manhã, até umas 11h;Guten Tag!=durante o dia, mais formal;Guten Abend!=à noite, ao chegar;Gute Nacht!=na hora de dormir
~ Guten Morgen! = Bom dia!
~ Guten Tag! = Bom dia! / Boa tarde!
~ Guten Abend! = Boa noite! (ao chegar)
~ Gute Nacht! = Boa noite! (antes de dormir)
BR Em português, "boa noite" serve para chegar e para sair. Em alemão são dois: **Guten Abend** ao chegar e **Gute Nacht** na hora de dormir.
# Para ir embora
~ Tschüss! = Tchau!
~ Auf Wiedersehen! = Até logo! (formal)
~ Bis morgen! = Até amanhã!
~ Bis später! = Até mais tarde!
# Como vai?
~ Wie geht's? = Como vai?
~ Gut, danke! Und dir? = Bem, obrigada! E você?
~ Es geht. = Mais ou menos.
> Wie geht's? é informal. Com quem você trata por Sie (a aula du ou Sie explica), diga **Wie geht es Ihnen?**
~ Wie geht es Ihnen? = Como o senhor / a senhora está?
?? São 8h da manhã e você entra na padaria. Você diz: || Guten Morgen! || Gute Nacht! || Guten Abend! >> Guten Morgen vale até umas 11h.
?? Você sai de uma festa às 23h para ir dormir. Você diz: || Gute Nacht! || Guten Abend! || Guten Morgen! >> Gute Nacht é a despedida antes de dormir.
?? Qual é a despedida formal? || Auf Wiedersehen! || Tschüss! || Hi! >> Tschüss é o tchau informal; Auf Wiedersehen é o "até logo" formal.
&& Hallo = olá | Tschüss = tchau | Bis morgen = até amanhã | Es geht = mais ou menos
` },
{ id: 'n08', cat: 'frases', e: '✨', t: 'Palavras mágicas', s: 'Danke, Bitte, Entschuldigung e companhia', body: `
Algumas palavras abrem portas em qualquer lugar. Com estas você já é uma pessoa educada em alemão! ✨
# Obrigada e por favor
~ Danke! = Obrigada! / Obrigado!
~ Danke schön! = Muito obrigada!
~ Vielen Dank! = Muito obrigado!
~ Bitte! = Por favor! / De nada!
> **Bitte** tem dois usos: é "por favor" quando você pede e "de nada" quando responde a um Danke.
~ Einen Kaffee, bitte. = Um café, por favor.
~ Danke! – Bitte! = Obrigada! – De nada!
# Desculpa e com licença
~ Entschuldigung! = Com licença! / Desculpa!
~ Entschuldigung, wo ist der Bahnhof? = Com licença, onde fica a estação?
~ Kein Problem! = Sem problema!
# Sim e não
~ Ja. = Sim.
~ Nein. = Não.
~ Ja, gern! = Sim, com prazer!
~ Nein, danke. = Não, obrigada.
GO Na próxima vez que alguém te agradecer hoje, responda "Bitte!" em pensamento. 😄
?? Alguém te diz "Danke!". Você responde: || Bitte! || Danke! || Tschüss! >> Bitte também quer dizer "de nada".
?? Você esbarrou em alguém na rua. Você diz: || Entschuldigung! || Bitte schön! || Guten Abend! >> Entschuldigung serve para "desculpa" e para "com licença".
?? Como recusar algo com educação? || Nein, danke. || Ja, gern! || Kein Problem! >> Nein, danke = não, obrigada.
&& Danke = obrigada | Bitte = por favor | Entschuldigung = com licença | Ja, gern = sim, com prazer
` },
{ id: 'n09', cat: 'frases', e: '🆘', t: 'Socorro, não entendi!', s: 'Frases para pedir ajuda e ganhar tempo', body: `
Não entender faz parte. O segredo é **saber pedir ajuda em alemão**: assim a conversa continua e você aprende no caminho. Estas frases são o seu kit de sobrevivência. 🆘
# Quando não entender
~ Ich verstehe das nicht. = Eu não entendo isso.
~ Noch einmal, bitte. = Mais uma vez, por favor.
~ Langsam, bitte. = Devagar, por favor.
~ Können Sie das bitte wiederholen? = O senhor pode repetir, por favor?
# Para descobrir palavras
~ Was bedeutet das? = O que significa isso?
~ Wie sagt man das auf Deutsch? = Como se diz isso em alemão?
~ Wie schreibt man das? = Como se escreve isso?
# Para se apresentar como aprendiz
~ Ich lerne Deutsch. = Eu estou aprendendo alemão.
~ Ich spreche nur ein bisschen Deutsch. = Eu falo só um pouquinho de alemão.
~ Sprechen Sie Englisch? = O senhor fala inglês?
BR Em alemão não existe "estou aprendendo" com gerúndio: **Ich lerne** serve para "eu aprendo" e para "eu estou aprendendo".
> Quem diz "Ich lerne Deutsch" logo de cara costuma ganhar uma fala mais lenta e muita simpatia. 😊
GO Diga em voz alta, sem olhar: "olá", "obrigada", "eu não entendo", "mais uma vez, por favor". Conseguiu? Você já sobrevive em alemão!
?? A pessoa falou rápido demais. Você pede: || Langsam, bitte. || Noch ein Bier, bitte. || Guten Abend. >> Langsam = devagar.
?? Como perguntar o que uma palavra significa? || Was bedeutet das? || Wie geht's? || Wo ist das? >> Was bedeutet das? = O que significa isso?
?? "Noch einmal, bitte" quer dizer: || Mais uma vez, por favor || Não, obrigada || Até logo >> noch einmal = mais uma vez.
&& Ich verstehe das nicht = eu não entendo isso | Langsam, bitte = devagar, por favor | Was bedeutet das? = o que significa isso? | Ich lerne Deutsch = estou aprendendo alemão
` },
{ id: 'n10', cat: 'frases', e: '🔢', t: 'Contar até 12', s: 'Os números que você usa já no dia 1', body: `
Números estão em todo lugar: preços, horários, telefone, idade. De 0 a 12 é a base de todos os outros. Conte junto com o áudio! 🔢
# De 0 a 6
~ null = zero
~ eins = um
~ zwei = dois
~ drei = três
~ vier = quatro
~ fünf = cinco
~ sechs = seis
# De 7 a 12
~ sieben = sete
~ acht = oito
~ neun = nove
~ zehn = dez
~ elf = onze
~ zwölf = doze
> Repare nos sons que você já aprendeu: **zwei** soa "tsvai", **vier** soa "fiir", **sechs** soa "zéks" e **neun** soa "nóin".
BR **elf** é "onze" (nada de elfo!) e **zwölf** é "doze". Ao telefone muita gente diz **zwo** no lugar de zwei, para não confundir com drei.
# Números em ação
~ Das kostet drei Euro. = Isso custa três euros.
~ Ich habe zwei Kinder. = Eu tenho dois filhos.
~ Zimmer sieben, bitte. = Quarto sete, por favor.
~ Um acht Uhr. = Às oito horas.
?? 🔊 zwei || zwei || drei || zehn >> zwei soa "tsvai".
?? Quanto é "neun"? || 9 || 7 || 11 >> neun soa "nóin": nove.
?? Como se diz 12? || zwölf || zwanzig || elf >> zwölf = 12, elf = 11 e zwanzig = 20.
?? Quanto é drei + vier? || sieben || acht || sechs >> 3 + 4 = 7: sieben.
&& eins = 1 | fünf = 5 | acht = 8 | elf = 11
` },
// ---------- 🧩 Como o alemão funciona ----------
{ id: 'n11', cat: 'base', e: '🧱', t: 'As peças da frase', s: 'Substantivo, verbo, artigo… com exemplos do português', body: `
Gramática é só o **manual de montagem** de uma língua: quais peças existem e como elas se encaixam. Você já usa tudo isso em português sem perceber. Aqui damos nome às peças, porque esses nomes aparecem nas lições. 🧱
@ F:Uma frase, três peças;Quem?^s|Faz o quê?^v|O quê?^o;Anna|trinkt|Kaffee.;Ich|lerne|Deutsch.;Wir|kaufen|Brot.
# Substantivo: o nome das coisas
Pessoa, lugar, objeto, animal ou ideia: Ana, casa, Brasil, cachorro, amor.
~ der Hund = o cachorro
~ das Haus = a casa
# Artigo: a palavrinha antes
Em português: **o, a** (definidos) e **um, uma** (indefinidos). Em alemão: der, die, das e ein, eine.
~ der Mann = o homem
~ ein Mann = um homem
# Verbo: a ação
Falar, comer, morar, ser. A forma de dicionário se chama **infinitivo**: em português termina em -ar, -er ou -ir; em alemão, quase sempre em **-en**.
~ wohnen = morar
~ trinken = beber
~ lernen = aprender
# Adjetivo e advérbio
O **adjetivo** descreve uma coisa: casa **grande**. O **advérbio** diz como, quando ou onde: fala **rápido**, chega **hoje**.
~ Das Haus ist groß. = A casa é grande.
~ Ich lerne heute. = Eu estudo hoje.
# Preposição e conjunção
**Preposição** é a palavrinha de ligação, como "em", "com" e "para". **Conjunção** liga duas ideias, como "e", "mas" e "porque".
~ Kaffee mit Milch = café com leite
~ Tee und Kaffee = chá e café
?? Em "Anna trinkt Kaffee", qual palavra é o verbo? || trinkt || Anna || Kaffee >> trinkt (bebe) é a ação.
?? Qual destas palavras é um infinitivo? || wohnen || Haus || groß >> É o verbo na forma de dicionário, terminado em -en.
?? Em "café com leite", a palavra "com" é: || uma preposição || um verbo || um adjetivo >> Preposição é a palavrinha de ligação.
&& Substantivo = nome de coisa | Verbo = ação | Adjetivo = descreve a coisa | Conjunção = liga ideias
` },
{ id: 'n12', cat: 'base', e: '🙋', t: 'Eu, você, ele: os pronomes', s: 'Quem é quem, e como o verbo muda com cada um', body: `
Pronomes são atalhos para não repetir nomes: em vez de "a Ana mora em Berlim, a Ana trabalha muito", dizemos "**ela** trabalha muito". 🙋
| Quem | Português | Alemão |
| eu | eu | ich |
| você (informal) | você, tu | du |
| ele / ela | ele / ela | er / sie |
| coisa neutra | ele / ela | es |
| nós | nós | wir |
| vocês (informal) | vocês | ihr |
| eles / elas | eles / elas | sie |
| formal | o senhor / a senhora | Sie |
~ ich = eu
~ du = você
~ er = ele
~ sie = ela
~ wir = nós
! Atenção ao trio **sie / sie / Sie**: minúsculo pode ser "ela" ou "eles"; com maiúscula no meio da frase, **Sie** é o tratamento formal. O verbo e o contexto mostram qual é.
# Conjugar: o verbo muda com a pessoa
Você faz isso em português o tempo todo: eu moro, você mora, nós moramos. Em alemão as terminações são poucas e muito regulares:
@ E:A fórmula do verbo;radical (wohn)^s|+|terminação^v|=|ich wohne, du wohnst^p
| Pessoa | Terminação | wohnen (morar) |
| ich | -e | ich wohne |
| du | -st | du wohnst |
| er / sie / es | -t | er wohnt |
| wir | -en | wir wohnen |
| ihr | -t | ihr wohnt |
| sie / Sie | -en | sie wohnen |
~ Ich wohne in Berlin. = Eu moro em Berlim.
~ Du wohnst in Rio. = Você mora no Rio.
~ Wir wohnen hier. = Nós moramos aqui.
# Sujeito e objeto
**Sujeito** é quem faz a ação: pergunte "quem?". **Objeto** é quem recebe a ação: pergunte "o quê?" ou "a quem?". Em "A Ana come uma maçã": quem come? A Ana (sujeito). Come o quê? Uma maçã (objeto).
?? Como se diz "nós"? || wir || ihr || sie >> wir = nós; ihr = vocês.
?? Complete: du ___ (wohnen) || wohnst || wohne || wohnt >> du pede a terminação -st.
?? "Wohnen Sie in Berlin?" quer dizer: || O senhor / a senhora mora em Berlim? || Ela mora em Berlim? || Vocês moram em Berlim? >> No meio da frase, Sie com maiúscula é o tratamento formal.
&& ich = eu | du = você | er = ele | wir = nós
` },
{ id: 'n13', cat: 'base', e: '🎨', t: 'Maiúsculas e três gêneros', s: 'der, die, das e o truque das cores', body: `
Duas ideias que aparecem em todas as lições. A primeira é uma ajuda enorme, e a segunda vira hábito rapidinho. 🎨
# Todo substantivo começa com maiúscula
Em alemão, qualquer nome de coisa leva letra maiúscula, e não só nomes de pessoas e lugares. Você bate o olho e já sabe o que é substantivo!
~ Ich trinke Wasser. = Eu bebo água.
~ Das Buch ist neu. = O livro é novo.
~ Der Hund schläft. = O cachorro dorme.
# Três gêneros: der, die, das
Além do masculino (**der**) e do feminino (**die**), existe o **neutro** (**das**). E o gênero muitas vezes **não bate** com o português:
@ V:Três famílias, três cores;der · azul|der Mond (a lua)|der Tisch (a mesa)|der Löffel (a colher);die · vermelho|die Sonne (o sol)|die Lampe (o abajur)|die Gabel (o garfo);das · verde|das Mädchen (a menina)|das Buch (o livro)|das Messer (a faca)
~ der Mond = a lua
~ die Sonne = o sol
~ das Mädchen = a menina
> A trilha pinta as palavras: **azul** para der, **vermelho** para die, **verde** para das. Decore a palavra **com o artigo e a cor**, como se fossem uma coisa só.
# Pistas que ajudam
| Terminação | Gênero | Exemplo |
| -ung, -heit, -keit | die | die Zeitung (o jornal) |
| -chen, -lein | das | das Mädchen (a menina) |
| -er (pessoas, profissões) | der | der Lehrer (o professor) |
~ die Zeitung = o jornal
~ der Lehrer = o professor
?? Quantos gêneros tem o alemão? || três: der, die, das || dois, como o português || quatro >> Masculino, feminino e neutro.
?? Em "Ich trinke Wasser", qual palavra é substantivo? || Wasser || trinke || Ich >> A maiúscula entrega: Wasser. (Ich é maiúsculo só por abrir a frase.)
?? Qual é o artigo de "Zeitung"? || die || der || das >> Palavras terminadas em -ung são sempre die.
?? Como se diz "o sol"? || die Sonne || der Sonne || das Sonne >> O sol é feminino em alemão!
&& der = azul | die = vermelho | das = verde
` },
{ id: 'n14', cat: 'base', e: '🚂', t: 'O verbo no vagão 2', s: 'A regra de ouro da frase alemã', body: `
Esta é **a** regra de ouro do alemão. Imagine a frase como um trem: o vagão 2 é sempre do verbo conjugado. 🚂
@ F:O verbo é sempre o vagão 2;Vagão 1^s|Vagão 2: verbo^v|Resto^c;Ich|lerne|heute Deutsch.;Heute|lerne|ich Deutsch.;Am Montag|arbeite|ich.
# O vagão 1 pode mudar
No vagão 1 pode ir o sujeito, o tempo, o lugar ou outra coisa. O verbo **não sai do vagão 2**:
~ Ich lerne heute Deutsch. = Eu estudo alemão hoje.
~ Heute lerne ich Deutsch. = Hoje eu estudo alemão.
~ Am Montag arbeite ich. = Na segunda-feira eu trabalho.
BR Em português dizemos "Hoje **eu estudo**", com o sujeito antes do verbo. Em alemão, se "heute" ocupa o vagão 1, o verbo vem logo depois e o sujeito passa para trás: Heute **lerne ich**.
# A moldura: quando o verbo tem duas partes
Algumas frases têm dois verbos. O conjugado fica no vagão 2 e o outro vai para o **último vagão**, fechando a frase como uma moldura:
@ F:A moldura do verbo;Vagão 1^s|Vagão 2^v|Meio^c|Último^v2;Ich|kann|gut|schwimmen.;Ich|habe|Deutsch|gelernt.
~ Ich kann gut schwimmen. = Eu sei nadar bem.
~ Ich habe Deutsch gelernt. = Eu estudei alemão.
# E nas perguntas?
Nas perguntas de sim ou não, o verbo **sobe para o vagão 1**:
~ Du wohnst hier. = Você mora aqui.
~ Wohnst du hier? = Você mora aqui?
?? Em "Morgen fahre ich nach Berlin", em que vagão está o verbo? || no 2 || no 1 || no último >> Morgen (1) fahre (2) ich nach Berlin.
?? Qual frase está certa? || Heute lerne ich Deutsch. || Heute ich lerne Deutsch. || Heute Deutsch ich lerne. >> Com heute no vagão 1, o verbo vem logo em seguida.
?? Em "Ich habe Deutsch gelernt", onde fica "gelernt"? || no fim, fechando a moldura || no vagão 2 || no começo >> A segunda parte do verbo vai para o fim.
?? Como fica a pergunta de "Du wohnst hier"? || Wohnst du hier? || Du hier wohnst? || Hier du wohnst? >> Na pergunta de sim ou não, o verbo vai para a frente.
` },
{ id: 'n15', cat: 'base', e: '🎭', t: 'Casos sem medo', s: 'Por que der vira den, explicado com o português', body: `
Esta é a ideia que mais assusta no alemão, mas você já usa algo parecido em português sem perceber. Respira: aqui é só para entender a ideia. Cada caso vem com calma, nas lições. 🎭
# O português também faz isso
Repare como a palavra para "eu" muda conforme a função na frase:
| Função | Português | Alemão |
| quem faz | **eu** vejo | **ich** sehe |
| quem recebe | ele **me** vê | er sieht **mich** |
| depois de preposição | para **mim** | für **mich** |
É a mesma pessoa, mas a forma muda: eu, me, mim. O alemão faz isso também com os **artigos**. Essas formas se chamam **casos**.
# O artigo troca de roupa
Pense no artigo como um ator que troca de figurino conforme o papel. O cachorro como sujeito é **der Hund**; como objeto direto, vira **den Hund**:
~ Der Hund schläft. = O cachorro dorme.
~ Ich sehe den Hund. = Eu vejo o cachorro.
~ Ich spiele mit dem Hund. = Eu brinco com o cachorro.
@ M:Os quatro figurinos do der;Caso|Papel|Exemplo;Nominativo|quem faz|**der** Hund schläft;Acusativo|quem recebe|ich sehe **den** Hund;Dativo|a quem, com quem|mit **dem** Hund;Genitivo|de quem|das Bett **des** Hundes
> Boa notícia: no acusativo, **só o masculino muda** (der vira den). die e das ficam iguais.
# Quando cada um chega
Nominativo no dia 1, acusativo no dia 9, dativo no dia 16. O genitivo só aparece no B1. Um de cada vez, sem pressa.
?? Em português, qual trio mostra a mesma ideia dos casos? || eu, me, mim || o, a, os || ser, estar, ficar >> É a mesma pessoa com formas diferentes conforme a função.
?? Em "Ich sehe den Hund", por que "den"? || Porque o cachorro é o objeto, quem recebe a ação || Porque é plural || Porque é feminino >> Objeto direto masculino: der vira den.
?? No acusativo, qual gênero muda? || só o masculino || todos || só o neutro >> der vira den; die e das ficam iguais.
` },
{ id: 'n16', cat: 'base', e: '🤝', t: 'du ou Sie?', s: 'Informal ou formal: quando usar cada um', body: `
Em alemão há duas formas de dizer "você": **du** (informal) e **Sie** (formal). Escolher bem faz diferença na primeira impressão. 🤝
@ V:du ou Sie?;du · informal|amigos e família|crianças|colegas de curso|quem ofereceu o du;Sie · formal|desconhecidos|lojas e restaurantes|trabalho|pessoas mais velhas
# Sie: sempre com maiúscula
~ Sprechen Sie Deutsch? = O senhor fala alemão?
~ Woher kommen Sie? = De onde a senhora vem?
~ Wie heißen Sie? = Como o senhor se chama?
# du: entre amigos
~ Sprichst du Deutsch? = Você fala alemão?
~ Woher kommst du? = De onde você vem?
~ Wie heißt du? = Como você se chama?
BR O **Sie** é como o nosso "o senhor / a senhora", mas usado muito mais: até com pessoas jovens que você não conhece, em lojas e no trabalho.
> Na dúvida, comece com **Sie**: é educado e ninguém se ofende. Se a pessoa disser **Wir können uns duzen**, pode relaxar!
~ Wir können uns duzen. = Podemos nos tratar por você.
?? Você pergunta o nome da atendente do banco: || Wie heißen Sie? || Wie heißt du? || Wie heißen du? >> Situação formal pede Sie.
?? Numa festa, outra estudante da sua idade puxa conversa. O mais natural é: || Wie heißt du? || Wie heißt Sie? || Wie heißen du? >> Entre jovens numa festa, du é o normal. As outras duas misturam formas.
?? Na dúvida, use: || Sie || du || nenhum dos dois >> Sie é sempre seguro.
&& Sprichst du Deutsch? = informal | Sprechen Sie Deutsch? = formal
` },
{ id: 'n17', cat: 'base', e: '🏁', t: 'Desafio final', s: 'Revise tudo brincando e ganhe o selo Bereit!', body: `
Você chegou ao fim do Comece aqui! 🎉 Antes do dia 1, um desafio rápido com um pouco de cada aula. Sem pressão: errou, leu a explicação, aprendeu.
# Rodada 1: sons
?? 🔊 Wein || Wein || Wien >> ei soa "ai": Wein, vinho.
?? 🔊 zehn || zehn || sehen || Zahn >> z soa "ts": zehn, dez.
?? Como soa o final de "Tag"? || "tak" || "tag" || "taje" >> g no fim vira k.
# Rodada 2: frases
?? São 20h e você chega a um restaurante. Você diz: || Guten Abend! || Gute Nacht! || Guten Morgen! >> Guten Abend ao chegar, à noite.
?? Você não entendeu nada. Você diz: || Noch einmal, bitte. || Bitte schön! || Bis morgen! >> Mais uma vez, por favor.
&& Danke = obrigada | Entschuldigung = com licença | Tschüss = tchau | Langsam, bitte = devagar, por favor
# Rodada 3: como o alemão funciona
?? Qual frase respeita o vagão 2? || Am Montag arbeite ich. || Am Montag ich arbeite. || Arbeite am Montag ich. >> O verbo conjugado fica em 2º lugar.
?? "das Mädchen" é de qual gênero? || neutro || feminino || masculino >> Palavras terminadas em -chen são sempre das.
?? Com uma pessoa desconhecida numa loja, você usa: || Sie || du >> Sie, o tratamento formal.
?? Quanto é "sieben"? || 7 || 6 || 9 >> sieben = sete.
# Missão cumprida!
Você já sabe ler em voz alta qualquer palavra, cumprimentar, agradecer, pedir ajuda e contar até 12, e conhece as ideias-chave do alemão. Isso é muito para um começo! 🏆
GO Toque em "Concluir aula" para ganhar o selo **Bereit!** (pronta, pronto) e começar o dia 1.
` },
];
// Progresso das seis aulas antigas (g1…g6) passa para as aulas novas que cobrem o mesmo conteúdo.
const GUIDE_OLD = { g1: ['n01', 'n02'], g2: ['n03'], g3: ['n11', 'n12'], g4: ['n04', 'n05', 'n06'], g5: ['n13', 'n14', 'n15', 'n16'], g6: ['n07', 'n08', 'n09'] };
function migrateGuide(st) {
  const g = st.guide || (st.guide = {}), old = Object.keys(GUIDE_OLD).filter((k) => g[k]);
  if (old.length === 6) GUIDE.forEach((x) => { if (!g[x.id]) g[x.id] = g.g6; }); // quem já tinha concluído tudo continua com tudo
  else old.forEach((k) => GUIDE_OLD[k].forEach((id) => { if (!g[id]) g[id] = g[k]; }));
  return st;
}

// Glossário: termo, explicação simples, exemplo.
const GLOSS = [
  ['Substantivo', 'Nome de pessoa, coisa, lugar, animal ou ideia. Em alemão sempre começa com maiúscula.', 'der Tisch (a mesa), die Liebe (o amor)'],
  ['Artigo', 'Palavrinha antes do substantivo que mostra gênero, número e caso.', 'der, die, das (o, a) · ein, eine (um, uma)'],
  ['Gênero', 'A "família" de um substantivo: masculino (der), feminino (die) ou neutro (das). Não segue o português.', 'der Mond (a lua), die Sonne (o sol)'],
  ['Plural', 'Forma para mais de um. Em alemão o artigo do plural é sempre die, e a terminação varia.', 'das Buch → die Bücher'],
  ['Pronome pessoal', 'Palavra que substitui uma pessoa ou coisa.', 'ich, du, er, sie, es, wir, ihr, sie, Sie'],
  ['Verbo', 'Palavra da ação ou do estado.', 'wohnen (morar), sein (ser, estar)'],
  ['Infinitivo', 'A forma de dicionário do verbo, sem conjugar. Em alemão quase sempre termina em -en.', 'lernen, sprechen'],
  ['Conjugação', 'Mudança do final do verbo conforme a pessoa.', 'ich lerne, du lernst, er lernt'],
  ['Radical', 'A parte fixa do verbo, sem a terminação -en. É nela que se colam as terminações.', 'lern-en → radical lern'],
  ['Sujeito', 'Quem faz a ação ou de quem se fala. Pergunte "quem?" ao verbo.', 'Ich lerne. (Quem aprende? Ich.)'],
  ['Objeto direto', 'Quem ou o que recebe a ação diretamente. Pergunte "o quê?" ao verbo. Fica no acusativo.', 'Ich kaufe einen Apfel.'],
  ['Objeto indireto', 'A pessoa a quem algo é dado, dito ou mostrado. Pergunte "a quem?". Fica no dativo.', 'Ich gebe dem Kind ein Buch.'],
  ['Caso', 'Forma que artigos, pronomes e adjetivos tomam conforme a função na frase. São quatro.', 'der Hund / den Hund / dem Hund / des Hundes'],
  ['Nominativo', 'O caso do sujeito e da palavra depois de sein (ser).', 'Der Mann ist nett.'],
  ['Acusativo', 'O caso do objeto direto e de algumas preposições (für, ohne…). Só o masculino muda: der → den.', 'Ich sehe den Mann.'],
  ['Dativo', 'O caso do objeto indireto e de preposições como mit, bei, zu.', 'mit dem Bus, mit der Bahn'],
  ['Genitivo', 'O caso da posse ("de alguém").', 'das Auto meines Vaters'],
  ['Adjetivo', 'Palavra que descreve um substantivo. Antes dele, ganha terminação.', 'ein großes Haus'],
  ['Advérbio', 'Palavra que diz como, quando ou onde algo acontece.', 'heute, hier, schnell'],
  ['Preposição', 'Palavrinha de ligação que exige um caso.', 'mit (com), in (em), für (para)'],
  ['Conjunção', 'Palavra que liga duas frases. Algumas mandam o verbo para o fim.', 'und, aber, weil, dass'],
  ['Oração principal', 'Frase que funciona sozinha. O verbo conjugado fica na 2ª posição.', 'Ich bleibe zu Hause.'],
  ['Oração subordinada', 'Frase que depende de outra e começa com conjunção (weil, dass, wenn…). O verbo vai para o fim.', '…, weil ich krank bin.'],
  ['Verbo modal', 'Verbo que muda o sentido de outro: poder, dever, querer. O outro verbo vai no infinitivo para o fim.', 'Ich kann schwimmen.'],
  ['Verbo auxiliar', 'haben, sein ou werden ajudando a formar tempos compostos, futuro ou passiva.', 'Ich habe gegessen.'],
  ['Verbo separável', 'Verbo com prefixo que se solta e vai para o fim da frase.', 'aufstehen → Ich stehe früh auf.'],
  ['Particípio', 'Forma do verbo usada nos tempos compostos, em geral com ge-.', 'machen → gemacht'],
  ['Perfekt', 'O passado da fala do dia a dia: haben ou sein + particípio.', 'Ich habe gearbeitet.'],
  ['Präteritum', 'O passado simples, usado em textos e com sein, haben e os modais.', 'Ich war müde.'],
  ['Imperativo', 'A forma de ordem, pedido ou instrução.', 'Komm! Gehen Sie geradeaus!'],
  ['Reflexivo', 'Verbo cuja ação volta para o próprio sujeito, com mich, dich, sich…', 'Ich freue mich.'],
  ['Konjunktiv II', 'Forma para hipóteses, desejos e pedidos educados.', 'Ich hätte gern einen Kaffee.'],
  ['Moldura verbal', 'Quando o verbo tem duas partes: a conjugada na 2ª posição e a outra no fim da frase.', 'Ich habe heute Deutsch gelernt.'],
];
