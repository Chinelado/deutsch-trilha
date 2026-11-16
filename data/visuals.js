// Facilitação gráfica: esquemas por lição (chave = título alemão da lição).
// Tipos (primeiro segmento "X:título", segmentos separados por ";"):
//   F moldura da frase  cabeçalho "rótulo^cor|…", depois linhas "célula|célula|…"
//   T linha do tempo    "rótulo@posição=exemplo" (posição < 0 passado, 0 agora, > 0 futuro)
//   S escala            "esquerda|direita", depois "termo=descrição"
//   P fluxo             "etapa=descrição"
//   V comparação        "título da coluna|linha|linha…"
//   M tabela            primeira linha é o cabeçalho; **negrito** destaca
//   E fórmula           peças "texto^cor" e operadores + = →
// Cores: s sujeito · v verbo · v2 fim do verbo · o objetos · p atributos · c complementos · n negação · w conectores
const VIS = {};
const V = (t, ...specs) => { VIS[t] = specs; };

// ---------- A1 ----------
V('Hallo! Ich bin …', 'F:O verbo é sempre a peça 2;1ª posição^s|Verbo (2ª)^v|Resto^c;Ich|bin|Anna.;Wie|heißt|du?;Mein Name|ist|Anna.');
V('Woher kommst du?', 'E:Como conjugar um verbo regular;radical (komm)^s|+|terminação (-e, -st, -t…)^v|=|ich komme, du kommst^p');
V('Was ist das?', 'V:Três famílias, três cores;der · azul|der Stuhl|der Tisch|der Computer;die · vermelho|die Lampe|die Tasche|die Uhr;das · verde|das Buch|das Handy|das Fenster');
V('Wie spät ist es?', 'S:As horas no dia a dia (exemplo com 3 h);3:00|3:45;drei Uhr=3:00;Viertel nach drei=3:15;halb vier=3:30 (meia para as quatro!);Viertel vor vier=3:45');
V('Ich habe Hunger', 'M:No acusativo só o masculino muda;Função|masculino|feminino|neutro;Sujeito|der / ein|die / eine|das / ein;Objeto direto|**den / einen**|die / eine|das / ein');
V('Im Restaurant', 'V:kein ou nicht?;kein|nega substantivo sem artigo ou com ein|Ich habe kein Auto.;nicht|nega verbo, adjetivo e o resto|Das ist nicht teuer.');
V('Mein Tag', 'F:Verbo separável: o prefixo fecha a frase;1ª^s|Verbo^v|Meio^c|Prefixo^v2;Ich|stehe|um sechs Uhr|auf.;Am Samstag|kaufe|ich|ein.');
V('Kannst du mir helfen?', 'F:Modal + infinitivo formam uma moldura;1ª^s|Modal^v|Meio^c|Infinitivo^v2;Ich|kann|gut Deutsch|sprechen.;|Kannst|du mir|helfen?');
V('Fragen stellen', 'F:Três tipos de frase;1ª^w|Verbo^v|Resto^c;Du|wohnst|hier. (afirmação);Wo|wohnst|du? (pergunta W);|Wohnst|du hier? (sim ou não)');
V('Wo ist …?', 'M:Dativo para dizer onde;Família|Nominativo|Dativo;masculino|der Tisch|auf **dem** Tisch;feminino|die Tür|neben **der** Tür;neutro|das Bad|in **dem** (im) Bad;plural|die Stühle|unter **den** Stühlen');
V('In der Stadt', 'V:Três imperativos;Sie (formal)|Gehen Sie!|Nehmen Sie!|verbo + Sie;du (informal)|Geh!|Nimm!|forma de du sem -st;ihr (vocês)|Geht!|Nehmt!|forma de ihr sem pronome');
V('Beim Arzt', 'V:Cuidado com a negação dos modais;müssen|tenho que|Ich muss arbeiten.;nicht müssen|não preciso|Ich muss nicht arbeiten.;nicht dürfen|não posso (proibido)|Ich darf nicht rauchen.');
V('Was hast du gemacht?', 'E:A fórmula do Perfekt;haben (2ª posição)^v|+|particípio no fim^v2|=|Perfekt^p', 'F:A moldura do Perfekt;1ª^s|haben^v|Meio^c|Particípio^v2;Ich|habe|gestern Deutsch|gelernt.;Wir|haben|Pizza|gegessen.');

