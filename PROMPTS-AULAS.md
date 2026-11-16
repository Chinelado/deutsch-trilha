# Imagens nas lições: só as que ensinam

## O critério

Uma imagem só entra se fizer **pelo menos uma** destas três coisas que o texto, o áudio e os esquemas do app não fazem tão bem:

1. **Mostrar uma regra que é espacial ou física.** Onde as coisas estão, para onde vão, a posição da boca e da língua num som.
2. **Fazer reconhecer algo do mundo real.** Um gesto, uma placa, uma máquina, um prato, um mapa. É o que o aluno vai encontrar na rua e precisa identificar sem legenda.
3. **Criar um gancho de memória que o português não dá.** Só quando o sentido literal da palavra é uma cena concreta e inesperada.

Fica de fora o que for:
- **Cena de clima:** pessoas sorrindo num café, numa festa, numa estação.
- **Repetição de esquema:** tabela, linha do tempo, régua ou comparação que o app já desenha com cor e áudio.
- **Algo que o português já resolve:** "mandei consertar" = lassen; "está sendo fechada / está fechada" = werden / sein.

Uma imagem decorativa não é neutra: ela ocupa o topo da tela, empurra o conteúdo para baixo e gasta a atenção do aluno.

## O estilo

Dois estilos, cada um com uma função. Nada de estilo "livro ilustrado aconchegante".

| Estilo | Quando usar | Por quê |
| --- | --- | --- |
| **Diagrama ilustrado** | Regras espaciais, articulação dos sons, contrastes de sentido | Um traço limpo isola a única coisa que importa. Uma foto traria detalhes que distraem. |
| **Foto realista** | Gestos e objetos que o aluno precisa reconhecer no mundo real | A aparência real é o próprio conteúdo: a ilustração estiliza e perde o que se quer reconhecer. |
| **Mapa estilizado** | Onde se fala cada variedade | Uma forma geográfica simples, sem detalhes de relevo, com números. |

Três regras valem para todos:

- **Nenhuma palavra escrita na imagem.** Geradores erram o alemão (ä, ö, ü, ß) e o texto na imagem não tem áudio. Use **números em círculos** quando precisar apontar partes: o app traz a legenda com as palavras certas e o som.
- **Uma ideia por imagem**, com fundo liso e nada além do necessário.
- **Formato 3:2**, alto contraste e cores que funcionam nos temas claro e escuro.

## Decisão por lição

### Viram imagem (9)

| Lição | Dia | Estilo | Função didática |
| --- | --- | --- | --- |
| Wo ist …? | 16 | Diagrama | As sete preposições de lugar são posições no espaço: a imagem **é** a regra. |
| Beim Arzt | 19 | Diagrama | Partes do corpo apontadas com números: reconhecimento direto, sem tradução. |
| Wohin damit? | 25 | Diagrama | Movimento (acusativo) × posição (dativo), a distinção mais difícil do A2. A seta é a regra. |
| Geschenke | 37 | Diagrama | O dativo como "quem recebe": mostra os dois objetos de "dar" e para onde cada um vai. |
| Als ich Kind war | 52 | Diagrama | "als" = uma vez × "wenn" = sempre que: uma foto contra uma pilha de fotos. |
| Übersetzen oder übersetzen? | 125 | Diagrama | O sentido literal de über·setzen (levar para a outra margem) é uma cena concreta e inesperada. |
| Ich drücke dir die Daumen | 143 | Foto | Na Alemanha se aperta o polegar dentro da mão, e não se cruzam os dedos: é preciso reconhecer o gesto. |
| Servus und Grüezi | 222 | Mapa | Onde ficam a Alemanha, a Áustria e a Suíça e qual variedade se fala em cada uma. |
| Grüß Gott und Moin | 234 | Mapa | Em que região da Alemanha se ouve cada cumprimento. |

### Viram facilitação interativa no app, e não imagem (5)

| Lição | Dia | Por que código é melhor |
| --- | --- | --- |
| Wie spät ist es? | 8 | Um relógio de ponteiros arrastáveis com áudio ensina "halb vier" melhor que quatro relógios parados. |
| Meine Wohnung | 15 | Uma planta clicável já existe no Pocket "Wohnung" e dá o som de cada cômodo. |
| Was hast du gemacht?, Es war einmal…, Nachdem…, Futur II | 20, 50, 51, 109 | Uma linha do tempo dos tempos verbais em código, que acende a cada tempo novo. |
| Hiermit wird Ihnen mitgeteilt | 226 | Uma carta oficial desenhada em código, com as zonas (Aktenzeichen, Frist, Rechtsbehelfsbelehrung) clicáveis. Uma imagem gerada erraria o texto. |
| Die Grafik zeigt …, Mit Zahlen argumentieren | 114, 213 | Gráficos são dados: o app desenha com números exatos. |

### Ficam sem imagem (descartadas da lista anterior)

