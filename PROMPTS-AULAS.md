# Imagens e facilitações gráficas das lições (A1 a C2)

## Onde estamos

- **Esquemas desenhados pelo app:** todas as 210 lições agora têm pelo menos um esquema colorido com áudio, como molduras da frase, tabelas, réguas, linhas do tempo e comparações. As 5 que faltavam (Meine Familie, Was machst du gern?, Unterwegs, Meine Wohnung e Einkaufen) ganharam o seu agora.
- **Ilustrações:** o app já está pronto para mostrar até duas imagens no topo da aula de cada lição. Elas aparecem só quando existirem, como no guia e nos Pockets.

As imagens abaixo foram escolhidas onde uma ilustração **explica algo que o texto e o esquema não explicam tão bem**:

- **Posição no espaço:** auf, unter, wohin, wo.
- **Tempo:** as horas, as estações, a ordem dos acontecimentos.
- **Contraste visual:** a porta sendo fechada × a porta fechada.
- **Imagens literais de expressões:** drücke die Daumen, lange Bank.
- **Cenas para fixar vocabulário:** corpo, casa, família.

Lições de pura escrita formal ou de estrutura de prova ficaram de fora: nelas o esquema funciona melhor que uma imagem.

## Como gerar e salvar

1. Numa conversa nova do ChatGPT, cole primeiro o **bloco de estilo**. É o mesmo do guia, então pode usar a mesma conversa se ela ainda estiver aberta.
2. Cole um prompt por vez e gere em **paisagem 3:2 (1536 × 1024)**.
3. **Confira o alemão escrito na imagem** (ä, ö, ü, ß). Se sair errado, peça *"Regenerate, the label must read exactly: …"*. Se continuar errado, peça a versão sem texto: o app já mostra as palavras certas na aula.
4. Salve como **PNG** na pasta `images/aulas/` com o nome indicado: `licao-001.png` é a principal; `licao-001-b.png` é uma segunda imagem opcional, que aparece ao lado da primeira.
5. Me avise: eu comprimo para WebP, coloco na lista `images/aulas/index.json` e publico.

> O número do arquivo é o da **lição**, e não o do dia, porque os checkpoints também contam como dias. Por isso cada prompt diz também o dia em que a lição aparece.

## Bloco de estilo (cole primeiro, uma vez)

```
You will create a series of illustrations for the lessons of a German-learning app called "Deutsch-Trilha".
Use this exact style for every image in this conversation:
- Flat, modern editorial illustration with a gentle isometric feel, clean vector shapes, soft gradients and a subtle paper grain.
- Playful, warm and encouraging mood, like a friendly picture book for adults; expressive but simple characters, no caricature.
- Palette: deep navy (#0e1525) and slate blue for shadows and backgrounds, warm orange (#ff8a3d) and golden yellow (#ffcf4a) as accents, off-white (#f5f9fc) highlights, a touch of teal. Grammar colors when asked: blue (#1f6fcf) for "der", red (#d23a5c) for "die", green (#16894b) for "das".
- People: diverse adults, natural proportions, simple faces, no celebrities, no brand logos, no real company names.
- Composition: landscape 3:2 (1536x1024), one clear focal point, generous empty space, good contrast so it reads well on a dark app screen.
- Text inside the image: only the words I explicitly list, spelled exactly as written, in a clean bold sans-serif. Never invent other words, never add English or Portuguese text, no watermarks.
Reply "ok" and wait for my first prompt.
```

## Prioridade

Se for gerar aos poucos, comece pelas marcadas com ⭐: são as que mais ajudam a entender a regra.

---

## A1

### ⭐ Lição 1 · Dia 1 · Hallo! Ich bin … — `licao-001.png`
*Por que ajuda:* mostra a cena de apresentação e as duas formas de dizer o nome.
```
Two adults meet at a sunny café entrance and shake hands, smiling. Each wears a small name sticker: the woman's reads exactly "Anna", the man's reads exactly "Paulo". Two speech bubbles: hers reads exactly "Ich bin Anna.", his reads exactly "Ich heiße Paulo.". Warm morning light, potted plants, relaxed mood. Landscape 3:2.
```