// ---------- A2 ----------
V('Im Urlaub', 'V:haben ou sein?;sein|movimento de A para B|mudança de estado|gehen, fahren, kommen, aufstehen, bleiben;haben|todos os outros verbos|essen, kaufen, sehen, lernen', 'T:Passado e presente;Perfekt com sein@-1=Ich bin nach Rom geflogen.;Agora@0=Ich bin wieder zu Hause.');
V('Früher', 'M:war e hatte;Pessoa|sein|haben;ich|war|hatte;du|warst|hattest;er / sie / es|war|hatte;wir|waren|hatten;ihr|wart|hattet;sie / Sie|waren|hatten', 'T:Antes e agora;Früher@-2=Früher war ich schüchtern.;Agora@0=Heute bin ich offen.');
V('Mit wem?', 'E:Sete preposições, sempre dativo;aus^w|bei^w|mit^w|nach^w|seit^w|von^w|zu^w|→|dativo^o', 'M:Artigos no dativo;|der|die|das|plural;Dativo|**dem**|**der**|**dem**|**den** + n');
V('Wohin damit?', 'V:Tem seta ou não tem?;Wohin? → movimento|acusativo|stellen, legen, hängen|Ich lege das Buch auf den Tisch.;Wo? · posição|dativo|stehen, liegen, hängen|Das Buch liegt auf dem Tisch.');
V('Besser, schneller, am besten', 'S:Três graus;normal|máximo;schnell=normal;schneller als=comparativo (-er + als);am schnellsten=superlativo (am -sten)', 'M:Os irregulares;Normal|Comparativo|Superlativo;gut|besser|am besten;viel|mehr|am meisten;gern|lieber|am liebsten');
V('Warum?', 'F:weil puxa o verbo para o fim;Oração principal^p|Conjunção^w|Sujeito^s|Meio^c|Verbo no fim^v;Ich bleibe hier,|weil|ich|krank|bin.;Sie lernt Deutsch,|weil|sie|in Wien|arbeitet.', 'V:weil × denn;weil|verbo no FIM|…, weil ich krank bin.;denn|verbo na 2ª posição|…, denn ich bin krank.');
V('Ich glaube, dass …', 'F:dass funciona como weil;Oração principal^p|Conjunção^w|Sujeito^s|Meio^c|Verbo no fim^v;Ich glaube,|dass|er|heute|kommt.;Ich hoffe,|dass|es dir|gut|geht.');
V('Wenn es regnet …', 'F:A subordinada ocupa a 1ª posição inteira;1ª posição (oração com wenn)^w|Verbo^v|Sujeito^s|Resto^c;Wenn es regnet,|bleibe|ich|zu Hause.;Wenn ich Zeit habe,|komme|ich|gern.');
V('Morgens im Bad', 'M:Pronomes reflexivos;Pessoa|Reflexivo|Exemplo;ich|mich|Ich freue mich.;du|dich|Freust du dich?;er / sie / es|**sich**|Er zieht sich an.;wir|uns|Wir treffen uns.;ihr|euch|Beeilt euch!;sie / Sie|**sich**|Sie erholen sich.');
V('Eine neue Wohnung', 'M:Depois de ein, o adjetivo mostra o gênero;Caso|masculino|feminino|neutro;Nominativo|ein neu**er** Tisch|eine neu**e** Lampe|ein neu**es** Buch;Acusativo|einen neu**en** Tisch|eine neu**e** Lampe|ein neu**es** Buch;Dativo|einem neu**en** Tisch|einer neu**en** Lampe|einem neu**en** Buch');
V('Die netten Nachbarn', 'M:Depois de der/die/das: só -e ou -en;Caso|masculino|feminino|neutro|plural;Nominativo|der neu**e**|die neu**e**|das neu**e**|die neu**en**;Acusativo|den neu**en**|die neu**e**|das neu**e**|die neu**en**;Dativo|dem neu**en**|der neu**en**|dem neu**en**|den neu**en**');
V('Eine Reise buchen', 'T:Dois jeitos de falar do futuro;Agora@0=Ich packe den Koffer.;Presente + tempo@1=Morgen fahre ich nach Wien.;Futur I@1=Ich werde dich anrufen. (promessa)', 'F:Futur I;1ª^s|werden^v|Meio^c|Infinitivo^v2;Ich|werde|morgen nach Wien|fahren.');
V('Im Beruf', 'M:Modais no passado: tire o trema, cole -te;Presente|Präteritum;ich kann|ich **konnte**;ich muss|ich **musste**;ich darf|ich **durfte**;ich will|ich **wollte**;ich soll|ich **sollte**', 'V:Uma bolinha muda tudo;konnte (sem trema)|passado real: pude|Ich konnte nicht kommen.;könnte (com trema)|hipótese ou pedido: poderia|Könnte ich kommen?');
V('Geschenke', 'V:Quem é o sujeito?;Português|Eu gosto do vestido.|sujeito: eu;Alemão|Das Kleid gefällt mir.|sujeito: das Kleid · mir = dativo', 'E:Dar algo a alguém;pessoa (dativo, a quem?)^o|+|coisa (acusativo, o quê?)^o|→|Ich schenke meiner Mutter Blumen.^p');
V('Gib es mir!', 'M:Todos os pronomes;Nominativo|Acusativo|Dativo;ich|mich|mir;du|dich|dir;er|**ihn**|**ihm**;sie|sie|ihr;es|es|ihm;wir|uns|uns;ihr|euch|euch;sie / Sie|sie / Sie|ihnen / Ihnen', 'E:Dois pronomes: acusativo primeiro;Ich gebe^v|es (acusativo)^o|ihm (dativo)^o');
V('Gute Besserung!', 'S:Do conselho à obrigação;suave|forte;Sie könnten …=sugestão;Sie sollten …=conselho;Sie sollen …=recomendação de alguém;Sie müssen …=obrigação');
V('Das Wetter', 'V:im, am, um: do maior ao menor;im|meses e estações|im Mai, im Winter;am|dias e partes do dia|am Montag, am Abend;um|horas exatas|um acht Uhr');
V('Wissen Sie, ob …?', 'F:Pergunta indireta: verbo no fim;Abertura^p|ob ou palavra W^w|Sujeito^s|Meio^c|Verbo^v;Wissen Sie,|wo|die Haltestelle||ist?;Ich weiß nicht,|ob|er|heute|kommt.');
V('Der Mann, der …', 'F:A oração relativa;Substantivo^s|Relativo^w|Meio^c|Verbo no fim^v;Das ist der Mann,|der|hier|arbeitet.;Ich habe eine Freundin,|die|in Berlin|wohnt.');
V('Das Lied, das ich liebe', 'M:Relativo: sujeito ou objeto?;Função na relativa|masculino|feminino|neutro|plural;Sujeito (nominativo)|der|die|das|die;Objeto (acusativo)|**den**|die|das|die');
V('Könnten Sie …?', 'S:Do direto ao educado;direto|muito educado;Gib mir das!=ordem;Kannst du mir das geben?=pedido;Könntest du mir das geben?=educado;Würden Sie mir das bitte geben?=muito educado');
V('Feste feiern', 'M:Ordinais e datas;Número|Hoje é…|Em que dia?;1|der erste|am ersten;2|der zweite|am zweiten;3|der dritte|am dritten;7|der siebte|am siebten;20|der zwanzigste|am zwanzigsten');
V('Worauf wartest du?', 'M:Verbo + preposição + caso;Verbo|Preposição|Caso;warten|auf|acusativo;denken|an|acusativo;sprechen|über|acusativo;sich interessieren|für|acusativo;träumen|von|dativo;Angst haben|vor|dativo');
V('Deshalb und trotzdem', 'V:As três caixas dos conectores;und, aber, oder, denn|não contam posição|…, aber ich bin müde.;deshalb, trotzdem, sonst|ocupam a 1ª posição|…, deshalb bleibe ich hier.;weil, dass, wenn, obwohl|verbo no fim|…, weil ich müde bin.');