| Lição | Motivo |
| --- | --- |
| Hallo! Ich bin …, Meine Familie, Was machst du gern?, Unterwegs, Ich habe Hunger | Vocabulário concreto que os emojis e o áudio já cobrem; a imagem só repetiria. |
| Was ist das?, Maiúsculas e gêneros | O esquema colorido der/die/das já faz isso, com áudio. |
| Mein Tag, Im Urlaub, Besser schneller, Das Wetter, Feste feiern | Os esquemas (moldura, comparação, régua, tabela) já mostram a regra. |
| Morgens im Bad, Hergestellt in Deutschland, Ich lasse es reparieren, Das weinende Kind, Geschlossen! | O português tem a mesma distinção ("me lavo", "é fabricado", "mandei consertar", "chorando / consertado", "sendo fechada / fechada"). |
| Früher, Wenn ich reich wäre, Es war einmal, Über allen Gipfeln ist Ruh | Imagem de clima: bonita, mas não ensina a regra. |
| Ver-, zer-, ent-, be-, Haustür und Hausschlüssel, Auf die lange Bank, Wortspiele, Das dürfte stimmen | O esquema ou a tradução literal na aula já dá o gancho de memória. |

## Como gerar e salvar

1. Cole o **bloco de estilo** certo numa conversa nova (um bloco por estilo; não misture na mesma conversa).
2. Cole o prompt e gere em **paisagem 3:2 (1536 × 1024)**.
3. Confira que **não há letras** na imagem (só os números pedidos). Se aparecer texto, peça: *"Remove all text, keep only the numbers"*.
4. Salve como **PNG** em `images/aulas/` com o nome indicado e me avise. Eu converto para WebP, escrevo a legenda com as palavras numeradas e o áudio, e publico.

## Bloco de estilo A: diagrama ilustrado

```
You will create didactic diagrams for a German-learning app. Every image in this conversation follows these rules:
- Purpose: explain ONE grammar or vocabulary idea visually. Clarity over beauty.
- Style: clean flat vector illustration, thick soft outlines, simple geometric characters with minimal facial detail, no textures, no decorative background elements.
- Background: plain off-white (#f5f9fc) with a very subtle shadow under objects.
- Colors: mostly neutral grays and navy (#0e1525); use only two accent colors with meaning: orange (#ff8a3d) for movement or the highlighted element, teal (#1aa3a3) for position or the second element.
- Absolutely no letters or words anywhere in the image. Numbers inside small navy circles are allowed only when I ask for them.
- Landscape 3:2 (1536x1024), generous margins, every element large enough to read on a phone.
Reply "ok" and wait for my first prompt.
```

## Bloco de estilo B: foto realista

```
You will create realistic reference photos for a German-learning app. Every image in this conversation follows these rules:
- Photorealistic, natural daylight, neutral and uncluttered background, shallow depth of field.
- The subject must be shown exactly as it looks in real life in Germany, centered and large.
- No visible brands, logos or readable text. No celebrities.
- Landscape 3:2 (1536x1024).
Reply "ok" and wait for my first prompt.
```

## Prompts

### Lição 14 · Dia 16 · Wo ist …? — `licao-014.png` (estilo A)
```
Seven small identical scenes arranged in a clean grid (4 on top, 3 below), each with the same orange cat and the same simple teal cardboard box, all at the same size and angle. Scene 1: the cat sits on top of the box. Scene 2: the cat sits inside the open box, head visible. Scene 3: the cat lies under the box, which is propped up on one side. Scene 4: the cat sits next to the box. Scene 5: the cat is behind the box, only ears and tail visible. Scene 6: the cat sits in front of the box. Scene 7: the cat sits between two identical boxes. A small navy circle with the number 1 to 7 at the top-left corner of each scene. No other text.
```
Legenda que o app vai mostrar: 1 auf · 2 in · 3 unter · 4 neben · 5 hinter · 6 vor · 7 zwischen.

### Lição 17 · Dia 19 · Beim Arzt — `licao-017.png` (estilo A)
```
A simple full-body adult figure standing in a neutral front pose, gender-neutral, wearing plain gray clothes, like a clean medical chart. Thin navy leader lines point to eight body parts, each ending in a small navy circle with a number: 1 head, 2 neck, 3 arm, 4 hand, 5 belly, 6 leg, 7 foot. A small inset on the right shows the same figure from behind with number 8 pointing to the back. No other text.
```
Legenda: 1 der Kopf · 2 der Hals · 3 der Arm · 4 die Hand · 5 der Bauch · 6 das Bein · 7 der Fuß · 8 der Rücken.

### Lição 22 · Dia 25 · Wohin damit? — `licao-022.png` (estilo A)
```
Two side-by-side panels with the same plain wall and the same framed picture. Left panel: a simple figure on a small step stool is hanging the picture, and a thick orange curved arrow shows the picture moving onto the wall. Right panel: the picture already hangs still on the wall, with a small teal pin icon above it and no person. A thin vertical divider between panels. No text.
```
Legenda: à esquerda, movimento, **Wohin?** → acusativo: *Ich hänge das Bild an die Wand.* À direita, posição, **Wo?** → dativo: *Das Bild hängt an der Wand.*

