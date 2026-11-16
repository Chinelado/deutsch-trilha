# Imagens das lições Pocket (prompts para o ChatGPT)

> **Atualização:** depois de revisar a função de cada imagem, o app usa só 8 destas 48 (Apotheke, Anmeldung, Pfandautomat, Bierdeckel, placas de trânsito, pratos do Biergarten, doces do Weihnachtsmarkt e lixeiras), num bloco "👀 Repare" com legenda do que observar. O critério e os motivos estão em [PROMPTS-AULAS.md](PROMPTS-AULAS.md).

As lições Pocket já funcionam sem imagens: os painéis, placas, cardápios e etiquetas são desenhados pelo próprio app, com áudio em cada palavra. As imagens abaixo são a "foto de abertura" de cada lição e, em algumas, um detalhe extra.

## Como gerar e salvar

1. Abra o ChatGPT e cole **primeiro o bloco de estilo** (abaixo), sozinho, numa conversa nova. Assim todas as imagens saem com a mesma cara.
2. Depois cole um prompt por vez. Gere em **formato paisagem (3:2, 1536 × 1024)**.
3. **Confira o texto escrito na imagem.** Geradores de imagem às vezes erram letras em alemão (ä, ö, ü, ß). Se uma palavra sair errada, peça: *"Regenerate, the sign must read exactly: …"*. Se continuar errado, peça a versão sem texto: o app já mostra todas as palavras certas logo abaixo da imagem.
4. Salve como **PNG** com o nome indicado (por exemplo `flughafen.png`) na pasta `images/pocket/` do projeto.
5. Me avise quando tiver as imagens: eu comprimo os arquivos (para o app continuar leve), coloco os nomes na lista `images/pocket/index.json` e publico. O app só mostra as imagens que estão nessa lista; as outras simplesmente não aparecem.

## Bloco de estilo (cole primeiro, uma vez)

```
You will create a series of illustrations for a German-learning app called "Deutsch-Trilha".
Use this exact style for every image in this conversation:
- Flat, modern editorial illustration with a gentle isometric feel, clean vector shapes, soft gradients and a subtle paper grain.
- Warm, friendly and calm mood; realistic German everyday settings, no caricature.
- Palette: deep navy (#0e1525) and slate blue for shadows and backgrounds, warm orange (#ff8a3d) and golden yellow (#ffcf4a) as accents, off-white (#f5f9fc) highlights, a touch of teal.
- People: diverse adults, natural proportions, simple faces, no celebrities, no brand logos, no real company names.
- Composition: landscape 3:2 (1536x1024), clear focal point, uncluttered background, good contrast so it reads well on a dark app screen.
- Text inside the image: only the German words I explicitly list, spelled exactly as written, in a clean sans-serif. Never invent other words, never add English or Portuguese text, no watermarks.
Reply "ok" and wait for my first prompt.
```

## Prompts

### 1. ✈️ No aeroporto — `flughafen.png`
```
Departure hall of a modern German airport. In the foreground, a young woman with a carry-on suitcase looks up at a large black flight information board with yellow letters. The board header reads exactly "Abflug". On the board, one row reads exactly "Lissabon  B12  Boarding". To the side, yellow hanging airport signs with black pictograms read exactly "Gepäckausgabe" (with a suitcase icon) and "Ausgang" (with an exit icon). Glass facade with an airplane on the apron outside, morning light. Landscape 3:2.
```

### 2. ✈️ No aeroporto, detalhe — `flughafen-detalhe.png`
```
Close-up still life on an airport check-in counter: a passport, a white boarding pass with a navy header that reads exactly "Bordkarte", the seat number "23A" and the gate "B12" printed on it, a small orange luggage tag, and a takeaway coffee cup. Softly blurred yellow airport signs in the background. Landscape 3:2.
```

### 3. 🧭 Pedindo direções — `weg.png`
```
Sunny historic town square in a German city with half-timbered houses and a church tower. A tourist holding a paper map asks a friendly local man for directions; he points to the left. A pedestrian traffic light with the red standing figure is visible. A blue street direction sign on a pole reads exactly "Altstadt" with an arrow, and a white street name sign reads exactly "Hauptstraße". Landscape 3:2.
```

### 4. 💼 Entrevista de emprego — `bewerbung.png`
```
Bright modern office meeting room in Germany. A woman in smart-casual clothes sits across a table from a male interviewer and a female HR manager; friendly, professional atmosphere. On the table: a printed CV, a glass of water, a laptop. Large window with a city view, plants. No readable text anywhere. Landscape 3:2.
```