// ---------- B1 ----------
V('Es war einmal …', 'T:Os passados e onde aparecem;Präteritum@-1=Er ging nach Hause. (textos, histórias);Perfekt@-1=Er ist nach Hause gegangen. (conversa);Agora@0=', 'M:Formar o Präteritum;Tipo|Infinitivo|Präteritum;regular|machen|mach**te**;regular|spielen|spiel**te**;irregular|gehen|**ging**;irregular|kommen|**kam**;irregular|sehen|**sah**;misto|denken|**dachte**');
V('Nachdem ich …', 'T:O passado do passado;Plusquamperfekt@-2=Ich hatte schon gegessen.;Präteritum / Perfekt@-1=Dann ging ich spazieren.;Agora@0=', 'E:Plusquamperfekt;hatte / war^v|+|particípio^v2|=|ação anterior a outra no passado^p');
V('Als ich Kind war', 'V:als × wenn × wann;als|uma vez ou um período no passado|Als ich Kind war, …;wenn|repetição ou presente e futuro|Immer wenn ich ihn sehe, …;wann|só em perguntas|Wann kommst du?');
V('Menschen, denen ich vertraue', 'M:O pronome relativo completo;Caso|masculino|feminino|neutro|plural;Nominativo|der|die|das|die;Acusativo|den|die|das|die;Dativo|dem|der|dem|**denen**;Genitivo|dessen|deren|dessen|deren', 'F:Preposição antes do relativo;Substantivo^s|Preposição + relativo^w|Sujeito^s|Verbo^v;Der Freund,|mit dem|ich|wohne,;Die Stadt,|in der|ich|lebe,');
V('Wegen des Wetters', 'M:O genitivo;Família|Nominativo|Genitivo;masculino|der Vater|**des** Vater**s**;feminino|die Mutter|**der** Mutter;neutro|das Kind|**des** Kind**es**;plural|die Eltern|**der** Eltern');
V('Wozu?', 'V:Finalidade;um … zu|o mesmo sujeito faz as duas ações|Ich lerne, um die Prüfung zu bestehen.;damit|sujeitos diferentes|Ich spreche langsam, damit du mich verstehst.');
V('Hergestellt in Deutschland', 'V:Ativa × passiva;Ativa: foco em quem faz|Die Firma baut das Auto.;Passiva: foco no que acontece|Das Auto wird gebaut.', 'E:A fórmula da passiva;werden (2ª posição)^v|+|particípio no fim^v2|=|passiva^p');
V('Wann wurde das gebaut?', 'M:A passiva nos tempos;Tempo|Forma;Presente|Das Haus **wird** gebaut.;Präteritum|Das Haus **wurde** gebaut.;Perfekt|Das Haus **ist** gebaut **worden**.;Com modal|Das Haus **muss** gebaut **werden**.', 'T:A linha do tempo da passiva;Perfekt / Präteritum@-1=Das Haus wurde 1990 gebaut.;Presente@0=Das Haus wird renoviert.;Com modal@1=Das Dach muss repariert werden.');
V('Wenn ich reich wäre …', 'V:Real × irreal;Real (possível)|Wenn ich Zeit habe, komme ich.;Irreal (imaginado)|Wenn ich Zeit hätte, würde ich kommen.', 'E:A fórmula do sonho;wenn + hätte / wäre / könnte^w|,|würde + infinitivo^v');
V('Hätte ich nur …', 'T:Irreal no presente e no passado;Irreal passado@-1=Wenn ich das gewusst hätte, wäre ich gekommen.;Irreal presente@0=Wenn ich Zeit hätte, würde ich kommen.', 'M:Konjunktiv II no passado;Auxiliar|Quando|Exemplo;hätte + particípio|verbos com haben|Ich hätte angerufen.;wäre + particípio|verbos com sein|Ich wäre gekommen.;hätte + infinitivo + modal|com modal|Ich hätte lernen sollen.');
V('Pläne und Vorsätze', 'S:Quão certo é o futuro?;certo|incerto;Ich werde …=promessa ou plano firme;bestimmt=com certeza;wahrscheinlich=provavelmente;vielleicht=talvez');
V('Worüber? Darüber!', 'V:Coisas × pessoas;Coisa|Worauf wartest du?|Darauf.;Pessoa|Auf wen wartest du?|Auf ihn.', 'E:Formar a pergunta;wo^w|+|(r se a preposição começa com vogal)^c|+|auf^c|=|worauf^w');
V('Obwohl es schwer ist', 'V:Mesmo sentido, três posições;obwohl (conjunção)|verbo no fim|Obwohl es regnet, gehe ich raus.;trotzdem (advérbio)|verbo logo depois|Es regnet, trotzdem gehe ich raus.;trotz (preposição)|+ genitivo|Trotz des Regens gehe ich raus.');
V('Entweder … oder', 'M:Conectores duplos;Conector|Sentido;sowohl … als auch|os dois;weder … noch|nenhum dos dois;entweder … oder|um ou o outro;nicht nur … sondern auch|um e ainda o outro;je … desto|quanto mais…, mais…');
V('Herr Weber und sein Kollege', 'M:n-Deklination: -n em tudo, menos no nominativo;Caso|Singular|Plural;Nominativo|der Kollege|die Kollege**n**;Acusativo|den Kollege**n**|die Kollege**n**;Dativo|dem Kollege**n**|den Kollege**n**;Genitivo|des Kollege**n**|der Kollege**n**');
V('Frisches Brot', 'M:Sem artigo: o adjetivo faz o papel do artigo;Caso|masculino|feminino|neutro|plural;Nominativo|gut**er** Wein|frisch**e** Milch|kalt**es** Wasser|frisch**e** Äpfel;Acusativo|gut**en** Wein|frisch**e** Milch|kalt**es** Wasser|frisch**e** Äpfel;Dativo|gut**em** Wein|frisch**er** Milch|kalt**em** Wasser|frisch**en** Äpfeln');
V('Lust, ins Kino zu gehen?', 'V:Com zu × sem zu;Com zu|versuchen, vergessen, anfangen, Lust haben|Ich versuche, pünktlich zu sein.;Sem zu|modais, werden, lassen|Ich muss pünktlich sein.', 'E:zu no verbo separável;an^v2|+|zu^v2|+|rufen^v2|=|anzurufen^v2');
V('Ich lasse es reparieren', 'V:Três sentidos de lassen;mandar fazer|Ich lasse mein Auto reparieren.;permitir|Er lässt die Kinder spielen.;deixar num lugar|Lass den Schlüssel hier.');
V('Die Bewerbung', 'P:A carta de candidatura;Saudação=Sehr geehrte Frau …,;Motivo=Hiermit bewerbe ich mich um …;Experiência=Ich habe … Jahre als … gearbeitet.;Pontos fortes=Zu meinen Stärken gehört …;Fecho=Über eine Einladung würde ich mich freuen.');
V('Umwelt schützen', 'V:Recomendar sem apontar o dedo;man sollte|Man sollte weniger fliegen.;passiva + modal|Energie muss gespart werden.');
V('Gesund leben', 'S:Do conselho direto ao distante;direto|distante;Mach doch mal …=entre amigos;Du solltest …=conselho;An deiner Stelle würde ich …=com empatia;Wie wäre es, wenn …?=sugestão aberta');
V('Medien und Internet', 'V:das ou was?;das|depois de substantivo neutro|das Buch, das ich lese;was|depois de alles, etwas, nichts ou da frase inteira|alles, was ich weiß');
V('Lernen und Bildung', 'T:seit, vor e in;vor zwei Jahren@-2=Ich habe angefangen. (acabou);seit zwei Jahren@-2=Ich lerne seit zwei Jahren. (continua até hoje);Agora@0=;in zwei Wochen@1=Ich habe Prüfung.');
V('Ärger mit den Nachbarn', 'P:Reclamar com educação;Descrever=Es stört mich, dass …;Pedir=Könnten Sie bitte …?;Agradecer=Danke für Ihr Verständnis.');
V('Meiner Meinung nach', 'S:Do acordo ao desacordo;concordo|discordo;Ich bin ganz deiner Meinung=total;Da hast du recht=sim;Das stimmt zwar, aber …=em parte;Das sehe ich anders=não;Das stimmt überhaupt nicht=de jeito nenhum');
V('Vor- und Nachteile', 'P:Argumentar;Tese=Ich bin der Meinung, dass …;Prós=Ein Vorteil ist, dass …;Contras=Dagegen spricht, dass …;Conclusão=Zusammenfassend …');
V('Eine Beschwerde schreiben', 'P:A carta formal;Assunto=Betreff: Reklamation;Saudação=Sehr geehrte Damen und Herren,;Fato=Am … habe ich … gekauft.;Problema=Leider …;Pedido=Ich bitte Sie, …;Fecho=Mit freundlichen Grüßen');
V('Liebe Grüße', 'V:Formal × informal;Formal|Sehr geehrte Frau Weber,|Sie|Mit freundlichen Grüßen;Informal|Liebe Anna, / Lieber Tom,|du|Liebe Grüße');
V('Gemeinsam planen', 'P:Planejar em dupla;Propor=Wollen wir …?;Reagir=Gute Idee! / Ich weiß nicht …;Dividir=Wer kümmert sich um …?;Fechar=Abgemacht!');
V('Eine Präsentation halten', 'P:Apresentação B1 em cinco partes;Tema=Ich spreche über …;Experiência=Ich persönlich …;Meu país=In Brasilien …;Prós e contras=Ein Vorteil ist …;Fim=Vielen Dank für Ihre Aufmerksamkeit.');
V('Probleme unterwegs', 'P:Resolver no guichê;Problema=Mein Zug ist ausgefallen.;Alternativa=Wann fährt der nächste Zug?;Rota=Muss ich umsteigen?;Direito=Bekomme ich eine Entschädigung?');
V('Gefühle', 'M:Adjetivo + preposição;Adjetivo|Preposição|Caso;stolz, wütend, neidisch|auf|acusativo;verliebt|in|acusativo;traurig, froh|über|acusativo;zufrieden, einverstanden|mit|dativo');
V('Kultur erleben', 'P:Recomendar uma obra;Sobre o quê=Der Film handelt von …;Enredo=Es geht um …;Opinião=Besonders gut fand ich …;Recomendação=Ich kann ihn nur empfehlen.');
V('In den Nachrichten', 'S:Quanto quem relata garante;fato|boato;Die Polizei bestätigt …=confirmado;Laut der Zeitung …=segundo uma fonte;Es heißt, dass …=dizem que;Er soll …=supostamente');
V('Das weinende Kind', 'V:Partizip I × Partizip II;Partizip I (-end)|em andamento, ativo|das weinende Kind;Partizip II (ge-)|concluído, passivo|das reparierte Auto');
V('Prüfungstraining B1', 'M:Goethe-Zertifikat B1;Módulo|Duração|O que treinar;Lesen|65 min|ler as perguntas antes do texto;Hören|cerca de 40 min|palavras-chave e negações;Schreiben|60 min|cobrir todos os pontos pedidos;Sprechen|cerca de 15 min|interagir com a dupla');