### ⭐ Lição 3 · Dia 3 · Was ist das? — `licao-003.png`
*Por que ajuda:* fixa a cor de cada gênero em objetos reais.
```
A cozy study room seen in gentle isometric view. Six objects each have a small hanging label tag in a grammar color: a chair with a blue tag reading exactly "der Stuhl", a table with a blue tag reading exactly "der Tisch", a desk lamp with a red tag reading exactly "die Lampe", a wall clock with a red tag reading exactly "die Uhr", a book with a green tag reading exactly "das Buch", a window with a green tag reading exactly "das Fenster". Clean, uncluttered room. Landscape 3:2.
```

### Lição 4 · Dia 4 · Meine Familie — `licao-004.png`
*Por que ajuda:* árvore genealógica com o possessivo, vocabulário em contexto.
```
A friendly family tree drawn as round portrait frames connected by soft orange lines on a navy background. Top row: grandparents. Middle row: a father and a mother. Bottom row: a young woman in the center with a star badge, her brother and her sister. Under the frames, small labels read exactly: "mein Vater" (under the father), "meine Mutter" (under the mother), "mein Bruder", "meine Schwester", and "ich" under the young woman. Landscape 3:2.
```

### Lição 5 · Dia 5 · Was machst du gern? — `licao-005.png`
*Por que ajuda:* liga cada verbo a uma ação que se vê.
```
A bright grid of six small square vignettes with rounded corners, each showing one hobby: cooking pasta, dancing, swimming, listening to music with headphones, playing football, reading. Under each vignette a label reads exactly: "kochen", "tanzen", "schwimmen", "Musik hören", "Fußball spielen", "lesen". A small red heart icon in the corner of each vignette. Landscape 3:2.
```

### ⭐ Lição 7 · Dia 8 · Wie spät ist es? — `licao-007.png`
*Por que ajuda:* o "halb vier = 3:30" confunde todo brasileiro; o relógio resolve.
```
Four large round analog wall clocks in a row on a navy wall, each showing a different time: 3:00, 3:15, 3:30 and 3:45. On the 3:30 clock, the half of the dial from 3 to 4 is softly highlighted in orange, with a small arrow pointing toward the 4. Under each clock a label reads exactly: "drei Uhr", "Viertel nach drei", "halb vier", "Viertel vor vier". Landscape 3:2.
```

### Lição 8 · Dia 9 · Ich habe Hunger — `licao-008.png`
*Por que ajuda:* comida com o gênero colorido, base do acusativo.
```
A colorful weekly market stall under a striped awning. Products with small chalkboard tags in grammar colors: apples with a blue tag reading exactly "der Apfel", cheese with a blue tag reading exactly "der Käse", milk with a red tag reading exactly "die Milch", a banana bunch with a red tag reading exactly "die Banane", bread with a green tag reading exactly "das Brot", eggs with a green tag reading exactly "das Ei". A smiling customer holds a basket. Landscape 3:2.
```

### ⭐ Lição 10 · Dia 11 · Mein Tag — `licao-010.png`
*Por que ajuda:* mostra a rotina e destaca o prefixo que "pula" para o fim.
```
A horizontal comic strip of six panels showing one person's day, each panel with a small clock in the corner: 7:00 waking up and stretching, 7:30 having breakfast, 9:00 working at a laptop, 18:00 grocery shopping, 20:00 watching TV on a sofa, 23:00 sleeping. Under each panel a label reads exactly: "aufstehen", "frühstücken", "arbeiten", "einkaufen", "fernsehen", "schlafen". In "aufstehen", "einkaufen" and "fernsehen", the first part ("auf", "ein", "fern") is printed in orange. Landscape 3:2.
```

### Lição 11 · Dia 12 · Unterwegs — `licao-011.png`
*Por que ajuda:* meios de transporte com gênero e o "mit dem …".
```
A lively town square crossing seen from above at a slight angle: a yellow bus, a red regional train at a small station, a car and a person on a bicycle, plus a pedestrian. Each vehicle has a small floating label in its grammar color: blue "der Bus", blue "der Zug", green "das Auto", green "das Fahrrad", and a blue sign on the station building reading exactly "der Bahnhof". Landscape 3:2.
```