### 5. 🍽️ No restaurante — `restaurant.png`
```
Cozy traditional German Gasthaus at dinner time: wooden tables, warm lamps, a waiter with a long apron taking an order from two women at a table. On the table, plates with Wiener Schnitzel with fries and Käsespätzle, two glasses of Apfelschorle. A small chalkboard on the wall reads exactly "Tagesgericht". Landscape 3:2.
```

### 6. 🍽️ No restaurante, detalhe — `restaurant-detalhe.png`
```
Top-down view of a restaurant table: an open cream-colored menu card with the title "Speisekarte" written exactly once at the top (other lines shown only as illegible fine lines), cutlery wrapped in a napkin, a small bill on a saucer with a few euro coins as a tip. Warm light, wooden table. Landscape 3:2.
```

### 7. 🍺 No pub — `kneipe.png`
```
Lively but relaxed German Kneipe (neighborhood pub) on a Friday evening: dark wooden bar counter, beer taps, a female bartender filling a tall glass of pilsner with a perfect foam head, three friends clinking glasses and looking each other in the eyes while toasting. Warm amber light. A small sign above the bar reads exactly "Bier vom Fass". Landscape 3:2.
```

### 8. 🍺 No pub, detalhe — `kneipe-detalhe.png`
```
Close-up on a wooden pub table: a 0.5 liter pilsner glass, a wheat beer glass and a Radler, each standing on a round white beer coaster. One beer coaster has several hand-drawn pencil tally marks on its edge, the traditional way German bartenders count drinks. No brand names, no other text. Landscape 3:2.
```

### 9. 🏷️ Preços em lojas — `einkaufen.png`
```
Inside a modern clothing store during a sale in Germany: racks of jeans and winter jackets, a woman holding a pair of jeans and checking the price tag, a friendly male shop assistant nearby. Red sale signs on the wall read exactly "Sale" and "-30 %". In the back, a sign above a curtain reads exactly "Umkleidekabinen". Landscape 3:2.
```

### 10. 🏷️ Preços em lojas, detalhe — `einkaufen-detalhe.png`
```
Close-up of several paper price tags hanging from clothes on a rack: one tag shows "69,99 €" crossed out and "49,99 €" in bold red, a red label "-30 %" in the corner; another tag shows "12,99 €" with a red label "2 für 1". Clean, sharp, shallow depth of field. Only these exact texts. Landscape 3:2.
```

### 11. 🏰 Pontos turísticos — `sehenswuerdigkeiten.png`
```
A romantic German castle on a green hill above a river and old town rooftops, late afternoon sun. Small groups of tourists walk up to the castle gate; a tour guide holds up a small orange flag. No readable text. Landscape 3:2.
```

### 12. 🏰 Pontos turísticos, detalhe — `sehenswuerdigkeiten-detalhe.png`
```
Close-up of an elegant information board at a castle museum entrance, beige background with brown frame. Large heading reads exactly "Öffnungszeiten". Below it, two lines read exactly "Di–So 9–18 Uhr" and "Montag geschlossen". Next to it a small ticket booth window with a sign that reads exactly "Kasse". Landscape 3:2.
```

### 13. 🏨 No hotel — `hotel.png`
```
Welcoming reception desk of a small boutique hotel in Munich in the evening: a male receptionist hands a key card to a female guest with a rolling suitcase. A brass bell on the counter, a plant, warm lighting, an elevator door in the background. A sign above the desk reads exactly "Rezeption". Landscape 3:2.
```

### 14. 🚆 Na estação — `bahnhof.png`
```
Platform of a large German main train station under a steel-and-glass roof. A white high-speed train with a red stripe (no logos) waits at the platform. A traveler with a backpack checks a platform display. A large blue sign hanging above reads exactly "Gleis 7". Morning light through the glass roof. Landscape 3:2.
```

### 15. 🚆 Na estação, detalhe — `bahnhof-detalhe.png`
```
Close-up of a dark blue train departure display with white text. Header reads exactly "Abfahrt". One row reads exactly "10:16  ICE  Hamburg-Altona  Gleis 7", and a small orange note next to it reads exactly "+10". Station blur in the background. Landscape 3:2.
```