// ---------- B2 ----------
V('Er sagt, er sei krank', 'V:Discurso direto × indireto;Direto|Er sagt: „Ich bin krank.“;Indireto (Konjunktiv I)|Er sagt, er sei krank.', 'M:Konjunktiv I e o substituto;Pessoa|sein|haben|kommen;ich|sei|(hätte)|(käme);er / sie / es|sei|habe|komme;wir|seien|(hätten)|(kämen);sie / Sie|seien|(hätten)|(kämen)');
V('Sie fragte, ob …', 'P:Relatar cada tipo de frase;Afirmação=Er sagte, er sei müde.;Pergunta sim/não=Er fragte, ob ich käme.;Pergunta W=Er fragte, wann ich Zeit hätte.;Ordem=Er sagte, ich solle warten.');
V('Das lässt sich machen', 'V:Três jeitos de dizer "pode ou deve ser feito";Passiva + modal|Das kann gelöst werden.;sich lassen|Das lässt sich lösen.;sein + zu|Das ist zu lösen.');
V('Machbar oder nicht?', 'E:Verbo + -bar = que pode ser feito;machen^v|+|-bar^p|=|machbar^p', 'E:Negar com un-;un-^n|+|lesbar^p|=|unlesbar (ilegível)^p');
V('Geschlossen!', 'V:Processo × estado;werden + particípio|alguém está fazendo|Die Tür wird geschlossen.;sein + particípio|resultado, como está|Die Tür ist geschlossen.');
V('Die Entwicklung', 'M:Três caminhos para nominalizar;Verbo|Substantivo|Gênero;lernen|das Lernen|neutro (infinitivo);entwickeln|die Entwicklung|feminino (-ung);anfangen|der Anfang|masculino (radical)', 'E:O objeto vira genitivo;die Technik entwickeln^v|→|die Entwicklung der Technik^s');
V('Eine Entscheidung treffen', 'M:Bloco formal × verbo simples;Bloco formal|Verbo simples;eine Entscheidung treffen|entscheiden;eine Frage stellen|fragen;zur Verfügung stehen|verfügbar sein;Kritik üben an|kritisieren;in Frage kommen|möglich sein');
V('Die gestern gelieferte Ware', 'V:Relativa × atributo;Relativa|die Ware, die gestern geliefert wurde;Atributo (mais denso)|die gestern gelieferte Ware', 'F:Leia de fora para dentro;Artigo^p|Complementos^c|Particípio^v2|Substantivo^s;die|gestern|gelieferte|Ware;die|seit Jahren|steigenden|Preise;der|von allen|erwartete|Bericht');
V('Indem man übt', 'V:Meio, falta e substituição;indem|como? por qual meio?|Man lernt, indem man übt.;ohne … zu|sem|Er ging, ohne zu grüßen.;statt … zu|em vez de|Statt zu lernen, sieht sie fern.');
V('Sollte es regnen …', 'S:Força da condição;provável|improvável;wenn=se;falls=caso;sofern=desde que;Sollte …=se por acaso', 'V:Condição × exceção;falls / sofern|condição (verbo no fim)|Falls du Zeit hast, …;es sei denn|exceção (ordem normal)|…, es sei denn, es regnet.');
V('Während er …, ist sie …', 'V:Três formas de contrastar;während, wohingegen|verbo no fim|…, während er Kaffee trinkt.;dagegen, jedoch, hingegen|dentro da oração principal|Er dagegen trinkt Kaffee.;im Gegensatz zu|+ dativo|Im Gegensatz zu mir …');
V('So …, dass', 'P:Causa → consequência;Causa intensa=Es war so kalt,;Conector=dass / sodass;Consequência=wir froren.', 'V:sodass × damit;sodass|resultado: aconteceu|Er war krank, sodass er nicht kam.;damit|objetivo: queria que acontecesse|Er bleibt im Bett, damit er gesund wird.');
V('Das dürfte stimmen', 'S:A régua da certeza;100%|0%;muss=quase certo;müsste=deveria ser;dürfte=provável;könnte=possível;kann nicht=impossível');
V('Er will nichts gesehen haben', 'V:Quem afirma?;sollen|outras pessoas dizem|Er soll reich sein. (dizem que é);wollen|a própria pessoa alega, e eu duvido|Er will reich sein. (ele diz que é)');
V('Als ob nichts wäre', 'V:Duas formas de "como se";als ob + verbo no fim|Er tut so, als ob er krank wäre.;als + verbo logo depois|Er tut so, als wäre er krank.');
V('Er wird es vergessen haben', 'T:Os dois usos do Futur II;Suposição sobre o passado@-1=Er wird den Zug verpasst haben.;Agora@0=;Concluído até um ponto futuro@1=Bis Freitag werde ich es erledigt haben.', 'E:Futur II;werden^v|+|particípio^v2|+|haben / sein^v2');
V('Angesichts der Lage', 'M:Preposições formais com genitivo;Formal|Sentido|No dia a dia;aufgrund|devido a|wegen;angesichts|diante de|bei;anlässlich|por ocasião de|zu;mangels|por falta de|ohne;bezüglich|quanto a|zu, über');
V('Bei Regen', 'M:Da oração ao grupo nominal;Oração (fala)|Grupo nominal (texto formal);weil es regnet|wegen des Regens;obwohl es regnet|trotz des Regens;wenn es regnet|bei Regen;nachdem er angekommen ist|nach seiner Ankunft;bevor wir abfahren|vor der Abfahrt');
V('Arbeit im Wandel', 'S:Reagir numa discussão;concordo|discordo;Da haben Sie völlig recht=total;Das sehe ich genauso=sim;Da stimme ich nur teilweise zu=em parte;Das mag sein, aber …=objeção;Dem möchte ich widersprechen=discordo');
V('Die Grafik zeigt …', 'V:um × auf;um + número|o tamanho da variação|um 5 Prozent gestiegen (+5);auf + número|o valor final|auf 30 Prozent gestiegen (= 30)', 'P:Descrever um gráfico;Tema=Die Grafik zeigt …;Destaque=An erster Stelle steht …;Variação=… ist um … gestiegen;Comparação=Im Vergleich zu …;Comentário=Auffällig ist, dass …');
V('Ankommen', 'P:Tomar posição;Introdução=Zu diesem Thema …;Tese=Ich vertrete die Auffassung, dass …;Argumentos=Erstens …, zweitens …;Contraponto=Natürlich gibt es auch …;Conclusão=Alles in allem …');
V('Im Forum', 'P:Postagem de fórum (cerca de 150 palavras);Tema=In der Diskussion geht es um …;Opinião=Ich bin fest davon überzeugt, dass …;Argumentos=Ein weiteres Argument ist …;Alternativa=Eine Alternative wäre …;Fecho=Wie seht ihr das?');
V('An die Chefin', 'P:Mensagem formal (cerca de 100 palavras);Saudação=Sehr geehrte Frau …,;Motivo=Ich wende mich an Sie, weil …;Pedido=Wäre es möglich, …?;Fecho=Vielen Dank im Voraus. Mit freundlichen Grüßen');
V('Vortrag und Diskussion', 'P:Prova oral B2;Visão geral=Ich gebe einen kurzen Überblick.;Partes=Im ersten Teil …;Perguntas=Darauf komme ich gleich zurück.;Discussão=Darf ich kurz einhaken?');
V('Wer wagt, gewinnt', 'V:wer, was e wo(r)-;wer … (der)|pessoas em geral|Wer fragt, lernt.;was|alles, etwas, nichts, a frase inteira|alles, was ich weiß;wo(r) + preposição|verbo com preposição|etwas, worauf ich stolz bin');
V('Der Mann, dessen Auto …', 'E:cujo;der Mann^s|+|dessen^w|+|Auto (sem artigo)^s', 'V:dessen × deren;dessen|possuidor der ou das|der Mann, dessen Auto …;deren|possuidor die ou plural|die Frau, deren Sohn …');
V('Sobald ich fertig bin', 'M:Conectores de tempo;Conector|Sentido|Exemplo;sobald|assim que|Sobald ich fertig bin, rufe ich an.;solange|enquanto durar|Solange es regnet, bleiben wir.;bis|até que|Warte, bis ich komme.;seitdem|desde que|Seitdem ich hier wohne, …;bevor|antes que|Bevor du gehst, …');
V('Komm doch mal!', 'M:Partículas e o tom;Partícula|Efeito|Exemplo;doch|insiste com simpatia|Komm doch!;mal|suaviza|Schau mal!;ja|surpresa ou óbvio|Das ist ja toll!;denn|interesse (em pergunta)|Was machst du denn?;halt / eben|é assim mesmo|Das ist halt so.');
V('Wann, warum, wie, wo', 'F:A ordem do meio: tempo, causa, modo, lugar;1ª^s|Verbo^v|Tempo^c|Causa^c|Modo^c|Lugar^c|Fim^v2;Ich|bin|gestern|wegen des Regens|mit dem Bus|nach Hause|gefahren.');
V('Übersetzen oder übersetzen?', 'V:Separável × inseparável;Separável (acento no prefixo)|Er zieht nach Köln um.|particípio: umgezogen;Inseparável (acento no radical)|Sie übersetzt den Text.|particípio: übersetzt (sem ge-)');
V('Es kommt darauf an', 'V:Dois tipos de es;es de apoio|some se outro termo vem antes|Es freut mich, dass … → Mich freut, dass …;es fixo|nunca some|es gibt, es geht um, es kommt darauf an');
V('Das hätte vermieden werden können', 'T:Passiva com modal no Konjunktiv II;Passado@-1=Das hätte geändert werden müssen.;Presente@0=Das müsste geändert werden.', 'F:O hätte abre, três verbos fecham;1ª^s|hätte^v|Meio^c|Particípio + werden + modal^v2;Der Fehler|hätte|früher|vermieden werden können.');
V('Freiheit und Sicherheit', 'M:Sufixos que revelam a palavra;Sufixo|Tipo|Exemplo;-heit / -keit|die (substantivo)|die Freiheit, die Fähigkeit;-schaft|die|die Freundschaft;-ung|die|die Wohnung;-nis|das ou die|das Ergebnis;-los|adjetivo: sem|kostenlos;-reich / -voll|adjetivo: cheio de|erfolgreich');
V('Interesse an, Angst vor', 'M:Substantivos e adjetivos com preposição;Palavra|Preposição|Caso;das Interesse|an|dativo;die Angst|vor|dativo;die Lust|auf|acusativo;angewiesen|auf|acusativo;überzeugt|von|dativo;verantwortlich|für|acusativo');
V('Hätte ich bloß …!', 'T:Desejos irreais;Passado@-1=Hätte ich bloß nichts gesagt!;Presente@0=Wenn ich doch nur Zeit hätte!');
V('Etwas Neues', 'E:O adjetivo vira substantivo;etwas / nichts / viel^w|+|Adjetivo maiúsculo + -es^p|=|etwas Neues, nichts Besonderes^p', 'M:man nos casos;Caso|Forma;Nominativo|man;Acusativo|einen;Dativo|einem');
V('Völlig erschöpft', 'P:Do sintoma ao conselho;Sintoma=Ich leide unter …;Desde quando=Seit Wochen …;Causa=Ich stehe unter Druck.;Conselho=Es wäre ratsam, …');
V('Kauf mich!', 'P:Analisar uma propaganda;Público=Sie richtet sich an …;Objetivo=Sie zielt darauf ab, …;Efeito=Das weckt den Wunsch nach …;Avaliação=Ich halte das für …');
V('Klimaschutz jetzt', 'P:Exigir uma medida;Problema=Der Ausstoß steigt.;Exigência=Es müsste mehr getan werden.;Proposta=Eine Möglichkeit wäre, …;Condição=Nur so lässt sich … erreichen.');
V('Stadt oder Land?', 'V:Cidade × campo;Stadt|belebt, gute Infrastruktur|Mieten oft unbezahlbar;Land|ruhig, günstiger Wohnraum|Auto nötig, viel Pendeln');
V('Man lernt nie aus', 'T:Contar uma trajetória;Anfangs@-2=No começo foi difícil.;Im Laufe der Zeit@-1=Com o tempo, melhorou.;Inzwischen@0=Hoje é divertido.');
V('Stimmt das überhaupt?', 'S:Quão confiável é a informação?;confiável|duvidosa;belegt=comprovado;bestätigt=confirmado;laut …=segundo uma fonte;angeblich=supostamente;nicht belegt=sem prova');
V('Zwischen den Zeilen', 'P:Estratégia de leitura;Perguntas=leia primeiro;Título=preveja o tema;Leitura rápida=überfliegen;Palavras-chave=procure sinônimos;Conferir=atenção a nur, kaum, nicht');
V('Hat\'s geklappt?', 'V:Falado × escrito;Falado|hab\'s, gibt\'s, \'ne, nix|na ja, halt, sozusagen;Escrito|habe es, gibt es, eine, nichts|frases completas');
V('Ich drücke dir die Daumen', 'M:Imagem × sentido;Expressão|Ao pé da letra|Sentido;die Daumen drücken|apertar os polegares|torcer por alguém;nur Bahnhof verstehen|só entender estação|não entender nada;Schwein haben|ter porco|ter sorte;die Nase voll haben|estar com o nariz cheio|estar farto');
V('Einigen wir uns', 'P:Negociar;Abrir=Ich würde gern über … sprechen.;Oferta=Ich könnte Ihnen entgegenkommen, wenn …;Recusa=Das ist für mich nicht akzeptabel.;Acordo=Könnten wir uns auf … einigen?');
V('Ich rufe wegen … an', 'P:Reclamar por telefone;Apresentar=Mein Name ist …;Motivo=Ich rufe wegen … an.;Problema=Die Ware entspricht nicht der Beschreibung.;Solução=Ich möchte das Gerät umtauschen.;Prazo=Bis wann kann ich damit rechnen?');
V('Prüfungstraining B2', 'M:Goethe-Zertifikat B2;Módulo|Duração|Foco;Lesen|65 min|opiniões e lacunas;Hören|cerca de 40 min|palestra e entrevistas;Schreiben|75 min|fórum + mensagem formal;Sprechen|cerca de 15 min|apresentação + discussão');
V('Zur Sprache bringen', 'M:Alguém faz × algo acontece;Alguém faz (ativo)|Algo acontece;zur Sprache bringen|zur Sprache kommen;in Gang setzen|in Gang kommen;zur Diskussion stellen|zur Diskussion stehen');
V('Ehrlich gesagt', 'V:O particípio no lugar de uma oração;Ação anterior|In Berlin angekommen, rief sie an.;Fórmulas que comentam a fala|ehrlich gesagt, kurz gesagt, genau genommen');
V('Wie bereits erwähnt', 'V:Apontar no texto;Para trás|dies, wie bereits erwähnt, oben genannt, Letzteres;Para a frente|im Folgenden, wie folgt');
V('Äußerst wichtig', 'S:A régua da intensidade;fraco|forte;halbwegs=mais ou menos;einigermaßen=razoavelmente;ziemlich=bastante;sehr=muito;äußerst=extremamente;völlig=completamente');
V('Doppelt so groß wie', 'V:wie × als;so … wie (forma básica)|genauso groß wie, doppelt so groß wie, halb so teuer wie;comparativo + als|größer als, wesentlich teurer als');
V('In der Lage sein', 'M:Modal × expressão formal;Modal|Formal;können|in der Lage sein, imstande sein;müssen|verpflichtet sein, es ist erforderlich;dürfen|berechtigt sein, es ist gestattet;nicht dürfen|es ist untersagt');
V('Bei der Bank', 'P:Abrir uma conta;Pedido=Ich möchte ein Konto eröffnen.;Documentos=Ausweis + Meldebescheinigung;Custos=Wie hoch sind die Gebühren?;Uso=überweisen, abheben, einzahlen');
V('Das Kleingedruckte', 'T:A vida de um contrato;Abschluss@-2=assinatura;Laufzeit@-1=vigência;Kündigungsfrist@0=prazo para rescindir;Verlängerung@1=renova sozinho se você não rescindir');
V('Laut einer Studie', 'S:A força de uma afirmação científica;forte|fraca;beweisen=prova;zeigen=mostra;nahelegen=sugere;hindeuten auf=aponta para;vermuten=supõe');
V('Lesenswert!', 'P:Resenha;Dados=Der Roman von … erschien …;Resumo=Im Mittelpunkt steht …;Elogio=Besonders gelungen ist …;Crítica=Weniger überzeugend ist …;Recomendação=Lesenswert!');
V('Andere Länder, andere Sitten', 'V:du × Sie;du|amigos, família, jovens, muitas empresas modernas;Sie|desconhecidos, clientes, superiores, até alguém oferecer o du');
V('Sich engagieren', 'P:Falar do seu engajamento;O quê=Ich engagiere mich für …;Onde=bei + dativo;Por quê=Mir ist wichtig, dass …;O que ganho=Dabei lerne ich …');
V('Die Besprechung', 'P:Conduzir uma reunião;Abrir=Ich begrüße Sie …;Pauta=Auf der Tagesordnung stehen …;Conduzir=Kommen wir zum nächsten Punkt.;Registrar=Halten wir fest: …;Fechar=Wer übernimmt was bis wann?');
V('Am Apparat', 'P:Ligação de trabalho;Atender=Firma …, Souza am Apparat.;Pedir=Könnte ich bitte … sprechen?;Ausente=Möchten Sie eine Nachricht hinterlassen?;Despedir=Auf Wiederhören!');
V('Offen gesagt', 'P:Feedback em três passos;Observação=Mir ist aufgefallen, dass …;Efeito=Das hat dazu geführt, dass …;Desejo=Ich würde mir wünschen, dass …');
V('Der Projektstand', 'P:Relato de andamento;Feito=Bisher haben wir …;Agora=Aktuell …;Próximo=Als Nächstes steht … an.;Risco=Ein Risiko besteht darin, dass …');
V('Was reizt Sie an der Stelle?', 'P:A entrevista;Sobre você=Ich bin … und habe …;Motivação=Mich reizt besonders …;Salário=Meine Gehaltsvorstellung liegt bei …;Suas perguntas=Wie sieht ein typischer Arbeitstag aus?');
V('Mit freundlichen Grüßen', 'V:Três e-mails comerciais;Consulta|Ich bitte um ein Angebot.;Proposta|Gern unterbreiten wir Ihnen …;Cobrança|Leider konnten wir keinen Zahlungseingang feststellen.');
V('Gut zuhören', 'M:Palavras-sinal;Sinal|Anuncia;zunächst, erstens|sequência;außerdem, hinzu kommt|acréscimo;allerdings, im Gegensatz dazu|contraste;daraus folgt, somit|conclusão;zusammenfassend|resumo');
V('Dafür oder dagegen?', 'S:Posições num texto de opinião;a favor|contra;befürworten=a favor;begrüßen=vê com bons olhos;zwiespältig=dividido;skeptisch=cético;ablehnen=contra');
V('Noch einmal lesen', 'P:Revisão em cinco passadas;1=verbos: posição e concordância;2=artigos e casos;3=terminações de adjetivo;4=maiúsculas;5=vírgulas');
V('Mein Thema lautet …', 'P:Roteiro da apresentação;Tema=Mein Thema lautet …;Roteiro=Ich gliedere meinen Vortrag in …;Transição=Damit komme ich zum nächsten Punkt.;Fim=Damit bin ich am Ende.');
V('Da gebe ich Ihnen recht', 'P:Reagir na discussão;Retomar=Sie haben gesagt, dass …;Conceder=In diesem Punkt gebe ich Ihnen recht,;Contrapor=allerdings …;Devolver=Wie sehen Sie das?');
V('Typische Fehler', 'M:Falsos amigos;Alemão|Parece|Significa;aktuell|na verdade|atual;sensibel|sensato|sensível;das Lokal|local|bar, restaurante;ordinär|comum|vulgar', 'V:ter × ser;Português: ter|Tenho 30 anos.;Alemão: sein|Ich bin 30 Jahre alt.');

