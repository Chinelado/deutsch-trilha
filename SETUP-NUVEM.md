# Ativar login e sincronização (Supabase)

O app funciona sem conta. Para salvar o progresso na nuvem e usar em vários aparelhos, crie um projeto gratuito no Supabase e preencha `config.js`.

## 1. Criar o projeto
1. Entre em https://supabase.com e crie uma conta.
2. **New project**: escolha um nome (por exemplo `deutsch-trilha`), uma senha de banco e a região mais próxima (São Paulo).

## 2. Criar a tabela e as regras de acesso
No menu **SQL Editor**, rode:

```sql
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "ler o próprio progresso" on public.progress
  for select using (auth.uid() = user_id);
create policy "criar o próprio progresso" on public.progress
  for insert with check (auth.uid() = user_id);
create policy "atualizar o próprio progresso" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

As regras (RLS) garantem que cada pessoa só lê e grava o próprio progresso.

## 3. Login por e-mail com código
1. **Authentication → Sign In / Providers**: deixe **Email** ativado.
2. **Authentication → URL Configuration**: em *Site URL* coloque `https://german.montowski.com.br` e adicione o mesmo endereço em *Redirect URLs*.
3. **Authentication → Email Templates → Magic Link**: acrescente o código ao texto do e-mail, por exemplo:
   `Seu código: {{ .Token }}`
   (o código de 6 dígitos funciona também no app instalado no iPhone, onde o link do e-mail abre no Safari.)

## 4. Ligar o app
Em **Project Settings → API**, copie *Project URL* e a chave *anon public* e preencha `config.js`:

```js
const CLOUD = {
  url: 'https://SEU-PROJETO.supabase.co',
  anonKey: 'SUA-CHAVE-ANON',
};
```

A chave *anon* é pública por natureza (fica no código do site); quem protege os dados são as regras do passo 2. Nunca use a chave *service_role* aqui.