### ⭐ Lição 13 · Dia 15 · Meine Wohnung — `licao-013.png`
*Por que ajuda:* planta de casa com os cômodos, vocabulário espacial.
```
A cutaway dollhouse-style apartment seen from the front, with rooms clearly separated: a kitchen, a bathroom with a tub, a bedroom with a bed, a living room with a sofa and a small balcony with plants. Each room has a small label in its grammar color: red "die Küche", green "das Bad", green "das Schlafzimmer", green "das Wohnzimmer", blue "der Balkon". Warm evening interior lights. Landscape 3:2.
```

### ⭐ Lição 14 · Dia 16 · Wo ist …? — `licao-014.png`
*Por que ajuda:* é a imagem clássica das preposições de lugar: uma figura vale a aula inteira.
```
Seven small identical scenes arranged in a neat grid, each with the same orange cat and the same simple cardboard box: the cat on top of the box, inside the box, under the box, next to the box, behind the box, in front of the box, and between two boxes. Under each scene a bold label reads exactly: "auf", "in", "unter", "neben", "hinter", "vor", "zwischen". Navy background, soft shadows. Landscape 3:2.
```

### Lição 17 · Dia 19 · Beim Arzt — `licao-017.png`
*Por que ajuda:* corpo humano com etiquetas, o vocabulário mais usado no médico.
```
A friendly full-body figure standing in a neutral pose, like a clean anatomy poster for adults, wearing simple clothes. Thin leader lines point to body parts with labels in grammar colors: blue "der Kopf", blue "der Hals", blue "der Arm", red "die Hand", blue "der Bauch", blue "der Rücken" (with a small back-view inset), green "das Bein", blue "der Fuß". Off-white background panel on navy. Landscape 3:2.
```

## A2

### ⭐ Lição 19 · Dia 22 · Im Urlaub — `licao-019.png`
*Por que ajuda:* mostra a regra do sein (movimento de A para B) contra o haben.
```
Split illustration. Left half, under a large orange word "sein": people in motion along a dotted travel line, a plane taking off, a person walking with a suitcase, a train leaving, a sleepy person getting out of bed. Right half, under a large teal word "haben": people doing things in one place, eating at a table, reading, buying souvenirs, taking photos. The only text allowed: "sein" and "haben". Landscape 3:2.
```

### Lição 20 · Dia 23 · Früher — `licao-020.png`
*Por que ajuda:* antes × agora numa só imagem, ancorando war e hatte.
```
Split portrait of the same person: on the left as a child in the 1990s with a bicycle and a cassette player, in warm sepia tones; on the right as an adult today with a laptop and a coffee cup, in fresh colors. A small label above the left half reads exactly "früher" and above the right half reads exactly "heute". Landscape 3:2.
```

### ⭐ Lição 22 · Dia 25 · Wohin damit? — `licao-022.png`
*Por que ajuda:* movimento (acusativo) × posição (dativo), a distinção mais difícil do A2.
```
Two side-by-side panels in a cozy living room. Left panel: a person on a step stool hangs a framed picture on the wall, with a big orange curved arrow showing the movement; a bubble reads exactly "Wohin?". Right panel: the same picture already hanging calmly on the wall, with a small teal pin icon; a bubble reads exactly "Wo?". Under the panels, captions read exactly "Ich hänge das Bild an die Wand." and "Das Bild hängt an der Wand.". Landscape 3:2.
```

### Lição 23 · Dia 26 · Besser, schneller, am besten — `licao-023.png`
*Por que ajuda:* os três graus ficam visíveis.
```
Three friendly cartoon giraffes standing in a row on a podium of increasing height, each one taller than the previous. Under them, labels read exactly "groß", "größer", "am größten". The tallest giraffe wears a small golden medal. Sunny savanna background. Landscape 3:2.
```

### Lição 27 · Dia 31 · Morgens im Bad — `licao-027.png`
*Por que ajuda:* a ação "volta" para a própria pessoa (reflexivo).
```
Three panels of a morning routine in a bright bathroom: a person washing their face, combing their hair in front of a mirror, and getting dressed. A small circular arrow loops from the person back to the person in each panel. Captions read exactly "Ich wasche mich.", "Ich kämme mich.", "Ich ziehe mich an.". Landscape 3:2.
```

