ETAPA 2:

BIBLIOTECA-SERVIDOR
Servidor Express configurado para deploy:


package.json e package-lock.json: dependências express, cors, dotenv e script start.
server.js: configura CORS, express.json() e a porta process.env.PORT || 3000.
.gitignore: ignora node_modules/ e .env.
.env.example: exemplo com PORT=3000.

IA precisa

Validada a inicialização com npm start; o servidor respondeu. A raiz retorna 404 porque ainda não há rotas definidas. A instalação terminou sem vulnerabilidades reportadas.

BIBLIOTECA-SITE
Criado o início do site na pasta biblioteca-site, separada do backend conforme o plano:

index.html: cabeçalho com o nome da biblioteca, navegação e acesso rápido às áreas do sistema. O CSS está vinculado no <head> e o JavaScript ao final do <body>.
style.css: estilos responsivos.
script.js: menu móvel e indicação da página ativa na navegação.
Verifiquei a sintaxe do JavaScript e os vínculos dos arquivos e links. As páginas de destino (livro.html, lista_livro.html, emprestimo.html e lista_emprestimo.html) ainda precisam ser criadas.



ETAPA 3: 

 Conclusão do Backend da Entidade Livros

- **O que foi feito:** Finalização e testes locais da API REST para a entidade `livros` (rotas `POST`, `GET`, `PUT` e `DELETE` com validação de campos obrigatórios e tratamento do erro 404 para IDs inexistentes). Publicação e sincronização do backend no Render com o banco de dados MongoDB Atlas.
- **Erros e Dificuldades Enfrentadas:**
  1. *Erro de Autenticação (`bad auth` - 8000) no Atlas:* Ocorreu devido a caracteres na senha do banco de dados. Foi resolvido criando um novo usuário simples de banco de dados no painel do MongoDB Atlas e atualizando o `.env` local.
  2. *Erro de escuta de porta no Render (`Port scan timeout` / `Cannot GET`):* Ocorreu porque a variável de ambiente `MONGODB_URI` ainda não havia sido configurada no painel de *Environment Variables* do Render. Após o cadastro da variável e realização do deploy manual, o servidor abriu a porta com sucesso.
  3. *Susto na interface do VS Code:* Ocorreu um cancelamento de prompt no chat que pareceu apagar o código, mas a integridade dos arquivos foi confirmada e recuperada via Git (`git restore .` e histórico do repositório).
- **Como foi resolvido:** Ajuste manual de credenciais no Atlas e no Render, validação local com comandos `curl` e atualização da branch `main` via `git push`.
- **Próximos passos:** Iniciar a criação da branch de frontend (`biblioteca`) para desenvolver a interface gráfica da entidade de livros.