### 16. 💊 Na farmácia — `apotheke.png`
```
Street view of a classic German pharmacy at dusk: a large red stylized letter "A" sign mounted on the facade, a glass door with warm light inside, a female customer entering with a scarf. A small illuminated sign in the window reads exactly "Notdienst". Landscape 3:2.
```

### 17. 🥨 Na padaria — `baeckerei.png`
```
Inside a traditional German bakery on a Saturday morning: glass counter full of pretzels, bread rolls, dark rye bread and Berliner doughnuts; a smiling female baker in an apron hands a paper bag to a male customer. A small chalkboard reads exactly "Brötchen 0,45 €". Warm morning light. Landscape 3:2.
```

### 18. 🛒 No supermercado — `supermarkt.png`
```
Bright aisle of a German supermarket: shelves with fruit and vegetables in crates, a woman pushing a shopping cart, yellow price tags on the shelves. A hanging sign reads exactly "Obst und Gemüse". No brand logos. Landscape 3:2.
```

### 19. 🛒 No supermercado, detalhe — `supermarkt-detalhe.png`
```
A bottle return machine in a German supermarket: a woman inserts an empty plastic bottle into the round opening of the machine, a small paper voucher comes out of a slot. A label on the machine reads exactly "Pfandautomat". Clean, bright, friendly. Landscape 3:2.
```

## Segunda leva: morar na Alemanha e mais passeios

Use o mesmo bloco de estilo do início (se abrir uma conversa nova no ChatGPT, cole o bloco de novo antes).

### 20. 🚨 Emergência — `notfall.png`
```
A German city street in the afternoon. A cyclist sits on the sidewalk next to his fallen bicycle, holding his head; a paramedic in a red-and-yellow high-visibility uniform kneels beside him with a medical bag. A white ambulance with orange-red stripes and blue lights is parked at the curb (no logos, no lettering). A young woman stands nearby holding a phone to her ear. Calm, reassuring mood, nothing graphic, no blood. Landscape 3:2.
```

### 21. 🚨 Emergência, detalhe — `notfall-detalhe.png`
```
Close-up of a hand holding a smartphone; the screen shows a phone dialer with the large digits "112" typed in and a green call button. Softly blurred street and blue emergency lights in the background. Only the digits "112" as text. Landscape 3:2.
```

### 22. 🏛️ Registro de residência — `anmeldung.png`
```
Waiting room of a German citizens' office (Bürgeramt): rows of chairs, people waiting calmly, a woman holding a small paper ticket and a folder of documents. On the wall, a digital display shows the ticket number "A 047" next to the counter number "12". Clean, slightly bureaucratic but friendly atmosphere, plants, daylight. Only the texts "A 047" and "12". Landscape 3:2.
```

### 23. 🏠 Visita a apartamento — `wohnung.png`
```
Bright, empty apartment in an old German building (Altbau): high ceilings with stucco, wooden parquet floor, tall windows, a small balcony door open to green trees. A female landlady shows the living room to a young man who is looking around with interest. No furniture except a radiator under the window. No readable text. Landscape 3:2.
```

### 24. 🏠 Visita a apartamento, detalhe — `wohnung-detalhe.png`
```
Top-down view on a wooden table: a printed apartment listing with a simple floor plan drawing of a two-room flat, a pen, a set of old keys and a cup of coffee. The listing shows the large heading "2-Zimmer-Wohnung" and the line "Warmmiete 860 €"; all other lines are illegible fine lines. Only these exact texts. Landscape 3:2.
```

### 25. 🩺 Marcar consulta — `arzttermin.png`
```
Reception desk of a German general practitioner's office: a friendly female receptionist in a light blue top talks on a headset while a female patient hands over a health insurance card. Behind the desk, shelves with folders and a plant; a small waiting area with chairs on the side. Clean, calm, daylight. No readable text. Landscape 3:2.
```

### 26. 💇 Cabeleireiro — `friseur.png`
```
Modern, cozy hair salon in Germany: a male hairdresser cuts the hair of a smiling woman sitting in front of a large mirror, comb and scissors in hand. Warm lighting, plants, shelves with hair products without brand names. A small price board on the wall reads exactly "Preisliste". Landscape 3:2.
```

### 27. 📱 Plano de celular — `handy.png`
```
Inside a bright mobile phone shop in Germany: a female sales assistant shows a SIM card to a male customer at a counter, smartphones displayed on tables, a large poster on the wall reads exactly "Prepaid" in bold letters. No brand names, no logos. Landscape 3:2.
```