### Lição 32 · Dia 37 · Geschenke — `licao-032.png`
*Por que ajuda:* quem recebe (dativo) × o que é dado (acusativo).
```
A warm birthday scene: an adult hands a wrapped book to a smiling child. An orange label floats over the child reading exactly "dem Kind" and a teal label floats over the book reading exactly "ein Buch". Below, a caption reads exactly "Ich gebe dem Kind ein Buch.". Balloons and a small cake in the background. Landscape 3:2.
```

### Lição 35 · Dia 40 · Das Wetter — `licao-035.png`
*Por que ajuda:* estações e tempo com o "im" na frente.
```
A circle divided into four quarters, each showing the same German village street in a different season: blossoming trees in spring, bright sun in summer, falling leaves and rain in autumn, snow in winter. Each quarter has a label reading exactly "im Frühling", "im Sommer", "im Herbst", "im Winter". Small weather icons (sun, cloud, rain, snow) around the circle. Landscape 3:2.
```

### Lição 40 · Dia 46 · Feste feiern — `licao-040.png`
*Por que ajuda:* data falada com número ordinal.
```
A large tear-off wall calendar page for October with the number "3." circled in orange and small German flags and confetti around it. A speech bubble from a smiling person reads exactly "am dritten Oktober". The page header reads exactly "Oktober". Landscape 3:2.
```

## B1

### Lição 43 · Dia 50 · Es war einmal … — `licao-043.png`
*Por que ajuda:* coloca o Präteritum no lugar onde ele vive, os contos e as narrativas.
```
An open old storybook on a wooden table, with a fairytale scene rising from its pages like a pop-up: a castle on a hill, a forest path, a king and a fox. The first line printed on the left page reads exactly "Es war einmal …". Candlelight, magical golden dust. Landscape 3:2.
```

### ⭐ Lição 44 · Dia 51 · Nachdem ich … — `licao-044.png`
*Por que ajuda:* mostra que o Plusquamperfekt é "o passado do passado".
```
A horizontal timeline arrow from left to right with two scenes on it. Scene 1 (left, numbered "1" in a circle, slightly faded): a person finishing dinner at a table. Scene 2 (right, numbered "2"): the same person walking in a park at dusk. A curved arrow connects 1 to 2. Under the timeline, a caption reads exactly "Nachdem ich gegessen hatte, ging ich spazieren.". Landscape 3:2.
```

### ⭐ Lição 45 · Dia 52 · Als ich Kind war — `licao-045.png`
*Por que ajuda:* "als" é uma vez só no passado; "wenn" é sempre que acontece.
```
Split illustration. Left side: one single large polaroid photo of a child's first day at school, with a big label reading exactly "als". Right side: a stack of many similar polaroid photos of the same child visiting grandma repeatedly over the years, with a big label reading exactly "wenn" and a small repeat symbol. Landscape 3:2.
```

### Lição 49 · Dia 57 · Hergestellt in Deutschland — `licao-049.png`
*Por que ajuda:* a passiva tira o foco de quem faz e põe no que acontece.
```
A clean, modern car factory assembly line with friendly robot arms building a car; no workers in focus, the car is the hero. A large banner across the hall reads exactly "Das Auto wird gebaut.". Cool daylight from big windows, orange accent lights on the robots. Landscape 3:2.
```

### Lição 51 · Dia 59 · Wenn ich reich wäre … — `licao-051.png`
*Por que ajuda:* o Konjunktiv II é o modo do sonho.
```
A person sitting on a simple bench in a modest apartment, daydreaming with a big cloud-shaped thought bubble that shows a villa by the sea, a sailboat and a trip around the world. The bubble's border is dotted to show it is not real. A caption reads exactly "Wenn ich reich wäre …". Landscape 3:2.
```

### Lição 60 · Dia 69 · Ich lasse es reparieren — `licao-060.png`
*Por que ajuda:* "lassen" = alguém faz por mim.
```
Split scene in a car repair shop. Left: a person in an elegant coat hands car keys to a smiling mechanic, relaxed; caption reads exactly "Ich lasse mein Auto reparieren.". Right: the same person in overalls under the car with tools, sweating; caption reads exactly "Ich repariere mein Auto.". Landscape 3:2.
```

