// Lições Pocket, terceira leva. Mesmo formato de data/pockets.js. Preços, nomes e lugares são exemplos fictícios.

PK({ id: 'bank', e: '🏦', t: 'Ein Konto eröffnen', pt: 'Abrir conta no banco', lv: 'B1',
  cena: 'Você precisa de uma conta alemã para receber salário e pagar o aluguel. Abra uma conta-corrente, entenda as tarifas e como chegam o cartão e a senha.',
  img: [{ f: 'bank', alt: 'Agência bancária moderna com consultor e cliente' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Kontoeröffnung · Abertura de conta', linhas: 'Girokonto=conta-corrente=Online-Konto|Kontoführungsgebühr=tarifa de manutenção=0 € ab 700 € Gehaltseingang|Girocard=cartão de débito=inklusive|Kreditkarte=cartão de crédito=optional|IBAN=número internacional da conta=DE12 3456 7890 1234 5678 90|Dispo=cheque especial=nach Prüfung' },
    { k: 'ticket', t: 'Girocard · Cartão de débito', campos: 'Karteninhaberin=titular=ANA SOUZA|Kartennummer=número=1234 5678|gültig bis=válido até=09/30|PIN=senha=kommt per Post' },
  ],
  frases: 'Ich möchte ein Girokonto eröffnen.=Quero abrir uma conta-corrente.|Welche Unterlagen brauchen Sie?=Que documentos o senhor precisa?|Wie hoch sind die Kontoführungsgebühren?=Qual é a tarifa de manutenção?|Bekomme ich eine Girocard?=Recebo um cartão de débito?|Kann ich online überweisen?=Posso fazer transferências online?|Wann bekomme ich meine PIN?=Quando recebo minha senha?|Ich habe meine Karte verloren. Bitte sperren Sie sie.=Perdi meu cartão. Por favor, bloqueie-o.',
  ouvir: 'Haben Sie Ihren Ausweis und die Meldebescheinigung dabei?=Trouxe seu documento e o comprovante de residência?|Das Konto ist kostenlos, wenn Ihr Gehalt hier eingeht.=A conta é gratuita se o seu salário cair aqui.|Die Karte und die PIN kommen getrennt per Post.=O cartão e a senha chegam separados pelo correio.|Unterschreiben Sie bitte hier.=Assine aqui, por favor.|Für das Onlinebanking laden Sie bitte unsere App herunter.=Para o internet banking, baixe nosso aplicativo.|Hier ist Ihre IBAN.=Aqui está o seu IBAN.',
  dlg: 'Bankberater>b>Guten Tag! Was kann ich für Sie tun?=Bom dia! Em que posso ajudar?|Kundin>a>Ich möchte ein Girokonto eröffnen.=Quero abrir uma conta-corrente.|Bankberater>b>Gern. Haben Sie Ihren Ausweis und die Meldebescheinigung dabei?=Claro. Trouxe seu documento e o comprovante de residência?|Kundin>a>Ja, hier. Wie hoch sind die Kontoführungsgebühren?=Sim, aqui. Qual é a tarifa de manutenção?|Bankberater>b>Das Konto ist kostenlos, wenn Ihr Gehalt hier eingeht.=A conta é gratuita se o seu salário cair aqui.|Kundin>a>Perfekt. Und wann bekomme ich die Karte?=Perfeito. E quando recebo o cartão?|Bankberater>b>In etwa einer Woche. Die PIN kommt getrennt per Post.=Em mais ou menos uma semana. A senha chega separada pelo correio.',
  dica: 'Na Alemanha o **IBAN** é usado para quase tudo: salário, aluguel, contas. Muitas cobranças são feitas por débito autorizado (**Lastschrift**) com o seu IBAN. O cartão e a senha (**PIN**) chegam em cartas separadas, por segurança. Perdeu o cartão? O número de bloqueio **116 116** funciona para a maioria dos bancos.',
  quiz: [
    { q: 'Quando a conta é gratuita?', o: ['sempre', 'se o salário cair nela', 'se tiver cartão de crédito'], a: 1 },
    { q: 'O que é "Girocard"?', o: ['cartão de débito', 'cheque especial', 'número da conta'], a: 0 },
    { q: 'Como chega a PIN?', o: ['junto com o cartão', 'separada, pelo correio', 'por SMS'], a: 1 },
  ] });

PK({ id: 'zahnarzt', e: '🦷', t: 'Beim Zahnarzt', pt: 'No dentista', lv: 'A2',
  cena: 'Um dente começou a doer. Você vai ao dentista, preenche a ficha de saúde e entende o que ele explica sobre o tratamento.',
  img: [{ f: 'zahnarzt', alt: 'Consultório odontológico claro com dentista e paciente' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Anamnesebogen · Ficha de saúde', linhas: 'Haben Sie Allergien?=tem alergias?=nein|Nehmen Sie Medikamente?=toma remédios?=nein|Sind Sie schwanger?=está grávida?=nein|Letzter Zahnarztbesuch=última visita ao dentista=vor einem Jahr|Unterschrift=assinatura=A. Souza' },
    { k: 'route', items: '🦷>der Zahn=o dente|😬>Zahnschmerzen=dor de dente|🕳️>ein Loch=uma cárie|🧪>die Füllung=a obturação|💉>die Spritze=a anestesia (injeção)|🪥>die Zahnreinigung=a limpeza dos dentes|👑>die Krone=a coroa|🩸>Das Zahnfleisch blutet.=A gengiva sangra.' },
  ],
  frases: 'Ich habe starke Zahnschmerzen.=Estou com uma dor de dente forte.|Unten links tut es weh.=Dói embaixo, à esquerda.|Wenn ich etwas Kaltes trinke, tut es weh.=Dói quando bebo algo gelado.|Bekomme ich eine Spritze?=Vou tomar anestesia?|Was kostet die Behandlung?=Quanto custa o tratamento?|Zahlt die Krankenkasse das?=O plano paga isso?|Ich möchte eine Zahnreinigung machen.=Quero fazer uma limpeza.',
  ouvir: 'Machen Sie bitte den Mund weit auf.=Abra bem a boca, por favor.|Tut das weh?=Isso dói?|Sie haben ein kleines Loch.=A senhora tem uma pequena cárie.|Ich gebe Ihnen eine Spritze.=Vou aplicar anestesia.|Bitte zwei Stunden nichts essen.=Não coma nada por duas horas.|Einen Teil müssen Sie selbst bezahlen.=Uma parte a senhora mesma paga.',
  dlg: 'Zahnarzt>b>Guten Tag, Frau Souza. Was führt Sie zu mir?=Boa tarde, sra. Souza. O que a traz aqui?|Patientin>a>Ich habe seit drei Tagen Zahnschmerzen, unten links.=Estou com dor de dente há três dias, embaixo à esquerda.|Zahnarzt>b>Machen Sie bitte den Mund weit auf. Tut das weh?=Abra bem a boca, por favor. Isso dói?|Patientin>a>Au, ja! Da tut es weh.=Ai, sim! Aí dói.|Zahnarzt>b>Sie haben ein kleines Loch. Ich mache Ihnen gleich eine Füllung.=A senhora tem uma pequena cárie. Vou fazer uma obturação agora.|Patientin>a>Bekomme ich eine Spritze?=Vou tomar anestesia?|Zahnarzt>b>Ja, natürlich. Danach bitte zwei Stunden nichts essen.=Sim, claro. Depois, não coma nada por duas horas.',
  dica: 'O plano público (**gesetzliche Krankenkasse**) cobre o básico no dentista, mas alguns tratamentos, como obturações da cor do dente ou a limpeza profissional, costumam ter uma parte paga por você. Peça antes um orçamento (**Kostenvoranschlag**). Muitos planos dão desconto em tratamentos futuros para quem vai ao dentista todo ano: peça o carimbo no **Bonusheft**.',
  quiz: [
    { q: 'O que é "ein Loch" no dentista?', o: ['uma cárie', 'uma coroa', 'uma limpeza'], a: 0 },
    { q: '"Machen Sie den Mund auf" significa…', o: ['feche a boca', 'abra a boca', 'enxágue a boca'], a: 1 },
    { q: 'O que pedir antes de um tratamento caro?', o: ['einen Kostenvoranschlag', 'eine Spritze', 'einen Termin'], a: 0 },
  ] });

PK({ id: 'fahrrad', e: '🚲', t: 'Ein Fahrrad mieten', pt: 'Alugar bicicleta', lv: 'A2',
  cena: 'Você quer passear de bicicleta pela cidade e pela beira do rio. Alugue uma bicicleta, leia a tabela de preços e as placas da ciclovia.',
  img: [{ f: 'fahrrad', alt: 'Ciclovia à beira de um rio numa cidade alemã' }],
  ill: [
    { k: 'menu', t: 'Radverleih am Fluss', sub: 'Preise', secoes: [
      { n: 'Fahrräder', pt: 'Bicicletas', itens: 'Stadtrad, drei Stunden=bicicleta urbana, 3 horas=9|Stadtrad, ganzer Tag=bicicleta urbana, dia inteiro=15|E-Bike, ganzer Tag=bicicleta elétrica, dia inteiro=35|Kindersitz=cadeirinha infantil=5' },
      { n: 'Extras', pt: 'Extras', itens: 'Helm=capacete=2|Fahrradkorb=cestinha=1|Schloss=cadeado=0' }],
      nota: 'Kaution 50 Euro oder Ausweis=Caução: 50 euros ou um documento' },
    { k: 'signs', estilo: 'rua', items: '🚲>Radweg=Ciclovia|🚳>Radfahren verboten=Proibido bicicleta|🚶>Radfahrer absteigen=Ciclistas, desçam da bicicleta|🔀>Gemeinsamer Geh- und Radweg=Via compartilhada pedestre e bicicleta|🅿️>Fahrradparkplatz=Estacionamento de bicicletas' },
  ],
  frases: 'Ich möchte ein Fahrrad für den ganzen Tag mieten.=Quero alugar uma bicicleta para o dia inteiro.|Was kostet ein E-Bike?=Quanto custa uma bicicleta elétrica?|Haben Sie auch Helme?=Têm capacetes também?|Ist ein Schloss dabei?=O cadeado está incluído?|Der Reifen ist platt.=O pneu está vazio.|Bis wann muss ich das Fahrrad zurückbringen?=Até que horas devo devolver a bicicleta?|Wo ist der Radweg am Fluss?=Onde fica a ciclovia do rio?',
  ouvir: 'Wie lange möchten Sie das Rad?=Por quanto tempo quer a bicicleta?|Ich brauche Ihren Ausweis als Kaution.=Preciso do seu documento como caução.|Das Schloss ist am Gepäckträger.=O cadeado está no bagageiro.|Bitte bis achtzehn Uhr zurückbringen.=Devolva até as 18h, por favor.|Auf dem Gehweg dürfen Sie nicht fahren.=Não pode andar na calçada.|Gute Fahrt!=Bom passeio!',
  dlg: 'Kundin>a>Hallo! Ich möchte ein Fahrrad für den ganzen Tag mieten.=Oi! Quero alugar uma bicicleta para o dia inteiro.|Verleiher>b>Gern. Ein Stadtrad oder ein E-Bike?=Claro. Bicicleta urbana ou elétrica?|Kundin>a>Ein Stadtrad, bitte. Und einen Helm.=Urbana, por favor. E um capacete.|Verleiher>b>Das macht siebzehn Euro. Ich brauche Ihren Ausweis als Kaution.=Dá 17 euros. Preciso do seu documento como caução.|Kundin>a>Hier, bitte. Bis wann muss ich das Fahrrad zurückbringen?=Aqui está. Até que horas devo devolver?|Verleiher>b>Bis achtzehn Uhr. Das Schloss ist am Gepäckträger. Gute Fahrt!=Até as 18h. O cadeado está no bagageiro. Bom passeio!',
  dica: 'Na Alemanha a ciclovia (**Radweg**) é levada a sério: pedestres não devem andar nela, e ciclistas adultos não devem andar na calçada. Faça sinal com o braço antes de virar e respeite os semáforos para bicicletas. À noite, farol e luz traseira são obrigatórios.',
  quiz: [
    { q: 'Quanto custa a bicicleta urbana por 3 horas?', o: ['9 €', '15 €', '35 €'], a: 0 },
    { q: 'O que significa "absteigen"?', o: ['subir na bicicleta', 'descer da bicicleta', 'estacionar'], a: 1 },
    { q: '"Der Reifen ist platt" significa…', o: ['o freio quebrou', 'o pneu está vazio', 'a corrente saiu'], a: 1 },
  ] });

PK({ id: 'auto', e: '🚗', t: 'Ein Auto mieten', pt: 'Alugar carro', lv: 'B1',
  cena: 'Você vai alugar um carro para conhecer a Floresta Negra. Entenda o contrato e o seguro, as placas de trânsito e as regras da Autobahn.',
  img: [{ f: 'auto', alt: 'Carro compacto numa estrada sinuosa na Floresta Negra' }, { f: 'auto-detalhe', alt: 'Placas de trânsito alemãs à beira da estrada' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Mietvertrag · Contrato de aluguel', linhas: 'Fahrzeugklasse=categoria do carro=Kompaktklasse|Mietdauer=período=3 Tage|Kilometer=quilometragem=unbegrenzt|Vollkasko=seguro total=Selbstbeteiligung 500 €|Tankregelung=regra do combustível=voll / voll|Zusatzfahrer=motorista adicional=12 € pro Tag' },
    { k: 'signs', estilo: 'rua', items: '🛑>Stopp=Pare|⚠️>Vorfahrt achten=Dê a preferência|⛔>Einfahrt verboten=Proibido entrar|↪️>Umleitung=Desvio|🛣️>Autobahn=Rodovia expressa|⛽>Tankstelle=Posto de gasolina|🅿️>Parken nur mit Parkscheibe=Estacionar só com disco de horário' },
  ],
  frases: 'Ich habe ein Auto reserviert.=Reservei um carro.|Ist die Vollkasko inklusive?=O seguro total está incluído?|Wie hoch ist die Selbstbeteiligung?=Qual é a franquia?|Muss ich das Auto vollgetankt zurückgeben?=Preciso devolver o carro com o tanque cheio?|Ist das ein Automatik?=É automático?|Wo ist die nächste Tankstelle?=Onde fica o posto mais próximo?|Das Auto hat einen Kratzer.=O carro tem um arranhão.',
  ouvir: 'Ihren Führerschein und eine Kreditkarte, bitte.=Sua carteira de motorista e um cartão de crédito, por favor.|Die Selbstbeteiligung beträgt fünfhundert Euro.=A franquia é de 500 euros.|Bitte geben Sie das Auto vollgetankt zurück.=Devolva o carro com o tanque cheio, por favor.|Der Wagen ist ein Schaltwagen.=O carro é manual.|Der Wagen steht auf Platz zwölf.=O carro está na vaga 12.|Gute Fahrt!=Boa viagem!',
  dlg: 'Kunde>b>Guten Tag, ich habe ein Auto für drei Tage reserviert. Mein Name ist Paulo Costa.=Bom dia, reservei um carro por três dias. Meu nome é Paulo Costa.|Mitarbeiterin>a>Willkommen! Ihren Führerschein und eine Kreditkarte, bitte.=Bem-vindo! Sua carteira e um cartão de crédito, por favor.|Kunde>b>Hier, bitte. Ist die Vollkasko inklusive?=Aqui estão. O seguro total está incluído?|Mitarbeiterin>a>Ja, mit fünfhundert Euro Selbstbeteiligung.=Sim, com franquia de 500 euros.|Kunde>b>Und muss ich das Auto vollgetankt zurückgeben?=E preciso devolver com o tanque cheio?|Mitarbeiterin>a>Genau: voll abholen, voll zurückgeben. Hier sind die Schlüssel. Gute Fahrt!=Isso: retira cheio, devolve cheio. Aqui estão as chaves. Boa viagem!',
  dica: 'As regras para dirigir na Alemanha com a carteira brasileira mudam com o tempo e com o tipo de estadia: confira as atuais antes de viajar (muitas locadoras pedem também a **Permissão Internacional para Dirigir**). Na **Autobahn**, ultrapasse só pela esquerda e volte logo para a direita. Muitos carros de aluguel são manuais (**Schaltwagen**): peça **Automatik** se precisar.',
  quiz: [
    { q: 'O que é a "Selbstbeteiligung"?', o: ['a franquia do seguro', 'o tanque cheio', 'o motorista adicional'], a: 0 },
    { q: 'O que significa "voll / voll"?', o: ['retirar e devolver com o tanque cheio', 'seguro total', 'quilometragem livre'], a: 0 },
    { q: 'Na Autobahn, por onde se ultrapassa?', o: ['pela direita', 'pela esquerda', 'pelos dois lados'], a: 1 },
  ] });

PK({ id: 'wandern', e: '🥾', t: 'Wandern in den Bergen', pt: 'Trilha na montanha', lv: 'A2',
  cena: 'Fim de semana nos Alpes: você faz uma trilha até uma cabana de montanha. Leia a placa da trilha, entenda os tempos e o aviso do tempo, e converse com quem passa.',
  img: [{ f: 'wandern', alt: 'Trilha nos Alpes com cabana de montanha ao fundo' }, { f: 'wandern-detalhe', alt: 'Placa amarela de trilha com tempos de caminhada' }],
  ill: [
    { k: 'signs', estilo: 'aero', items: '🚡>Bergbahn Talstation, 30 Min.=Teleférico, estação de baixo, 30 min|🛖>Sonnalm, 1 Std. 30 Min.=Cabana Sonnalm, 1h30|⛰️>Gipfel, 3 Std.=Cume, 3 horas|🔁>Rundweg=Trilha circular|⚠️>Nur für Geübte=Só para experientes' },
    { k: 'info', t: 'Wetter am Berg · Tempo na montanha', linhas: 'heute=hoje=sonnig, 22 °C|nachmittags=à tarde=Gewitter möglich|Sonnenuntergang=pôr do sol=20:45 Uhr|Hütte geöffnet=cabana aberta=9–18 Uhr|letzte Bergbahn=último teleférico=17 Uhr' },
  ],
  frases: 'Wie lange dauert der Weg zur Hütte?=Quanto tempo leva o caminho até a cabana?|Ist der Weg schwierig?=A trilha é difícil?|Ist das der richtige Weg zum Gipfel?=É o caminho certo para o cume?|Wir haben uns verlaufen.=Nós nos perdemos.|Einen Kaiserschmarrn und eine Apfelschorle, bitte.=Um kaiserschmarrn e uma apfelschorle, por favor.|Wann fährt die letzte Bergbahn?=Quando sai o último teleférico?|Grüß Gott!=Olá! (saudação no sul)',
  ouvir: 'Der Weg ist gut markiert.=A trilha é bem sinalizada.|Am Nachmittag kann es Gewitter geben.=À tarde pode ter tempestade.|Für den Gipfel braucht man feste Schuhe.=Para o cume é preciso calçado firme.|Die letzte Bergbahn fährt um siebzehn Uhr.=O último teleférico sai às 17h.|Was darf’s sein?=O que vai ser?|Servus, schönen Tag noch!=Tchau, tenha um bom dia!',
  dlg: 'Wanderin>a>Grüß Gott! Ist das der richtige Weg zur Sonnalm?=Olá! É o caminho certo para a Sonnalm?|Wanderer>b>Grüß Gott! Ja, immer den gelben Schildern nach.=Olá! Sim, é só seguir as placas amarelas.|Wanderin>a>Wie lange dauert es noch?=Quanto tempo ainda falta?|Wanderer>b>Ungefähr eine Stunde. Der Weg ist gut markiert.=Mais ou menos uma hora. A trilha é bem sinalizada.|Wanderin>a>Und kann man von dort auch zum Gipfel gehen?=E dá para ir de lá até o cume?|Wanderer>b>Ja, aber am Nachmittag kann es Gewitter geben. Gehen Sie lieber früh.=Dá, mas à tarde pode ter tempestade. É melhor ir cedo.|Wanderin>a>Danke für den Tipp! Schönen Tag noch!=Obrigada pela dica! Bom dia para você!',
  dica: 'Na montanha é costume cumprimentar quem passa na trilha com **Grüß Gott**, **Servus** ou **Hallo**. Os tempos das placas são para quem caminha em ritmo médio. Comece cedo: no verão, tempestades (**Gewitter**) à tarde são comuns. Nas cabanas (**Hütte**), prove o **Kaiserschmarrn**, uma panqueca picada com açúcar e compota.',
  quiz: [
    { q: 'Quanto tempo até a cabana Sonnalm?', o: ['30 min', '1h30', '3 horas'], a: 1 },
    { q: 'O que significa "Gewitter"?', o: ['neblina', 'tempestade', 'neve'], a: 1 },
    { q: '"Nur für Geübte" significa…', o: ['só para experientes', 'só para crianças', 'só no verão'], a: 0 },
  ] });

PK({ id: 'kino', e: '🎬', t: 'Im Kino', pt: 'No cinema', lv: 'A2',
  cena: 'Você quer ver um filme no cinema. Entenda a programação e as siglas OV e OmU, escolha os lugares e compre pipoca.',
  img: [{ f: 'kino', alt: 'Saguão de cinema com bilheteria e pipoqueira' }],
  ill: [
    { k: 'board', estilo: 'kino', t: 'Kinoprogramm · Heute', cols: 'Zeit=horário|Film=filme|Saal=sala|Fassung=versão|Status=situação',
      rows: [['17:30', 'Der lange Sommer', '1', 'deutsch', 'frei'], ['18:00', 'Die Insel', '3', 'OmU', 'fast ausverkauft'], ['20:15', 'Space Cats', '2', '3D', 'frei'], ['20:30', 'Night Train', '4', 'OV', 'ausverkauft']],
      leg: 'OV=versão original|OmU=original com legendas em alemão|synchronisiert=dublado|frei=há lugares|ausverkauft=esgotado' },
    { k: 'ticket', t: 'Kinokarte · Ingresso', campos: 'Film=filme=Die Insel|Saal=sala=3|Reihe=fileira=8|Platz=lugar=14|Beginn=início=18:00|Preis=preço=11,50 €' },
  ],
  frases: 'Zwei Karten für Die Insel um achtzehn Uhr, bitte.=Dois ingressos para Die Insel às 18h, por favor.|Läuft der Film auf Deutsch oder im Original?=O filme passa em alemão ou no original?|Gibt es noch Plätze in der Mitte?=Ainda tem lugares no meio?|Gibt es eine Ermäßigung für Studierende?=Tem desconto para estudantes?|Einmal Popcorn, süß, bitte.=Uma pipoca doce, por favor.|Wie lange dauert der Film?=Quanto tempo dura o filme?|Wo ist Saal drei?=Onde fica a sala 3?',
  ouvir: 'Der Film läuft im Original mit Untertiteln.=O filme passa no original com legendas.|Die Vorstellung ist leider ausverkauft.=A sessão está esgotada.|Vor dem Film gibt es zwanzig Minuten Werbung.=Antes do filme há vinte minutos de propaganda.|Süß oder salzig?=Doce ou salgada?|Reihe acht, Platz vierzehn und fünfzehn.=Fileira 8, lugares 14 e 15.|Viel Spaß im Film!=Bom filme!',
  dlg: 'Kinobesucherin>a>Hallo! Zwei Karten für Die Insel um achtzehn Uhr, bitte.=Oi! Dois ingressos para Die Insel às 18h, por favor.|Kassierer>b>Gern. Der Film läuft im Original mit Untertiteln. Ist das okay?=Claro. O filme passa no original com legendas. Tudo bem?|Kinobesucherin>a>Ja, perfekt. Gibt es noch Plätze in der Mitte?=Sim, perfeito. Ainda tem lugares no meio?|Kassierer>b>Reihe acht, Platz vierzehn und fünfzehn. Das macht dreiundzwanzig Euro.=Fileira 8, lugares 14 e 15. Dá 23 euros.|Kinobesucherin>a>Und einmal Popcorn, bitte.=E uma pipoca, por favor.|Kassierer>b>Süß oder salzig?=Doce ou salgada?|Kinobesucherin>a>Süß, bitte. In Deutschland ist das ja normal, oder?=Doce, por favor. Na Alemanha isso é normal, né?',
  dica: 'Na Alemanha quase todos os filmes estrangeiros são dublados (**synchronisiert**). Para ver no idioma original, procure **OV** (versão original) ou **OmU** (original com legendas em alemão), ótima para treinar a leitura. A pipoca costuma ser doce (**süß**), e a sessão começa com uns 20 minutos de propaganda.',
  quiz: [
    { q: 'O que significa "OmU"?', o: ['dublado', 'original com legendas em alemão', 'em 3D'], a: 1 },
    { q: 'Que sessão está esgotada?', o: ['Die Insel', 'Night Train', 'Space Cats'], a: 1 },
    { q: 'Em que sala passa "Die Insel"?', o: ['1', '2', '3'], a: 2 },
  ] });

PK({ id: 'muell', e: '♻️', t: 'Mülltrennung', pt: 'Separar o lixo', lv: 'A2',
  cena: 'No seu prédio há várias lixeiras de cores diferentes. Aprenda o que vai em cada uma, leia o aviso dos vizinhos e evite olhares tortos.',
  img: [{ f: 'muell', alt: 'Lixeiras coloridas no pátio de um prédio alemão' }],
  ill: [
    { k: 'info', t: 'Welcher Müll wohin? · Que lixo vai onde?', linhas: 'Gelbe Tonne=lixeira amarela=Verpackungen, Plastik, Dosen|Blaue Tonne=lixeira azul=Papier, Pappe, Zeitungen|Biotonne=lixeira marrom (orgânico)=Essensreste, Kaffeesatz|Restmüll=lixo comum (cinza ou preto)=Windeln, Staub, Zigaretten|Altglas=vidro=Container: weiß, grün, braun|Pfandflaschen=garrafas com depósito=zurück in den Supermarkt' },
    { k: 'info', estilo: 'papel', t: 'Aushang im Treppenhaus · Aviso no prédio', linhas: 'Liebe Nachbarn=caros vizinhos=|Bitte Kartons klein machen=por favor, desmonte as caixas=|Kein Restmüll in die Biotonne=nada de lixo comum no orgânico=|Abholung=coleta=Restmüll jeden Dienstag|Glascontainer=contêiner de vidro=7–20 Uhr, nicht sonntags' },
  ],
  frases: 'Wohin kommt der Joghurtbecher?=Onde vai o pote de iogurte?|Ist das Papier oder Restmüll?=Isso é papel ou lixo comum?|Wann wird der Müll abgeholt?=Quando o lixo é recolhido?|Wo ist der Glascontainer?=Onde fica o contêiner de vidro?|Kann ich das in die Biotonne werfen?=Posso jogar isso no orgânico?|Entschuldigung, das wusste ich nicht.=Desculpe, eu não sabia.',
  ouvir: 'Das gehört in die gelbe Tonne.=Isso vai na lixeira amarela.|Pizzakartons mit Essensresten sind Restmüll.=Caixas de pizza com restos de comida são lixo comum.|Die Biotonne wird alle zwei Wochen geleert.=A lixeira orgânica é esvaziada a cada duas semanas.|Glas bitte nicht am Sonntag einwerfen.=Não jogue vidro no domingo, por favor.|Pfandflaschen bringen Sie zurück in den Supermarkt.=As garrafas com depósito você devolve no supermercado.|Bitte die Kartons klein machen.=Por favor, desmonte as caixas.',
  dlg: 'Nachbarin>c>Hallo! Sie sind neu hier, oder? Ich bin Frau Berg aus dem zweiten Stock.=Olá! A senhora é nova aqui, não é? Sou a sra. Berg, do segundo andar.|Ana>a>Ja, ich bin Ana. Darf ich Sie etwas fragen? Wohin kommt der Joghurtbecher?=Sim, sou a Ana. Posso perguntar uma coisa? Onde vai o pote de iogurte?|Nachbarin>c>In die gelbe Tonne, das ist Verpackung. Papier und Kartons kommen in die blaue.=Na lixeira amarela, é embalagem. Papel e caixas vão na azul.|Ana>a>Und die Pizzakartons?=E as caixas de pizza?|Nachbarin>c>Wenn sie sauber sind, in die blaue Tonne. Mit Essensresten in den Restmüll.=Se estiverem limpas, na azul. Com restos de comida, no lixo comum.|Ana>a>Danke! Das ist komplizierter als in Brasilien.=Obrigada! É mais complicado que no Brasil.|Nachbarin>c>Keine Sorge, das lernt man schnell.=Não se preocupe, aprende-se rápido.',
  dica: 'Separar o lixo (**Mülltrennung**) é levado muito a sério: os vizinhos reparam, e a administração pode cobrar se o lixo estiver errado. As regras mudam um pouco de cidade para cidade, então confira o calendário de coleta (**Abfallkalender**) da sua. O vidro se separa por cor e não se joga à noite nem aos domingos, por causa do barulho.',
  quiz: [
    { q: 'Onde vai uma lata de conserva?', o: ['blaue Tonne', 'gelbe Tonne', 'Biotonne'], a: 1 },
    { q: 'Onde vai o pó de café?', o: ['Biotonne', 'Restmüll', 'Altglas'], a: 0 },
    { q: 'Quando NÃO se joga vidro no contêiner?', o: ['de manhã', 'no domingo', 'na segunda'], a: 1 },
  ] });

PK({ id: 'kita', e: '🧸', t: 'In der Kita', pt: 'Creche e escola', lv: 'B1',
  cena: 'Sua filha começou na creche (Kita). Leia o aviso para os pais, entenda os dias de fechamento e converse com a educadora na hora de buscar.',
  img: [{ f: 'kita', alt: 'Sala colorida de creche alemã com crianças brincando' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Elternbrief · Aviso aos pais', linhas: 'Liebe Eltern=queridos pais=|Sommerfest=festa de verão=Freitag, 14. Juni, 15 Uhr|Bitte mitbringen=favor trazer=Kuchen oder Salat|Schließtage=dias de fechamento=22.–26. Juli|Wechselkleidung=roupa extra=bitte immer im Fach|Bei Krankheit=em caso de doença=bis 8 Uhr anrufen' },
    { k: 'route', items: '🧸>die Kita=a creche|👩‍🏫>die Erzieherin=a educadora|🎒>der Rucksack=a mochila|🍎>die Brotdose=a lancheira|🛏️>der Mittagsschlaf=a soneca|🌡️>das Fieber=a febre|🚸>abholen=buscar|📅>die Eingewöhnung=a adaptação' },
  ],
  frases: 'Ich möchte meine Tochter für die Kita anmelden.=Quero inscrever minha filha na creche.|Wie lange dauert die Eingewöhnung?=Quanto tempo dura a adaptação?|Heute holt ihr Vater sie ab.=Hoje o pai dela vem buscá-la.|Sie hat seit gestern Fieber.=Ela está com febre desde ontem.|Hat sie gut gegessen?=Ela comeu bem?|Was soll ich zum Sommerfest mitbringen?=O que devo levar para a festa de verão?|Zu Hause sprechen wir Portugiesisch.=Em casa falamos português.',
  ouvir: 'Ihre Tochter hat heute gut geschlafen.=Sua filha dormiu bem hoje.|Bitte bringen Sie Wechselkleidung mit.=Traga roupa extra, por favor.|Bei Fieber muss das Kind zu Hause bleiben.=Com febre, a criança precisa ficar em casa.|Die Eingewöhnung dauert ungefähr zwei Wochen.=A adaptação dura umas duas semanas.|Morgen machen wir einen Ausflug in den Wald.=Amanhã faremos um passeio na floresta.|Bitte bringen Sie Gummistiefel mit.=Traga galochas, por favor.',
  dlg: 'Mutter>a>Hallo! Ich hole Sofia ab. Wie war ihr Tag?=Oi! Vim buscar a Sofia. Como foi o dia dela?|Erzieherin>c>Sehr schön! Sie hat gut gegessen und lange geschlafen.=Muito bom! Comeu bem e dormiu bastante.|Mutter>a>Super. Hat sie mit den anderen Kindern gespielt?=Ótimo. Ela brincou com as outras crianças?|Erzieherin>c>Ja, und stellen Sie sich vor: Sie hat heute Deutsch gesprochen!=Sim, e imagine só: hoje ela falou alemão!|Mutter>a>Wirklich? Zu Hause spricht sie nur Portugiesisch.=Sério? Em casa ela só fala português.|Erzieherin>c>Das ist ganz normal, Kinder lernen schnell. Morgen machen wir einen Ausflug in den Wald. Bitte bringen Sie Gummistiefel mit.=É bem normal, crianças aprendem rápido. Amanhã faremos um passeio na floresta. Traga galochas, por favor.|Mutter>a>Mache ich. Bis morgen!=Pode deixar. Até amanhã!',
  dica: 'Vagas em creche (**Kita-Platz**) são disputadas: inscreva-se cedo, muitas vezes ainda na gravidez. As primeiras semanas são de **Eingewöhnung**, uma adaptação gradual com um dos pais presente. As creches avisam tudo por bilhete (**Elternbrief**) ou aplicativo e esperam que você avise doenças logo cedo.',
  quiz: [
    { q: 'Quando é a festa de verão?', o: ['14 de junho', '22 de julho', '26 de julho'], a: 0 },
    { q: 'O que é a "Eingewöhnung"?', o: ['o período de adaptação', 'a festa', 'a soneca'], a: 0 },
    { q: 'Até que horas avisar se a criança estiver doente?', o: ['até as 8h', 'até o meio-dia', 'até as 15h'], a: 0 },
  ] });

PK({ id: 'reparatur', e: '🔧', t: 'Ein Problem in der Wohnung', pt: 'Problema no apartamento', lv: 'B1',
  cena: 'A torneira da cozinha está pingando e o aquecimento fez barulho a noite toda. Você avisa a administração do prédio e marca a visita do técnico.',
  img: [{ f: 'reparatur', alt: 'Técnico consertando a torneira de uma cozinha' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Schadensmeldung · Aviso de defeito', linhas: 'Mieterin=inquilina=Ana Souza, 3. OG links|Was ist kaputt?=o que está quebrado?=Wasserhahn in der Küche tropft|Seit wann?=desde quando?=seit Montag|Dringend?=urgente?=nein|Erreichbar=disponível=werktags ab 17 Uhr' },
    { k: 'route', items: '🚰>Der Wasserhahn tropft.=A torneira pinga.|🔥>Die Heizung ist kalt.=O aquecimento está frio.|💡>Die Lampe ist kaputt.=A lâmpada queimou.|🚽>Die Toilette ist verstopft.=O vaso entupiu.|🪟>Das Fenster klemmt.=A janela emperra.|💧>ein Wasserschaden=um dano por vazamento|🧑‍🔧>der Handwerker=o técnico|🗝️>der Hausmeister=o zelador' },
  ],
  frases: 'Der Wasserhahn in der Küche tropft.=A torneira da cozinha está pingando.|Die Heizung macht laute Geräusche.=O aquecimento faz barulho alto.|Können Sie einen Handwerker schicken?=Pode mandar um técnico?|Wann kann der Handwerker kommen?=Quando o técnico pode vir?|Ich bin werktags ab siebzehn Uhr zu Hause.=Estou em casa nos dias úteis a partir das 17h.|Es ist dringend: Das Wasser läuft in die Wohnung unten.=É urgente: a água está escorrendo para o apartamento de baixo.|Wer bezahlt die Reparatur?=Quem paga o conserto?',
  ouvir: 'Können Sie mir ein Foto schicken?=Pode me mandar uma foto?|Drehen Sie bitte sofort das Wasser ab.=Feche a água imediatamente, por favor.|Ich schicke Ihnen den Hausmeister vorbei.=Vou mandar o zelador.|Kleine Reparaturen zahlt laut Vertrag der Mieter.=Pelo contrato, pequenos consertos são do inquilino.|Der Handwerker kommt am Donnerstag.=O técnico vem na quinta.|Bitte lassen Sie ihn in die Wohnung.=Por favor, deixe-o entrar no apartamento.',
  dlg: 'Hausverwaltung>b>Hausverwaltung Wolf, guten Tag.=Administração Wolf, bom dia.|Mieterin>a>Guten Tag, hier spricht Ana Souza aus der Gartenstraße zwölf. Der Wasserhahn in meiner Küche tropft seit Montag.=Bom dia, aqui é Ana Souza, da Gartenstraße 12. A torneira da minha cozinha pinga desde segunda.|Hausverwaltung>b>Können Sie mir bitte ein Foto schicken?=Pode me mandar uma foto, por favor?|Mieterin>a>Ja, mache ich. Und die Heizung macht nachts laute Geräusche.=Sim, mando. E o aquecimento faz barulho alto à noite.|Hausverwaltung>b>Dann schicke ich einen Handwerker. Passt Ihnen Donnerstag zwischen acht und zwölf?=Então mando um técnico. Quinta entre 8h e 12h funciona?|Mieterin>a>Leider nicht, ich bin werktags erst ab siebzehn Uhr zu Hause.=Infelizmente não, nos dias úteis só estou em casa a partir das 17h.|Hausverwaltung>b>Gut, dann am Donnerstag um siebzehn Uhr dreißig.=Certo, então quinta às 17h30.',
  dica: 'Defeitos no apartamento se avisam à administração (**Hausverwaltung**) ou ao locador, de preferência por escrito, com foto e data. Em emergência, como vazamento, feche o registro (**das Wasser abdrehen**) e ligue na hora. Muitos contratos têm a cláusula de pequenos consertos (**Kleinreparaturen**), que o inquilino paga até um valor limite.',
  quiz: [
    { q: '"Der Wasserhahn tropft" significa…', o: ['a torneira pinga', 'a janela emperra', 'o aquecimento está frio'], a: 0 },
    { q: 'Quem é o "Hausmeister"?', o: ['o locador', 'o zelador', 'o vizinho'], a: 1 },
    { q: 'Quando a Ana está em casa nos dias úteis?', o: ['de manhã', 'a partir das 17h', 'só no fim de semana'], a: 1 },
  ] });

PK({ id: 'einladung', e: '🍝', t: 'Einladung zum Essen', pt: 'Convite para jantar', lv: 'A2',
  cena: 'Um colega te convidou para jantar na casa dele. Leve um presente, elogie a comida, recuse com educação o que não quiser e agradeça.',
  img: [{ f: 'einladung', alt: 'Jantar entre amigos numa cozinha aconchegante' }],
  ill: [
    { k: 'info', t: 'Gastgeschenk · Presente para os anfitriões', linhas: 'eine Flasche Wein=uma garrafa de vinho=klassisch|Blumen=flores=ohne Papier überreichen|Pralinen=bombons=immer gut|etwas aus Brasilien=algo do Brasil=Kaffee, Cachaça' },
    { k: 'route', items: '🍽️>Guten Appetit!=Bom apetite!|🥂>Zum Wohl!=Saúde!|😋>Das schmeckt sehr gut!=Está muito gostoso!|🙅>Nein danke, ich bin satt.=Não, obrigada, estou satisfeita.|🧂>Kannst du mir das Salz geben?=Pode me passar o sal?|📝>Kannst du mir das Rezept geben?=Pode me passar a receita?' },
  ],
  frases: 'Vielen Dank für die Einladung!=Muito obrigada pelo convite!|Hier, das ist für euch.=Aqui, isto é para vocês.|Das riecht aber lecker!=Que cheiro bom!|Das schmeckt wirklich sehr gut.=Está realmente muito gostoso.|Nein danke, ich bin satt.=Não, obrigada, estou satisfeita.|Kann ich beim Abwasch helfen?=Posso ajudar a lavar a louça?|Es war ein wunderschöner Abend.=Foi uma noite maravilhosa.',
  ouvir: 'Schön, dass du da bist! Komm rein.=Que bom que você veio! Entra.|Du kannst die Schuhe anlassen.=Pode ficar de sapato.|Möchtest du noch etwas Nachtisch?=Quer mais sobremesa?|Greif zu!=Sirva-se!|Das ist ein Rezept von meiner Oma.=É uma receita da minha avó.|Komm gut nach Hause!=Volte bem para casa!',
  dlg: 'Markus>b>Hallo Ana, schön, dass du da bist! Komm rein.=Oi, Ana, que bom que você veio! Entra.|Ana>a>Danke für die Einladung! Hier, das ist für euch: Kaffee aus Brasilien.=Obrigada pelo convite! Aqui, isto é para vocês: café do Brasil.|Markus>b>Oh, wie nett! Das Essen ist gleich fertig. Setz dich!=Ah, que gentil! A comida já está quase pronta. Senta!|Ana>a>Das riecht aber lecker! Was ist das?=Que cheiro bom! O que é?|Markus>b>Rinderrouladen, ein Rezept von meiner Oma. Guten Appetit!=Rolê de carne, receita da minha avó. Bom apetite!|Ana>a>Das schmeckt wirklich sehr gut. Kannst du mir das Rezept geben?=Está realmente muito gostoso. Pode me passar a receita?|Markus>b>Klar, ich schicke es dir morgen. Möchtest du noch etwas?=Claro, mando amanhã. Quer mais?|Ana>a>Nein danke, ich bin wirklich satt.=Não, obrigada, estou realmente satisfeita.',
  dica: 'Chegue no horário combinado (no máximo uns 5 a 10 minutos depois) e leve um presente pequeno: vinho, flores ou algo do Brasil fazem sucesso. Espere alguém dizer **Guten Appetit** antes de começar a comer. No dia seguinte, uma mensagem de agradecimento é sempre bem-vista.',
  quiz: [
    { q: 'Como recusar mais comida com educação?', o: ['Nein danke, ich bin satt.', 'Das schmeckt nicht.', 'Ich will nicht.'], a: 0 },
    { q: 'Quando começar a comer?', o: ['assim que o prato chega', 'depois de alguém dizer "Guten Appetit"', 'depois da sobremesa'], a: 1 },
    { q: '"Greif zu!" significa…', o: ['Sirva-se!', 'Cuidado!', 'Lave as mãos!'], a: 0 },
  ] });
