// Lições Pocket, segunda leva: vida prática na Alemanha. Mesmo formato de data/pockets.js.
// Preços e nomes de lugares são exemplos fictícios, só para treinar a leitura.

PK({ id: 'notfall', e: '🚨', t: 'Im Notfall', pt: 'Emergência e polícia', lv: 'A2',
  cena: 'Na rua, um homem cai de bicicleta e se machuca. Você liga para a emergência, explica onde está e o que aconteceu, e responde às perguntas.',
  img: [{ f: 'notfall', alt: 'Ambulância alemã parada numa rua com uma pessoa sendo atendida' }, { f: 'notfall-detalhe', alt: 'Celular com o número 112 na tela' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Notrufnummern · Números de emergência', linhas: 'Feuerwehr und Rettungsdienst=bombeiros e ambulância=112|Polizei=polícia=110|Ärztlicher Bereitschaftsdienst=plantão médico (não urgente)=116 117|kostenlos=gratuito=von jedem Handy' },
    { k: 'info', t: 'Die W-Fragen am Telefon · O que vão perguntar', linhas: 'Wo ist es passiert?=onde aconteceu?=Straße, Hausnummer|Was ist passiert?=o que aconteceu?=Unfall, Feuer, Sturz|Wie viele Verletzte?=quantos feridos?=Anzahl|Welche Verletzungen?=que ferimentos?=blutet, bewusstlos|Warten auf Rückfragen=espere as perguntas=nicht auflegen' },
    { k: 'signs', estilo: 'apo', items: '🏥>Notaufnahme=Pronto-socorro|🚑>Rettungswagen=Ambulância|🚓>Polizei=Polícia|🧯>Feuerlöscher=Extintor|🏃>Notausgang=Saída de emergência|💊>Notdienst-Apotheke=Farmácia de plantão' },
  ],
  frases: 'Hilfe!=Socorro!|Bitte rufen Sie einen Krankenwagen!=Por favor, chame uma ambulância!|Es hat einen Unfall gegeben.=Houve um acidente.|Ein Mann ist verletzt.=Um homem está ferido.|Er blutet am Kopf.=Ele está sangrando na cabeça.|Ich bin in der Gartenstraße, vor der Bäckerei.=Estou na Gartenstraße, em frente à padaria.|Mir wurde das Handy gestohlen.=Roubaram meu celular.|Ich brauche einen Arzt.=Preciso de um médico.',
  ouvir: 'Notruf, Feuerwehr und Rettungsdienst.=Emergência, bombeiros e resgate.|Wo genau ist der Notfallort?=Onde exatamente é a emergência?|Ist die Person bei Bewusstsein?=A pessoa está consciente?|Atmet sie normal?=Está respirando normalmente?|Der Rettungswagen ist unterwegs.=A ambulância está a caminho.|Legen Sie bitte nicht auf.=Não desligue, por favor.',
  dlg: 'Leitstelle>b>Notruf, Feuerwehr und Rettungsdienst. Wo genau ist der Notfallort?=Emergência, bombeiros e resgate. Onde exatamente é a emergência?|Anruferin>a>In der Gartenstraße, vor der Bäckerei Krume.=Na Gartenstraße, em frente à padaria Krume.|Leitstelle>b>Was ist passiert?=O que aconteceu?|Anruferin>a>Ein Mann ist mit dem Fahrrad gestürzt. Er blutet am Kopf.=Um homem caiu da bicicleta. Está sangrando na cabeça.|Leitstelle>b>Ist er bei Bewusstsein?=Ele está consciente?|Anruferin>a>Ja, er spricht, aber er ist sehr blass.=Sim, ele fala, mas está muito pálido.|Leitstelle>b>Der Rettungswagen ist unterwegs. Bleiben Sie bei ihm und legen Sie nicht auf.=A ambulância está a caminho. Fique com ele e não desligue.',
  dica: 'Na Alemanha, **112** chama ambulância e bombeiros, e **110** chama a polícia. Os dois são gratuitos e funcionam em qualquer celular. Para problemas de saúde que não são emergência, à noite ou no fim de semana, existe o plantão médico **116 117**. Ao ligar, fale devagar e responda às perguntas: quem atende conduz a conversa.',
  quiz: [
    { q: 'Que número chama uma ambulância?', o: ['110', '112', '116 117'], a: 1 },
    { q: '"Er blutet" significa…', o: ['ele está sangrando', 'ele está dormindo', 'ele está com frio'], a: 0 },
    { q: 'O que você NÃO deve fazer durante a ligação?', o: ['dizer onde está', 'desligar antes da hora', 'responder às perguntas'], a: 1 },
  ] });

PK({ id: 'anmeldung', e: '🏛️', t: 'Im Bürgeramt', pt: 'Registro de residência', lv: 'B1',
  cena: 'Você acabou de se mudar e precisa registrar o endereço (Anmeldung) no Bürgeramt. Leve os documentos certos e acompanhe a senha no painel.',
  img: [{ f: 'anmeldung', alt: 'Sala de espera de repartição pública alemã com painel de senhas' }],
  ill: [
    { k: 'ticket', t: 'Wartemarke · Senha', campos: 'Nummer=número=A 047|Anliegen=assunto=Anmeldung|Schalter=guichê=12|Wartezeit=espera=ca. 20 Min.' },
    { k: 'info', estilo: 'papel', t: 'Anmeldung einer Wohnung · Formulário', linhas: 'Familienname=sobrenome=Souza|Vorname=nome=Ana|Geburtsdatum=data de nascimento=14.03.1992|Staatsangehörigkeit=nacionalidade=brasilianisch|Neue Wohnung=novo endereço=Gartenstraße 12|Einzugsdatum=data da mudança=01.04.|Unterschrift=assinatura=A. Souza' },
    { k: 'info', t: 'Bitte mitbringen · O que levar', linhas: 'Reisepass=passaporte=Original|Wohnungsgeberbestätigung=declaração do locador=vom Vermieter|Anmeldeformular=formulário de registro=ausgefüllt|Termin=agendamento=online buchen' },
  ],
  frases: 'Ich möchte mich anmelden.=Quero fazer o registro de residência.|Ich habe um zehn Uhr einen Termin.=Tenho horário às dez.|Hier sind mein Pass und die Wohnungsgeberbestätigung.=Aqui estão meu passaporte e a declaração do locador.|Muss ich noch etwas ausfüllen?=Preciso preencher mais alguma coisa?|Was bedeutet dieses Feld?=O que significa este campo?|Wann bekomme ich die Meldebescheinigung?=Quando recebo o comprovante de registro?|Können Sie das bitte buchstabieren?=Pode soletrar, por favor?',
  ouvir: 'Ziehen Sie bitte eine Nummer.=Pegue uma senha, por favor.|Die Nummer A 047 bitte zu Schalter zwölf.=Senha A 047, guichê doze.|Haben Sie einen Termin?=Tem agendamento?|Ihnen fehlt noch die Unterschrift des Vermieters.=Falta a assinatura do locador.|Bitte kontrollieren Sie Ihre Daten.=Confira seus dados, por favor.|Hier ist Ihre Meldebescheinigung.=Aqui está seu comprovante de registro.',
  dlg: 'Sachbearbeiter>b>Guten Morgen. Die Nummer A 047? Bitte nehmen Sie Platz.=Bom dia. Senha A 047? Sente-se, por favor.|Antragstellerin>a>Guten Morgen. Ich möchte mich anmelden. Hier sind mein Pass und das Formular.=Bom dia. Quero fazer o registro. Aqui estão meu passaporte e o formulário.|Sachbearbeiter>b>Danke. Haben Sie auch die Wohnungsgeberbestätigung?=Obrigado. Tem também a declaração do locador?|Antragstellerin>a>Ja, mein Vermieter hat sie gestern unterschrieben.=Sim, meu locador assinou ontem.|Sachbearbeiter>b>Sehr gut. Bitte kontrollieren Sie Ihre Daten. Ist alles richtig?=Muito bem. Confira seus dados. Está tudo certo?|Antragstellerin>a>Ja, alles richtig.=Sim, tudo certo.|Sachbearbeiter>b>Dann ist hier Ihre Meldebescheinigung. Gut aufheben!=Então aqui está seu comprovante. Guarde bem!',
  dica: 'Quem se muda para a Alemanha precisa fazer a **Anmeldung** poucas semanas depois da mudança (em geral, em até 14 dias). Nas cidades grandes os horários esgotam: marque o **Termin** online com antecedência. O comprovante (**Meldebescheinigung**) é pedido para abrir conta, contratar celular e muito mais.',
  quiz: [
    { q: 'O que é a "Wartemarke"?', o: ['o formulário', 'a senha de atendimento', 'o passaporte'], a: 1 },
    { q: 'Quem assina a "Wohnungsgeberbestätigung"?', o: ['o locador', 'o funcionário', 'o vizinho'], a: 0 },
    { q: 'Para que serve a "Meldebescheinigung"?', o: ['para viajar de avião', 'para abrir conta, contratar celular etc.', 'para estacionar'], a: 1 },
  ] });

PK({ id: 'wohnung', e: '🏠', t: 'Die Wohnungsbesichtigung', pt: 'Visita a apartamento', lv: 'B1',
  cena: 'Você achou um anúncio de apartamento e vai visitá-lo. Entenda as abreviações, a diferença entre aluguel frio e quente e faça as perguntas certas.',
  img: [{ f: 'wohnung', alt: 'Apartamento antigo e claro sendo visitado, com piso de madeira' }, { f: 'wohnung-detalhe', alt: 'Anúncio de apartamento com planta baixa' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Wohnungsanzeige · Anúncio', linhas: '2-Zi.-Whg.=apartamento de 2 cômodos=55 m²|Kaltmiete=aluguel sem despesas=680 €|Nebenkosten=despesas (água, lixo, aquecimento)=180 €|Warmmiete=aluguel com despesas=860 €|Kaution=caução=3 Kaltmieten|EBK=cozinha equipada=ja|Balkon=varanda=ja|frei ab=livre a partir de=1. Mai' },
    { k: 'map', t: 'Grundriss · Planta', items: '🛋️>Wohnzimmer=sala|🛏️>Schlafzimmer=quarto|🌿>Balkon=varanda|🍳>Küche=cozinha|🚪>Flur=corredor|🛁>Bad=banheiro', leg: 'Erdgeschoss=térreo|Dachgeschoss=sótão|Keller=porão, depósito' },
  ],
  frases: 'Ist die Wohnung noch frei?=O apartamento ainda está disponível?|Wie hoch ist die Warmmiete?=Quanto é o aluguel com despesas?|Was ist in den Nebenkosten enthalten?=O que está incluído nas despesas?|Wie hoch ist die Kaution?=De quanto é a caução?|Ab wann kann ich einziehen?=A partir de quando posso me mudar?|Sind Haustiere erlaubt?=Animais são permitidos?|Gibt es einen Keller?=Tem porão (depósito)?|Ich interessiere mich sehr für die Wohnung.=Tenho muito interesse no apartamento.',
  ouvir: 'Die Wohnung ist ab dem ersten Mai frei.=O apartamento está livre a partir de 1º de maio.|Die Kaution beträgt drei Kaltmieten.=A caução é de três aluguéis frios.|Die Heizkosten sind in den Nebenkosten enthalten.=O aquecimento está incluído nas despesas.|Haben Sie eine Schufa-Auskunft?=Tem o relatório de crédito (Schufa)?|Rauchen ist in der Wohnung nicht erlaubt.=Não é permitido fumar no apartamento.|Bitte schicken Sie mir Ihre Unterlagen.=Por favor, me envie seus documentos.',
  dlg: 'Vermieterin>a>Kommen Sie herein. Das ist das Wohnzimmer mit Balkon.=Entre. Esta é a sala com varanda.|Interessent>b>Sehr schön und hell! Wie hoch ist die Warmmiete?=Muito bonita e clara! Quanto é o aluguel com despesas?|Vermieterin>a>Achthundertsechzig Euro. Die Heizkosten sind schon dabei.=860 euros. O aquecimento já está incluído.|Interessent>b>Und wie hoch ist die Kaution?=E de quanto é a caução?|Vermieterin>a>Drei Kaltmieten, also zweitausendvierzig Euro.=Três aluguéis frios, ou seja, 2.040 euros.|Interessent>b>Ich interessiere mich sehr für die Wohnung. Was brauchen Sie von mir?=Tenho muito interesse no apartamento. Do que a senhora precisa?|Vermieterin>a>Bitte schicken Sie mir Ihre Gehaltsnachweise und eine Schufa-Auskunft.=Por favor, me envie seus comprovantes de renda e um relatório Schufa.',
  dica: 'Nos anúncios, **Kaltmiete** é só o aluguel e **Warmmiete** inclui as despesas (**Nebenkosten**), como aquecimento e lixo. A caução (**Kaution**) costuma ser de até três aluguéis frios. Muitos locadores pedem a **Schufa-Auskunft**, um relatório de crédito que você solicita online.',
  quiz: [
    { q: 'No anúncio, quanto é a Warmmiete?', o: ['680 €', '860 €', '180 €'], a: 1 },
    { q: 'O que significa "EBK"?', o: ['cozinha equipada', 'varanda', 'porão'], a: 0 },
    { q: 'O que a Warmmiete inclui?', o: ['só o aluguel', 'o aluguel e as despesas', 'a caução'], a: 1 },
  ] });

PK({ id: 'arzttermin', e: '🩺', t: 'Einen Arzttermin machen', pt: 'Marcar consulta médica', lv: 'A2',
  cena: 'Você está com dor nas costas há uma semana. Ligue para o consultório para marcar uma consulta e entenda o horário de atendimento e o cartão do plano.',
  img: [{ f: 'arzttermin', alt: 'Recepção de consultório médico alemão' }],
  ill: [
    { k: 'info', estilo: 'placa', t: 'Praxis Dr. Weber · Allgemeinmedizin', linhas: 'Sprechzeiten=horário de atendimento=Mo–Fr 8–12 Uhr|nachmittags=à tarde=Di und Do 15–18 Uhr|Termine nach Vereinbarung=consultas com hora marcada=|alle Kassen=todos os planos=|Telefon=telefone=0341 123456' },
    { k: 'ticket', t: 'Gesundheitskarte · Cartão do plano', campos: 'Krankenkasse=plano de saúde=Krankenkasse Nord|Name=nome=Ana Souza|Versichertennummer=número do segurado=A123456789|gültig bis=válido até=12/2029' },
  ],
  frases: 'Ich möchte einen Termin vereinbaren.=Quero marcar uma consulta.|Ich habe seit einer Woche Rückenschmerzen.=Estou com dor nas costas há uma semana.|Haben Sie heute noch einen Termin frei?=Ainda tem algum horário livre hoje?|Ich bin gesetzlich versichert.=Tenho plano de saúde público.|Hier ist meine Versichertenkarte.=Aqui está meu cartão do plano.|Brauche ich eine Überweisung?=Preciso de encaminhamento?|Können Sie mich krankschreiben?=Pode me dar atestado?',
  ouvir: 'Praxis Doktor Weber, guten Tag.=Consultório Dr. Weber, bom dia.|Waren Sie schon einmal bei uns?=A senhora já veio aqui antes?|Wie sind Sie versichert?=Qual é o seu plano?|Passt Ihnen Donnerstag um neun Uhr?=Quinta às nove funciona para a senhora?|Bitte bringen Sie Ihre Versichertenkarte mit.=Traga seu cartão do plano, por favor.|Nehmen Sie bitte noch kurz im Wartezimmer Platz.=Aguarde um pouco na sala de espera, por favor.',
  dlg: 'Praxis>c>Praxis Doktor Weber, guten Tag.=Consultório Dr. Weber, bom dia.|Patientin>a>Guten Tag, hier spricht Ana Souza. Ich möchte einen Termin vereinbaren.=Bom dia, aqui é Ana Souza. Quero marcar uma consulta.|Praxis>c>Worum geht es denn?=Do que se trata?|Patientin>a>Ich habe seit einer Woche starke Rückenschmerzen.=Estou com dor forte nas costas há uma semana.|Praxis>c>Passt Ihnen Donnerstag um neun Uhr?=Quinta às nove funciona para a senhora?|Patientin>a>Ja, das passt gut.=Sim, está ótimo.|Praxis>c>Gut. Bitte bringen Sie Ihre Versichertenkarte mit. Gute Besserung!=Certo. Traga seu cartão do plano, por favor. Melhoras!',
  dica: 'Na Alemanha quase sempre se marca consulta por telefone ou aplicativo, inclusive com o clínico geral (**Hausarzt**), que encaminha para especialistas com uma **Überweisung**. Leve sempre o cartão do plano (**Versichertenkarte**). Para faltar ao trabalho por doença, a empresa costuma pedir atestado (**Krankschreibung**).',
  quiz: [
    { q: 'Em que dias o consultório atende à tarde?', o: ['segunda e quarta', 'terça e quinta', 'todos os dias'], a: 1 },
    { q: '"einen Termin vereinbaren" significa…', o: ['cancelar uma consulta', 'marcar uma consulta', 'pagar uma consulta'], a: 1 },
    { q: 'O que é a "Überweisung"?', o: ['o encaminhamento para especialista', 'a receita', 'o atestado'], a: 0 },
  ] });

PK({ id: 'friseur', e: '💇', t: 'Beim Friseur', pt: 'No cabeleireiro', lv: 'A2',
  cena: 'Você vai cortar o cabelo pela primeira vez na Alemanha. Leia a tabela de preços, explique o que quer e diga se gostou do resultado.',
  img: [{ f: 'friseur', alt: 'Salão de cabeleireiro moderno com cliente e cabeleireiro' }],
  ill: [
    { k: 'menu', t: 'Salon Schnittpunkt', sub: 'Preisliste', secoes: [
      { n: 'Damen', pt: 'Feminino', itens: 'Waschen, Schneiden, Föhnen=lavar, cortar e secar=45|Spitzen schneiden=aparar as pontas=25|Färben=pintar=ab 55|Strähnchen=mechas=ab 70' },
      { n: 'Herren', pt: 'Masculino', itens: 'Maschinenschnitt=corte na máquina=18|Waschen und Schneiden=lavar e cortar=29|Bart trimmen=aparar a barba=12' }],
      nota: 'Auch ohne Termin=Atendemos também sem hora marcada' },
    { k: 'route', items: '✂️>kürzer=mais curto|📏>zwei Zentimeter=dois centímetros|➖>Pony=franja|🌊>Locken=cachos|💨>föhnen=secar com secador|🎨>färben=pintar|🪜>durchstufen=repicar|🪞>Spiegel=espelho' },
  ],
  frases: 'Ich hätte gern einen Termin zum Schneiden.=Queria um horário para cortar.|Nur die Spitzen, bitte.=Só as pontas, por favor.|Bitte ungefähr zwei Zentimeter kürzer.=Uns dois centímetros mais curto, por favor.|Den Pony bitte nicht zu kurz.=A franja não muito curta, por favor.|Können Sie die Haare durchstufen?=Pode repicar o cabelo?|Das gefällt mir sehr gut!=Gostei muito!|Was kostet das?=Quanto custa?',
  ouvir: 'Wie hätten Sie es gern?=Como a senhora gostaria?|Wie viel soll ab?=Quanto quer tirar?|Soll ich die Haare waschen?=Lavo o cabelo?|Ist das Wasser so angenehm?=A água está boa assim?|Gefällt es Ihnen so?=Gostou assim?|Möchten Sie gleich einen neuen Termin?=Quer já marcar o próximo horário?',
  dlg: 'Friseur>b>Hallo! Wie hätten Sie es denn gern?=Oi! Como a senhora gostaria?|Kundin>a>Nur die Spitzen, bitte, ungefähr zwei Zentimeter.=Só as pontas, por favor, uns dois centímetros.|Friseur>b>Und den Pony auch?=E a franja também?|Kundin>a>Ja, aber bitte nicht zu kurz.=Sim, mas não muito curta, por favor.|Friseur>b>Alles klar. So, gefällt es Ihnen?=Certo. Pronto, gostou?|Kundin>a>Ja, sehr! Was kostet das?=Sim, muito! Quanto custa?|Friseur>b>Fünfundzwanzig Euro, bitte.=Vinte e cinco euros, por favor.',
  dica: 'Muitos salões alemães trabalham com hora marcada (**Termin**), mas alguns atendem sem agendamento (**ohne Termin**). A gorjeta costuma ser arredondar o valor ou deixar alguns euros. Diga a medida em centímetros: "zwei Zentimeter kürzer" evita surpresas.',
  quiz: [
    { q: 'Quanto custa aparar as pontas?', o: ['18 €', '25 €', '45 €'], a: 1 },
    { q: 'O que é "Pony"?', o: ['franja', 'barba', 'cachos'], a: 0 },
    { q: '"Wie viel soll ab?" pergunta…', o: ['quanto custa', 'quanto cortar', 'quando voltar'], a: 1 },
  ] });

PK({ id: 'handy', e: '📱', t: 'Eine SIM-Karte kaufen', pt: 'Chip e plano de celular', lv: 'B1',
  cena: 'Você precisa de um número alemão. Compare os planos, entenda prazo de contrato e de cancelamento e escolha entre pré-pago e contrato.',
  img: [{ f: 'handy', alt: 'Loja de celulares com cartazes de planos' }],
  ill: [
    { k: 'tags', tags: 'Prepaid S=pré-pago pequeno=9,99 € / 4 Wochen==ohne Vertrag|Allnet M=plano médio=19,99 € / Monat=24,99 €=-5 €|Allnet L=plano grande=29,99 € / Monat==5G|Daten XL=plano de dados grande=34,99 € / Monat==unbegrenzt' },
    { k: 'info', estilo: 'papel', t: 'Vertragsdetails · Detalhes do contrato', linhas: 'Datenvolumen=franquia de dados=20 GB|Allnet-Flat=ligações e SMS ilimitados=inklusive|Mindestlaufzeit=prazo mínimo=24 Monate|Kündigungsfrist=prazo de cancelamento=1 Monat|Anschlusspreis=taxa de ativação=39,99 €|EU-Roaming=roaming na União Europeia=inklusive' },
  ],
  frases: 'Ich brauche eine SIM-Karte mit deutscher Nummer.=Preciso de um chip com número alemão.|Haben Sie auch Prepaid-Tarife?=Vocês têm planos pré-pagos?|Wie viel Datenvolumen ist dabei?=Quantos gigas estão incluídos?|Wie lange ist die Mindestlaufzeit?=Qual é o prazo mínimo?|Kann ich monatlich kündigen?=Posso cancelar mês a mês?|Ist EU-Roaming inklusive?=O roaming na UE está incluído?|Wie lade ich das Guthaben auf?=Como recarrego o saldo?',
  ouvir: 'Möchten Sie Prepaid oder einen Vertrag?=Quer pré-pago ou contrato?|Für den Vertrag brauche ich Ihren Ausweis.=Para o contrato preciso do seu documento.|Die Mindestlaufzeit beträgt vierundzwanzig Monate.=O prazo mínimo é de 24 meses.|Die SIM-Karte müssen Sie noch per Video aktivieren.=O chip ainda precisa ser ativado por videochamada.|Das Guthaben können Sie online aufladen.=O saldo pode ser recarregado online.|Unbegrenztes Datenvolumen kostet extra.=Dados ilimitados custam à parte.',
  dlg: 'Verkäuferin>a>Hallo! Wie kann ich Ihnen helfen?=Olá! Como posso ajudar?|Kunde>b>Ich brauche eine SIM-Karte mit deutscher Nummer.=Preciso de um chip com número alemão.|Verkäuferin>a>Möchten Sie Prepaid oder einen Vertrag?=Quer pré-pago ou contrato?|Kunde>b>Wie lange ist die Mindestlaufzeit beim Vertrag?=Qual é o prazo mínimo do contrato?|Verkäuferin>a>Vierundzwanzig Monate. Mit Prepaid sind Sie flexibler.=24 meses. Com o pré-pago o senhor tem mais flexibilidade.|Kunde>b>Dann nehme ich erst einmal Prepaid S. Ist EU-Roaming inklusive?=Então vou de Prepaid S por enquanto. O roaming na UE está incluído?|Verkäuferin>a>Ja, ohne Aufpreis. Ich brauche nur noch Ihren Ausweis.=Sim, sem custo extra. Só preciso do seu documento.',
  dica: 'Contratos de celular na Alemanha costumam ter prazo mínimo (**Mindestlaufzeit**) de 24 meses e se renovam sozinhos se não forem cancelados a tempo. Para começar, o **Prepaid** é mais simples. Mesmo no pré-pago a lei exige identificação, e a ativação muitas vezes é feita por **videochamada** com o passaporte.',
  quiz: [
    { q: 'Qual plano não tem contrato?', o: ['Allnet M', 'Prepaid S', 'Allnet L'], a: 1 },
    { q: '"Mindestlaufzeit" é…', o: ['o prazo mínimo do contrato', 'a franquia de dados', 'a taxa de ativação'], a: 0 },
    { q: 'Quanto custa o Allnet M por mês, com o desconto?', o: ['24,99 €', '19,99 €', '29,99 €'], a: 1 },
  ] });

PK({ id: 'taxi', e: '🚕', t: 'Mit dem Taxi', pt: 'Táxi e corrida', lv: 'A2',
  cena: 'Você chega tarde da noite à estação e pega um táxi até o hotel. Diga o endereço, pergunte o preço, pague com cartão e peça recibo.',
  img: [{ f: 'taxi', alt: 'Táxi cor creme em frente a uma estação à noite' }],
  ill: [
    { k: 'receipt', t: 'Quittung · Taxi', linhas: 'Grundpreis=bandeirada=4,50|Strecke 8,2 km=percurso de 8,2 km=18,04|Gepäckzuschlag=adicional de bagagem=1,00', total: 'Gesamt=23,54', extra: 'Quittung=recibo|Trinkgeld=gorjeta|Stimmt so!=Pode ficar com o troco!' },
    { k: 'signs', estilo: 'rua', items: '🚕>Taxi=Táxi|🅿️>Taxistand=Ponto de táxi|⛔>Halteverbot=Proibido parar|📍>Abholpunkt=Ponto de embarque (aplicativos)|💳>Kartenzahlung möglich=Aceita cartão' },
  ],
  frases: 'Sind Sie frei?=Está livre?|Zum Hotel Am Markt, bitte.=Para o Hotel Am Markt, por favor.|Wie viel kostet es ungefähr bis zum Flughafen?=Quanto custa mais ou menos até o aeroporto?|Kann ich mit Karte zahlen?=Posso pagar com cartão?|Können Sie bitte hier halten?=Pode parar aqui, por favor?|Ich brauche eine Quittung, bitte.=Preciso de recibo, por favor.|Machen Sie fünfundzwanzig.=Pode fazer 25 (arredonde).',
  ouvir: 'Wohin soll es gehen?=Para onde vamos?|Das sind ungefähr fünfundzwanzig Euro.=Dá mais ou menos 25 euros.|Soll ich den Koffer in den Kofferraum legen?=Coloco a mala no porta-malas?|Wir sind gleich da.=Já estamos chegando.|Das macht dreiundzwanzig Euro vierundfünfzig.=Dá 23,54 euros.|Brauchen Sie eine Quittung?=Precisa de recibo?',
  dlg: 'Fahrgast>a>Guten Abend! Sind Sie frei?=Boa noite! Está livre?|Taxifahrer>b>Ja, steigen Sie ein. Wohin soll es gehen?=Sim, pode entrar. Para onde vamos?|Fahrgast>a>Zum Hotel Am Markt, bitte. Wie viel kostet das ungefähr?=Para o Hotel Am Markt, por favor. Quanto custa mais ou menos?|Taxifahrer>b>Ungefähr fünfundzwanzig Euro. Ich lege Ihren Koffer in den Kofferraum.=Uns 25 euros. Vou pôr sua mala no porta-malas.|Fahrgast>a>Danke. Kann ich mit Karte zahlen?=Obrigada. Posso pagar com cartão?|Taxifahrer>b>Ja, kein Problem. So, wir sind da: dreiundzwanzig Euro vierundfünfzig.=Sim, sem problema. Pronto, chegamos: 23,54 euros.|Fahrgast>a>Machen Sie fünfundzwanzig. Und eine Quittung, bitte.=Pode fazer 25. E um recibo, por favor.',
  dica: 'Táxis alemães costumam ser cor creme e cobram pelo taxímetro, com tarifa definida pela cidade. A gorjeta comum é arredondar: "**Machen Sie fünfundzwanzig**". Nem todo táxi aceita cartão, então pergunte antes de entrar.',
  quiz: [
    { q: 'Quanto foi a bandeirada (Grundpreis)?', o: ['4,50 €', '1,00 €', '18,04 €'], a: 0 },
    { q: '"Sind Sie frei?" pergunta se o táxi…', o: ['é de graça', 'está livre', 'aceita cartão'], a: 1 },
    { q: 'Como pedir para arredondar a corrida para 25 €?', o: ['Machen Sie fünfundzwanzig.', 'Fünfundzwanzig kostet es.', 'Ich brauche fünfundzwanzig.'], a: 0 },
  ] });

PK({ id: 'weihnachtsmarkt', e: '🎄', t: 'Auf dem Weihnachtsmarkt', pt: 'Mercado de Natal', lv: 'A2',
  cena: 'Dezembro: você passeia por um mercado de Natal, prova Glühwein, compra lembranças e devolve a caneca para pegar o depósito de volta.',
  img: [{ f: 'weihnachtsmarkt', alt: 'Mercado de Natal alemão à noite com barracas iluminadas' }, { f: 'weihnachtsmarkt-detalhe', alt: 'Caneca de Glühwein e amêndoas caramelizadas' }],
  ill: [
    { k: 'menu', estilo: 'quadro', t: 'Glühweinstand Sternschnuppe', sub: 'Preise', secoes: [
      { n: 'Heiße Getränke', pt: 'Bebidas quentes', itens: 'Glühwein=vinho quente=4,50|Glühwein mit Schuss=vinho quente com licor=5,50|Kinderpunsch=ponche sem álcool=3,50|Heiße Schokolade=chocolate quente=3,80' },
      { n: 'Zum Essen', pt: 'Para comer', itens: 'Bratwurst im Brötchen=salsicha no pão=4,00|Gebrannte Mandeln 100 g=amêndoas caramelizadas=4,00|Lebkuchenherz=coração de pão de mel=6,00|Reibekuchen mit Apfelmus=panqueca de batata com purê de maçã=5,00' }],
      nota: 'Tassenpfand 3 Euro=Depósito da caneca: 3 euros' },
    { k: 'signs', estilo: 'pub', items: '🎄>Weihnachtsmarkt=Mercado de Natal|🍷>Glühwein=Vinho quente|☕>Tassenrückgabe=Devolução de canecas|🎠>Karussell=Carrossel|🎁>Kunsthandwerk=Artesanato|🚻>WC=Banheiro' },
  ],
  frases: 'Einen Glühwein, bitte.=Um vinho quente, por favor.|Einen Kinderpunsch ohne Alkohol, bitte.=Um ponche sem álcool, por favor.|Ich möchte die Tasse behalten.=Quero ficar com a caneca.|Ich bringe die Tasse zurück.=Vim devolver a caneca.|Was kosten die gebrannten Mandeln?=Quanto custam as amêndoas caramelizadas?|Ist das handgemacht?=Isso é feito à mão?|Frohe Weihnachten!=Feliz Natal!',
  ouvir: 'Mit oder ohne Schuss?=Com ou sem licor?|Das macht sieben Euro fünfzig mit Pfand.=Dá 7,50 euros com o depósito.|Hier sind drei Euro Pfand zurück.=Aqui estão 3 euros do depósito.|Vorsicht, heiß!=Cuidado, está quente!|Probieren Sie mal!=Prove!|Schöne Feiertage!=Boas festas!',
  dlg: 'Besucherin>a>Hallo! Einen Glühwein, bitte.=Oi! Um vinho quente, por favor.|Standbesitzer>b>Mit oder ohne Schuss?=Com ou sem licor?|Besucherin>a>Ohne, bitte. Und einen Kinderpunsch für meine Tochter.=Sem, por favor. E um ponche para minha filha.|Standbesitzer>b>Gern. Das macht vierzehn Euro mit Tassenpfand.=Claro. Dá 14 euros com o depósito das canecas.|Besucherin>a>Bekomme ich das Pfand zurück?=Recebo o depósito de volta?|Standbesitzer>b>Ja, wenn Sie die Tassen zurückbringen. Oder Sie behalten sie als Andenken.=Sim, se devolver as canecas. Ou pode ficar com elas de lembrança.|Besucherin>a>Super. Frohe Weihnachten!=Ótimo. Feliz Natal!',
  dica: 'As canecas de **Glühwein** têm depósito (**Tassenpfand**), em geral de 2 a 5 euros: devolva para receber o dinheiro ou fique com a caneca de lembrança, já que muitas cidades fazem um modelo novo a cada ano. **Mit Schuss** quer dizer com uma dose de licor ou rum. Para crianças e quem não bebe, existe o **Kinderpunsch**.',
  quiz: [
    { q: 'Quanto é o depósito da caneca neste estande?', o: ['3 €', '4,50 €', '5,50 €'], a: 0 },
    { q: 'O que é "Kinderpunsch"?', o: ['vinho quente com licor', 'ponche sem álcool', 'chocolate quente'], a: 1 },
    { q: 'O que fazer para receber o Pfand de volta?', o: ['devolver a caneca', 'comprar outra bebida', 'pedir recibo'], a: 0 },
  ] });

PK({ id: 'stadion', e: '⚽', t: 'Im Fußballstadion', pt: 'Jogo de futebol', lv: 'A2',
  cena: 'Uma amiga te convidou para um jogo de futebol na Alemanha. Leia o ingresso, ache seu setor e entenda o placar e a torcida.',
  img: [{ f: 'stadion', alt: 'Estádio de futebol lotado com torcida e cachecóis' }],
  ill: [
    { k: 'ticket', t: 'Eintrittskarte · Ingresso', campos: 'Block=setor=C3|Reihe=fileira=12|Platz=lugar=7|Eingang=portão=Süd|Anstoß=início do jogo=15:30 Uhr|Kategorie=categoria=Sitzplatz' },
    { k: 'board', estilo: 'placar', t: 'Anzeigetafel · Placar', cols: 'Minute=minuto|Heim=mandante|Tore=gols|Gast=visitante|Status=situação',
      rows: [['45.', 'FC Lindenhain', '1 : 1', 'SV Bergheim', 'Halbzeit'], ['90.', 'FC Lindenhain', '2 : 1', 'SV Bergheim', 'Abpfiff']],
      leg: 'Halbzeit=intervalo|Abpfiff=apito final|Anstoß=pontapé inicial|Tor=gol|Elfmeter=pênalti|Abseits=impedimento' },
    { k: 'signs', estilo: 'rua', items: '🎟️>Eingang Süd=Entrada Sul|🔢>Block C=Setor C|🍺>Getränke=Bebidas|🌭>Imbiss=Lanches|🚻>WC=Banheiros|⛔>Kein Zutritt=Entrada proibida' },
  ],
  frases: 'Wo ist Block C3?=Onde fica o setor C3?|Welcher Eingang ist das?=Que portão é esse?|Wie steht es?=Quanto está o jogo?|Wer hat das Tor geschossen?=Quem fez o gol?|Das war doch Abseits!=Isso foi impedimento!|Tor!=Gol!|Für welchen Verein bist du?=Para que time você torce?',
  ouvir: 'Ihre Karte, bitte.=Seu ingresso, por favor.|Taschen bitte öffnen.=Abram as bolsas, por favor.|Es steht eins zu eins.=Está um a um.|Elfmeter!=Pênalti!|Der Schiri hat gepfiffen.=O juiz apitou.|Nach dem Spiel fahren extra Busse zum Bahnhof.=Depois do jogo há ônibus extras para a estação.',
  dlg: 'Freundin>c>Komm, unser Block ist C3, Eingang Süd.=Vem, nosso setor é o C3, entrada Sul.|Ana>a>Super. Wie lange dauert ein Spiel?=Ótimo. Quanto tempo dura um jogo?|Freundin>c>Zweimal fünfundvierzig Minuten, dazwischen ist Halbzeit.=Dois tempos de 45 minutos, com intervalo no meio.|Ana>a>Oh, Tor! Wie steht es jetzt?=Ah, gol! Quanto está agora?|Freundin>c>Zwei zu eins für uns!=Dois a um para nós!|Ana>a>Und warum pfeifen jetzt alle?=E por que todo mundo está assobiando agora?|Freundin>c>Die Fans finden, das war Abseits.=A torcida acha que foi impedimento.',
  dica: 'Nos estádios alemães, assobiar (**pfeifen**) é vaiar. Muitas arenas têm setores de pé (**Stehplätze**), mais baratos, onde fica a torcida mais animada. Em vários clubes o ingresso também vale como passagem no transporte público no dia do jogo: confira no bilhete.',
  quiz: [
    { q: 'Em que fileira (Reihe) fica o lugar?', o: ['3', '7', '12'], a: 2 },
    { q: 'O que significa "Abseits"?', o: ['pênalti', 'impedimento', 'intervalo'], a: 1 },
    { q: 'Quando a torcida "pfeift", ela está…', o: ['comemorando', 'vaiando', 'cantando o hino'], a: 1 },
  ] });

PK({ id: 'party', e: '🎉', t: 'Smalltalk auf der Party', pt: 'Conversa numa festa', lv: 'A2',
  cena: 'Uma colega te convidou para uma festa em casa e você não conhece quase ninguém. Apresente-se, puxe assunto e saia de uma conversa com educação.',
  img: [{ f: 'party', alt: 'Festa numa sala de apartamento antigo alemão com pessoas conversando' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Einladung · Convite', linhas: 'Wer?=quem?=Lisas Geburtstagsfeier|Wann?=quando?=Samstag, 20 Uhr|Wo?=onde?=Kastanienallee 5, 3. Stock|Mitbringen=trazer=gute Laune und ein Getränk|Bitte zusagen=confirme presença=bis Donnerstag' },
    { k: 'route', items: '👋>Woher kennst du Lisa?=De onde você conhece a Lisa?|💼>Was machst du beruflich?=O que você faz?|🌍>Wo kommst du ursprünglich her?=De onde você é originalmente?|🏙️>Wie lange wohnst du schon hier?=Há quanto tempo mora aqui?|🎬>Hast du am Wochenende etwas vor?=Tem planos para o fim de semana?|🍰>Hast du den Kuchen gemacht?=Foi você que fez o bolo?' },
  ],
  frases: 'Hallo, ich bin Ana. Ich arbeite mit Lisa zusammen.=Oi, sou a Ana. Trabalho com a Lisa.|Woher kennst du Lisa?=De onde você conhece a Lisa?|Was machst du beruflich?=O que você faz?|Wie lange wohnst du schon hier?=Há quanto tempo você mora aqui?|Das klingt spannend!=Parece interessante!|Ich hole mir mal was zu trinken.=Vou pegar algo para beber.|Es war schön, dich kennenzulernen.=Foi um prazer te conhecer.',
  ouvir: 'Möchtest du was trinken?=Quer beber algo?|Woher kommst du denn?=E de onde você é?|Ach, aus Brasilien! Da wollte ich schon immer mal hin.=Ah, do Brasil! Sempre quis ir para lá.|Wie lange bist du schon in Deutschland?=Há quanto tempo você está na Alemanha?|Dein Deutsch ist echt gut!=Seu alemão é muito bom!|Lass uns mal Nummern austauschen.=Vamos trocar números.',
  dlg: 'Jonas>b>Hi, ich bin Jonas. Woher kennst du Lisa?=Oi, sou o Jonas. De onde você conhece a Lisa?|Ana>a>Wir arbeiten zusammen. Ich bin Ana. Und du?=Trabalhamos juntas. Sou a Ana. E você?|Jonas>b>Wir haben zusammen studiert. Woher kommst du denn?=Estudamos juntos. E de onde você é?|Ana>a>Aus Brasilien, aus Recife. Ich wohne seit einem Jahr hier.=Do Brasil, de Recife. Moro aqui há um ano.|Jonas>b>Echt? Dein Deutsch ist richtig gut!=Sério? Seu alemão está muito bom!|Ana>a>Danke! Ich lerne jeden Tag. Ich hole mir mal was zu trinken. Möchtest du auch was?=Obrigada! Estudo todo dia. Vou pegar algo para beber. Quer também?|Jonas>b>Gern, ein Wasser, bitte.=Quero, uma água, por favor.',
  dica: 'Em festas entre jovens e colegas, todos se tratam por **du**. Numa festa em casa, chegar uns 15 minutos depois do horário é normal (diferente de um jantar). Leve algo para beber. Política e salário não são bons temas de primeira conversa; trabalho, viagens e a cidade são.',
  quiz: [
    { q: 'A que horas é a festa?', o: ['18h', '20h', '22h'], a: 1 },
    { q: 'Como sair de uma conversa com educação?', o: ['Ich hole mir mal was zu trinken.', 'Du bist langweilig.', 'Ich gehe jetzt nach Hause.'], a: 0 },
    { q: '"Woher kennst du Lisa?" pergunta…', o: ['onde a Lisa mora', 'de onde você conhece a Lisa', 'quem é a Lisa'], a: 1 },
  ] });

PK({ id: 'biergarten', e: '🌳', t: 'Im Biergarten', pt: 'No Biergarten', lv: 'A2',
  cena: 'Domingo de sol na Baviera: você vai a um Biergarten. Entenda o autoatendimento, o tamanho das canecas, o depósito e onde pode sentar.',
  img: [{ f: 'biergarten', alt: 'Biergarten bávaro com mesas compridas sob castanheiras' }, { f: 'biergarten-detalhe', alt: 'Caneca de um litro, pretzel e Obatzda numa mesa de madeira' }],
  ill: [
    { k: 'menu', estilo: 'quadro', t: 'Biergarten am See', sub: 'Selbstbedienung', secoes: [
      { n: 'Bier', pt: 'Cerveja', itens: 'Maß Helles 1 l=caneca de 1 litro de cerveja clara=11,20|Halbe Helles 0,5 l=meio litro de cerveja clara=5,90|Radler 1 l=cerveja com limonada, 1 litro=10,90|Weißbier 0,5 l=cerveja de trigo=6,20' },
      { n: 'Brotzeit', pt: 'Lanches', itens: 'Brezn=pretzel=4,20|Obatzda=pasta de queijo bávara=8,50|Halbes Hendl=meio frango assado=14,90|Radi=rabanete fatiado=6,50' }],
      nota: 'Krugpfand 3 Euro=Depósito da caneca: 3 euros' },
    { k: 'signs', estilo: 'pub', items: '🙋>Selbstbedienung=Autoatendimento|🍺>Schänke=Balcão de chope|🧺>Brotzeit mitbringen erlaubt=Pode trazer o próprio lanche|🍽️>Nur mit Bedienung=Só com garçom (mesas com toalha)|🔄>Krugrückgabe=Devolução de canecas|🚻>Toiletten=Banheiros' },
  ],
  frases: 'Eine Maß, bitte.=Uma caneca de um litro, por favor.|Eine Halbe Radler, bitte.=Meio litro de radler, por favor.|Ist hier noch frei?=Esse lugar está livre?|Darf ich mich dazusetzen?=Posso me sentar com vocês?|Wo gibt man die Krüge zurück?=Onde se devolvem as canecas?|Darf man hier eigenes Essen mitbringen?=Pode trazer comida própria?|Prost!=Saúde!',
  ouvir: 'Hier ist Selbstbedienung.=Aqui é autoatendimento.|Das macht vierzehn Euro zwanzig mit Pfand.=Dá 14,20 euros com o depósito.|Rück ruhig ein bisschen!=Chega um pouco para lá!|Die Tische mit Tischdecke sind nur mit Bedienung.=As mesas com toalha são só com garçom.|Bringen Sie den Krug zur Rückgabe.=Leve a caneca para a devolução.|Servus!=Oi! / Tchau! (sul da Alemanha e Áustria)',
  dlg: 'Gast>a>Grüß Gott! Eine Maß Helles, bitte.=Olá! Uma caneca de um litro de cerveja clara, por favor.|Schankkellner>b>Gern. Das macht vierzehn Euro zwanzig mit Krugpfand.=Claro. Dá 14,20 euros com o depósito da caneca.|Gast>a>Bekomme ich das Pfand später zurück?=Recebo o depósito depois?|Schankkellner>b>Ja, an der Krugrückgabe dort drüben.=Sim, na devolução de canecas ali.|Gast>a>Und darf ich mich an jeden Tisch setzen?=E posso me sentar em qualquer mesa?|Schankkellner>b>Ja, nur nicht an die Tische mit Tischdecke. Die sind für Gäste mit Bedienung.=Sim, só não nas mesas com toalha. Essas são para quem é atendido pelo garçom.|Gast>a>Alles klar, danke! Prost!=Entendi, obrigada! Saúde!',
  dica: 'Na Baviera, **eine Maß** é uma caneca de um litro e **eine Halbe** é meio litro. Em muitos Biergärten é tradição poder levar o próprio lanche (**Brotzeit**): só a bebida precisa ser comprada ali. Dividir mesa com desconhecidos é normal: pergunte "Ist hier noch frei?" e sente-se.',
  quiz: [
    { q: 'Quanto é uma "Maß"?', o: ['meio litro', 'um litro', 'dois litros'], a: 1 },
    { q: 'Onde você NÃO deve sentar sem garçom?', o: ['nas mesas com toalha', 'em qualquer banco', 'perto da Schänke'], a: 0 },
    { q: 'Quanto custa a Maß sem o depósito?', o: ['11,20 €', '14,20 €', '5,90 €'], a: 0 },
  ] });

PK({ id: 'post', e: '📦', t: 'Auf der Post', pt: 'Correio e encomendas', lv: 'A2',
  cena: 'Você quer mandar um presente para o Brasil e retirar um pacote que não foi entregue porque você não estava em casa.',
  img: [{ f: 'post', alt: 'Balcão de agência de correio alemã com pacotes' }],
  ill: [
    { k: 'info', estilo: 'papel', t: 'Benachrichtigungskarte · Aviso de entrega', linhas: 'Wir waren da=estivemos aqui=heute, 10:42 Uhr|Ihre Sendung=sua encomenda=Paket|abholbereit ab=disponível para retirada a partir de=morgen, 10 Uhr|Filiale=agência=Hauptstraße 8|Bitte mitbringen=traga=Karte und Ausweis|Lagerfrist=prazo de retirada=7 Werktage' },
    { k: 'tags', tags: 'Brief Deutschland=carta para a Alemanha=0,95 €==|Postkarte international=cartão-postal internacional=1,25 €==|Päckchen bis 2 kg=pacotinho até 2 kg=6,19 €==|Paket nach Brasilien bis 5 kg=pacote para o Brasil até 5 kg=48,99 €==mit Sendungsverfolgung|Einschreiben=carta registrada=+ 2,65 €==' },
  ],
  frases: 'Ich möchte dieses Paket nach Brasilien schicken.=Quero mandar este pacote para o Brasil.|Was kostet das?=Quanto custa?|Wie lange dauert das?=Quanto tempo leva?|Ich möchte ein Paket abholen.=Quero retirar um pacote.|Hier ist die Benachrichtigungskarte.=Aqui está o aviso de entrega.|Brauche ich eine Zollerklärung?=Preciso de declaração alfandegária?|Eine Briefmarke für eine Postkarte nach Brasilien, bitte.=Um selo para um cartão-postal para o Brasil, por favor.',
  ouvir: 'Was ist in dem Paket?=O que tem no pacote?|Bitte füllen Sie die Zollerklärung aus.=Preencha a declaração alfandegária, por favor.|Mit Sendungsverfolgung?=Com rastreamento?|Das dauert ungefähr zwei Wochen.=Leva umas duas semanas.|Darf ich Ihren Ausweis sehen?=Posso ver seu documento?|Unterschreiben Sie bitte hier.=Assine aqui, por favor.',
  dlg: 'Kundin>a>Guten Tag, ich möchte dieses Paket nach Brasilien schicken.=Bom dia, quero mandar este pacote para o Brasil.|Postmitarbeiter>b>Was ist denn drin?=O que tem dentro?|Kundin>a>Ein Geschenk: Kleidung und Schokolade.=Um presente: roupas e chocolate.|Postmitarbeiter>b>Dann füllen Sie bitte diese Zollerklärung aus. Möchten Sie es mit Sendungsverfolgung?=Então preencha esta declaração alfandegária. Quer com rastreamento?|Kundin>a>Ja, bitte. Wie lange dauert es?=Sim, por favor. Quanto tempo leva?|Postmitarbeiter>b>Ungefähr zwei Wochen.=Umas duas semanas.|Kundin>a>Gut. Und ich möchte noch ein Paket abholen. Hier ist die Karte.=Certo. E quero retirar um pacote também. Aqui está o aviso.',
  dica: 'Se o entregador não te encontrar, ele deixa um aviso (**Benachrichtigungskarte**) e o pacote fica na agência ou num armário automático (**Packstation**) por alguns dias. Para mandar presentes para fora da União Europeia, como o Brasil, é preciso preencher a declaração alfandegária (**Zollerklärung**) com o conteúdo e o valor.',
  quiz: [
    { q: 'Por quanto tempo o pacote fica guardado?', o: ['7 dias úteis', '2 semanas', '1 mês'], a: 0 },
    { q: 'O que levar para retirar o pacote?', o: ['só o aviso', 'o aviso e o documento', 'dinheiro'], a: 1 },
    { q: '"Zollerklärung" é…', o: ['o selo', 'a declaração alfandegária', 'o rastreamento'], a: 1 },
  ] });

PK({ id: 'fitness', e: '🏋️', t: 'Im Fitnessstudio', pt: 'Na academia', lv: 'B1',
  cena: 'Você quer entrar numa academia. Compare os planos, entenda o contrato e o prazo de cancelamento e pergunte pelas aulas em grupo.',
  img: [{ f: 'fitness', alt: 'Academia moderna com aparelhos e janelas amplas' }],
  ill: [
    { k: 'tags', tags: 'Basic=básico=24,90 € / Monat==12 Monate|Flex=flexível=34,90 € / Monat==monatlich kündbar|Premium=premium=44,90 € / Monat==mit Kursen|Tageskarte=diária=12,00 €==Probetraining gratis' },
    { k: 'info', t: 'Kursplan · Quadro de aulas', linhas: 'Montag=segunda=18:00 Yoga|Dienstag=terça=19:00 Spinning|Mittwoch=quarta=18:30 Rückenfit|Donnerstag=quinta=19:00 Zumba|Samstag=sábado=10:00 Pilates' },
  ],
  frases: 'Ich interessiere mich für eine Mitgliedschaft.=Tenho interesse em ser sócia.|Kann ich ein Probetraining machen?=Posso fazer uma aula experimental?|Wie lange ist die Vertragslaufzeit?=Qual é a duração do contrato?|Sind die Kurse im Preis inbegriffen?=As aulas estão incluídas no preço?|Wie sind die Öffnungszeiten?=Qual é o horário de funcionamento?|Kann ich den Vertrag pausieren?=Posso pausar o contrato?|Wie funktioniert dieses Gerät?=Como funciona este aparelho?',
  ouvir: 'Möchten Sie ein kostenloses Probetraining?=Quer uma aula experimental grátis?|Der Vertrag läuft zwölf Monate.=O contrato dura doze meses.|Die Kündigungsfrist beträgt einen Monat.=O prazo de cancelamento é de um mês.|Bitte bringen Sie ein Handtuch mit.=Traga uma toalha, por favor.|Die Kurse buchen Sie in der App.=As aulas são reservadas no aplicativo.|Die Umkleiden sind im Keller.=Os vestiários ficam no subsolo.',
  dlg: 'Interessentin>a>Hallo! Ich interessiere mich für eine Mitgliedschaft.=Oi! Tenho interesse em ser sócia.|Trainer>b>Super! Möchten Sie zuerst ein kostenloses Probetraining machen?=Ótimo! Quer fazer primeiro uma aula experimental grátis?|Interessentin>a>Gern. Und wie lange läuft der Vertrag?=Quero. E quanto tempo dura o contrato?|Trainer>b>Basic läuft zwölf Monate. Flex ist teurer, aber monatlich kündbar.=O Basic dura doze meses. O Flex é mais caro, mas pode ser cancelado mês a mês.|Interessentin>a>Sind Yoga und Pilates im Preis inbegriffen?=Yoga e pilates estão incluídos no preço?|Trainer>b>Nur bei Premium. Die Kurse buchen Sie dann in der App.=Só no Premium. Aí a senhora reserva as aulas no aplicativo.|Interessentin>a>Dann mache ich erst das Probetraining und entscheide danach.=Então faço primeiro a aula experimental e decido depois.',
  dica: 'Contratos de academia na Alemanha muitas vezes duram 12 ou 24 meses e se renovam sozinhos se você não cancelar no prazo (**Kündigungsfrist**). Se não tiver certeza, prefira planos **monatlich kündbar** (cancelamento mensal). A toalha (**Handtuch**) é obrigatória em quase todas as academias.',
  quiz: [
    { q: 'Qual plano pode ser cancelado mês a mês?', o: ['Basic', 'Flex', 'Premium'], a: 1 },
    { q: 'Que aula tem na quarta-feira?', o: ['Yoga', 'Rückenfit', 'Zumba'], a: 1 },
    { q: '"Probetraining" é…', o: ['a aula experimental', 'o contrato', 'o vestiário'], a: 0 },
  ] });