### Lição 77 · Dia 89 · Das weinende Kind — `licao-077.png`
*Por que ajuda:* Partizip I (está acontecendo) × Partizip II (já aconteceu).
```
Split illustration. Left: a small child crying with tears, in the middle of the action, with a soft motion glow; label reads exactly "das weinende Kind". Right: a shiny old bicycle freshly repaired in a workshop, with a small check mark; label reads exactly "das reparierte Fahrrad". Landscape 3:2.
```

## B2

### ⭐ Lição 83 · Dia 96 · Geschlossen! — `licao-083.png`
*Por que ajuda:* processo (werden) × estado (sein), a diferença que nenhuma tabela mostra tão bem.
```
Two panels of the same small bakery door. Left panel at 18:00: a baker is pushing the door closed, with motion lines; caption reads exactly "Die Tür wird geschlossen.". Right panel at night: the door is shut, lights off, a hanging sign on the glass reads exactly "Geschlossen"; caption reads exactly "Die Tür ist geschlossen.". Landscape 3:2.
```

### Lição 91 · Dia 106 · Das dürfte stimmen — `licao-091.png`
*Por que ajuda:* modais subjetivos como um "medidor de certeza".
```
A playful detective with a magnifying glass looks at clues on a table (footprints, a coffee cup, a key). Next to them stands a tall vertical certainty meter like a thermometer, colored from teal at the bottom to orange at the top, with labels from bottom to top reading exactly "könnte", "kann", "dürfte", "muss". Landscape 3:2.
```

### Lição 108 · Dia 125 · Übersetzen oder übersetzen? — `licao-108.png`
*Por que ajuda:* o mesmo verbo com sentidos diferentes conforme o prefixo separa ou não.
```
Split scene. Left: a ferryman rowing two passengers across a calm river toward the other bank; caption reads exactly "Er setzt uns über.". Right: a translator at a desk with a laptop and two open dictionaries; caption reads exactly "Sie übersetzt den Text.". Landscape 3:2.
```

### ⭐ Lição 123 · Dia 143 · Ich drücke dir die Daumen — `licao-123.png` e `licao-123-b.png`
*Por que ajuda:* a imagem literal faz a expressão grudar na memória.
```
licao-123: A friend squeezes both thumbs inside their fists with a hopeful face while another friend walks into an exam room. A caption reads exactly "Ich drücke dir die Daumen!". Warm, encouraging mood. Landscape 3:2.
```
```
licao-123-b: Humorous literal illustration: a confused traveler standing alone on a train platform surrounded by floating train station signs and departure boards, with a big question mark above their head. A caption reads exactly "Ich verstehe nur Bahnhof.". Landscape 3:2.
```

## C1

### Lição 161 · Dia 187 · Auf die lange Bank schieben — `licao-161.png`
*Por que ajuda:* outra expressão que fica fácil com a imagem literal.
```
An office worker pushes a growing pile of folders along an extremely long wooden bench that stretches far into the distance, with a relaxed shrug. A caption reads exactly "etwas auf die lange Bank schieben". Soft office light, gentle humor. Landscape 3:2.
```

### Lição 162 · Dia 188 · Ver-, zer-, ent-, be- — `licao-162.png`
*Por que ajuda:* o prefixo muda o sentido de um jeito previsível.
```
Three small scenes in a row. 1: a glass shattering into many pieces on the floor, label reads exactly "zerbrechen". 2: a hiker lost in a forest looking at a map upside down, label reads exactly "sich verlaufen". 3: a small bird escaping from an open cage, label reads exactly "entkommen". The prefixes "zer", "ver" and "ent" are printed in orange. Landscape 3:2.
```

### Lição 177 · Dia 206 · Haustür und Hausschlüssel — `licao-177.png`
*Por que ajuda:* palavras compostas como peças de montar; a última manda no gênero.
```
Giant building blocks forming an equation on a table: a block showing a small house and reading exactly "das Haus", a plus sign, a block showing a front door and reading exactly "die Tür", an equals sign, and a bigger combined block showing a house front door and reading exactly "die Haustür". The last part of the result ("Tür") glows red to show it decides the gender. Landscape 3:2.
```

### Lição 191 · Dia 222 · Servus und Grüezi — `licao-191.png`
*Por que ajuda:* o mapa mostra onde cada variedade é falada.
```
A stylized map of Germany, Austria and Switzerland in soft pastel shapes on a navy background, without other country labels. Speech bubbles pinned on the map: in northern Germany one reads exactly "Moin!", in central Germany one reads exactly "Hallo!", in Austria one reads exactly "Servus!" and another reads exactly "Grüß Gott!", in Switzerland one reads exactly "Grüezi!". Landscape 3:2.
```