### Lição 32 · Dia 37 · Geschenke — `licao-032.png` (estilo A)
```
A simple figure on the left hands a wrapped book to a child on the right. The book is outlined in orange and a thick orange arrow shows it moving from the adult's hands toward the child. The child is outlined in teal with a soft teal glow, arms open to receive. Plain background, no other objects. No text.
```
Legenda: o que é dado (laranja) vai no **acusativo**: *ein Buch*. Quem recebe (verde-azulado) vai no **dativo**: *dem Kind*. *Ich gebe dem Kind ein Buch.*

### Lição 45 · Dia 52 · Als ich Kind war — `licao-045.png` (estilo A)
```
Split image. Left half: one single large instant photo of a child on the first day of school holding a school cone, with a small orange "1" marker in a navy circle. Right half: a fanned stack of eight similar instant photos of the same child visiting grandmother, each slightly different in season, with a small teal circular "repeat" arrow icon. No text.
```
Legenda: **als** = uma vez só no passado (a foto única). **wenn** = toda vez que acontecia (a pilha de fotos).

### Lição 108 · Dia 125 · Übersetzen oder übersetzen? — `licao-108.png` (estilo A)
```
Split image. Left half: a small wooden ferry boat crossing a calm river, a ferryman with a pole carrying two passengers, and a thick orange arrow from one bank to the other. Right half: a person at a plain desk with a laptop and two open books, with a teal arrow going from one book to the other. No text.
```
Legenda: separável, **über·setzen** (Er setzt uns über) = levar para a outra margem. Inseparável, **übersetzen** (Sie übersetzt den Text) = traduzir. O acento muda junto: **ü**bersetzen × übers**e**tzen.

### Lição 123 · Dia 143 · Ich drücke dir die Daumen — `licao-123.png` (estilo B)
```
Close-up photo of two hands in front of a person's chest, each hand making a fist with the thumb tucked inside the fingers (the German "pressing thumbs" good-luck gesture), squeezed tightly. Neutral light background, the person's hopeful smile slightly out of focus above. No text.
```
Legenda: na Alemanha, para desejar sorte se **aperta o polegar dentro da mão**, e não se cruzam os dedos. Daí *Ich drücke dir die Daumen!*

### Lição 191 · Dia 222 · Servus und Grüezi — `licao-191.png` (mapa)
```
A clean stylized flat map of Germany, Austria and Switzerland only, each country in a different soft flat color (Germany light gray, Austria light orange, Switzerland light teal), with thin white borders and a plain off-white background. Neighboring countries are omitted. A small navy circle with a number sits in the center of each country: 1 Germany, 2 Austria, 3 Switzerland. No city names, no other text.
```
Legenda: 1 Deutschland, *Hallo!* · 2 Österreich, *Servus! / Grüß Gott!* · 3 Schweiz, *Grüezi!* (com áudio de cada um).

### Lição 201 · Dia 234 · Grüß Gott und Moin — `licao-201.png` (mapa)
```
A clean stylized flat map of Germany only, on a plain off-white background, divided into four soft color regions: the north coast (light teal), the Berlin area (light gray), Bavaria in the southeast (light orange) and Baden-Württemberg in the southwest (light yellow). A small navy circle with a number in each region: 1 north, 2 Berlin, 3 Bavaria, 4 Baden-Württemberg. No city names, no other text.
```
Legenda: 1 *Moin!* · 2 *Tach!* · 3 *Servus!* · 4 *Grüß Gott!*

## E os Pockets?

Das 48 imagens, ficaram **8**. Elas saíram do topo da lição e foram para um bloco **"👀 Repare"**, depois das ilustrações, com uma legenda que diz o que observar:

| Pocket | O que a imagem ensina |
| --- | --- |
| Apotheke | O **A** vermelho e a placa **Notdienst**. |
| Anmeldung | O painel que chama a senha e indica o guichê. |
| Supermarkt | O **Pfandautomat**, máquina que não existe no Brasil. |
| Kneipe | Os riscos no **Bierdeckel**, que viram a conta. |
| Auto | A **forma** das placas: octógono, triângulo invertido, círculo com faixa. |
| Biergarten | **Brezn**, **Obatzda** e **Radi**, pratos que o brasileiro não conhece. |
| Weihnachtsmarkt | **Gebrannte Mandeln**, **Lebkuchenherz** e a caneca com **Tassenpfand**. |
| Mülltrennung | As **cores** das lixeiras. |

As outras 40 eram cenas de clima (pessoas sorrindo no hotel, no cinema, na academia) ou repetiam o painel, a etiqueta ou o cartão de embarque que o app já desenha com áudio. Os PNG originais continuam na sua pasta `images/pocket/`, caso queira alguma de volta.