### 28. 🚕 Táxi — `taxi.png`
```
Night scene in front of a German train station: a cream-colored (ivory) taxi with a yellow roof sign that reads exactly "TAXI" waits at the curb. The driver lifts a suitcase into the trunk while a female traveler stands beside it. Wet pavement reflecting warm streetlights and the illuminated station entrance. Only the word "TAXI". Landscape 3:2.
```

### 29. 🎄 Mercado de Natal — `weihnachtsmarkt.png`
```
Festive German Christmas market at dusk on a historic square: wooden stalls with warm string lights, a big decorated Christmas tree, a small carousel, people in winter coats holding steaming mugs. A stall roof sign reads exactly "Glühwein". Light snow, cozy and magical atmosphere. Landscape 3:2.
```

### 30. 🎄 Mercado de Natal, detalhe — `weihnachtsmarkt-detalhe.png`
```
Close-up of a pair of gloved hands holding a red ceramic Christmas market mug filled with steaming mulled wine, next to a paper cone of caramelized almonds and a gingerbread heart decorated with icing (the heart has no text). Blurred warm lights in the background. No readable text. Landscape 3:2.
```

### 31. ⚽ Estádio de futebol — `stadion.png`
```
Inside a packed German football stadium on a sunny afternoon: a wall of fans in a standing section holding up scarves, green pitch below, two teams in plain red and plain white kits (no logos, no club names). In the foreground, two women in the seated section cheer with raised arms. A scoreboard in the distance shows only "2 : 1". Landscape 3:2.
```

### 32. 🎉 Festa — `party.png`
```
Warm house party in the living room of an old German apartment (Altbau): fairy lights, a bookshelf, a table with snacks, bottles and a homemade cake. Small groups of people in their twenties and thirties chat and laugh; in the foreground a young woman and a young man introduce themselves with a handshake, each holding a glass. No readable text. Landscape 3:2.
```

### 33. 🌳 Biergarten — `biergarten.png`
```
Bavarian beer garden on a sunny Sunday: long wooden tables and benches under large chestnut trees with dappled sunlight, people of all ages sharing tables, one-liter beer mugs, pretzels. In the background, a wooden self-service counter with a small sign that reads exactly "Selbstbedienung". Relaxed, joyful mood. Landscape 3:2.
```

### 34. 🌳 Biergarten, detalhe — `biergarten-detalhe.png`
```
Close-up on a wooden beer garden table: a one-liter glass beer mug (Maß) with golden beer and foam, a large soft pretzel, a small bowl of orange Obatzda cheese spread with sliced onions, and thin sliced white radish. Dappled sunlight through chestnut leaves. No text, no brand names. Landscape 3:2.
```

### 35. 📦 Correio — `post.png`
```
Counter of a German post office: a female customer hands a cardboard parcel to a male postal clerk, a customs declaration form lies on the counter, shelves with parcels and envelopes in the background, a small scale on the counter. Generic yellow accents, no brand names, no logos. No readable text. Landscape 3:2.
```

### 36. 🏋️ Academia — `fitness.png`
```
Bright modern gym in Germany with large windows: rows of treadmills and weight machines, a male trainer in a plain t-shirt explains a machine to a woman in sportswear holding a towel. On the wall, a class schedule board with the heading "Kursplan" (other lines illegible). No brand logos. Landscape 3:2.
```

## Terceira leva

Use o mesmo bloco de estilo do início (numa conversa nova do ChatGPT, cole o bloco de novo antes).

### 37. 🏦 Abrir conta no banco — `bank.png`
```
Modern, bright bank branch in Germany: at a round consultation desk, a male bank advisor in a light shirt shows a tablet to a female customer holding her passport. Glass walls, plants, a small self-service area with ATMs in the background (no brand names, no logos). Calm, trustworthy mood. No readable text. Landscape 3:2.
```

### 38. 🦷 No dentista — `zahnarzt.png`
```
Clean, friendly dental practice in Germany: a female patient reclines in a modern dental chair while a male dentist with a face mask and loupes shows her something on a screen; soft daylight, white and mint tones, a plant by the window. Reassuring, not scary, no visible instruments in the mouth. No readable text. Landscape 3:2.
```

### 39. 🚲 Alugar bicicleta — `fahrrad.png`
```
Sunny riverside bike path in a German city: a woman on a rented city bike with a basket and a helmet rides along the river, old town towers and a bridge in the background. On the path, a round blue traffic sign with a white bicycle symbol (no text). Joyful summer mood. No readable text. Landscape 3:2.
```