// ---------- C1 ----------
V('Nach Abschluss des Studiums', 'V:Verbal × nominal;Verbal (fala, clareza)|Nachdem er das Studium abgeschlossen hatte, …;Nominal (texto formal)|Nach Abschluss des Studiums …', 'E:A conversão;nachdem (conjunção)^w|→|nach (preposição)^c|+|das Studium abschließen → der Abschluss des Studiums^s');
V('Die zu lösende Aufgabe', 'E:O gerundivo;zu^v2|+|Partizip I (lösend)^v2|+|terminação^p|=|die zu lösende Aufgabe^s', 'V:Igual a uma relativa com modal;Gerundivo|die zu lösende Aufgabe;Relativa|die Aufgabe, die gelöst werden muss');
V('Er habe nichts gewusst', 'T:Konjunktiv I nos três tempos;Passado@-1=er habe gesagt / er sei gekommen;Presente@0=er komme / er sei;Futuro@1=er werde kommen');
V('Er muss es gewusst haben', 'S:Certeza sobre o passado;100%|0%;Er muss es gewusst haben=quase certo;Er dürfte es gewusst haben=provável;Er könnte es gewusst haben=possível;Er kann es nicht gewusst haben=impossível');
V('Komm ruhig rein!', 'M:Mais partículas;Partícula|Efeito|Exemplo;ruhig|encoraja|Frag ruhig!;etwa|suspeita em pergunta|Hast du etwa …?;eh / ohnehin|de qualquer jeito|Das bringt eh nichts.;vielleicht|espanto|Das war vielleicht ein Stress!;nun mal|é assim e pronto|Das ist nun mal so.');
V('Zumal und geschweige denn', 'M:Conectores do registro elevado;Conector|Função|Verbo;zumal|reforça um motivo|no fim;wenngleich, obgleich|concessão (embora)|no fim;insofern … als|na medida em que|no fim;geschweige denn|muito menos|—;nichtsdestotrotz, gleichwohl|ainda assim|2ª posição');
V('Kriegen, bekommen, erhalten', 'M:Escada de registro;Coloquial|Neutro|Formal;kriegen|bekommen|erhalten;gucken|sehen|betrachten;im Eimer|kaputt|defekt;klauen|stehlen|entwenden');
V('Die Erörterung', 'P:A Erörterung;Introdução=atualidade + pergunta central;Lado contrário=do argumento mais fraco ao mais forte;Seu lado=do mais fraco ao mais forte;Ponderação=Nach Abwägung aller Argumente …;Conclusão=posição própria', 'E:Um argumento completo;Afirmação^s|+|Justificativa^c|+|Exemplo ou dado^o');
V('Der Autor vertritt die These …', 'P:Resumir um texto;Tema=Der Text befasst sich mit …;Tese=Der Autor vertritt die These, dass …;Argumentos=Als Beleg führt er … an.;Conclusão=Daraus folgert er, dass …', 'S:Verbos de citação;neutro|marcado;sagen=neutro;betonen=enfatiza;behaupten=afirma sem provar;einräumen=admite;bezweifeln=duvida');
V('Die Daten legen nahe …', 'S:Dosar a certeza;forte|cauteloso;beweisen=prova;zeigen=mostra;nahelegen=sugere;tendenziell=tende a;nicht auszuschließen=não se descarta');
V('Auf die lange Bank schieben', 'M:Idiomatismos de C1;Expressão|Sentido;auf die lange Bank schieben|empurrar com a barriga;reinen Wein einschenken|abrir o jogo;auf der Hand liegen|ser óbvio;aus dem Stegreif|de improviso;den Kürzeren ziehen|levar a pior');
V('Ver-, zer-, ent-, be-', 'M:O que cada prefixo faz;Prefixo|Ideia|Exemplo;ver- (com sich)|errar|sich verschreiben;ver-|transformar|verbessern;zer-|em pedaços|zerbrechen;ent-|retirar, desfazer|entlasten;be-|torna transitivo|beantworten;er-|chegar ao resultado|erreichen');
V('Gewiss …, doch …', 'P:Concessão com virada;Conceder=Gewiss / Zugegeben, …;Virar=doch / allerdings;Seu ponto=… es lohnt sich.;Fechar=Wollen wir das wirklich?');
V('Wie Sie der Folie entnehmen können', 'P:Apresentação longa;Roteiro=anuncie as partes;Transições=Damit komme ich zu …;Envolver=Wer von Ihnen …?;Exemplo=Lassen Sie mich das verdeutlichen.;Fim=mensagem central + perspectiva');
V('Mit Verlaub', 'S:Da crítica direta à diplomática;direto|diplomático;Das ist falsch.=direto;Das stimmt so nicht ganz.=atenuado;Ich würde zu bedenken geben, dass …=diplomático;Mit Verlaub, …=muito formal');
V('Globalisierung', 'P:Causa e efeito;Causa=… ist auf … zurückzuführen.;Acompanha=… geht mit … einher.;Efeito=… hat … zur Folge.;Contribui=… trägt zu … bei.');
V('Darf die Technik alles?', 'V:Estruturar um dilema;Por um lado|Sicherheit, Effizienz;Por outro lado|Privatsphäre, Würde, Missbrauch;Condição|Das ist nur vertretbar, wenn …');
V('Prüfungstraining C1', 'M:Goethe-Zertifikat C1;Módulo|Duração;Lesen|65 min;Hören|cerca de 40 min;Schreiben|75 min;Sprechen|cerca de 20 min');

