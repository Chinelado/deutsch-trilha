# Áudios com voz natural (ElevenLabs)

O app toca um MP3 gravado sempre que ele existe e usa a voz do navegador quando não existe. Você pode gerar tudo de uma vez ou aos poucos: cada áudio novo já aparece no app.

São cerca de **9.550 áudios e 210 mil caracteres**: uns 210 mil créditos no modelo Multilingual v2, ou uns 105 mil no Flash v2.5. Rode a simulação para ver o número exato.

## 1. Pegar a chave da API
1. No site da ElevenLabs, abra o ícone do seu perfil → **API Keys** → **Create API key**.
2. Dê um nome (por exemplo `deutsch-trilha`). Em permissões, basta **Text to Speech** (acesso) e **User** (leitura, para o script mostrar seus créditos). Se quiser usar o comando `vozes`, libere também **Voices** (leitura).
3. Copie a chave. Ela aparece só uma vez.

A chave é secreta: não cole no código, no `config.js` nem na conversa. Ela fica só numa variável de ambiente do seu computador.

No **PowerShell** (vale só para a janela aberta):
```powershell
$env:ELEVENLABS_API_KEY = "cole-a-chave-aqui"
```
No **Git Bash**:
```bash
export ELEVENLABS_API_KEY="cole-a-chave-aqui"
```

## 2. Escolher as vozes
O app usa até quatro vozes:
- **a**: voz principal (palavras, frases, aulas, 1ª pessoa dos diálogos);
- **b**: 2ª pessoa dos diálogos (bom ser do gênero oposto à **a**);
- **c** e **d**: personagens extras dos textos longos (se ficarem vazias, repetem **a** e **b**).

Para vozes nativas alemãs: no site, **Voices → Voice Library**, filtre por idioma **German**, ouça e clique em **Add** nas que gostar. Depois, na pasta do projeto:
```bash
node tools/audio-elevenlabs.mjs vozes
```
Copie os IDs para `tools/elevenlabs.json`:
```json
"vozes": { "a": "ID-da-voz-feminina", "b": "ID-da-voz-masculina", "c": "", "d": "" }
```
No mesmo arquivo você pode trocar:
- `modelo`: `eleven_multilingual_v2` (mais natural, 1 crédito por caractere) ou `eleven_flash_v2_5` (metade do preço);
- `velocidade`: `0.95` é um pouco mais devagar que o normal, bom para quem está aprendendo (vai de 0.7 a 1.2);
- `paralelo`: quantos áudios gera ao mesmo tempo (2 é seguro em qualquer plano).

## 3. Simular, ouvir uma amostra e gerar
```bash
node tools/audio-elevenlabs.mjs
```
Mostra quantos áudios faltam, quantos caracteres e quantos créditos vão ser gastos. Não gasta nada.

```bash
node tools/audio-elevenlabs.mjs amostra
```
Gera 12 áudios variados (palavras, frases, as duas vozes do diálogo e um texto longo). Abra o app, recarregue e ouça. Se não gostar, troque voz ou velocidade e use `refazer`.

```bash
node tools/audio-elevenlabs.mjs gerar --limite 20000
```
Gera o que falta até gastar no máximo 20 mil créditos. Rode de novo para continuar de onde parou. Para gerar tudo: `--limite tudo`.

```bash
node tools/audio-elevenlabs.mjs refazer "Guten Tag!"
```
Apaga e grava de novo um áudio que saiu ruim.

Pode interromper com Ctrl+C a qualquer momento: o que já foi gerado fica salvo e o índice é refeito com `node tools/audio-elevenlabs.mjs indice`.

## 4. Publicar
Os arquivos ficam em `audio/` (um MP3 por frase, mais `audio/index.json`). Faça commit e push dessa pasta, ou peça para o Claude publicar. O app baixa cada áudio só quando você toca nele e guarda os que já ouviu para usar sem internet.

## Licença
Para usar os áudios num site público, use um plano pago (Starter ou acima), que inclui licença comercial. No plano gratuito a ElevenLabs exige atribuição e não permite uso comercial.