### 40. 🚗 Alugar carro — `auto.png`
```
A small compact rental car drives along a winding road through the Black Forest: dark green fir trees, rolling hills, a traditional farmhouse with a large roof in the distance, morning mist. No license plate text, no logos. Landscape 3:2.
```

### 41. 🚗 Alugar carro, detalhe — `auto-detalhe.png`
```
Roadside in Germany with a group of real German traffic signs, clean and well lit: a red octagonal stop sign that reads exactly "STOP", an inverted red-and-white triangle yield sign (no text), a round red-and-white no-entry sign (no text), and a blue Autobahn sign with the white motorway pictogram (no text). Only the word "STOP". Landscape 3:2.
```

### 42. 🥾 Trilha na montanha — `wandern.png`
```
Alpine hiking trail on a sunny summer morning: a woman with a backpack and hiking poles greets an older male hiker coming the other way on a narrow path through green meadows with wildflowers; a wooden mountain hut with a flower-decorated balcony sits on the slope, rocky peaks behind. No readable text. Landscape 3:2.
```

### 43. 🥾 Trilha, detalhe — `wandern-detalhe.png`
```
Close-up of a yellow Alpine hiking signpost on a wooden pole with three arrow-shaped signs pointing in different directions. The signs read exactly "Sonnalm 1 Std. 30 Min.", "Gipfel 3 Std." and "Rundweg". Blurred mountain landscape and blue sky behind. Only these exact texts. Landscape 3:2.
```

### 44. 🎬 No cinema — `kino.png`
```
Lobby of a cozy German cinema in the evening: a box office counter with a friendly male cashier, a popcorn machine glowing, a woman holding two tickets and a cup of popcorn. On the wall, a lit sign above the screens' entrance reads exactly "Saal 3". Warm red and gold tones. Only the text "Saal 3". Landscape 3:2.
```

### 45. ♻️ Separar o lixo — `muell.png`
```
Inner courtyard of a German apartment building: a row of large wheelie bins in clear colors (yellow lid, blue lid, brown lid, grey lid) next to bicycles and a small tree. A young woman holds a yogurt cup and looks at the bins thoughtfully while an older neighbor points to the yellow one. No readable text on the bins. Landscape 3:2.
```

### 46. 🧸 Creche — `kita.png`
```
Bright, colorful room of a German daycare (Kita): small children building with wooden blocks and painting at low tables, a female educator kneeling with them, rubber boots lined up by the door, children's drawings on the wall (no readable text). A mother at the door waves to her little daughter. Warm, joyful mood. Landscape 3:2.
```

### 47. 🔧 Problema no apartamento — `reparatur.png`
```
Kitchen in an old German apartment: a male handyman in work clothes repairs a dripping faucet with a wrench, toolbox open on the counter; the female tenant watches holding a cup of coffee; a radiator under the window. Friendly, everyday mood. No readable text. Landscape 3:2.
```

### 48. 🍝 Convite para jantar — `einladung.png`
```
Cozy dinner among friends in a German apartment kitchen-dining room: a man serves beef roulades with red cabbage and potatoes from a pot, a woman guest smiles and holds a wrapped bag of coffee as a gift, candles and a bottle of wine on the table, warm evening light. No readable text, no brand names. Landscape 3:2.
```

## Ideias para a próxima leva

| Tema | Ilustrações sugeridas |
|---|---|
| 🏥 No hospital (im Krankenhaus) | pulseira de identificação, placa das alas |
| 💼 Primeiro dia de trabalho (erster Arbeitstag) | crachá, organograma, máquina de café |
| 🧾 Imposto de renda (Steuererklärung) | formulário, lista de despesas dedutíveis |
| 🐶 Veterinário e animais (beim Tierarzt) | carteira de vacinação do pet |
| 🛋️ Comprar móveis e montar (Möbelhaus) | etiqueta com número do corredor, manual de montagem |
| 🎓 Matrícula na universidade (Immatrikulation) | carteirinha de estudante, calendário do semestre |
| 💒 Casamento alemão (Hochzeit) | convite, lista de presentes |
| 🏊 Piscina e lago (Freibad) | tabela de preços, regras da piscina |
| ✂️ Costureira e sapateiro (Schneiderei) | recibo de serviço |
| 🧳 Achados e perdidos (Fundbüro) | formulário de objeto perdido |
