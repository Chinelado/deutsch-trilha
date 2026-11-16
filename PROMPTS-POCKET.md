# Imagens das lições Pocket (prompts para o ChatGPT)

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

## Sugestões de novas lições Pocket

Temas que funcionam bem no mesmo formato (cena + ilustrações + frases + diálogo + teste):

| Tema | Ilustrações sugeridas |
|---|---|
| 🚨 Emergência e polícia (Notfall) | número 112, placa de hospital, formulário de ocorrência |
| 🏛️ Registro de residência (Anmeldung no Bürgeramt) | senha de atendimento, formulário, comprovante |
| 🏠 Visita a apartamento (Wohnungsbesichtigung) | anúncio com Kaltmiete e Warmmiete, planta do apartamento |
| 🩺 Marcar consulta médica (Arzttermin) | cartão do plano de saúde, placa do consultório com horários |
| 💇 No cabeleireiro (Beim Friseur) | tabela de preços, fotos de cortes |
| 📱 Chip e plano de celular (Handyvertrag) | tabela de planos, contrato com prazo de cancelamento |
| 🚕 Táxi e aplicativos (Taxi) | taxímetro, recibo |
| 🎄 Mercado de Natal (Weihnachtsmarkt) | barracas, caneca de Glühwein com Pfand |
| ⚽ Jogo de futebol (im Stadion) | ingresso, placar, cantos da torcida |
| 🎉 Conversa em festa (Smalltalk auf der Party) | convite, cartões com perguntas |
| 🌳 No Biergarten | cardápio, caneca de 1 litro (Maß), Pfand do copo |
| 📦 Correio e encomendas (Post und Paket) | aviso de entrega, etiqueta de pacote |
| 🏋️ Academia (im Fitnessstudio) | contrato, quadro de aulas |