## C2

### Lição 193 · Dia 225 · Übung macht den Meister — `licao-193.png`
*Por que ajuda:* provérbios lembram mais fácil quando se vê a cena.
```
A chaotic but funny kitchen scene: five cooks in white hats all stirring, salting and tasting the same single pot of porridge at the same time, the pot overflowing. A caption reads exactly "Viele Köche verderben den Brei.". Landscape 3:2.
```

### Lição 201 · Dia 234 · Grüß Gott und Moin — `licao-201.png`
*Por que ajuda:* dialetos dentro da Alemanha, por região.
```
A stylized map of Germany only, divided into soft regional color zones. Pinned speech bubbles: in the far north one reads exactly "Moin!", in Berlin one reads exactly "Tach!", in Bavaria one reads exactly "Servus!", in Baden-Württemberg one reads exactly "Grüß Gott!". Small iconic regional elements: a lighthouse in the north, a TV tower in Berlin, mountains in the south. Landscape 3:2.
```

### Lição 203 · Dia 236 · Wortspiele — `licao-203.png`
*Por que ajuda:* o trocadilho fica visível.
```
A humorous street scene: a person sits relaxed on a park bench directly in front of an imposing bank building with columns. Two arrows point from one label reading exactly "die Bank" to both the bench and the bank building. Landscape 3:2.
```

### Lição 205 · Dia 239 · Über allen Gipfeln ist Ruh — `licao-205.png`
*Por que ajuda:* dá o clima do poema antes da leitura.
```
A very quiet mountain landscape at dusk: dark pine forest, soft mist between the peaks, the last light on the summits, a single small wooden hut, birds silently resting on branches. Deep blues and violets with a faint golden glow. No text at all. Calm, contemplative. Landscape 3:2.
```

---

## Facilitações gráficas interativas (propostas para eu construir no app)

Estas não precisam de imagem: seriam desenhadas em código, com toque e áudio. Estão em ordem de impacto.

| # | Facilitação | Lições | Como funciona |
| --- | --- | --- | --- |
| 1 | **Relógio interativo** | Wie spät ist es? (dia 8) | Você arrasta os ponteiros e ouve a hora em alemão; um modo desafio pede "halb vier" e você acerta o relógio. |
| 2 | **Gato e caixa** | Wo ist …? (dia 16), Wohin damit? (dia 25) | Toque numa posição (em cima, dentro, embaixo…) e o gato vai até lá, com a frase falada. Com seta para wohin, sem seta para wo. |
| 3 | **Trem do vagão 2** | Todas as lições de ordem da frase | Você arrasta os vagões para montar a frase; o vagão 2 só aceita o verbo conjugado e brilha quando acerta. |
| 4 | **Corpo clicável** | Beim Arzt (dia 19), Gute Besserung (dia 39) | Toque numa parte do corpo e ouça "der Kopf", "Mein Kopf tut weh". |
| 5 | **Planta da casa clicável** | Meine Wohnung (dia 15) | Toque num cômodo ou móvel e ouça o nome com o artigo e a cor. |
| 6 | **Linha do tempo dos tempos verbais** | Perfekt, Präteritum, Plusquamperfekt, Futur I e II | Uma só linha do tempo que vai "acendendo" cada tempo verbal conforme você avança no curso. |
| 7 | **Medidor de certeza** | Modais subjetivos (dias 106, 107 e 179) | Um termômetro em que você arrasta o grau de certeza e vê qual verbo usar (könnte → kann → dürfte → muss). |
| 8 | **Montador de palavras compostas** | Komposita (dia 206) | Arraste as peças (Haus + Tür), veja a palavra nova e descubra que a última peça decide o gênero. |
| 9 | **Tabela de declinação que acende** | Adjetivos (dias 32, 33 e 67) | Você escolhe artigo, gênero e caso e a célula certa acende com a terminação e um exemplo falado. |
| 10 | **Mapa DACH com áudio** | Variedades (dias 222 e 234) | Toque numa região e ouça o cumprimento local. |
