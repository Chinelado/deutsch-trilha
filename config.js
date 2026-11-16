// Configuração da sincronização na nuvem (Supabase).
// Enquanto url e anonKey estiverem vazios, o app funciona só neste aparelho e a área de login fica oculta.
// A anonKey é pública por natureza: o que protege os dados é a regra de acesso (RLS) do banco, que só deixa
// cada pessoa ler e gravar o próprio progresso. Veja SETUP-NUVEM.md.
const CLOUD = {
  url: 'https://mkzjzjnbemmlznbxttbp.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1remp6am5iZW1tbHpuYnh0dGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ3OTQyNzYsImV4cCI6MjExMDM3MDI3Nn0.ghV7JeMzyXxkuqjhJCbBuc1sWEKlI7yczUfHN2Nb3Js',
};