// ---------- C2 ----------
V('Nicht gerade billig', 'S:Dizer menos para dizer mais;dito|entendido;nicht gerade billig=bem caro;nicht ganz unproblematisch=problemático;gar nicht übel=muito bom;nicht ohne=tem seu peso');
V('Wie dem auch sei', 'M:Konjunktiv I fossilizado;Fórmula|Uso;Gott sei Dank|expressão fixa;Es lebe …!|desejo, viva;Man nehme …|receita, instrução;Wie dem auch sei|seja como for;koste es, was es wolle|custe o que custar');
V('Das bedarf keiner Erklärung', 'V:Elevado × cotidiano;Com genitivo (elevado)|Das bedarf keiner Erklärung.|Wir gedenken der Opfer.;Cotidiano|Das braucht keine Erklärung.|Wir erinnern uns an die Opfer.');
V('Diesen Film kenne ich', 'F:Os campos da frase;Campo inicial^w|Verbo^v|Campo central^c|Fim do verbo^v2|Campo final^p;Diesen Film|kenne|ich nicht.||;Gelesen|habe|ich das Buch nicht.||;Sie|hat|schneller|gearbeitet|als alle anderen.');
V('Servus und Grüezi', 'M:Três padrões nacionais;Alemanha|Áustria|Suíça;Januar|Jänner|Januar;dieses Jahr|heuer|dieses Jahr;Tomate|Paradeiser|Tomate;Fahrrad|Fahrrad|Velo;parken|parken|parkieren;Hallo|Servus|Grüezi');
V('Der auktoriale Erzähler', 'V:Perspectivas narrativas;Ich-Erzähler|primeira pessoa, sabe só o que vive;auktorialer Erzähler|onisciente, comenta a história;personaler Erzähler|colado a uma personagem, sem comentar');
V('Übung macht den Meister', 'M:Provérbio × equivalente;Alemão|Português;Übung macht den Meister|a prática leva à perfeição;Morgenstund hat Gold im Mund|Deus ajuda quem cedo madruga;Der Apfel fällt nicht weit vom Stamm|filho de peixe, peixinho é;Lügen haben kurze Beine|mentira tem perna curta');
V('Hiermit wird Ihnen mitgeteilt', 'P:Decifrar uma carta oficial;1=ache o verbo principal;2=desfaça as nominalizações;3=passe a passiva para a ativa;4=leia o prazo de recurso (Rechtsbehelfsbelehrung)');
V('Vereinfacht gesagt', 'P:Mediar;Entender=o que importa para quem ouve?;Selecionar=deixe detalhes de fora;Simplificar=troque termos técnicos;Contextualizar=explique o que é cultural');
V('Die Glosse', 'V:Gêneros de opinião;Leitartikel|posição do jornal;Kommentar|posição do autor, com argumentos;Glosse|curta, satírica, com Pointe;Kolumne|coluna fixa, pessoal');
V('Andeuten, einräumen, erwidern', 'S:Quanto se revela;esconde|revela;andeuten=insinua;einräumen=admite;behaupten=afirma;preisgeben=revela;verkünden=proclama');
V('Großes Deutsches Sprachdiplom', 'M:Goethe-Zertifikat C2;Módulo|Duração;Lesen|80 min;Hören|cerca de 35 min;Schreiben|80 min;Sprechen|cerca de 15 min');
